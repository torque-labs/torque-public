"use client";

import type { ActionGetResponse } from "@solana/actions";
import type { ApiRequirement } from "@torque-labs/torque-ts-sdk";
import {
  ApiProgressStatus,
  TorqueAdminClient,
} from "@torque-labs/torque-ts-sdk";
import {
  EventType,
  NftCollectionTradeType,
  getTensorNameFromCollectionAddress,
} from "@torque-labs/torque-utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { PropsWithChildren } from "react";
import { useEffect, useState } from "react";

import { TokenPill } from "#/components";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "#/components/ui/collapsible";
import { getTokenDetails, cn } from "#/lib";
import type { TokenDetails } from "#/types";

// TODO: Add STAKE_SOL to this map when ready
// TODO: Add FORM_SUBMISSION to this map when ready
const requirementLabelMap: Record<
  Exclude<EventType, EventType.STAKE_SOL | EventType.FORM_SUBMISSION>,
  { label: string }
> = {
  [EventType.CLICK]: { label: "Click" },
  [EventType.CUSTOM_EVENT]: { label: "Custom Event" },
  [EventType.DRIFT_BET]: { label: "Drift Bet" },
  [EventType.DRIFT_DEPOSIT]: { label: "Drift Deposit" },
  [EventType.KAMINO_LEND]: { label: "Kamino Lend" },
  [EventType.MARGINFI_LEND]: { label: "Marginfi Lend" },
  [EventType.MEMO]: { label: "Memo" },
  [EventType.NFT_BUY_BID]: { label: "NFT Buy Bid" },
  [EventType.NFT_COLLECTION_TRADE]: {
    label: "NFT Collection Trade",
  },
  [EventType.REALMS_VOTE]: { label: "Realms Vote" },
  [EventType.SWAP]: { label: "Swap" },
  [EventType.TENSOR_BID]: { label: "Tensor Bid" },
  [EventType.TENSOR_BUY]: { label: "Tensor Buy" },
};

