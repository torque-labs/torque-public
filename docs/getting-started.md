# Torque UI Library

The Torque UI library provides React components to easily integrate Torque functionality into your Solana application. This library allows you to add reward campaigns, quests, and other gamification features with minimal setup.

## Installation

Install the package:

```bash
npm install @torque-labs/torque-ui
```

```bash
yarn add @torque-labs/torque-ui
```

## Basic Setup

1. First, import the required styles in your app's entry point:

```typescript
import "@torque-labs/torque-ui/index.css";
```

2. Add the TorqueProvider component to your application. The TorqueProvider must be a child of the `WalletProvider` component from the Solana wallet adapter library.

```tsx
"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import type { PropsWithChildren } from "react";
import type { TorqueOptions } from "@torque-labs/torque-ui";
import { TorqueProvider } from "@torque-labs/torque-ui";

export function TorqueWrapper({ children }: PropsWithChildren) {
  const { wallet } = useWallet();

  const torqueOptions: TorqueOptions = {
    publisherHandle: "<your publisher handle>",
  };

  return (
    <TorqueProvider options={torqueOptions} wallet={wallet}>
      {children}
    </TorqueProvider>
  );
}
```

NOTE: You can get a publisher handle by logging into the Torque application and creating a publisher accounts.

## Quick Start Guide

Here's a simple example of adding a Torque drawer to your application:

```tsx
import { TorqueDrawer } from "@torque-labs/torque-ui";
function MyApp() {
  return (
    <div>
      <h1>My Solana App</h1>
      <TorqueDrawer />
    </div>
  );
}
```

The TorqueDrawer component will add a drawer interface that shows available offers and campaigns to your users. Users can:

- View available campaigns
- Track their progress
- Complete requirements
- Claim rewards

## Requirements

- React 18 or higher
- A Solana wallet adapter implementation
