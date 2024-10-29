"use client";

import "@dialectlabs/blinks/index.css";
import { Miniblink, useAction } from "@dialectlabs/blinks";
import { useActionSolanaWalletAdapter } from "@dialectlabs/blinks/hooks/solana";
import { useConnection } from "@solana/wallet-adapter-react";

interface MiniBlinkProps {
  actionUrl: string;
}

export function MiniBlink({ actionUrl }: MiniBlinkProps) {
  const { connection } = useConnection();

  const { adapter } = useActionSolanaWalletAdapter(connection);

  const { action } = useAction({ url: `solana-action:${actionUrl}` });

  return action ? (
    <div className="miniblink flex flex-col gap-4">
      <h4 className="text-base">{action.title}</h4>
      {action.actions.map((ac, index) => (
        <Miniblink
          action={action}
          adapter={adapter}
          key={`miniblink-${actionUrl}-${ac.type}`}
          selector={(currentAction) => currentAction.actions[index]}
          stylePreset="x-dark"
          websiteText={new URL(actionUrl).hostname}
        />
      ))}
    </div>
  ) : null;
}
