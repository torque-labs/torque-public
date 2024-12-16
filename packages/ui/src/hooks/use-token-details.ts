import { useEffect, useState } from "react";

import { useTorque } from "#/hooks";
import { getSingleTokenDetails, getTokenDetails } from "#/lib";
import type { TokenDetails } from "#/types";

/**
 * Utility hook to fetch token details using the Torque SDK
 *
 * @param tokenAddresses - The address or addresses of the token to fetch details for
 *
 * @returns An object containing the token details, loading state, and error state
 */
export function useTokenDetails(tokenAddresses?: string) {
  const { rpcEndpoint } = useTorque();

  const [tokenDetails, setTokenDetails] = useState<TokenDetails>();
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
        const token = await getSingleTokenDetails(tokenAddresses, rpcEndpoint);

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
    token: tokenDetails,
    isLoading,
    error,
  };
}

/**
 * Utility hook to fetch the details of multiple tokens
 *
 * @param tokenAddresses - The addresses of the tokens to fetch details for
 *
 * @returns An object containing the token details, loading state, and error state
 */
export function useMultiTokenDetails(tokenAddresses?: string[]) {
  const { rpcEndpoint } = useTorque();

  const [tokenDetails, setTokenDetails] = useState<TokenDetails[]>();
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
    tokens: tokenDetails,
    isLoading,
    error,
  };
}
