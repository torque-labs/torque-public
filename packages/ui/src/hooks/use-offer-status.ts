import type { ApiCampaignJourney } from "@torque-labs/torque-ts-sdk";
import { ApiProgressStatus } from "@torque-labs/torque-ts-sdk";
import { useCallback, useEffect, useRef, useState } from "react";

import { useTorque } from "#/hooks";

const POLLING_INTERVAL = 10000;

/**
 * Utility hook to check the status of an offer for the current user
 *
 * @param campaignId - The ID of the campaign to check the status of for the current user
 *
 * @returns The status of the offer, plus additional state and functions for re-loading the status.
 */
export function useOfferStatus(campaignId: string) {
  const { publicKey, torque, userClient, offers } = useTorque();

  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [hasCompleted, setHasCompleted] = useState<boolean>(false);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [isEligible, setIsEligible] = useState<boolean>(true);
  const [isEnded, setIsEnded] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingCampaign, setIsLoadingCampaign] = useState<boolean>(false);
  const [isUpcoming, setIsUpcoming] = useState<boolean>(false);
  const [updatedAt, setUpdatedAt] = useState<Date | null>(null);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [userSteps, setUserSteps] =
    useState<ApiCampaignJourney["userBountySteps"]>();

  // Interval to refresh the offer status
  const refreshInterval = useRef<ReturnType<typeof setInterval>>();

  /**
   * Check the user's offer status
   */
  const checkOfferStatus = useCallback(async () => {
    if (publicKey && userClient) {
      try {
        setIsLoading(true);

        const journey = await userClient.getCampaignJourney(campaignId);

        if (journey) {
          const isUserCompleted = journey.status === ApiProgressStatus.DONE;
          const isUserPending = journey.status === ApiProgressStatus.PENDING;

          setIsPending(isUserPending);
          setHasStarted(true);
          setHasCompleted(isUserCompleted);
          setIsLoading(false);
          setUpdatedAt(new Date(journey.updatedAt));
          setStartTime(journey.startTime ? new Date(journey.startTime) : null);
          setUserSteps(journey.userBountySteps ?? []);
          setIsEligible(true);
        } else {
          const verified = await userClient.verifyCampaignAudience(campaignId);

          setIsEligible(Boolean(verified));

          setIsLoading(false);
          setHasStarted(false);
          setHasCompleted(false);
          setIsPending(false);
          setUpdatedAt(null);
          setStartTime(null);
          setUserSteps([]);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
      setHasStarted(false);
      setHasCompleted(false);
      setIsPending(false);
      setUpdatedAt(null);
      setStartTime(null);
      setUserSteps([]);
    }
  }, [publicKey, userClient, campaignId]);

  /**
   * Check the campaign status
   */
  const checkCampaignStatus = useCallback(async () => {
    if (publicKey && campaignId && torque?.api) {
      try {
        setIsLoadingCampaign(true);

        const campaign =
          offers.find((o) => o.id === campaignId) ??
          (await torque.api.getCampaign(campaignId));

        const now = new Date();

        setIsUpcoming(new Date(campaign.startTime) > now);
        setIsEnded(
          campaign.status === "ENDED" || new Date(campaign.endTime) < now,
        );
      } catch (error) {
        console.error(error);

        setIsEnded(false);
        setIsUpcoming(false);
      } finally {
        setIsLoadingCampaign(false);
      }
    } else {
      setIsLoadingCampaign(false);
      setIsEnded(false);
      setIsUpcoming(false);
    }
  }, [publicKey, campaignId, torque?.api, offers]);

  /**
   * Stops polling the offer and campaign status
   */
  const stopPollingStatus = useCallback(() => {
    if (refreshInterval.current) {
      clearInterval(refreshInterval.current);
      refreshInterval.current = undefined;
    }
  }, []);

  /**
   *  Starts polling the offer and campaign status
   */
  const startPollingStatus = useCallback(() => {
    stopPollingStatus();

    // Start a new interval
    refreshInterval.current = setInterval(async () => {
      await Promise.all([checkOfferStatus(), checkCampaignStatus()]);
    }, POLLING_INTERVAL);
  }, [checkCampaignStatus, checkOfferStatus, stopPollingStatus]);

  useEffect(() => {
    Promise.all([checkOfferStatus(), checkCampaignStatus()]).catch((e) => {
      console.error(e);
    });

    return () => {
      stopPollingStatus();
    };
  }, [
    publicKey,
    campaignId,
    torque,
    torque?.user,
    torque?.user?.initialized,
    checkOfferStatus,
    checkCampaignStatus,
    stopPollingStatus,
  ]);

  return {
    isEligible,
    hasStarted,
    hasCompleted,
    isLoading: isLoadingCampaign || isLoading,
    isEnded,
    isUpcoming,
    isPending,
    updatedAt,
    startTime,
    userSteps,
    checkOfferStatus,
    startPollingStatus,
    stopPollingStatus,
  };
}
