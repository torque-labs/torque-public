import { formatAmount, cn } from "#/lib";
import type { TokenDetails } from "#/types";

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

  /**
   * The details of the token (if available)
   */
  details?: TokenDetails;

  /**
   * The name of the token (if available)
   */
  name?: string;
}

/**
 * Displays a token pill with the image, symbol, action and amount of the token
 */
export function TokenPill({
  name,
  details,
  action,
  amount,
  tokenAddress,
  className = "",
}: TokenPillProps) {
  const title = details ? details.symbol : name;
  const nameDisplay = title
    ? title
    : `${tokenAddress.slice(0, 4)}....${tokenAddress.slice(-4)}`;

  const formattedAmount = formatAmount(amount);

  return (
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
        {details?.logo ? (
          <img
            alt={`Logo for ${nameDisplay} token`}
            className="size-4 rounded-full"
            height={16}
            src={details.logo}
            width={16}
          />
        ) : null}
        <span className="font-medium">{nameDisplay}</span>
      </div>
    </div>
  );
}
