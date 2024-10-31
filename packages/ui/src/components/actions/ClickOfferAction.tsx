import type { ClickAction } from "@torque-labs/torque-utils";
import { LoaderCircle, SquareArrowOutUpRight } from "lucide-react";

import { Button } from "#/components/ui/button";
import type { OfferActionProps } from "#/hooks";

type ClickOfferActionProps = OfferActionProps & {
  eventConfig: ClickAction;
};

export function ClickOfferAction({
  eventConfig,
  isLoading,
  onSubmit,
}: ClickOfferActionProps) {
  const hostname = new URL(eventConfig.targetUrl).hostname;

  return (
    <Button
      className="flex w-full items-center gap-2"
      disabled={isLoading}
      onClick={async () => {
        try {
          if (onSubmit) {
            await onSubmit();
          }
        } catch (error) {
          console.error(error);

          throw new Error("Failed to submit click.");
        }
      }}
    >
      {isLoading ? <LoaderCircle className="mr-2 size-4 animate-spin" /> : null}
      Go to {hostname}
      <SquareArrowOutUpRight size={14} />
    </Button>
  );
}
