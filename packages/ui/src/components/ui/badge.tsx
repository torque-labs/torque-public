import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "#/lib";

const badgeVariants = cva(
  "inline-flex border-0 items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: " bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        destructive: "bg-destructive text-destructive-foreground",
        outline: "text-foreground",
        green: "bg-green-800 text-center text-white",
        yellow: "bg-yellow-500 text-center text-black",
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
      className={cn(badgeVariants({ variant }), "uppercase", className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
