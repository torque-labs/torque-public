import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function that combines Tailwind CSS classes with clsx and tailwind-merge
 *
 * @param inputs - Array of class values to be merged
 *
 * @returns Merged and deduped class string
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Truncates an address
 *
 * @param address - The address to truncate
 * @param startLength - The number of characters to keep at the start of the address
 * @param endLength - The number of characters to keep at the end of the address
 *
 * @returns The truncated address
 */
export function truncateAddress(
  address: string,
  startLength = 4,
  endLength = 4,
): string {
  if (!address) return "";
  return `${address.slice(0, startLength)}....${address.slice(-endLength)}`;
}

/**
 * Format a number for display
 *
 * @param amount - The number to format
 * @param decimals - The number of decimal places to display
 * @param notation - The notation to use for the number formatter
 *
 * @returns The formatted amount
 */
export function formatAmount(
  amount: number | string,
  decimals = 2,
  notation: Intl.NumberFormatOptions["notation"] = "compact",
) {
  const amountNumber = typeof amount === "string" ? Number(amount) : amount;

  const formatter = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: decimals,
    notation,
  });

  return formatter.format(amountNumber);
}

/**
 * Format a token amount with decimals
 *
 * @param tokenAddress - The address of the token
 * @param amount - The amount to format
 * @param decimals - The number of decimal places for the token
 *
 * @returns The formatted amount after accounting for the number of decimal places
 */
export function formatTokenAmountWithDecimals(
  tokenAddress: string,
  amount: number,
  decimals: number,
) {
  const totalAmount =
    tokenAddress === PublicKey.default.toString()
      ? amount / LAMPORTS_PER_SOL
      : amount / Math.pow(10, decimals);

  return formatAmount(totalAmount);
}
