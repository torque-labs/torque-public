"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import type { PropsWithChildren } from "react";
import type { TorqueOptions } from "@torque-labs/torque-ui";
import { TorqueProvider } from "@torque-labs/torque-ui";

export function TorqueWrapper({ children }: PropsWithChildren) {
  const { wallet } = useWallet();

  const torqueOptions: TorqueOptions = {
    apiUrl: "https://api.torque.so",
    appUrl: "https://app.torque.so",
    functionsUrl: "https://0tvum434ha.execute-api.us-east-1.amazonaws.com/Prod",
    publisherHandle: "torqueprotocol",
  };

  return (
    <TorqueProvider options={torqueOptions} wallet={wallet}>
      {children}
    </TorqueProvider>
  );
}
