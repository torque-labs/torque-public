import { cn } from "#/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "torque-animate-pulse torque-rounded-md torque-bg-muted",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
