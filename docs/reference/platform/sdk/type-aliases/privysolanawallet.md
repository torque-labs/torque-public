[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / PrivySolanaWallet

# Type Alias: PrivySolanaWallet

```ts
type PrivySolanaWallet = {
  disconnect: () => void;
  publicKey: string;
  sendTransaction: WalletAdapterProps["sendTransaction"];
  signMessage: MessageSignerWalletAdapterProps["signMessage"];
  signTransaction: SignerWalletAdapterProps["signTransaction"];
};
```

Defined in: [sdk/src/types/wallets.ts:7](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/wallets.ts#l7)

## Properties

### disconnect()

```ts
disconnect: () => void;
```

Defined in: [sdk/src/types/wallets.ts:12](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/wallets.ts#l12)

#### Returns

`void`

***

### publicKey

```ts
publicKey: string;
```

Defined in: [sdk/src/types/wallets.ts:8](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/wallets.ts#l8)

***

### sendTransaction

```ts
sendTransaction: WalletAdapterProps["sendTransaction"];
```

Defined in: [sdk/src/types/wallets.ts:10](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/wallets.ts#l10)

***

### signMessage

```ts
signMessage: MessageSignerWalletAdapterProps["signMessage"];
```

Defined in: [sdk/src/types/wallets.ts:9](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/wallets.ts#l9)

***

### signTransaction

```ts
signTransaction: SignerWalletAdapterProps["signTransaction"];
```

Defined in: [sdk/src/types/wallets.ts:11](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/wallets.ts#l11)
