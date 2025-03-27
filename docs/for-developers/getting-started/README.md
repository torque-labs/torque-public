---
description: Setting up the Torque in a React application
---

# Usage with React

## Requirements

* React 18 or higher
* A Solana wallet adapter implementation

## Installation

```
npm install @torque-labs/react @torque-labs/sdk --save
```

## Setup

### TorqueProvider

To use the Torque React SDK, you need to wrap your application with the `TorqueProvider` component. This provider gives access to the Torque SDK instance and various hooks for interacting with the Torque platform.

```tsx
import type { PropsWithChildren } from "react";
import { useWallet } from '@solana/wallet-adapter-react';

import { TorqueProvider } from '@torque-labs/react';

function Provider({ children }: PropsWithChildren) {
  const { wallet } = useWallet();

  const torqueOptions = {
    apiUrl: "https://server.torque.so", 
    rpcUrl: "<solana rpc>", // Your Solana RPC URL
    authDomain: "your-app-domain.com", // Used for Sign-In-With-Solana (SIWS)   
  }

  return (
    <TorqueProvider options={torqueOptions} wallet={wallet}>
      {children}
    </TorqueProvider>
  );
}
```

### Required Props

The `TorqueProvider` accepts the following props:

* `wallet`: The wallet adapter instance from libraries like `@solana/wallet-adapter-react`.
* `options`: Configuration options for the Torque SDK:
  * `apiUrl`: The URL for the Torque API server.
  * `rpcUrl`: The RPC URL for the Solana network.
  * `authDomain`: The domain to display when signing in with Solana.

_**NOTE:**_ The provider will automatically request the user for a signature to authenticate them with the Torque API. This allow's to make requests directly using the react library.

### TorqueProvider Context

You can access the Torque SDK context directly using the `useTorque` hook:

```tsx
import { useTorque } from '@torque-labs/react';

function YourComponent() {
  const { 
    torque,              // The Torque SDK instance
    wallet,              // The connected wallet
    currentUser,         // The current authenticated user
    isLoading,           // Loading state for authentication
    isAuthenticated,     // Whether the user is authenticated
    isVerified,          // Whether the user is verified
    authenticate,        // Function to authenticate the user
    logout,              // Function to log out the user
  } = useTorque();

  return (
    // Your component implementation
  );
}
```

The `torque`  instance above can be used to directly query the Torque API. The torque SDK will be initialized for the current user once they are authenticated.&#x20;

## Authentication

If authenticate fails, it can be triggered manually to authenticate a user with the Torque SDK:

```tsx
import { useTorque } from '@torque-labs/react';

function AuthButton() {
  const { authenticate, isAuthenticated, isLoading } = useTorque();

  const handleAuth = async () => {
    try {
      await authenticate();
      // User is now authenticated
    } catch (error) {
      console.error('Authentication failed:', error);
    }
  };

  return (
    <button 
      onClick={handleAuth}
      disabled={isLoading || isAuthenticated}
    >
      {isLoading ? 'Loading...' : isAuthenticated ? 'Authenticated' : 'Sign In'}
    </button>
  );
}
```

##

## Advanced Usage

### Using Transaction-Based Authentication

For hardware wallets like Ledger:

```tsx
import { useTorque } from '@torque-labs/react';

function LedgerAuthButton() {
  const { 
    authenticate, 
    setUseTransactionForAuth, 
    useTransactionForAuth 
  } = useTorque();

  const handleLedgerAuth = async () => {
    // Enable transaction-based auth for Ledger
    setUseTransactionForAuth(true);
    try {
      await authenticate();
    } catch (error) {
      console.error('Ledger authentication failed:', error);
    }
  };

  return (
    <button onClick={handleLedgerAuth}>
      Sign In with Ledger
    </button>
  );
}
```
