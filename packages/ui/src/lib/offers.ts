import type { SafeToken } from "@torque-labs/torque-ts-sdk";

import type { TokenDetails } from "#/types";

/**
 * Extracts and formats the tokend details from the token safe list
 *
 * @param token - The token address to extract details for
 * @param tokens - The list of tokens to search for the token address
 *
 * @returns The token details if found, otherwise undefined
 */
export function getTokenDetails(
  token: string,
  tokens: SafeToken[],
): TokenDetails | undefined {
  if (token === "11111111111111111111111111111111") {
    const specialToken = tokens.find(
      (t) => t.address === "So11111111111111111111111111111111111111112",
    );
    if (specialToken) {
      return {
        name: "SOL",
        logo: specialToken.logoURI,
        decimals: 9,
        symbol: "SOL",
      };
    }
    return {
      name: "SOL",
      logo: "",
      decimals: 9,
      symbol: "SOL",
    };
  } else if (token === "CAvc2Mr9WcH6HiYQeLYcXG3H9G2rg1sV2EEksMd6gyGS") {
    return {
      name: "Clicky",
      logo: "https://torque-assets.s3.us-east-1.amazonaws.com/clicky.png",
      decimals: 0,
      symbol: "CLICKY",
    };
  }

  const tokenData = tokens.find((t: SafeToken) => t.address === token);

  if (tokenData) {
    return {
      name: tokenData.name,
      logo: tokenData.logoURI,
      decimals: tokenData.decimals,
      symbol: tokenData.symbol,
    };
  }
}
