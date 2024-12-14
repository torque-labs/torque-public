declare global {
  interface Window {
    solanaWallet: {
      on: (event: string, callback: (event: bigint) => void) => void;
      off: (event: string, callback: (event: bigint) => void) => void;
    };
    solflare?: {
      on: (event: string, callback: (event: bigint) => void) => void;
      off: (event: string, callback: (event: bigint) => void) => void;
    };
    solana?: {
      on: (event: string, callback: (event: bigint) => void) => void;
      off: (event: string, callback: (event: bigint) => void) => void;
    };
    phantom?: {
      solana?: {
        on: (event: string, callback: (event: bigint) => void) => void;
        off: (event: string, callback: (event: bigint) => void) => void;
      };
    };
  }
}
export {};
