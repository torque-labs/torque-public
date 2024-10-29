import { MemoAction, EventType } from "@torque-labs/torque-utils";

import { DynamicSchemaForm } from "@/components/forms/DynamicSchemaForm";
import { OfferActionProps, useAction } from "@/lib/hooks/use-action";

type MemoOfferActionProps = OfferActionProps & {
  eventConfig: MemoAction;
};

export function MemoOfferAction({
  eventConfig,
  isLoading,
  onSubmit,
}: MemoOfferActionProps) {
  const handleSubmit = async (data: Record<string, any>) => {
    try {
      if (onSubmit) {
        await onSubmit(data);
      }
    } catch (error) {
      console.error(error);

      throw new Error("Failed to send memo.");
    }
  };

  return (
    <DynamicSchemaForm
      config={eventConfig}
      isLoading={!!isLoading}
      onSubmit={handleSubmit}
    />
  );
}
