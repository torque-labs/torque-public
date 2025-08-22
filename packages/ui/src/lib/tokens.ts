import type { DAS } from "helius-sdk";

import type { TokenDetails } from "#/types";

export const CLICKY_ADDRESS = "CAvc2Mr9WcH6HiYQeLYcXG3H9G2rg1sV2EEksMd6gyGS";

/**
 * Get the token details for a given token address from an RPC endpoint
 *
 * @param tokenAddresses - The address of the token to fetch details for
 * @param rpcUrl - The RPC endpoint to use for the request
 *
 * @returns The details of the token
 */
export async function getTokenDetails(
  tokenAddresses: string[],
  rpcUrl: string,
): Promise<TokenDetails[]> {
  try {
    const fetchRequest = await fetch(rpcUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: "string",
        method: "getAssetBatch",
        params: {
          ids: tokenAddresses,
        },
      }),
    });

    const fetchResult = (await fetchRequest.json()) as unknown as {
      result: DAS.GetAssetResponse[];
    };

    const results = fetchResult.result.map((asset) => {
      return {
        name: asset.content?.metadata.name ?? "",
        logo: asset.content?.links?.image ?? "",
        decimals: asset.token_info?.decimals ?? 0,
        symbol: asset.content?.metadata.symbol ?? "",
      };
    });

    return results;
  } catch (e) {
    console.error(e);

    throw new Error("Unable to fetch token details.");
  }
}

/**
 * Fetch the token details for a single token address
 *
 * @param tokenAddress - The token address to fetch details for
 * @param rpcUrl - The RPC endpoint to use for the request
 *
 * @returns
 */
export async function getSingleTokenDetails(
  tokenAddress: string,
  rpcUrl: string,
): Promise<TokenDetails> {
  const tokens = await getTokenDetails([tokenAddress], rpcUrl);

  return tokens[0];
}
