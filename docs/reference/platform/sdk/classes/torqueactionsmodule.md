[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / TorqueActionsModule

# Class: TorqueActionsModule

Defined in: [sdk/src/modules/actions.ts:16](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/actions.ts#l16)

The TorqueActionsModule class is used to interact with the actions endpoints of the Torque API.

## Param

The URL of the Torque API server

## Param

The public key of the user

## Param

The auth token for the API

## Constructors

### new TorqueActionsModule()

```ts
new TorqueActionsModule(
   url, 
   transactions, 
   publicKey?, 
   token?): TorqueActionsModule
```

Defined in: [sdk/src/modules/actions.ts:22](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/actions.ts#l22)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |
| `transactions` | [`TorqueTransactionsModule`](torquetransactionsmodule.md) |
| `publicKey`? | `string` |
| `token`? | `string` |

#### Returns

`TorqueActionsModule`

## Properties

| Property | Type |
| ------ | ------ |
| <a id="_publickey"></a> `_publicKey` | `undefined` \| `string` |
| <a id="_token"></a> `_token` | `undefined` \| `string` |
| <a id="_transactions"></a> `_transactions` | [`TorqueTransactionsModule`](torquetransactionsmodule.md) |
| <a id="baseurl"></a> `baseUrl` | `string` |

## Accessors

### publicKey

#### Set Signature

```ts
set publicKey(value): void
```

Defined in: [sdk/src/modules/actions.ts:39](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/actions.ts#l39)

Set private public key for the actions module

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `undefined` \| `string` |

##### Returns

`void`

***

### token

#### Set Signature

```ts
set token(value): void
```

Defined in: [sdk/src/modules/actions.ts:32](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/actions.ts#l32)

Set private token for the actions module

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `undefined` \| `string` |

##### Returns

`void`

## Methods

### executeAction()

```ts
executeAction(offerid, index): Promise<string>
```

Defined in: [sdk/src/modules/actions.ts:80](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/actions.ts#l80)

Execute an action.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offerId` | `string` | The offer ID |
| `index` | `number` | The index of the action |

#### Returns

`Promise`\<`string`\>

The signature of the transaction

***

### executeXAction()

```ts
executeXAction(
   targetType, 
   targetId, 
   telegramId?, 
source?): Promise<void>
```

Defined in: [sdk/src/modules/actions.ts:96](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/actions.ts#l96)

Execute an X action

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `targetType` | `X_FOLLOW` \| `X_LIKE` \| `X_REPOST` | The type of target |
| `targetId` | `string` | The id of the target |
| `telegramId`? | `string` | The id of the telegram user |
| `source`? | `"web"` \| `"telegram"` | The source of the action |

#### Returns

`Promise`\<`void`\>

The response from the API

***

### getActionTransaction()

```ts
getActionTransaction(offerid, index): Promise<ActionPostWithCallbackResponse>
```

Defined in: [sdk/src/modules/actions.ts:53](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/actions.ts#l53)

Get the transaction for an action.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offerId` | `string` | The offer ID |
| `index` | `number` | The index of the action |

#### Returns

`Promise`\<[`ActionPostWithCallbackResponse`](../type-aliases/actionpostwithcallbackresponse.md)\>

The transaction for the action

#### Throws

An error if the public key is not provided
