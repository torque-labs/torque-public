import { ChevronDown, ChevronUp } from "lucide-react";

import { Avatar, AvatarImage } from "#/components/ui/avatar";
import { useOfferStatus } from "#/hooks";
import { cn } from "#/lib";

interface OfferListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  campaignId: string;
  imageSrc?: string;
  title: string;
  description?: string;
  isOpen: boolean;
}

export function OfferListItem({
  campaignId,
  imageSrc,
  title,
  description,
  className,
  children,
  isOpen,
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
            <Avatar className="h-10 w-10 rounded-sm">
              <AvatarImage alt={`${title} image`} src={imageSrc} />
            </Avatar>
          ) : null}
          <div className="flex-1">
            <h3 className="flex justify-between text-base leading-none tracking-tight">
              <span>{title}</span>

              <div>
                {isOpen ? (
                  <ChevronDown className="size-5 text-white" size={20} />
                ) : (
                  <ChevronUp className="size-5 text-white" size={20} />
                )}
              </div>
            </h3>
          </div>
        </div>

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

      {isOpen ? (
        <div className="px-4 pb-4">
          {description ? (
            <p className="mb-4 text-xs text-muted">{description}</p>
          ) : null}

          {children}
        </div>
      ) : null}
    </div>
  );
}
