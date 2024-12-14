import { ExternalLink } from "lucide-react";
import type { PropsWithChildren } from "react";

import { cn } from "#/lib/utils";

interface TransactionLinkProps extends PropsWithChildren {
  transaction: string;
  className?: string;
  network?: string;
}

export function TransactionLink({
  transaction,
  children,
  className,
  network,
}: TransactionLinkProps) {
  const link = `https://solscan.io/tx/${transaction}${
    network ? `?cluster=${network}` : ""
  }`;

  return (
    <a
      className={cn(
        "torqu-inline-flex torque-items-center torque-gap-1 torque-text-xs hover:torque-underline",
        className,
      )}
      href={link}
      rel="noopener"
      target="_blank"
    >
      {children ? (
        children
      ) : (
        <>
          <span>View txn</span>
          <ExternalLink size={12} />
        </>
      )}
    </a>
  );
}
