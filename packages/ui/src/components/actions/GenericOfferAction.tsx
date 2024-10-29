import { ApiRequirement } from "@torque-labs/torque-ts-sdk";
import { LoaderCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { OfferActionProps } from "@/lib/hooks/use-action";

type GenericOfferActionProps = OfferActionProps & {
  action: ApiRequirement;
  buttonLabel?: string;
  index?: number;
};

export function GenericOfferAction({
  buttonLabel = "Submit",
  isLoading,
  onSubmit,
}: GenericOfferActionProps) {
  return (
    <div className="flex flex-col gap-4">
      <Button onClick={onSubmit} disabled={isLoading}>
        {isLoading ? (
          <LoaderCircle className="mr-2 size-4 animate-spin" />
        ) : null}
        {buttonLabel}
      </Button>
    </div>
  );
}
