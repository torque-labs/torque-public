"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import type { PropsWithChildren } from "react";
import { TorqueProvider } from "@torque-labs/torque-ui";

export function TorqueWrapper({ children }: PropsWithChildren) {
  const { wallet } = useWallet();

  return (
    <TorqueProvider
      options={{ apiUrl: "https://api.coolify.torque.so" }}
      wallet={wallet}
    >
      {children}
    </TorqueProvider>
  );
}