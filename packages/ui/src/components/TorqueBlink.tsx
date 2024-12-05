"use client";

import "@dialectlabs/blinks/index.css";
import { Blink, useAction } from "@dialectlabs/blinks";
import { useActionSolanaWalletAdapter } from "@dialectlabs/blinks/hooks/solana";
import { useConnection } from "@solana/wallet-adapter-react";

import { Skeleton } from "#/components/ui/skeleton";

interface TorqueBlinkProps {
  // The URL of the action to be converted into a blink component
  actionUrl: string;

  // Callback function to be called when the action is completed
  onComplete?: (signature?: string) => void;

  // Callback function to be called when the action is cancelled
  onCancel?: (reason?: string) => void;

  // Callback function to be called when the action is cancelled
  onError?: (reason?: string) => void;
}

/**
 * Display a Torque Blink component for a given action URL
 */
export function TorqueBlink({
  actionUrl,
  onComplete,
  onCancel,
  onError,
}: TorqueBlinkProps) {
  const { connection } = useConnection();

  const { adapter } = useActionSolanaWalletAdapter(connection);

  const { action, isLoading } = useAction({
    url: `solana-action:${actionUrl}`,
  });

  return action ? (
    <div className="torque-blink">
      {isLoading ? (
        <Skeleton className="h-44 w-full" />
      ) : (
        <Blink
          action={action}
          adapter={adapter}
          callbacks={{
            onActionCancel: (_, __, reason: string) => {
              if (onCancel) {
                onCancel(reason);
              }
            },
            onActionComplete: (_, __, signature?: string) => {
              if (onComplete) {
                onComplete(signature);
              }
            },
            onActionError: (_, __, reason: string) => {
              if (onError) {
                onError(reason);
              }
            },
          }}
          securityLevel="all"
          stylePreset="x-dark"
          websiteText={new URL(actionUrl).hostname}
        />
      )}
    </div>
  ) : null;
}
