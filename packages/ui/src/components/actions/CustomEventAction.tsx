"use client";

import { CustomEventConfig } from "@torque-labs/torque-utils";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { DynamicSchemaForm } from "@/components/forms/DynamicSchemaForm";
import { useTorque } from "@/components/providers/torque";
import { Button } from "@/components/ui/button";
import { submitCustomEvent } from "@/lib/actions/custom-events";
import { OfferActionProps } from "@/lib/hooks/use-action";

type CustomEventActionProps = OfferActionProps & {
  eventConfig: CustomEventConfig;
};

export function CustomEventAction({
  campaignId,
  eventConfig,
  isLoading,
  onSubmit,
}: CustomEventActionProps) {
  const { publicKey } = useTorque();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const hostname = eventConfig.targetUrl
    ? new URL(eventConfig.targetUrl).hostname
    : "";

  return eventConfig.formEnabled ? (
    <div>
      <h3 className="mb-4 text-base">Complete the form</h3>
      <DynamicSchemaForm
        config={eventConfig}
        isLoading={isSubmitting || !!isLoading}
        onSubmit={async (data) => {
          setIsSubmitting(true);
          if (publicKey) {
            try {
              await submitCustomEvent(
                publicKey,
                campaignId,
                eventConfig.eventName,
                data,
              );

              if (onSubmit) {
                onSubmit();
              }
            } catch (error) {
              console.error(error);

              throw new Error("Failed to submit custom event.");
            } finally {
              setIsSubmitting(false);
            }
          } else {
            setIsSubmitting(false);

            throw new Error("No wallet found.");
          }
        }}
      />
    </div>
  ) : (
    <div className="flex flex-col gap-3">
      <h3 className="mb-6 text-base font-semibold">Details</h3>

      {eventConfig.targetUrl ? (
        <div className="flex w-full flex-col gap-4">
          <p className="flex flex-wrap items-center gap-1">
            You can complete this requirement directly on
            <Link
              href={eventConfig.targetUrl}
              target="_blank"
              className="text-highlight"
            >
              {hostname}
            </Link>
          </p>

          <Button asChild>
            <Link
              href={eventConfig.targetUrl}
              className="flex items-center gap-2"
              target="_blank"
            >
              Go to {hostname}
              <SquareArrowOutUpRight size={14} />
            </Link>
          </Button>
        </div>
      ) : (
        eventConfig.fields.map((field) => {
          return (
            <div key={`custom-event-field-${field.name}`}>
              <div>
                <span className="mr-1 font-mono text-highlight">
                  {field.name}
                </span>{" "}
                <span className="text-xs">({field.type})</span>
              </div>
              <pre>{JSON.stringify(field.validation, undefined, 2)}</pre>
            </div>
          );
        })
      )}
    </div>
  );
}
