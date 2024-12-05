import type { ApiCampaign } from "@torque-labs/torque-ts-sdk";
import { useMemo } from "react";

import { RewardGroup } from "#/components/rewards";
import { cn } from "#/lib";
import { RewardGroupType } from "#/types";

/**
 * Reward component props
 */
interface RewardsProps {
  /**
   * The offer/campaign object
   */
  campaign: ApiCampaign;

  /**
   * Additional class names to apply to the component
   */
  className?: string;
}

/**
 * Displays the rewards section for an offer
 */
export function Rewards({ campaign, className }: RewardsProps) {
  /**
   * Setup user rewards
   */
  const userRewards = useMemo(() => {
    const amount = Number(campaign.userRewardAmount ?? 0);

    if (amount > 0 && campaign.userRewardToken) {
      return {
        amount,
        tokenAddress: campaign.userRewardToken,
      };
    }

    return undefined;
  }, [campaign.userRewardAmount, campaign.userRewardToken]);

  /**
   * Setup publisher rewards
   */
  const publisherRewards = useMemo(() => {
    const amount = Number(campaign.publisherRewardAmount ?? 0);

    if (amount > 0 && campaign.publisherRewardToken) {
      return {
        amount,
        tokenAddress: campaign.publisherRewardToken,
      };
    }

    return undefined;
  }, [campaign.publisherRewardAmount, campaign.publisherRewardToken]);

  /**
   * Setup raffle rewards
   */
  const raffleRewards = useMemo(() => {
    if (campaign.asymmetricRewards.length > 0) {
      return campaign.asymmetricRewards;
    }

    return undefined;
  }, [campaign.asymmetricRewards]);

  /**
   * Setup lootbox rewards
   */
  const lootboxRewards = useMemo(() => {
    if (
      campaign.lootBoxRewards &&
      campaign.lootBoxRewards.tokenAddress &&
      campaign.lootBoxRewards.rewards.length > 0
    ) {
      return {
        tokenAddress: campaign.lootBoxRewards.tokenAddress,
        boxes: campaign.lootBoxRewards.rewards,
      };
    }

    return undefined;
  }, [campaign.lootBoxRewards]);

  return (
    <div className={cn("flex w-full flex-col gap-4", className)}>
      {userRewards ? (
        <RewardGroup
          reward={{
            rewardGroup: RewardGroupType.USER,
            tokenAddress: userRewards.tokenAddress,
            amount: userRewards.amount,
          }}
        />
      ) : null}

      {publisherRewards ? (
        <RewardGroup
          reward={{
            rewardGroup: RewardGroupType.PUBLISHER,
            tokenAddress: publisherRewards.tokenAddress,
            amount: publisherRewards.amount,
          }}
        />
      ) : null}

      {raffleRewards && raffleRewards.length > 0 ? (
        <RewardGroup
          reward={{
            rewardGroup: RewardGroupType.RAFFLE,
            entries: raffleRewards,
          }}
        />
      ) : null}

      {lootboxRewards && lootboxRewards.boxes.length > 0 ? (
        <RewardGroup
          reward={{
            rewardGroup: RewardGroupType.LOOTBOX,
            tokenAddress: lootboxRewards.tokenAddress,
            boxes: lootboxRewards.boxes,
          }}
        />
      ) : null}
    </div>
  );
}
