"use client";

import type { ApiRequirement } from "@torque-labs/torque-ts-sdk";
import { ApiProgressStatus } from "@torque-labs/torque-ts-sdk";
import { EventType, NftCollectionTradeType } from "@torque-labs/torque-utils";

import {
  ClickOfferAction,
  LendOfferAction,
  MemoOfferAction,
  NftBuyOfferAction,
  RealmsVoteOfferAction,
  TensorOfferAction,
  DriftBetOfferAction,
  DriftDepositOfferAction,
  GenericOfferAction,
  NftCollectionTradeOfferAction,
  CustomEventAction,
} from "#/components/actions";
import { MiniBlink } from "#/components/MiniBlink";

import { OfferRequirementRow } from "./OfferRequirementRow";

import { useTorque } from "@/components/providers/torque";
import { useToast } from "@/components/ui/use-toast";
import { API_ROUTES, APP_URL } from "@/constants";
import type {
  OfferActionOnComplete,
  OfferActionOnError,
} from "@/lib/hooks/use-action";
import { useAction } from "@/lib/hooks/use-action";

interface OfferRequirementProps {
  index: number;
  campaignId: string;
  requirement: ApiRequirement;
  publisherHandle: string;
  showAction?: boolean;
  status: ApiProgressStatus | undefined;
  onActionComplete?: () => void;
  open?: boolean;
}

