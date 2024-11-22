import type { LucideProps } from "lucide-react";
import { Trophy, Ticket, Package, Users } from "lucide-react";

import { TokenPill } from "#/components";
import type { RewardDetails } from "#/types";
import { RewardGroup } from "#/types";

/**
 * Reward display component props
 */
interface RewardDisplayProps {
  /**
   * The reward details to display
   */
  reward: RewardDetails;
}

/**
 * Mapping of reward group to icon component
 */
const iconMap: Record<
  RewardGroup,
  React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >
> = {
  [RewardGroup.USER]: Users,
  [RewardGroup.PUBLISHER]: Ticket,
  [RewardGroup.RAFFLE]: Trophy,
  [RewardGroup.LOOTBOX]: Package,
};

/**
 * Mapping of reward group to title
 */
const titleMap: Record<RewardGroup, string> = {
  [RewardGroup.USER]: "User Rewards",
  [RewardGroup.PUBLISHER]: "Publisher Rewards",
  [RewardGroup.RAFFLE]: "Raffle Rewards",
  [RewardGroup.LOOTBOX]: "Lootbox Rewards",
};

export function RewardDisplayProps({ reward }: RewardDisplayProps) {
  const IconComponent = iconMap[reward.rewardGroup];
  const title = titleMap[reward.rewardGroup];

  return (
    <div className="rounded-md border p-4">
      <div className="mb-4 flex items-center gap-2">
        <IconComponent size={16} />
        <h4 className="font-semibold">{title}</h4>
      </div>

      <div className="flex flex-col items-start gap-2">
        {
          // Output for user and publisher rewards
          reward.rewardGroup === RewardGroup.USER ||
          reward.rewardGroup === RewardGroup.PUBLISHER ? (
            <TokenPill
              action="GET"
              amount={reward.amount}
              tokenAddress={reward.tokenAddress}
            />
          ) : null
        }

        {
          // Output for raffle rewards
          reward.rewardGroup === RewardGroup.RAFFLE ? (
            <div>
              {reward.entries.map((entry) => (
                <div key={`${entry.tokenAddress}-${entry.amount}`}>
                  <TokenPill
                    action="ENTRY FOR"
                    amount={entry.amount}
                    tokenAddress={entry.tokenAddress}
                  />
                </div>
              ))}
            </div>
          ) : null
        }

        {
          // Output for lootbox rewards
          reward.rewardGroup === RewardGroup.LOOTBOX ? (
            <div>
              {reward.boxes.map((box) => (
                <div
                  className="flex items-center gap-2"
                  key={`box-${box.users}-${box.amount}`}
                >
                  <span>{box.users}</span>
                  <span>&times;</span>
                  <TokenPill
                    action="ENTRY FOR"
                    amount={box.amount}
                    tokenAddress={reward.tokenAddress}
                  />
                </div>
              ))}
            </div>
          ) : null
        }
      </div>
    </div>
  );
}
