import { TorqueAdminClient } from "@torque-labs/torque-ts-sdk";
import { useEffect, useState } from "react";

import type { TokenDetails } from "#/types";

/**
 * Utility hook to fetch token details using the Torque SDK
 *
 * @param tokenAddress - The address of the token to fetch details for
 *
 * @returns An object containing the token details, loading state, and error state
 */
export function useTokenDetails(tokenAddress: string) {
  const [tokenDetails, setTokenDetails] = useState<TokenDetails>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>();

  useEffect(() => {
    /**
     * Fetch token details
     */
    async function fetchTokenDetails() {
      setIsLoading(true);

      try {
        // Fetch token list from Torque SDK
        const tokenList = await TorqueAdminClient.getSafeTokenList();

        // Find token in token list
        const token = tokenList.find((t) => t.address === tokenAddress);

        // Set token details if found
        if (token) {
          setTokenDetails({
            name: token.name,
            logo: token.logoURI,
            decimals: token.decimals,
            symbol: token.symbol,
          });
        } else {
          setTokenDetails(undefined);
          setError("Token not found.");
        }
      } catch (e) {
        console.error(e);

        setTokenDetails(undefined);
        setError("Failed to fetch token details.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchTokenDetails().catch((e) => {
      console.error(e);
    });
  }, [tokenAddress]);

  return {
    token: tokenDetails,
    isLoading,
    error,
  };
}
