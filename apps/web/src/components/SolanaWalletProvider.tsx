"use client";

// This component wraps the application with Solana wallet providers
// It sets up the wallet adapter configuration and provides the necessary context for wallet interactions

import { useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css";

import { TorqueWrapper } from "./TorqueWrapper";

export function SolanaWalletProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Set to 'devnet' for development, 'mainnet-beta' for production
  const network = WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // Initialize the list of wallet adapters you want to support
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      // Add other wallet adapters here
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider autoConnect wallets={wallets}>
        <WalletModalProvider>
          <TorqueWrapper>{children}</TorqueWrapper>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
