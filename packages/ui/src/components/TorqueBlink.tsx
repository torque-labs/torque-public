"use client";

import "@dialectlabs/blinks/index.css";
import { Blink, useAction } from "@dialectlabs/blinks";
import { useActionSolanaWalletAdapter } from "@dialectlabs/blinks/hooks/solana";
import { useConnection } from "@solana/wallet-adapter-react";

import { Skeleton } from "#/components/ui/skeleton";

interface TorqueBlinkProps {
  // The URL of the action to be converted into a blink component
  actionUrl: string;
}

/**
 * Display a Torque Blink component for a given action URL
 */
export function TorqueBlink({ actionUrl }: TorqueBlinkProps) {
  const { connection } = useConnection();

  const { adapter } = useActionSolanaWalletAdapter(connection);

  const { action, isLoading } = useAction({
    url: `solana-action:${actionUrl}`,
  });

  return action ? (
    <div className="torque-blink">
      {isLoading ? (
        <Skeleton className="torque-h-44 torque-w-full" />
      ) : (
        <Blink
          action={action}
          adapter={adapter}
          securityLevel="all"
          stylePreset="x-dark"
          websiteText={new URL(actionUrl).hostname}
        />
      )}
    </div>
  ) : null;
}