function OfferRequirementContent({
  requirement,
}: {
  requirement: ApiRequirement;
}) {
  const [inTokenDetails, setInTokenDetails] = useState<TokenDetails>();
  const [outTokenDetails, setOutTokenDetails] = useState<TokenDetails>();
  const [collectionName, setCollectionName] = useState<string>();
  const [title, setTitle] = useState<string>();

  useEffect(() => {
    async function getTokenData() {
      if (
        ("inToken" in requirement.eventConfig &&
          requirement.eventConfig.inToken) ||
        ("outToken" in requirement.eventConfig &&
          requirement.eventConfig.outToken) ||
        ("tokenAddress" in requirement.eventConfig &&
          requirement.eventConfig.tokenAddress)
      ) {
        const fetchedTokens = await TorqueAdminClient.getSafeTokenList();

        if (
          "inToken" in requirement.eventConfig &&
          requirement.eventConfig.inToken
        ) {
          const tokenInDetails = getTokenDetails(
            requirement.eventConfig.inToken,
            fetchedTokens,
          );

          setInTokenDetails(tokenInDetails);
        }

        if (
          "outToken" in requirement.eventConfig &&
          requirement.eventConfig.outToken
        ) {
          const tokenOutDetails = getTokenDetails(
            requirement.eventConfig.outToken,
            fetchedTokens,
          );

          setOutTokenDetails(tokenOutDetails);
        }

        if (
          "tokenAddress" in requirement.eventConfig &&
          requirement.eventConfig.tokenAddress
        ) {
          const tokenInDetails = getTokenDetails(
            requirement.eventConfig.tokenAddress,
            fetchedTokens,
          );

          setInTokenDetails(tokenInDetails);
        }
      }
    }

    async function getCollectionData() {
      if (requirement.type === EventType.NFT_COLLECTION_TRADE) {
        const colAddress = requirement.eventConfig.collectionAddress;
        const colName = await getTensorNameFromCollectionAddress(colAddress);

        setCollectionName(colName);
      }
    }

    async function getNftData() {
      if (requirement.type === EventType.NFT_BUY_BID) {
        const nftRequest = await fetch(
          `https://tensor.dial.to/bid/${requirement.eventConfig.mint}`,
        );

        const nftData =
          (await nftRequest.json()) as unknown as ActionGetResponse;

        setTitle(nftData.title);
      }
    }

    async function getRealmsData() {
      if (requirement.type === EventType.REALMS_VOTE) {
        const { daoPubKey, proposalPubKey } = requirement.eventConfig;

        const realmsRequest = await fetch(
          `https://realms.dial.to/vote/dao/${daoPubKey}/proposal/${proposalPubKey}`,
        );

        const realmsData =
          (await realmsRequest.json()) as unknown as ActionGetResponse;

        setTitle(realmsData.title);
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
  }, [requirement]);

  if (requirement.type === EventType.CLICK) {
    return <p>Visit a link</p>;
  }

  if (requirement.type === EventType.CUSTOM_EVENT) {
    // Description is shown at top level of requirement box if description is set
    // If form is enabled, the form heading is shown when expanded
    if (
      requirement.eventConfig.description ||
      requirement.eventConfig.formEnabled
    ) {
      return null;
    }

    return <p>Complete a custom event: {requirement.eventConfig.eventName}</p>;
  }

  if (requirement.type === EventType.DRIFT_BET) {
    return <p>Place a bet on Drift</p>;
  }

  if (requirement.type === EventType.DRIFT_DEPOSIT) {
    return (
      <div className="flex items-center gap-2">
        <span>Deposit on Drift:</span>
        <TokenPill
          action="DEPOSIT"
          amount={requirement.eventConfig.minAmount}
          details={inTokenDetails}
          tokenAddress={requirement.eventConfig.tokenAddress}
        />
      </div>
    );
  }

  if (requirement.type === EventType.KAMINO_LEND) {
    return (
      <div className="flex items-center gap-2">
        <span>Lend on Kamino:</span>
        <TokenPill
          action="LEND"
          amount={requirement.eventConfig.amount}
          details={inTokenDetails}
          tokenAddress={requirement.eventConfig.tokenAddress}
        />
      </div>
    );
  }

  if (requirement.type === EventType.MARGINFI_LEND) {
    return (
      <div className="flex items-center gap-2">
        <span>Lend on MarginFi:</span>
        <TokenPill
          action="LEND"
          amount={requirement.eventConfig.amount}
          details={inTokenDetails}
          tokenAddress={requirement.eventConfig.tokenAddress}
        />
      </div>
    );
  }

  if (requirement.type === EventType.MEMO) {
    return <p>Submit a form using a memo</p>;
  }

  if (requirement.type === EventType.NFT_BUY_BID) {
    return <p>Buy an NFT: {title}</p>;
  }

  if (requirement.type === EventType.NFT_COLLECTION_TRADE) {
    return (
      <TokenPill
        action={
          requirement.eventConfig.tradeType === NftCollectionTradeType.TRADE
            ? "BUY or SELL"
            : requirement.eventConfig.tradeType
        }
        amount={1}
        name={collectionName ?? requirement.eventConfig.collectionAddress}
        tokenAddress={requirement.eventConfig.collectionAddress}
      />
    );
  }

  if (requirement.type === EventType.REALMS_VOTE) {
    return <p>Vote on Realms for: {title}</p>;
  }

  if (requirement.type === EventType.SWAP) {
    if (requirement.eventConfig.inToken && requirement.eventConfig.outToken) {
      return (
        <div className="flex items-center gap-4">
          <TokenPill
            action="SWAP"
            amount={requirement.eventConfig.inAmount ?? 0}
            details={inTokenDetails}
            tokenAddress={requirement.eventConfig.inToken}
          />

          <TokenPill
            action="FOR"
            amount={requirement.eventConfig.outAmount ?? 0}
            details={outTokenDetails}
            tokenAddress={requirement.eventConfig.outToken}
          />
        </div>
      );
    } else if (
      requirement.eventConfig.inToken &&
      !requirement.eventConfig.outToken
    ) {
      return (
        <TokenPill
          action="SELL"
          amount={requirement.eventConfig.inAmount ?? 0}
          details={inTokenDetails}
          tokenAddress={requirement.eventConfig.inToken}
        />
      );
    } else if (
      !requirement.eventConfig.inToken &&
      requirement.eventConfig.outToken
    ) {
      return (
        <TokenPill
          action="BUY"
          amount={requirement.eventConfig.outAmount ?? 0}
          details={outTokenDetails}
          tokenAddress={requirement.eventConfig.outToken}
        />
      );
    }
  }

  if (requirement.type === EventType.TENSOR_BID) {
    return <p>Make a bid on Tensor from specific NFT specific collections</p>;
  }

  if (requirement.type === EventType.TENSOR_BUY) {
    return <p>Buy a NFT on Tensor from NFT specific collections</p>;
  }
}

interface OfferRequirementRowProps extends PropsWithChildren {
  requirement: ApiRequirement;
  showAction: boolean;
  status: ApiProgressStatus | undefined;
  open?: boolean;
}

export function OfferRequirementRow({
  requirement,
  showAction,
  status,
  children,
  open = false,
}: OfferRequirementRowProps) {
  const [isOpen, setIsOpen] = useState(open);

  useEffect(() => {
    if (open) {
      setIsOpen(true);
    }
  }, [open]);

  return (
    <Collapsible onOpenChange={setIsOpen} open={isOpen}>
      <div className="w-full rounded-md border border-dashed">
        <CollapsibleTrigger asChild>
          <Button
            className={cn(
              "flex h-auto w-full flex-col items-start gap-4 rounded-none p-4 hover:bg-transparent",
              { "cursor-default": !showAction },
            )}
            variant="ghost"
          >
            <div className="flex w-full items-center justify-between whitespace-normal text-left">
              {requirement.type === EventType.CUSTOM_EVENT &&
              requirement.eventConfig.description ? (
                <div className="py-3 pr-4 text-base font-normal">
                  {requirement.eventConfig.description}
                </div>
              ) : (
                <div className="pr-4 text-base font-normal">
                  {requirementLabelMap[requirement.type].label}
                </div>
              )}

              {status === ApiProgressStatus.DONE ? (
                <div>
                  <Badge variant="green">Completed</Badge>
                </div>
              ) : null}

              {status === ApiProgressStatus.PENDING ? (
                <div>
                  <Badge color="purple" variant="default">
                    Pending
                  </Badge>
                </div>
              ) : null}

              {showAction ? (
                <div className="ml-auto mr-2">
                  {isOpen ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
                </div>
              ) : null}
            </div>

            {
              // Only show requirement content if no description or form is enabled
              requirement.type !== EventType.CUSTOM_EVENT ||
              (!requirement.eventConfig.description &&
                !requirement.eventConfig.formEnabled) ? (
                <div>
                  <OfferRequirementContent requirement={requirement} />
                </div>
              ) : null
            }
          </Button>
        </CollapsibleTrigger>

        {showAction ? (
          <CollapsibleContent className="w-full p-4">
            {requirement.type !== EventType.CUSTOM_EVENT ? (
              <h3 className="mb-4 font-semibold">
                Complete the requirement below:
              </h3>
            ) : null}
            <div>{children}</div>
          </CollapsibleContent>
        ) : null}
      </div>
    </Collapsible>
  );
}
