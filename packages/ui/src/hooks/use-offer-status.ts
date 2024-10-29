import { ApiProgressStatus } from "@torque-labs/torque-ts-sdk";
import { useCallback, useEffect, useState } from "react";

import { useTorque } from "#/hooks";

export function useOfferStatus(campaignId: string) {
  const { publicKey, torque, journeys, userClient, offers } = useTorque();

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
  const [userSteps, setUserSteps] = useState<
    {
      id?: string;
      bountyStepId: string;
      userJourneyId: string;
      status: ApiProgressStatus;
      transaction?: string;
    }[]
  >();

  /**
   * Check the user's offer status
   */
  const checkOfferStatus = useCallback(async () => {
    try {
      setIsLoading(true);

      if (publicKey && userClient) {
        const journey =
          journeys.find((j) => campaignId === j.campaign.id) ??
          (await userClient.getCampaignJourney(campaignId));

        if (journey) {
          setIsPending(journey.status === ApiProgressStatus.PENDING);
          setHasStarted(true);
          setHasCompleted(journey.status === ApiProgressStatus.DONE);
          setUpdatedAt(new Date(journey.updatedAt));
          setStartTime(journey.startTime ? new Date(journey.startTime) : null);
          setUserSteps(journey.userBountySteps ?? []);
        } else {
          const verified = await userClient.verifyCampaignAudience(campaignId);

          setIsEligible(Boolean(verified));
          setHasStarted(false);
          setHasCompleted(false);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [publicKey, userClient, journeys, campaignId]);

  /**
   * Check the campaign status
   */
  const checkCampaignStatus = useCallback(async () => {
    try {
      setIsLoadingCampaign(true);

      if (publicKey && campaignId && torque?.api) {
        const campaign =
          offers.find((o) => o.id === campaignId) ??
          (await torque.api.getCampaign(campaignId));

        const now = new Date();

        setIsUpcoming(new Date(campaign.startTime) > now);
        setIsEnded(
          campaign.status === "ENDED" || new Date(campaign.endTime) < now,
        );
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingCampaign(false);
    }
  }, [publicKey, campaignId, torque?.api, offers]);

  useEffect(() => {
    Promise.all([checkOfferStatus(), checkCampaignStatus()]).catch((e) => {
      console.error(e);
    });
  }, [
    publicKey,
    campaignId,
    torque,
    torque?.user,
    torque?.user?.initialized,
    checkOfferStatus,
    checkCampaignStatus,
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
  };
}
