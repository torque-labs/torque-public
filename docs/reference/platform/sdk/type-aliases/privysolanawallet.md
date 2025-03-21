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

Defined in: [sdk/src/types/wallets.ts:7](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/types/wallets.ts#L7)

## Properties

### disconnect()

```ts
disconnect: () => void;
```

Defined in: [sdk/src/types/wallets.ts:12](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/types/wallets.ts#L12)

#### Returns

`void`

***

### publicKey

```ts
publicKey: string;
```

Defined in: [sdk/src/types/wallets.ts:8](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/types/wallets.ts#L8)

***

### sendTransaction

```ts
sendTransaction: WalletAdapterProps["sendTransaction"];
```

Defined in: [sdk/src/types/wallets.ts:10](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/types/wallets.ts#L10)

***

### signMessage

```ts
signMessage: MessageSignerWalletAdapterProps["signMessage"];
```

Defined in: [sdk/src/types/wallets.ts:9](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/types/wallets.ts#L9)

***

### signTransaction

```ts
signTransaction: SignerWalletAdapterProps["signTransaction"];
```

Defined in: [sdk/src/types/wallets.ts:11](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/types/wallets.ts#L11)
