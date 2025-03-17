[**@torque-labs/sdk**](../../../@torque-labs/sdk/README.md)

***

[Torque Labs](../../../README.md) / [@torque-labs/sdk](../README.md) / TorqueSDK

# Class: TorqueSDK

Defined in: [packages/sdk/src/modules/main.ts:36](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/main.ts#L36)

The TorqueSDK class is used to interact with the Torque API.

## Param

The options for the SDK

## Constructors

### new TorqueSDK()

```ts
new TorqueSDK(options): TorqueSDK
```

Defined in: [packages/sdk/src/modules/main.ts:67](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/main.ts#L67)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`TorqueSDKOptions`](../type-aliases/TorqueSDKOptions.md) |

#### Returns

`TorqueSDK`

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="_connection"></a> `_connection` | `Connection` | The connection for the SDK instance |
| <a id="_signer"></a> `_signer` | \| `undefined` \| `Adapter` \| `Keypair` \| [`PrivySolanaWallet`](../type-aliases/PrivySolanaWallet.md) | The signer for the SDK instance |
| <a id="_transactions"></a> `_transactions` | [`TorqueTransactionsModule`](TorqueTransactionsModule.md) | The tranactions module for the SDK instance |
| <a id="apiurl"></a> `apiUrl` | `string` | The base URL of the Torque API |
| <a id="offers"></a> `offers` | [`TorqueOffersModule`](TorqueOffersModule.md) | The offers module for the SDK instance |
| <a id="user"></a> `user` | `undefined` \| [`TorqueUserModule`](TorqueUserModule.md) | The user module for the SDK instance |

## Methods

### authenticate()

```ts
authenticate(
   signer, 
   authOptions?, 
authInput?): Promise<string>
```

Defined in: [packages/sdk/src/modules/main.ts:87](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/main.ts#L87)

Authenticate the user with the API using the provided login data.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `signer` | \| `Adapter` \| `Keypair` \| [`PrivySolanaWallet`](../type-aliases/PrivySolanaWallet.md) | The signer to use for the authentication |
| `authOptions`? | [`TorqueAuthOptions`](../type-aliases/TorqueAuthOptions.md) | The authentication options |
| `authInput`? | [`TorqueAuthInput`](../type-aliases/TorqueAuthInput.md) | The authentication input |

#### Returns

`Promise`\<`string`\>
