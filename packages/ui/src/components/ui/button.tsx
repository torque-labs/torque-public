import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "#/lib/utils";

const buttonVariants = cva(
  "torque-inline-flex torque-items-center torque-justify-center torque-gap-2 torque-whitespace-nowrap torque-rounded-md torque-text-sm torque-font-medium torque-ring-offset-background torque-transition-colors focus-visible:torque-outline-none focus-visible:torque-ring-2 focus-visible:torque-ring-ring focus-visible:torque-ring-offset-2 disabled:torque-pointer-events-none disabled:torque-opacity-50 [&_svg]:torque-pointer-events-none [&_svg]:torque-size-4 [&_svg]:torque-shrink-0",
  {
    variants: {
      variant: {
        default:
          "torque-bg-primary torque-text-primary-foreground hover:torque-bg-primary/90",
        destructive:
          "torque-bg-destructive torque-text-destructive-foreground hover:torque-bg-destructive/90",
        outline:
          "torque-border torque-border-input torque-bg-background hover:torque-bg-accent hover:torque-text-accent-foreground",
        secondary:
          "torque-bg-secondary torque-text-secondary-foreground hover:torque-bg-secondary/80",
        ghost: "hover:torque-bg-accent hover:torque-text-accent-foreground",
        link: "torque-text-primary torque-underline-offset-4 hover:torque-underline",
        blue: "torque-text-white torque-bg-blue-700 hover:torque-bg-blue-600",
        torque:
          "torque-bg-secondary torque-text-highlight hover:torque-bg-secondary/80",
      },
      size: {
        default: "torque-h-10 torque-px-4 torque-py-2",
        sm: "torque-h-9 torque-rounded-md torque-px-3",
        lg: "torque-h-11 torque-rounded-md torque-px-8",
        icon: "torque-h-10 torque-w-10",
      },
      display: {
        default: "torque-w-auto",
        block: "torque-block torque-w-full",
        full: "torque-w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
