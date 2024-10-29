import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import type { ButtonHTMLAttributes } from "react";
import React, { useRef } from "react";

import { cn } from "#/lib";

export function MovingBorder({
  children,
  duration = 3000,
  rx,
  ry,
  ...otherProps
}: React.SVGProps<SVGSVGElement> & {
  children: React.ReactNode;
  duration?: number;
}) {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x,
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y,
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        className="absolute size-full"
        height="100%"
        preserveAspectRatio="none"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
        {...otherProps}
      >
        <rect
          fill="none"
          height="100%"
          ref={pathRef}
          rx={rx}
          ry={ry}
          width="100%"
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
}

export function MovingBorderButton({
  borderRadius = "1.75rem",
  children,
  containerClassName,
  borderClassName,
  duration = 2000,
  className,
  ...otherProps
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  borderRadius?: string;
  children: React.ReactNode;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
}) {
  return (
    <button
      className={cn(
        "relative h-10 w-full overflow-hidden bg-transparent p-px text-xl",
        containerClassName,
      )}
      style={{
        borderRadius,
      }}
      type="button"
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "z-10 size-24 border-2 border-black bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)] opacity-80", // Updated border size and color
              borderClassName,
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative flex size-full items-center justify-center border border-slate-800 bg-slate-900/[0.8] text-sm text-highlight antialiased backdrop-blur-xl",
          className,
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </button>
  );
}
