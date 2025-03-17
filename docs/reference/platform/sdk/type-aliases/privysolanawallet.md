[**@torque-labs/sdk**](../../../@torque-labs/sdk/README.md)

***

[Torque Labs](../../../README.md) / [@torque-labs/sdk](../README.md) / PrivySolanaWallet

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

Defined in: [packages/sdk/src/types/wallets.ts:7](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/types/wallets.ts#L7)

## Properties

| Property | Type |
| ------ | ------ |
| <a id="disconnect"></a> `disconnect` | () => `void` |
| <a id="publickey"></a> `publicKey` | `string` |
| <a id="sendtransaction"></a> `sendTransaction` | `WalletAdapterProps`\[`"sendTransaction"`\] |
| <a id="signmessage"></a> `signMessage` | `MessageSignerWalletAdapterProps`\[`"signMessage"`\] |
| <a id="signtransaction"></a> `signTransaction` | `SignerWalletAdapterProps`\[`"signTransaction"`\] |
