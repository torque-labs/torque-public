[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / TorqueSDK

# Class: TorqueSDK

Defined in: [sdk/src/modules/main.ts:36](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/main.ts#L36)

The TorqueSDK class is used to interact with the Torque API.

## Param

The options for the SDK

## Constructors

### new TorqueSDK()

```ts
new TorqueSDK(options): TorqueSDK
```

Defined in: [sdk/src/modules/main.ts:67](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/main.ts#L67)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`TorqueSDKOptions`](../type-aliases/TorqueSDKOptions.md) |

#### Returns

`TorqueSDK`

## Properties

### \_connection

```ts
private _connection: Connection;
```

Defined in: [sdk/src/modules/main.ts:65](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/main.ts#L65)

The connection for the SDK instance

***

### \_signer

```ts
private _signer: 
  | undefined
  | Adapter
  | Keypair
  | PrivySolanaWallet;
```

Defined in: [sdk/src/modules/main.ts:60](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/main.ts#L60)

The signer for the SDK instance

***

### \_transactions

```ts
private _transactions: TorqueTransactionsModule;
```

Defined in: [sdk/src/modules/main.ts:50](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/main.ts#L50)

The tranactions module for the SDK instance

***

### apiUrl

```ts
apiUrl: string;
```

Defined in: [sdk/src/modules/main.ts:55](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/main.ts#L55)

The base URL of the Torque API

***

### offers

```ts
offers: TorqueOffersModule;
```

Defined in: [sdk/src/modules/main.ts:40](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/main.ts#L40)

The offers module for the SDK instance

***

### user

```ts
user: undefined | TorqueUserModule;
```

Defined in: [sdk/src/modules/main.ts:45](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/main.ts#L45)

The user module for the SDK instance

## Methods

### authenticate()

```ts
authenticate(
   signer, 
   authOptions?, 
authInput?): Promise<string>
```

Defined in: [sdk/src/modules/main.ts:87](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/main.ts#L87)

Authenticate the user with the API using the provided login data.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `signer` | \| `Adapter` \| `Keypair` \| [`PrivySolanaWallet`](../type-aliases/PrivySolanaWallet.md) | The signer to use for the authentication |
| `authOptions`? | [`TorqueAuthOptions`](../type-aliases/TorqueAuthOptions.md) | The authentication options |
| `authInput`? | [`TorqueAuthInput`](../type-aliases/TorqueAuthInput.md) | The authentication input |

#### Returns

`Promise`\<`string`\>
