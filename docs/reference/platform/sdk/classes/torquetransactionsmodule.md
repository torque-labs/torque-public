[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / TorqueTransactionsModule

# Class: TorqueTransactionsModule

Defined in: [sdk/src/modules/transactions.ts:16](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/transactions.ts#l16)

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

Defined in: [sdk/src/modules/transactions.ts:32](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/transactions.ts#l32)

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
| <a id="_signer"></a> `_signer` | \| `undefined` \| `Adapter` \| `Keypair` \| [`PrivySolanaWallet`](../type-aliases/privysolanawallet.md) | The signer for the transactions |

## Accessors

### signer

#### Set Signature

```ts
set signer(value): void
```

Defined in: [sdk/src/modules/transactions.ts:40](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/transactions.ts#l40)

Set the signer for the transactions

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | \| `Adapter` \| `Keypair` \| [`PrivySolanaWallet`](../type-aliases/privysolanawallet.md) |

##### Returns

`void`

## Methods

### sendTransaction()

```ts
sendTransaction(serializedtx): Promise<string>
```

Defined in: [sdk/src/modules/transactions.ts:157](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/transactions.ts#l157)

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
private signOrSendTransaction(serializedtx, execute): Promise<string>
```

Defined in: [sdk/src/modules/transactions.ts:53](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/transactions.ts#l53)

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
signTransaction(serializedtx): Promise<string>
```

Defined in: [sdk/src/modules/transactions.ts:146](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/transactions.ts#l146)

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

Defined in: [sdk/src/modules/transactions.ts:170](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/transactions.ts#l170)

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
