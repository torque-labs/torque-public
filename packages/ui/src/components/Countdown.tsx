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
   * Additional class names to apply to the component
   */
  className?: string;
}

/**
 * Displays a countdown timer
 */
export function Countdown({ endTime, className }: CountdownProps) {
  const [timeDifference, setTimeDifference] = useState(
    endTime.getTime() - Date.now(),
  );

  useEffect(() => {
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

  return (
    <div className={cn("flex items-center justify-center text-xl", className)}>
      <div className="grid auto-cols-max grid-flow-col gap-5 text-center">
        <div className="flex flex-col">
          <span className="countdown font-mono text-inherit">
            <span style={{ "--value": timeLeft.days } as CSSProperties} />
          </span>
          days
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-inherit">
            <span style={{ "--value": timeLeft.hours } as CSSProperties} />
          </span>
          hours
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-inherit">
            <span style={{ "--value": timeLeft.minutes } as CSSProperties} />
          </span>
          min
        </div>
        <div className="flex flex-col">
          <span className="countdown font-mono text-inherit">
            <span style={{ "--value": timeLeft.seconds } as CSSProperties} />
          </span>
          sec
        </div>
      </div>
    </div>
  );
}