export function OfferRequirement({
  index,
  publisherHandle,
  campaignId,
  requirement,
  showAction = false,
  open = false,
  status,
  onActionComplete,
}: OfferRequirementProps) {
  const { toast } = useToast();
  const { publicKey, isAuthenticated } = useTorque();
  const { handleAction, isLoading } = useAction();

  const onComplete: OfferActionOnComplete = (data) => {
    toast({
      variant: "default",
      title: "Success!",
      description: data?.text ?? "Your transaction has been confirmed.",
      signature: data?.signature,
    });

    if (onActionComplete) {
      onActionComplete();
    }
  };

  const onError: OfferActionOnError = (message) => {
    toast({
      variant: "destructive",
      title: "Error",
      description: message ?? "There was an error processing your transaction.",
    });
  };

  const displayAction =
    showAction &&
    status !== ApiProgressStatus.DONE &&
    status !== ApiProgressStatus.PENDING;

  const actionUrl = `${API_ROUTES.actions}/${publisherHandle}/${campaignId}?index=${index}`;

  if (requirement.type === EventType.CLICK) {
    return (
      <OfferRequirementRow
        open={open}
        requirement={requirement}
        showAction={displayAction}
        status={status}
      >
        {publicKey && isAuthenticated ? (
          <ClickOfferAction
            campaignId={campaignId}
            eventConfig={requirement.eventConfig}
            isLoading={isLoading}
            onSubmit={async (data) => {
              await handleAction({
                campaignId,
                index,
                data,
                publisherHandle,
                onComplete,
                onError,
              });
            }}
          />
        ) : null}
      </OfferRequirementRow>
    );
  }

  if (requirement.type === EventType.CUSTOM_EVENT) {
    return (
      <OfferRequirementRow
        open={open}
        requirement={requirement}
        showAction={displayAction}
        status={status}
      >
        <CustomEventAction
          campaignId={campaignId}
          eventConfig={requirement.eventConfig}
          onSubmit={async (data) => {
            onComplete({ text: "Submitted successfully!" });
          }}
        />
      </OfferRequirementRow>
    );
  }

  if (requirement.type === EventType.DRIFT_BET) {
    return (
      <OfferRequirementRow
        open={open}
        requirement={requirement}
        showAction={displayAction}
        status={status}
      >
        <DriftBetOfferAction
          campaignId={campaignId}
          eventConfig={requirement.eventConfig}
          onSubmit={async () => {
            onComplete({ text: "Submitted successfully!" });
          }}
        >
          <MiniBlink actionUrl={actionUrl} />
        </DriftBetOfferAction>
      </OfferRequirementRow>
    );
  }

  if (requirement.type === EventType.DRIFT_DEPOSIT) {
    return (
      <OfferRequirementRow
        open={open}
        requirement={requirement}
        showAction={displayAction}
        status={status}
      >
        {publicKey && isAuthenticated ? <DriftDepositOfferAction /> : null}
      </OfferRequirementRow>
    );
  }

  if (requirement.type === EventType.KAMINO_LEND) {
    return (
      <OfferRequirementRow
        open={open}
        requirement={requirement}
        showAction={displayAction}
        status={status}
      >
        {publicKey && isAuthenticated ? (
          <LendOfferAction lendType={EventType.KAMINO_LEND} />
        ) : null}
      </OfferRequirementRow>
    );
  }

  if (requirement.type === EventType.MARGINFI_LEND) {
    return (
      <OfferRequirementRow
        open={open}
        requirement={requirement}
        showAction={displayAction}
        status={status}
      >
        {publicKey && isAuthenticated ? (
          <LendOfferAction lendType={EventType.MARGINFI_LEND} />
        ) : null}
      </OfferRequirementRow>
    );
  }

  if (requirement.type === EventType.MEMO) {
    return (
      <OfferRequirementRow
        open={open}
        requirement={requirement}
        showAction={displayAction}
        status={status}
      >
        {publicKey && isAuthenticated ? (
          <MemoOfferAction
            campaignId={campaignId}
            eventConfig={requirement.eventConfig}
            onSubmit={async (data) => {
              await handleAction({
                campaignId,
                index,
                data,
                publisherHandle,
                onComplete,
                onError,
              });
            }}
          />
        ) : null}
      </OfferRequirementRow>
    );
  }

  if (requirement.type === EventType.NFT_BUY_BID) {
    return (
      <OfferRequirementRow
        open={open}
        requirement={requirement}
        showAction={displayAction}
        status={status}
      >
        {publicKey && isAuthenticated ? (
          <NftBuyOfferAction
            campaignId={campaignId}
            eventConfig={requirement.eventConfig}
            onSubmit={async () => {
              await handleAction({
                campaignId,
                index,
                publisherHandle,
                onComplete,
                onError,
              });
            }}
          />
        ) : null}
      </OfferRequirementRow>
    );
  }

  if (requirement.type === EventType.NFT_COLLECTION_TRADE) {
    return (
      <OfferRequirementRow
        open={open}
        requirement={requirement}
        showAction={displayAction}
        status={status}
      >
        {requirement.eventConfig.tradeType !== NftCollectionTradeType.SELL &&
        publicKey &&
        isAuthenticated ? (
          <NftCollectionTradeOfferAction
            campaignId={campaignId}
            eventConfig={requirement.eventConfig}
            onSubmit={async () => {
              await handleAction({
                campaignId,
                index,
                publisherHandle,
                onComplete,
                onError,
              });
            }}
          />
        ) : null}
      </OfferRequirementRow>
    );
  }

  if (requirement.type === EventType.REALMS_VOTE) {
    return (
      <OfferRequirementRow
        open={open}
        requirement={requirement}
        showAction={displayAction}
        status={status}
      >
        {publicKey && isAuthenticated ? (
          <RealmsVoteOfferAction
            campaignId={campaignId}
            eventConfig={requirement.eventConfig}
            onSubmit={async (data) => {
              await handleAction({
                campaignId,
                index,
                publisherHandle,
                data,
                onComplete,
                onError,
              });
            }}
          />
        ) : null}
      </OfferRequirementRow>
    );
  }

  if (requirement.type === EventType.SWAP) {
    return (
      <OfferRequirementRow
        open={open}
        requirement={requirement}
        showAction={displayAction}
        status={status}
      >
        {publicKey && isAuthenticated ? (
          <GenericOfferAction
            action={requirement}
            buttonLabel="Swap"
            campaignId={campaignId}
            index={index}
            onSubmit={async () => {
              await handleAction({
                campaignId,
                index,
                publisherHandle,
                onComplete,
                onError,
              });
            }}
          />
        ) : null}
      </OfferRequirementRow>
    );
  }

  if (requirement.type === EventType.TENSOR_BID) {
    return (
      <OfferRequirementRow
        open={open}
        requirement={requirement}
        showAction={displayAction}
        status={status}
      >
        {publicKey && isAuthenticated ? (
          <TensorOfferAction
            actionType={EventType.TENSOR_BID}
            campaignId={campaignId}
            eventConfig={requirement.eventConfig}
            onSubmit={async (data) => {
              // TODO: Fix tensor actions
              await handleAction({
                campaignId,
                index,
                publisherHandle,
                data,
                onComplete,
                onError,
              });
            }}
          />
        ) : null}
      </OfferRequirementRow>
    );
  }

  if (requirement.type === EventType.TENSOR_BUY) {
    return (
      <OfferRequirementRow
        open={open}
        requirement={requirement}
        showAction={displayAction}
        status={status}
      >
        {publicKey && isAuthenticated ? (
          <TensorOfferAction
            actionType={EventType.TENSOR_BUY}
            campaignId={campaignId}
            eventConfig={requirement.eventConfig}
            onSubmit={async (data) => {
              // TODO: Fix tensor actions
              await handleAction({
                campaignId,
                index,
                publisherHandle,
                data,
                onComplete,
                onError,
              });
            }}
          />
        ) : null}
      </OfferRequirementRow>
    );
  }
}
