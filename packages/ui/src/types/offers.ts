/**
 * Available reward groups for an offer
 */
export enum RewardGroupType {
  USER = "USER",
  PUBLISHER = "PUBLISHER",
  RAFFLE = "RAFFLE",
  LOOTBOX = "LOOTBOX",
}

/**
 * Reward details for each reward group type
 */
export type RewardDetails =
  | {
      /**
       * The reward group type
       */
      rewardGroup: RewardGroupType.USER | RewardGroupType.PUBLISHER;
      /**
       * The token address for the reward
       */
      tokenAddress: string;
      /**
       * The token amount for the reward
       */
      amount: number;
    }
  | {
      /**
       * The reward group type
       */
      rewardGroup: RewardGroupType.RAFFLE;
      /**
       * Raffle entries
       */
      entries: {
        /**
         * Raffle entry token address
         */
        tokenAddress: string;
        /**
         * Raffle entry amount
         */
        amount: number;
      }[];
    }
  | {
      /**
       * The reward group type
       */
      rewardGroup: RewardGroupType.LOOTBOX;
      /**
       * The token address for the reward
       */
      tokenAddress: string;
      /**
       * List of lootboxes with the number of eligible users and reward amounts
       */
      boxes: {
        /**
         * The number of users that can get the reward in this box
         */
        users: number;
        /**
         * The token amount for the reward
         */
        amount: number;
      }[];
    };
