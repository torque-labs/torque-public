import type { ActionGetResponse } from "@solana/actions";
import type { ApiRequirement } from "@torque-labs/torque-ts-sdk";
import { ApiProgressStatus } from "@torque-labs/torque-ts-sdk";
import {
  EventType,
  getTensorNameFromCollectionAddress,
} from "@torque-labs/torque-utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { TorqueBlink } from "#/components";
import { CustomEventAction } from "#/components/actions";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "#/components/ui/collapsible";
import { useTorque } from "#/hooks";
import { getTokenDetails, cn } from "#/lib";
import type { TokenDetails } from "#/types";

export const requirementLabelMap: Record<EventType, { label: string }> = {
  [EventType.CLICK]: { label: "Click" },
  [EventType.CUSTOM_EVENT]: { label: "Custom Event" },
  [EventType.DRIFT_BET]: { label: "Drift Bet" },
  [EventType.DRIFT_DEPOSIT]: { label: "Drift Deposit" },
  [EventType.KAMINO_LEND]: { label: "Kamino Lend" },
  [EventType.MARGINFI_LEND]: { label: "Marginfi Lend" },
  [EventType.MEMO]: { label: "Memo" },
  [EventType.NFT_BUY_BID]: { label: "NFT Buy Bid" },
  [EventType.NFT_COLLECTION_TRADE]: { label: "NFT Collection Trade" },
  [EventType.REALMS_VOTE]: { label: "Realms Vote" },
  [EventType.SWAP]: { label: "Swap" },
  [EventType.TENSOR_BID]: { label: "Tensor Bid" },
  [EventType.TENSOR_BUY]: { label: "Tensor Buy" },
  [EventType.STAKE_SOL]: { label: "Stake SOL" },
  [EventType.FORM_SUBMISSION]: { label: "Submit Form" },
  [EventType.PUMP_FUN_BUY]: { label: "" },
  [EventType.LOCK_TOKEN]: { label: "Lock Token" },
  [EventType.BURN_TOKEN]: { label: "Burn Token" },
} as const;

/**
 * List of events that support blink
 */
export const blinkSupportedEvents = [
  EventType.CLICK,
  EventType.DRIFT_BET,
  EventType.NFT_BUY_BID,
  EventType.NFT_COLLECTION_TRADE,
  EventType.REALMS_VOTE,
  EventType.SWAP,
  EventType.STAKE_SOL,
] as const;

interface OfferRequirementItemProps {
  /**
   * The index of the requirement in the offer
   */
  index: number;

  /**
   * The offer/campaign ID
   */
  campaignId: string;

  /**
   * The requirement to display
   */
  requirement: ApiRequirement;

  /**
   * The user's status for the requirement
   */
  status: ApiProgressStatus | undefined;

  /**
   * Additional class names to apply to the component
   */
  className?: string;

  /**
   * Whether the requirement should be open by default
   */
  open?: boolean;

  /**
   * Whether to show the blink to complete the requirement if it is not completed
   */
  showAction: boolean;
}

