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
export async function getTokenDetails(
  tokenAddress: string,
  rpcUrl: string,
): Promise<TokenDetails> {
  if (tokenAddress === CLICKY_ADDRESS) {
    return {
      name: "Clicky",
      logo: "https://torque-assets.s3.us-east-1.amazonaws.com/clicky.png",
      decimals: 0,
      symbol: "CLICKY",
    };
  }

  try {
    const fetchRequest = await fetch(rpcUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: "string",
        method: "getAsset",
        params: {
          id: tokenAddress,
        },
      }),
    });

    const fetchResult = (await fetchRequest.json()) as unknown as {
      result:
        | {
            content: {
              metadata: {
                name: string;
                symbol: string;
                token_standard?: string;
              };
              links: {
                image: string;
              };
            };
            token_info: {
              decimals?: number;
              price_info: {
                currency?: string;
                price_per_token: number;
              };
            };
            compression: {
              compressed: boolean;
            };
          }
        | undefined;
    };

    if (fetchResult.result) {
      return {
        name: fetchResult.result.content.metadata.name,
        symbol: fetchResult.result.content.metadata.symbol,
        logo: fetchResult.result.content.links.image,
        decimals: fetchResult.result.token_info.decimals ?? 0,
      };
    }
  } catch (e) {
    console.error(e);

    throw new Error("Unable to fetch token details.");
  }

  throw new Error("Token not found.");
}
