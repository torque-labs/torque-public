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
    <div className="flex flex-col gap-3">
      {description ? <p className="mb-4 text-base">{description}</p> : null}
      {formEnabled ? (
        <>{/* TODO: Output form here? */}</>
      ) : (
        <div className="flex w-full flex-col gap-4">
          {eventConfig.targetUrl ? (
            <>
              <p className="flex flex-wrap items-center gap-1">
                You can complete this directly on
                <a
                  className="text-highlight"
                  href={eventConfig.targetUrl}
                  rel="noopener"
                  target="_blank"
                >
                  {hostname}
                </a>
              </p>

              <Button asChild>
                <a
                  className="flex items-center gap-2"
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
      )}
    </div>
  );
}
