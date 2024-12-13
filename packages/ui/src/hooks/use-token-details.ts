import { useEffect, useState } from "react";

import { useTorque } from "#/hooks";
import { getTokenDetails } from "#/lib";
import type { TokenDetails } from "#/types";

/**
 * Utility hook to fetch token details using the Torque SDK
 *
 * @param tokenAddresses - The address or addresses of the token to fetch details for
 *
 * @returns An object containing the token details, loading state, and error state
 */
export function useTokenDetails<T extends string | string[]>(
  tokenAddresses: T,
): T extends string
  ? { token: TokenDetails | undefined; isLoading: boolean; error: string }
  : { tokens: TokenDetails[] | undefined; isLoading: boolean; error: string };

export function useTokenDetails(tokenAddresses?: string | string[]) {
  const { rpcEndpoint } = useTorque();

  const [tokenDetails, setTokenDetails] = useState<
    TokenDetails | TokenDetails[]
  >();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    // Reset state on update
    setTokenDetails(undefined);
    setIsLoading(false);

    // If no token address, return
    if (!tokenAddresses) {
      return;
    }

    /**
     * Fetch token details
     */
    const fetchTokenDetails = async () => {
      setIsLoading(true);

      try {
        // Fetch token list from Torque SDK
        const token = await getTokenDetails(tokenAddresses, rpcEndpoint);

        setTokenDetails(token);
      } catch (e) {
        setTokenDetails(undefined);
        setError("Failed to fetch token details.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTokenDetails().catch((e) => {
      console.error(e);
    });
  }, [rpcEndpoint, tokenAddresses]);

  return {
    ...(Array.isArray(tokenAddresses)
      ? { token: tokenDetails }
      : { tokens: tokenDetails }),
    isLoading,
    error,
  };
}
