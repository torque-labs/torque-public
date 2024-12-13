import type { DAS } from "helius-sdk";

import type { TokenDetails } from "#/types";

export const CLICKY_ADDRESS = "CAvc2Mr9WcH6HiYQeLYcXG3H9G2rg1sV2EEksMd6gyGS";

/**
 * Get the token details for a given token address from an RPC endpoint
 *
 * @param tokenAddress - The address of the token to fetch details for
 * @param rpcUrl - The RPC endpoint to use for the request
 *
 * @returns The details of the token
 */
export async function getTokenDetails<T extends string | string[]>(
  tokenAddresses: T,
  rpcUrl: string,
): Promise<T extends string ? TokenDetails : TokenDetails[]>;

export async function getTokenDetails(
  tokenAddresses: string | string[],
  rpcUrl: string,
) {
  try {
    const assetIds = Array.isArray(tokenAddresses)
      ? tokenAddresses
      : [tokenAddresses];

    const fetchRequest = await fetch(rpcUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: "string",
        method: "getAssetBatch",
        params: {
          ids: assetIds,
        },
      }),
    });

    const fetchResult = (await fetchRequest.json()) as unknown as {
      result: DAS.GetAssetResponse[];
    };

    const results = fetchResult.result.map((asset) => {
      return {
        name: asset.content?.metadata.name,
        logo: asset.content?.links?.image,
        decimals: asset.token_info?.decimals ?? 0,
        symbol: asset.content?.metadata.symbol,
      };
    });

    if (Array.isArray(tokenAddresses)) {
      return results;
    }

    return results[0];
  } catch (e) {
    console.error(e);

    throw new Error("Unable to fetch token details.");
  }
}
