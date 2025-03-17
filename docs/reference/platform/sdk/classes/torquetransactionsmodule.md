[**@torque-labs/sdk**](../../../@torque-labs/sdk/README.md)

***

[Torque Labs](../../../README.md) / [@torque-labs/sdk](../README.md) / TorqueTransactionsModule

# Class: TorqueTransactionsModule

Defined in: [packages/sdk/src/modules/transactions.ts:16](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/transactions.ts#L16)

The TorqueTransactionsModule class is used to handle transactions for the Torque SDK.
It provides methods for creating, signing, and sending transactions.

## Param

The signer for the transactions

## Param

The RPC connection for the Solana network

## Constructors

### new TorqueTransactionsModule()

```ts
new TorqueTransactionsModule(connection, signer?): TorqueTransactionsModule
```

Defined in: [packages/sdk/src/modules/transactions.ts:32](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/transactions.ts#L32)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `connection` | `Connection` |
| `signer`? | `Adapter` \| `Keypair` |

#### Returns

`TorqueTransactionsModule`

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="_connection"></a> `_connection` | `Connection` | The RPC connection for the Solana network |
| <a id="_publickey"></a> `_publicKey` | `undefined` \| `null` \| `PublicKey` | The public key of the signer |
| <a id="_signer"></a> `_signer` | \| `undefined` \| `Adapter` \| `Keypair` \| [`PrivySolanaWallet`](../type-aliases/PrivySolanaWallet.md) | The signer for the transactions |

## Accessors

### signer

#### Set Signature

```ts
set signer(value): void
```

Defined in: [packages/sdk/src/modules/transactions.ts:40](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/transactions.ts#L40)

Set the signer for the transactions

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | \| `Adapter` \| `Keypair` \| [`PrivySolanaWallet`](../type-aliases/PrivySolanaWallet.md) |

##### Returns

`void`

## Methods

### sendTransaction()

```ts
sendTransaction(serializedTx): Promise<string>
```

Defined in: [packages/sdk/src/modules/transactions.ts:157](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/transactions.ts#L157)

Send a transaction to the network.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `serializedTx` | `string` | The transaction to send |

#### Returns

`Promise`\<`string`\>

The signature of the completed transaction after confirmation

***

### signOrSendTransaction()

```ts
private signOrSendTransaction(serializedTx, execute): Promise<string>
```

Defined in: [packages/sdk/src/modules/transactions.ts:53](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/transactions.ts#L53)

Execute or sign a transaction from a Solana action.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `serializedTx` | `string` | The serialized transaction |
| `execute` | `boolean` | Whether to execute the transaction |

#### Returns

`Promise`\<`string`\>

The signature of the transaction

***

### signTransaction()

```ts
signTransaction(serializedTx): Promise<string>
```

Defined in: [packages/sdk/src/modules/transactions.ts:146](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/transactions.ts#L146)

Sign and return the transaction signature.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `serializedTx` | `string` | The transaction to sign |

#### Returns

`Promise`\<`string`\>

The signature of the signed transaction

***

### signWithKeypair()

```ts
private signWithKeypair(txn): VersionedTransaction
```

Defined in: [packages/sdk/src/modules/transactions.ts:170](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/transactions.ts#L170)

Signs a transaction with a Keypair.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `txn` | `VersionedTransaction` | The versioned transaction to sign with a keypair |

#### Returns

`VersionedTransaction`

The signer transaction

#### Throws

An error if the signer is not initialized or if there is an issue signing the transaction
