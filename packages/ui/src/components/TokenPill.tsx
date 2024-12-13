import { useMemo } from "react";

import { Skeleton } from "#/components/ui/skeleton";
import { useTokenDetails } from "#/hooks/use-token-details";
import {
  formatAmount,
  cn,
  truncateAddress,
  formatTokenAmountWithDecimals,
} from "#/lib";

interface TokenPillProps {
  /**
   * The action to display (e.g. "LEND", "BUY")
   */
  action?: string;

  /**
   * The address of the token
   */
  tokenAddress: string;

  /**
   * The amount of the token
   */
  amount: number;

  /**
   * Whether the amount is already converted to the token's decimals. Defaults to true.
   */
  isAmountConverted?: boolean;

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
  isAmountConverted = true,
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
  const formattedAmount = useMemo(() => {
    if (!isAmountConverted && token) {
      return formatTokenAmountWithDecimals(
        tokenAddress,
        amount,
        token.decimals,
      );
    }

    return formatAmount(amount);
  }, [amount, isAmountConverted, token, tokenAddress]);

  return isLoading ? (
    <Skeleton className="torque-h-12 torque-w-full torque-max-w-80 torque-rounded-full" />
  ) : (
    <div
      className={cn(
        "torque-flex torque-items-center torque-justify-center torque-gap-4 torque-rounded-full torque-bg-gray-900 torque-p-2 torque-text-sm",
        className,
      )}
    >
      {action ? (
        <div className="torque-flex torque-items-center torque-gap-2 torque-rounded-full torque-bg-gray-700 torque-px-3 torque-py-1.5">
          <span className="torque-font-medium torque-text-highlight">
            {action}
          </span>
        </div>
      ) : null}
      <div className="torque-flex torque-items-center torque-gap-2 torque-rounded-full torque-bg-gray-700 torque-px-3 torque-py-1.5">
        <span className="torque-font-medium">{formattedAmount}</span>
      </div>
      <div className="torque-flex torque-items-center torque-gap-2 torque-rounded-full torque-bg-gray-700 torque-px-3 torque-py-1.5">
        {token?.logo ? (
          <img
            alt={`Logo for ${tokenDisplay} token`}
            className="torque-size-4 torque-rounded-full torque-object-cover torque-object-center"
            height={16}
            src={token.logo}
            width={16}
          />
        ) : null}
        <span className="torque-font-medium">{tokenDisplay}</span>
      </div>
    </div>
  );
}
