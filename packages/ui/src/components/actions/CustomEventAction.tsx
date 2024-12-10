"use client";

import type { CustomEventConfig } from "@torque-labs/torque-utils";
import { SquareArrowOutUpRight } from "lucide-react";

import { Button } from "#/components/ui/button";

interface CustomEventActionProps {
  eventConfig: CustomEventConfig;
}

export function CustomEventAction({ eventConfig }: CustomEventActionProps) {
  const hostname = eventConfig.targetUrl
    ? new URL(eventConfig.targetUrl).hostname
    : "";

  const formEnabled = eventConfig.formEnabled;
  const description = eventConfig.description;

  return (
    <div className="torque-flex torque-flex-col torque-gap-3">
      {description ? (
        <p className="torque-mb-4 torque-text-base">{description}</p>
      ) : null}
      {formEnabled ? (
        <>{/* TODO: Output form here? */}</>
      ) : (
        <div className="torque-flex torque-w-full torque-flex-col torque-gap-4">
          {eventConfig.targetUrl ? (
            <>
              <p className="torque-flex torque-flex-wrap torque-items-center torque-gap-1">
                You can complete this directly on
                <a
                  className="torque-text-highlight"
                  href={eventConfig.targetUrl}
                  rel="noopener"
                  target="_blank"
                >
                  {hostname}
                </a>
              </p>

              <Button asChild>
                <a
                  className="torque-flex torque-items-center torque-gap-2"
                  href={eventConfig.targetUrl}
                  rel="noopener"
                  target="_blank"
                >
                  Go to {hostname}
                  <SquareArrowOutUpRight size={14} />
                </a>
              </Button>
            </>
          ) : (
            eventConfig.fields.map((field) => {
              return (
                <div key={`custom-event-field-${field.name}`}>
                  <div>
                    <span className="torque-mr-1 torque-font-mono torque-text-highlight">
                      {field.name}
                    </span>{" "}
                    <span className="torque-text-xs">({field.type})</span>
                  </div>
                  <pre>{JSON.stringify(field.validation, undefined, 2)}</pre>
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}
