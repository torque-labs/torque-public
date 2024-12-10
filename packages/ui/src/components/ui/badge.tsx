import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "#/lib/utils";

const badgeVariants = cva(
  "torque-inline-flex torque-items-center torque-rounded-full torque-border torque-px-2.5 torque-py-0.5 torque-text-xs torque-font-semibold torque-transition-colors focus:torque-outline-none focus:torque-ring-2 focus:torque-ring-ring focus:torque-ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "torque-border-transparent torque-bg-primary torque-text-primary-foreground hover:torque-bg-primary/80",
        secondary:
          "torque-border-transparent torque-bg-secondary torque-text-secondary-foreground hover:torque-bg-secondary/80",
        destructive:
          "torque-border-transparent torque-bg-destructive torque-text-destructive-foreground hover:torque-bg-destructive/80",
        outline: "torque-text-foreground",
        green: "torque-bg-green-800 torque-text-center torque-text-white",
        yellow: "torque-bg-yellow-500 torque-text-center torque-text-black",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant }), "torque-uppercase", className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
