/* eslint-disable @typescript-eslint/no-explicit-any -- Allow any for wallets in window object*/

declare global {
  interface Window {
    solflare?: any;
    solana?: any;
  }
}
export {};