export function OfferRequirementItem({
  index,
  campaignId,
  requirement,
  status,
  className,
  open,
  showAction,
}: OfferRequirementItemProps) {
  const { config, rpcEndpoint } = useTorque();

  const [inTokenDetails, setInTokenDetails] = useState<TokenDetails>();
  const [outTokenDetails, setOutTokenDetails] = useState<TokenDetails>();
  const [titleDetail, setTitleDetail] = useState<string>();

  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    /**
     * Get token details for swaps etc
     */
    async function getTokenData() {
      if (
        ("inToken" in requirement.eventConfig &&
          requirement.eventConfig.inToken) ||
        ("outToken" in requirement.eventConfig &&
          requirement.eventConfig.outToken) ||
        ("tokenAddress" in requirement.eventConfig &&
          requirement.eventConfig.tokenAddress)
      ) {
        if (
          "inToken" in requirement.eventConfig &&
          requirement.eventConfig.inToken
        ) {
          const tokenInDetails = await getTokenDetails(
            requirement.eventConfig.inToken,
            rpcEndpoint,
          );

          setInTokenDetails(tokenInDetails);
        }

        if (
          "outToken" in requirement.eventConfig &&
          requirement.eventConfig.outToken
        ) {
          const tokenOutDetails = await getTokenDetails(
            requirement.eventConfig.outToken,
            rpcEndpoint,
          );

          setOutTokenDetails(tokenOutDetails);
        }

        if (
          "tokenAddress" in requirement.eventConfig &&
          requirement.eventConfig.tokenAddress
        ) {
          const tokenInDetails = await getTokenDetails(
            requirement.eventConfig.tokenAddress,
            rpcEndpoint,
          );

          setInTokenDetails(tokenInDetails);
        }
      }
    }

    /**
     * Get tensor collection name
     */
    async function getCollectionData() {
      if (requirement.type === EventType.NFT_COLLECTION_TRADE) {
        const colAddress = requirement.eventConfig.collectionAddress;
        const colName = await getTensorNameFromCollectionAddress(colAddress);

        setTitleDetail(colName);
      }
    }

    /**
     * Get NFT data
     */
    async function getNftData() {
      if (requirement.type === EventType.NFT_BUY_BID) {
        const nftRequest = await fetch(
          `https://tensor.dial.to/bid/${requirement.eventConfig.mint}`,
        );

        const nftData =
          (await nftRequest.json()) as unknown as ActionGetResponse;

        setTitleDetail(nftData.title);
      }
    }

    /**
     * Get realms data
     */
    async function getRealmsData() {
      if (requirement.type === EventType.REALMS_VOTE) {
        const { daoPubKey, proposalPubKey } = requirement.eventConfig;

        const realmsRequest = await fetch(
          `https://realms.dial.to/vote/dao/${daoPubKey}/proposal/${proposalPubKey}`,
        );

        const realmsData =
          (await realmsRequest.json()) as unknown as ActionGetResponse;

        setTitleDetail(realmsData.title);
      }
    }

    Promise.all([
      getTokenData(),
      getCollectionData(),
      getNftData(),
      getRealmsData(),
    ]).catch((e) => {
      console.error(e);
    });
  }, [requirement, rpcEndpoint]);

  /**
   * Create requirement title
   */
  const fullTitle = useMemo(() => {
    const reqLabel = requirementLabelMap[requirement.type].label;

    if (requirement.type === EventType.SWAP) {
      if (inTokenDetails && outTokenDetails) {
        return `${reqLabel}: ${inTokenDetails.symbol} to ${outTokenDetails.symbol}`;
      } else if (inTokenDetails) {
        return `Sell ${inTokenDetails.symbol}`;
      } else if (outTokenDetails) {
        return `Buy ${outTokenDetails.symbol}`;
      }
    }

    return `${reqLabel}${titleDetail ? `: ${titleDetail}` : ""}`;
  }, [requirement.type, titleDetail, inTokenDetails, outTokenDetails]);

  // Set default publisher handle if not provided
  const publisherHandle = config?.publisherHandle ?? "torqueprotocol";

  // Create action URL to Torque API server
  const actionUrl = `${config?.apiUrl}/actions/${publisherHandle}/${campaignId}?index=${index}&breakChain=true`;

  // Setup flag whether to show action or not
  const actionEnabled = status !== ApiProgressStatus.DONE && showAction;

  return (
    <Collapsible
      disabled={!actionEnabled}
      onOpenChange={setIsOpen}
      open={isOpen}
    >
      <div
        className={cn(
          "torque-flex torque-w-full torque-flex-col torque-rounded-md torque-border torque-border-dashed",
          className,
        )}
      >
        <CollapsibleTrigger asChild>
          <Button
            className={cn(
              "torque-relative torque-flex torque-h-auto torque-w-full torque-items-center torque-justify-between torque-gap-4 torque-rounded-none torque-p-4 hover:torque-bg-transparent",
              { "torque-cursor-default": !actionEnabled },
            )}
            variant="ghost"
          >
            <span className="torque-flex-1 torque-text-left">{fullTitle}</span>

            {actionEnabled ? (
              <div className="torque-ml-auto">
                {isOpen ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
              </div>
            ) : null}

            {status === ApiProgressStatus.DONE ? (
              <Badge className="torque-text-[8px]" variant="green">
                Completed
              </Badge>
            ) : null}

            {status === ApiProgressStatus.PENDING ? (
              <Badge
                className="torque-text-[8px]"
                color="purple"
                variant="default"
              >
                Pending
              </Badge>
            ) : null}
          </Button>
        </CollapsibleTrigger>

        {actionEnabled ? (
          <CollapsibleContent className="torque-w-full torque-p-4 torque-pt-0">
            {requirement.type !== EventType.CUSTOM_EVENT ? (
              <TorqueBlink actionUrl={actionUrl} />
            ) : null}

            {requirement.type === EventType.CUSTOM_EVENT ? (
              <CustomEventAction eventConfig={requirement.eventConfig} />
            ) : null}
          </CollapsibleContent>
        ) : null}
      </div>
    </Collapsible>
  );
}
