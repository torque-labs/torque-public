"use client";

import type { CSSProperties } from "react";
import { useEffect, useMemo, useState } from "react";

import { cn } from "#/lib";

interface CountdownProps {
  /**
   * The end time for the countdown
   */
  endTime: Date;

  /**
   * Additional class names to apply to the container
   */
  className?: string;

  /**
   * Additional class names to apply to the countdown element
   */
  countdownClassName?: string;

  /**
   * The font size class of the numbers element
   */
  size?: string;
}

/**
 * Displays a countdown timer
 */
export function Countdown({
  endTime,
  className,
  countdownClassName,
  size,
}: CountdownProps) {
  const [isClient, setIsClient] = useState(false);
  const [timeDifference, setTimeDifference] = useState(
    endTime.getTime() - Date.now(),
  );

  useEffect(() => {
    // Set isClient state to true once the component is mounted
    setIsClient(true);

    // Create the interval
    const interval = setInterval(() => {
      if (timeDifference <= 0) {
        clearInterval(interval);
      } else {
        setTimeDifference((prevTime) => prevTime - 1000);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [endTime, timeDifference]);

  /**
   * Format the time left based on the time difference
   */
  const timeLeft = useMemo(
    () =>
      timeDifference > 0
        ? {
            days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((timeDifference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((timeDifference / 1000 / 60) % 60),
            seconds: Math.floor((timeDifference / 1000) % 60),
          }
        : {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
          },
    [timeDifference],
  );

  if (!isClient) {
    return null;
  }

  return (
    <div
      className={cn(
        "torque-flex torque-items-center torque-justify-center torque-text-xl",
        className,
      )}
    >
      <div
        className={cn(
          "torque-grid torque-auto-cols-max torque-grid-flow-col torque-gap-5 torque-text-center",
          countdownClassName,
        )}
      >
        <div className="torque-flex torque-flex-col">
          <span
            className={cn(
              "torque-countdown torque-font-mono torque-text-inherit",
              size,
            )}
          >
            <span style={{ "--value": timeLeft.days } as CSSProperties} />
          </span>
          days
        </div>
        <div className="torque-flex torque-flex-col">
          <span
            className={cn(
              "torque-countdown torque-font-mono torque-text-inherit",
              size,
            )}
          >
            <span style={{ "--value": timeLeft.hours } as CSSProperties} />
          </span>
          hours
        </div>
        <div className="torque-flex torque-flex-col">
          <span
            className={cn(
              "torque-countdown torque-font-mono torque-text-inherit",
              size,
            )}
          >
            <span style={{ "--value": timeLeft.minutes } as CSSProperties} />
          </span>
          min
        </div>
        <div className="torque-flex torque-flex-col">
          <span
            className={cn(
              "torque-countdown torque-font-mono torque-text-inherit",
              size,
            )}
          >
            <span style={{ "--value": timeLeft.seconds } as CSSProperties} />
          </span>
          sec
        </div>
      </div>
    </div>
  );
}
