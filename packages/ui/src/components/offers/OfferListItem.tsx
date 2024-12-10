import {
  ApiProgressStatus,
  type ApiCampaign,
  type ApiCampaignJourney,
} from "@torque-labs/torque-ts-sdk";
import { ChevronRight } from "lucide-react";

import { Avatar, AvatarImage } from "#/components/ui/avatar";
import { Badge } from "#/components/ui/badge";
import { cn } from "#/lib";

interface OfferListItemProps {
  /**
   * The offer to display
   */
  offer: ApiCampaign;

  /**
   * The user's journey for the offer (if available)
   */
  journey?: ApiCampaignJourney;

  /**
   * Additional class names to apply to the component
   */
  className?: string;

  /**
   * Callback function to handle click events
   */
  onClick?: () => void;
}

/**
 * Displays an offer as a component to be used as part of a list
 */
export function OfferListItem({
  offer,
  journey,
  className,
  onClick,
  ...rest
}: OfferListItemProps) {
  const title = offer.title;
  const description = offer.description;
  const imageSrc = offer.imageUrl;

  const hasStarted = Boolean(journey?.status === ApiProgressStatus.STARTED);
  const hasCompleted = Boolean(journey?.status === ApiProgressStatus.DONE);

  return (
    <div
      className={cn("torque-gap-4 torque-rounded torque-border", className)}
      {...rest}
    >
      <div className="torque-flex torque-flex-col torque-gap-2 torque-p-3">
        <div
          className="torque-flex torque-w-full torque-items-center torque-gap-3"
          onClick={onClick}
          role="button"
          tabIndex={0}
        >
          {imageSrc ? (
            <Avatar className="torque-h-12 torque-w-12 torque-rounded-sm">
              <AvatarImage alt={`${title} image`} src={imageSrc} />
            </Avatar>
          ) : null}
          <div className="torque-flex-1">
            <h3 className="torque-font-semibold torque-leading-tight torque-flex torque-justify-between torque-text-sm">
              {title}
            </h3>
          </div>

          <ChevronRight className="torque-size-5 torque-text-white" size={16} />
        </div>

        <p className="torque-mr-5 torque-text-xs torque-text-muted">
          {description}
        </p>

        {hasStarted ? (
          <Badge
            className="torque-self-start torque-px-2 torque-text-[10px]"
            variant="default"
          >
            Started
          </Badge>
        ) : null}

        {hasCompleted ? (
          <Badge
            className="torque-self-start torque-px-2 torque-text-[10px]"
            variant="green"
          >
            Completed
          </Badge>
        ) : null}
      </div>
    </div>
  );
}
