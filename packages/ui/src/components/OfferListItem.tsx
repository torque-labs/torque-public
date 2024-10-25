import { ChevronDown, ChevronUp } from "lucide-react";

import { Avatar, AvatarImage } from "#/components/ui/avatar";

import { cn } from "#lib/utils.ts";

interface OfferListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc?: string;
  title: string;
  description?: string;
  isDone: boolean;
  isStarted: boolean;
  isOpen: boolean;
}

export function OfferListItem({
  imageSrc,
  title,
  description,
  className,
  children,
  isDone,
  isStarted,
  isOpen,
  onClick,
  ...rest
}: OfferListItemProps) {
  return (
    <div className={cn("gap-4 bg-background rounded", className)} {...rest}>
      <div className="p-3 flex flex-col gap-2">
        <div
          className="w-full flex gap-3 items-center"
          onClick={onClick}
          role="button"
          tabIndex={0}
        >
          {imageSrc ? (
            <Avatar className="w-10 h-10 rounded-sm">
              <AvatarImage alt={`${title} image`} src={imageSrc} />
            </Avatar>
          ) : null}
          <div className="flex-1">
            <h3 className="text-base leading-none tracking-tight flex justify-between">
              <span>{title}</span>

              <div>
                {isOpen ? (
                  <ChevronDown className="text-white size-5" size={20} />
                ) : (
                  <ChevronUp className="text-white size-5" size={20} />
                )}
              </div>
            </h3>
          </div>
        </div>

        {isStarted ? (
          <div className="rounded-full text-[10px] bg-foreground text-background px-2 uppercase self-start">
            Started
          </div>
        ) : null}
        {isDone ? (
          <div className="rounded-full text-[10px] bg-green-800 px-2 uppercase self-start">
            Completed
          </div>
        ) : null}
      </div>

      {isOpen ? (
        <div className="px-4 pb-4">
          {description ? (
            <p className="text-xs text-muted mb-4">{description}</p>
          ) : null}

          {children}
        </div>
      ) : null}
    </div>
  );
}
