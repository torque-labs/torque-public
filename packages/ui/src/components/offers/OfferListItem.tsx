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
  offer: ApiCampaign;
  journey?: ApiCampaignJourney;
  className?: string;
  onClick?: () => void;
}

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
    <div className={cn("gap-4 rounded border", className)} {...rest}>
      <div className="flex flex-col gap-2 p-3">
        <div
          className="flex w-full items-center gap-3"
          onClick={onClick}
          role="button"
          tabIndex={0}
        >
          {imageSrc ? (
            <Avatar className="h-12 w-12 rounded-sm">
              <AvatarImage alt={`${title} image`} src={imageSrc} />
            </Avatar>
          ) : null}
          <div className="flex-1">
            <h3 className="font-semiboldleading-tight flex justify-between text-sm">
              {title}
            </h3>
          </div>

          <ChevronRight className="size-5 text-white" size={16} />
        </div>

        <p className="mr-5 text-xs text-muted">{description}</p>

        {hasStarted ? (
          <Badge className="self-start px-2 text-[10px]" variant="default">
            Started
          </Badge>
        ) : null}

        {hasCompleted ? (
          <Badge className="self-start px-2 text-[10px]" variant="green">
            Completed
          </Badge>
        ) : null}
      </div>
    </div>
  );
}
