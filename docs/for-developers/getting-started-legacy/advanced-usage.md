---
hidden: true
---

# Advanced Usage

## Use your own SIWS (Sign-in-with-Solana) implementation

By default, the `TorqueProvider` will automatically initialize the user with Torque using SIWS when a wallet is detected. This is not ideal for applications that already have SIWS set up.

1. #### Setting autoInit to false in the TorqueProvider

In cases where you want to manually initialize the user with Torque, or if you already have Sign-in-with-Solana (SIWS) set up for your application, you can set the `autoInit` prop to `false` and initialize the user manually.

```tsx
"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import type { PropsWithChildren } from "react";
import { TorqueProvider } from "@torque-labs/torque-ui";

export function TorqueWrapper({ children }: PropsWithChildren) {
  const { wallet } = useWallet();

  return (
    <TorqueProvider wallet={wallet} autoInit={false}>
      {children}
    </TorqueProvider>
  );
}
```

2. #### Initialize the User

If you want to initialize the user manually, you can use the `initialize` function provided by the `useTorque` hook. The Torque SDK provides a public convenience function to construct the login body required to initialize the user with Torque.

```tsx
import { useTorque } from "@torque-labs/torque-ui";
import { TorqueSDK } from "@torque-labs/torque-ts-sdk";
import { useWallet } from "@solana/wallet-adapter-react";

export function MyApp() {
  const { initialize } = useTorque();
  const { publicKey, signIn } = useWallet();

  return (
    <div>
      <h1>My Solana App</h1>

      <button
        onClick={async () => {
          const payload = "<sign in payload object>";

          // Prompt the user to sign in with their wallet
          const signInOutput = await signIn(payload);

          // Construct the login body using the TorqueSDK `constructLoginBody` function
          loginBody = TorqueSDK.constructLoginBody({
            authType: "siws",
            pubKey: publicKey.toString(),
            payload: {
              input: payload,
              output: signInOutput,
            },
          });

          // Initialize the user with Torque using the login body
          await initialize(loginBody);
        }}
      >
        Initialize Torque
      </button>
    </div>
  );
}
```

## Initialize after a callback or user interaction

You can also use the `autoInit` prop to disable automatic connection but still use Torque's default initialization flow. This can be useful if you want to initialize the user after a callback or the user has performed a specific action on your site. For example, you might want to initialize the user after they have completed a form or clicked a button. In this case, you can simply call the `initialize` function without a login body.

```tsx
import { useTorque } from "@torque-labs/torque-ui";

export function MyApp() {
  const { initialize } = useTorque();

  return (
    <div>
      <h1>My Solana App</h1>

      <button
        onClick={async () => {
          // Trigger default initialization flow
          await initialize();
        }}
      >
        Initialize Torque
      </button>
    </div>
  );
}
```
