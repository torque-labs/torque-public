import { useMemo } from "react";

import { Skeleton } from "#/components/ui/skeleton";
import { useTokenDetails } from "#/hooks/use-token-details";
import { formatAmount, cn, truncateAddress } from "#/lib";

interface TokenPillProps {
  /**
   * The action to display (e.g. "LEND", "BUY")
   */
  action: string;

  /**
   * The address of the token
   */
  tokenAddress: string;

  /**
   * The amount of the token
   */
  amount: number;

  /**
   * Additional class names to apply to the component
   */
  className?: string;
}

/**
 * Displays a token pill with the image, symbol, action and amount of the token
 */
export function TokenPill({
  action,
  amount,
  tokenAddress,
  className = "",
}: TokenPillProps) {
  const { token, isLoading } = useTokenDetails(tokenAddress);

  // Set the token display name
  const tokenDisplay = useMemo(() => {
    if (token) {
      return token.symbol;
    }
    return truncateAddress(tokenAddress);
  }, [token, tokenAddress]);

  // Format the amount of tokens
  const formattedAmount = formatAmount(amount);

  return isLoading ? (
    <Skeleton className="h-12 w-full max-w-80 rounded-full" />
  ) : (
    <div
      className={cn(
        "flex items-center justify-center gap-4 rounded-full bg-gray-900 p-2 text-sm",
        className,
      )}
    >
      {action ? (
        <div className="flex items-center gap-2 rounded-full bg-gray-700 px-3 py-1.5">
          <span className="font-medium text-highlight">{action}</span>
        </div>
      ) : null}
      <div className="flex items-center gap-2 rounded-full bg-gray-700 px-3 py-1.5">
        <span className="font-medium">{formattedAmount}</span>
      </div>
      <div className="flex items-center gap-2 rounded-full bg-gray-700 px-3 py-1.5">
        {token?.logo ? (
          <img
            alt={`Logo for ${tokenDisplay} token`}
            className="size-4 rounded-full object-cover object-center"
            height={16}
            src={token.logo}
            width={16}
          />
        ) : null}
        <span className="font-medium">{tokenDisplay}</span>
      </div>
    </div>
  );
}
