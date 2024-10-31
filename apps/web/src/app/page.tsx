"use client";

import { TorqueDrawer, useTorque } from "@torque-labs/torque-ui";
import dynamic from "next/dynamic";

// Dynamically import the WalletMultiButton to avoid SSR issues
const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

export default function Home(): JSX.Element {
  const { initialize, user } = useTorque();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center backdrop-blur-0 gap-6">
      <h1>Welcome to the Home Page</h1>

      <button
        className="p-4"
        onClick={async () => {
          await initialize();
        }}
        type="button"
      >
        Init
      </button>

      {user ? <p>User: {user.pubKey}</p> : null}

      <TorqueDrawer />

      <div>
        <WalletMultiButtonDynamic />
      </div>
    </main>
  );
}
