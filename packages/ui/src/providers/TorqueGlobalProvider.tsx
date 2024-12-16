"use client";

import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  ConnectionProvider,
  useWallet,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import { TipLinkWalletAdapter } from "@tiplink/wallet-adapter";
import {
  TipLinkWalletAutoConnectV2,
  WalletModalProvider,
} from "@tiplink/wallet-adapter-react-ui";
import type { PropsWithChildren } from "react";
import { useMemo, useEffect, useState } from "react";

import type { TorqueOptions } from "#/providers/TorqueProvider";
import { TorqueProvider } from "#/providers/TorqueProvider";

export function TorqueGlobalProvider({
  children,
  options,
}: PropsWithChildren<{ options?: TorqueOptions }>) {
  // Set to 'devnet' for development, 'mainnet-beta' for production
  const network = WalletAdapterNetwork.Mainnet;

  // You can also provide a custom RPC endpoint
  const endpoint = useMemo(
    () => (options?.rpc ? options.rpc : clusterApiUrl(network)),
    [network, options?.rpc],
  );

  const tipLinkOptions = {
    title: process.env.NEXT_PUBLIC_TIPLINK_TITLE
      ? process.env.NEXT_PUBLIC_TIPLINK_TITLE
      : "Torque",
    clientId: process.env.NEXT_PUBLIC_TIPLINK_CLIENT
      ? process.env.NEXT_PUBLIC_TIPLINK_CLIENT
      : "807a0df7-4524-48d0-ac99-b52117339bd4",
    theme: "dark",
  } as const;

  const wallets = useMemo(
    () =>
      typeof window !== "undefined"
        ? [
            new PhantomWalletAdapter(),
            new SolflareWalletAdapter(),
            new TipLinkWalletAdapter(tipLinkOptions),
          ]
        : [],
    [],
  );

  const [searchParams, setSearchParams] = useState<URLSearchParams | object>(
    {},
  );

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URL(window.location.href).searchParams;

      setSearchParams(params);
      setIsReady(true);
    }
  }, []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider autoConnect wallets={wallets}>
        <TipLinkWalletAutoConnectV2 isReady={isReady} query={searchParams}>
          <WalletModalProvider>
            <TorqueWrapper options={options}>{children}</TorqueWrapper>
          </WalletModalProvider>
        </TipLinkWalletAutoConnectV2>
      </WalletProvider>
    </ConnectionProvider>
  );
}

function TorqueWrapper({
  children,
  options,
}: PropsWithChildren<{ options?: TorqueOptions }>) {
  const { wallet } = useWallet();

  const torqueOptions: TorqueOptions = {
    apiUrl: options?.apiUrl ?? "https://api.torque.so",
    appUrl: options?.appUrl ?? "https://app.torque.so",
    functionsUrl:
      options?.functionsUrl ??
      "https://0tvum434ha.execute-api.us-east-1.amazonaws.com/Prod",
    rpc: options?.rpc,
    publisherHandle: options?.publisherHandle ?? "torqueprotocol",
  };

  return (
    <TorqueProvider options={torqueOptions} wallet={wallet}>
      {children}
    </TorqueProvider>
  );
}
