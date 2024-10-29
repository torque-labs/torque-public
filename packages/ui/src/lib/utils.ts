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
