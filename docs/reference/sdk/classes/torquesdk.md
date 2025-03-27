[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / TorqueSDK

# Class: TorqueSDK

Defined in: [sdk/src/modules/main.ts:36](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/main.ts#l36)

The TorqueSDK class is used to interact with the Torque API.

## Param

The options for the SDK

## Constructors

### new TorqueSDK()

```ts
new TorqueSDK(options): TorqueSDK
```

Defined in: [sdk/src/modules/main.ts:67](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/main.ts#l67)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`TorqueSDKOptions`](../type-aliases/torquesdkoptions.md) |

#### Returns

`TorqueSDK`

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="_connection"></a> `_connection` | `Connection` | The connection for the SDK instance |
| <a id="_signer"></a> `_signer` | \| `undefined` \| `Adapter` \| `Keypair` \| [`PrivySolanaWallet`](../type-aliases/privysolanawallet.md) | The signer for the SDK instance |
| <a id="_transactions"></a> `_transactions` | [`TorqueTransactionsModule`](torquetransactionsmodule.md) | The tranactions module for the SDK instance |
| <a id="apiurl"></a> `apiUrl` | `string` | The base URL of the Torque API |
| <a id="offers"></a> `offers` | [`TorqueOffersModule`](torqueoffersmodule.md) | The offers module for the SDK instance |
| <a id="user"></a> `user` | `undefined` \| [`TorqueUserModule`](torqueusermodule.md) | The user module for the SDK instance |

## Methods

### authenticate()

```ts
authenticate(
   signer, 
   authOptions?, 
authInput?): Promise<string>
```

Defined in: [sdk/src/modules/main.ts:87](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/main.ts#l87)

Authenticate the user with the API using the provided login data.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `signer` | \| `Adapter` \| `Keypair` \| [`PrivySolanaWallet`](../type-aliases/privysolanawallet.md) | The signer to use for the authentication |
| `authOptions`? | [`TorqueAuthOptions`](../type-aliases/torqueauthoptions.md) | The authentication options |
| `authInput`? | [`TorqueAuthInput`](../type-aliases/torqueauthinput.md) | The authentication input |

#### Returns

`Promise`\<`string`\>
