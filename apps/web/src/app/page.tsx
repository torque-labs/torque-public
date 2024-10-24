"use client";

import { TorqueDrawer } from "@torque-labs/torque-ui";
import dynamic from "next/dynamic";

// Dynamically import the WalletMultiButton to avoid SSR issues
const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

export default function Home(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1>Welcome to the Home Page</h1>

      <TorqueDrawer />

      <div>
        <WalletMultiButtonDynamic />
      </div>
    </main>
  );
}
