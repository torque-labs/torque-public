import type { LucideProps } from "lucide-react";
import { Users, Ticket, Trophy, Package } from "lucide-react";

import { TokenPill } from "#/components";
import { cn } from "#/lib";
import type { RewardDetails } from "#/types";
import { RewardGroupType } from "#/types";

/**
 * Reward group component props
 */
interface RewardGroupProps {
  /**
   * The reward details to display
   */
  reward: RewardDetails;

  /**
   * Additional class names to apply to the component
   */
  className?: string;

  /**
   * Additional class names to apply to the header of the reward group
   */
  headerClassName?: string;
}

/**
 * Mapping of reward group to icon component
 */
const iconMap: Record<
  RewardGroupType,
  React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >
> = {
  [RewardGroupType.USER]: Users,
  [RewardGroupType.PUBLISHER]: Ticket,
  [RewardGroupType.RAFFLE]: Trophy,
  [RewardGroupType.LOOTBOX]: Package,
};

/**
 * Mapping of reward group to title
 */
const titleMap: Record<RewardGroupType, string> = {
  [RewardGroupType.USER]: "User",
  [RewardGroupType.PUBLISHER]: "Publisher",
  [RewardGroupType.RAFFLE]: "Raffle",
  [RewardGroupType.LOOTBOX]: "Lootbox",
};

/**
 * Displays rewards for a single reward group
 */
export function RewardGroup({
  reward,
  className,
  headerClassName,
}: RewardGroupProps) {
  const IconComponent = iconMap[reward.rewardGroup];
  const title = titleMap[reward.rewardGroup];

  return (
    <div className={cn("w-full rounded-md border p-4", className)}>
      <div className={cn("mb-4 flex items-center gap-2", headerClassName)}>
        <IconComponent size={16} />
        <h4 className="font-semibold">{title}</h4>
      </div>

      <div className="flex flex-col items-start gap-2">
        {
          // Output for user and publisher rewards
          reward.rewardGroup === RewardGroupType.USER ||
          reward.rewardGroup === RewardGroupType.PUBLISHER ? (
            <TokenPill
              action="GET"
              amount={reward.amount}
              tokenAddress={reward.tokenAddress}
            />
          ) : null
        }

        {
          // Output for raffle rewards
          reward.rewardGroup === RewardGroupType.RAFFLE ? (
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
          reward.rewardGroup === RewardGroupType.LOOTBOX ? (
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
