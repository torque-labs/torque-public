import { ChevronRight } from "lucide-react";

import { Avatar, AvatarImage } from "#/components/ui/avatar";
import { useOfferStatus } from "#/hooks";
import { cn } from "#/lib";

interface OfferListItemProps {
  campaignId: string;
  imageSrc?: string;
  title: string;
  description?: string;
  isOpen: boolean;
  className?: string;
  onClick?: () => void;
}

export function OfferListItem({
  campaignId,
  imageSrc,
  title,
  description,
  className,
  onClick,
  ...rest
}: OfferListItemProps) {
  const { hasStarted, hasCompleted } = useOfferStatus(campaignId);

  return (
    <div className={cn("gap-4 rounded bg-background", className)} {...rest}>
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
          <div className="self-start rounded-full bg-foreground px-2 text-[10px] uppercase text-background">
            Started
          </div>
        ) : null}
        {hasCompleted ? (
          <div className="self-start rounded-full bg-green-800 px-2 text-[10px] uppercase">
            Completed
          </div>
        ) : null}
      </div>
    </div>
  );
}
