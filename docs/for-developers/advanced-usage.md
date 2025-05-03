---
description: Additional guides and info for more advanced use cases
---

# Advanced Usage

## Manual authentication

By default, the TorqueProvider will automatically attempt to authenticate and initalize a user with Torque when a wallet is detected. This is not ideal for applications that already have their own Sign-in-with-Solana (SIWS) or other signature validation system set up.



1. **Setting `autoConnect` to false in the TorqueProvider**

In cases where you want to manually authenticate the user with the Torque API, or if you already have Sign-in-with-Solana (SIWS) set up for your application, you can set the autoConnect prop to false and initialize the user manually.

```tsx
"use client";

import { useWallet } from "@solana/wallet-adapter-react";

import { TorqueProvider } from "@torque-labs/react";

/**
 * Pass the wallet to the TorqueProvider.
 */
const TorqueContext = ({ children }: PropsWithChildren) => {
  const { wallet } = useWallet();

  const options = {
    apiUrl: "https://server.torque.so",
    rpcUrl: "<MAINNET RPC URL>,
    authDomain: "<YOUR APP URL>",
  }

  return (
    <TorqueProvider
      wallet={wallet?.adapter}
      autoConnect={false} // Disables auto-initialize
      options={options}
      callbacks={{
        onAuthenticated: (user) => {
          // code here
        },
        onLogout: () => {
          // code hhere
        }
      }}
    >
      {children}
    </TorqueProvider>
  );
};
```



2. **Construct the login body**

If you want to authenticate the user manually, you can use the authenticate function provided by the useTorque hook. The Torque SDK provides a public convenience function to construct the login body required to initialize the user with Torque.

```tsx
import { useWallet } from "@solana/wallet-adapter-react";

import { useTorque } from "@torque-labs/react";
import { TorqueUserModule } from "@torque-labs/sdk";

export function MyApp() {
  const { authenticate } = useTorque();
  const { publicKey, signMessage } = useWallet();

  return (
    <div>
      <h1>My Solana App</h1>

      <button
        onClick={async () => {
          const inputPayloadString = "<sign in payload string>";

          // Prompt the user to sign in with their wallet
          const signInOutput = await signMessage(payload);

          const signOutPayload = signMessage(
            Buffer.from(inputPayloadString, "utf8"),
          );
          
          // Use static method from SDK to construct the login body
          const loginBody = TorqueUserModule.constructLoginBody({
            authType: "basic",
            pubKey: publicKey.toString(),
            payload: {
              input: inputPayloadString,
              output: Buffer.from(signOutPayload).toString("base64"),
            },
          });

          // Initialize the user with Torque using the login body
          await authenticate(loginBody);
        }}
      >
        Initialize Torque
      </button>
    </div>
  );
}
```



## Connecting to X/Twitter

One of the advanced features of Torque is the ability to also track, create requirements and execute several social actions. To enable social requirements for X, the user must first connect their X/Twitter account to Torque so that we can perform X actions on the user's behalf to complete their requirements.

The `@torque-labs/react`  package contains a hook that will automatically generate and redirect a user to connect their external social accounts.&#x20;

```tsx
const { connect, isLoading: connectLoading } = useSocialConnect();
```

**The following examples will automatically redirect the user to connect their account:**

```tsx
connect("twitter"); // Will take user to X, and redirect back to the current URL
connect("twitter", window.location.href, true); // Identical to the above
connect("twitter", "https://example.com", true);
```

To get the connection URL without automatically redirecting, you can pass `false` to the `connect` function to disable the redirect. In this case, the function will return the `authUrl` which you can re-direc the user to manually.&#x20;

```tsx
const connectToTwitter = await connect("twitter", window.location.href, false);
```
