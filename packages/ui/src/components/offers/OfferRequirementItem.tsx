import type { ActionGetResponse } from "@solana/actions";
import type { ApiRequirement } from "@torque-labs/torque-ts-sdk";
import { ApiProgressStatus } from "@torque-labs/torque-ts-sdk";
import {
  EventType,
  getTensorNameFromCollectionAddress,
} from "@torque-labs/torque-utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { Countdown, TorqueBlink, TransactionLink } from "#/components";
import { CustomEventAction } from "#/components/actions";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "#/components/ui/collapsible";
import { useTorque } from "#/hooks";
import { cn, formatAmount, getSingleTokenDetails } from "#/lib";
import type { TokenDetails } from "#/types";

export const requirementLabelMap: Record<EventType, { label: string }> = {
  [EventType.BURN_TOKEN]: { label: "Burn Token" },
  [EventType.CLICK]: { label: "Visit a Link" },
  [EventType.CUSTOM_EVENT]: { label: "Custom Event" },
  [EventType.DRIFT_BET]: { label: "Place a Bet on Drift" },
  [EventType.DRIFT_DEPOSIT]: { label: "Deposit on Drift" },
  [EventType.FORM_SUBMISSION]: { label: "Complete a Form" },
  [EventType.KAMINO_LEND]: { label: "Lend on Kamino" },
  [EventType.LOCK_TOKEN]: { label: "Lock a Token" },
  [EventType.MARGINFI_LEND]: { label: "Lend on Marginfi" },
  [EventType.MEMO]: { label: "Send a Memo transaction" },
  [EventType.NFT_BUY_BID]: { label: "Bid on or Buy an NFT" },
  [EventType.NFT_COLLECTION_TRADE]: { label: "Trade on a NFT collection" },
  [EventType.PUMP_FUN_BUY]: { label: "Buy on PumpFun" },
  [EventType.REALMS_VOTE]: { label: "Vote on Realms" },
  [EventType.STAKE_SOL]: { label: "Stake SOL" },
  [EventType.SWAP]: { label: "Swap" },
  [EventType.TENSOR_BID]: { label: "Bid on Tensor" },
  [EventType.TENSOR_BUY]: { label: "Buy on Tensor" },
} as const;

/**
 * List of events that support blink
 */
export const blinkSupportedEvents = [
  EventType.CLICK,
  EventType.DRIFT_BET,
  EventType.LOCK_TOKEN,
  EventType.NFT_BUY_BID,
  EventType.NFT_COLLECTION_TRADE,
  EventType.REALMS_VOTE,
  EventType.STAKE_SOL,
  EventType.SWAP,
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
   * The start time of the requirement (eg. for locks or holds)
   */
  stepStart?: Date;

  /**
   * The transaction signature for the completion of the requirement
   */
  transaction?: string;

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
  stepStart,
  transaction,
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
          const tokenInDetails = await getSingleTokenDetails(
            requirement.eventConfig.inToken,
            rpcEndpoint,
          );

          setInTokenDetails(tokenInDetails);
        }

        if (
          "outToken" in requirement.eventConfig &&
          requirement.eventConfig.outToken
        ) {
          const tokenOutDetails = await getSingleTokenDetails(
            requirement.eventConfig.outToken,
            rpcEndpoint,
          );

          setOutTokenDetails(tokenOutDetails);
        }

        if (
          "tokenAddress" in requirement.eventConfig &&
          requirement.eventConfig.tokenAddress
        ) {
          const tokenInDetails = await getSingleTokenDetails(
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
      const inAmount = requirement.eventConfig.inAmount
        ? formatAmount(requirement.eventConfig.inAmount)
        : "";

      const outAmount = requirement.eventConfig.outAmount
        ? formatAmount(requirement.eventConfig.outAmount)
        : "";

      if (inTokenDetails && outTokenDetails) {
        return `${reqLabel} ${inTokenDetails.symbol} for ${outAmount} ${outTokenDetails.symbol}`;
      } else if (inTokenDetails) {
        return `Sell ${inAmount} ${inTokenDetails.symbol}`;
      } else if (outTokenDetails) {
        return `Buy ${outAmount} ${outTokenDetails.symbol}`;
      }
    }

    if (requirement.type === EventType.LOCK_TOKEN) {
      return `${reqLabel}: ${formatAmount(requirement.eventConfig.amount)} ${inTokenDetails?.symbol} tokens`;
    }

    return `${reqLabel}${titleDetail ? `: ${titleDetail}` : ""}`;
  }, [
    requirement.type,
    requirement.eventConfig,
    titleDetail,
    inTokenDetails,
    outTokenDetails,
  ]);

  /**
   * Get the pending time for the requirement if applicable
   */
  const pendingTime = useMemo(() => {
    if (
      status === ApiProgressStatus.PENDING &&
      requirement.timeConfig &&
      requirement.timeConfig.duration > 0 &&
      stepStart
    ) {
      return new Date(
        stepStart.getTime() + requirement.timeConfig.duration * 1000,
      );
    }

    return;
  }, [requirement.timeConfig, status, stepStart]);

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
            <span className="torque-text-left">{fullTitle}</span>

            <div className="torque-ml-auto torque-mr-2 torque-flex torque-items-center torque-gap-3">
              {transaction ? (
                <TransactionLink transaction={transaction} />
              ) : null}

              {status === ApiProgressStatus.DONE ? (
                <div>
                  <Badge variant="green">Completed</Badge>
                </div>
              ) : null}

              {status === ApiProgressStatus.PENDING ? (
                <div className="torque-flex torque-items-center torque-gap-2">
                  {pendingTime ? (
                    <Countdown
                      className="torque-text-[8px] torque-leading-none"
                      size="torque-text-[11px]"
                      endTime={pendingTime}
                      countdownClassName="torque-gap-2"
                    />
                  ) : null}

                  <Badge variant="default" color="purple">
                    Pending
                  </Badge>
                </div>
              ) : null}

              {actionEnabled ? (
                <>
                  {isOpen ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
                </>
              ) : null}
            </div>
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
