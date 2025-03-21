[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / TorqueActionsModule

# Class: TorqueActionsModule

Defined in: [sdk/src/modules/actions.ts:16](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/actions.ts#L16)

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

Defined in: [sdk/src/modules/actions.ts:22](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/actions.ts#L22)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |
| `transactions` | [`TorqueTransactionsModule`](TorqueTransactionsModule.md) |
| `publicKey`? | `string` |
| `token`? | `string` |

#### Returns

`TorqueActionsModule`

## Properties

### \_publicKey

```ts
private _publicKey: undefined | string;
```

Defined in: [sdk/src/modules/actions.ts:19](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/actions.ts#L19)

***

### \_token

```ts
private _token: undefined | string;
```

Defined in: [sdk/src/modules/actions.ts:18](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/actions.ts#L18)

***

### \_transactions

```ts
private _transactions: TorqueTransactionsModule;
```

Defined in: [sdk/src/modules/actions.ts:20](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/actions.ts#L20)

***

### baseUrl

```ts
baseUrl: string;
```

Defined in: [sdk/src/modules/actions.ts:17](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/actions.ts#L17)

## Accessors

### publicKey

#### Set Signature

```ts
set publicKey(value): void
```

Defined in: [sdk/src/modules/actions.ts:39](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/actions.ts#L39)

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

Defined in: [sdk/src/modules/actions.ts:32](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/actions.ts#L32)

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
executeAction(offerId, index): Promise<string>
```

Defined in: [sdk/src/modules/actions.ts:80](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/actions.ts#L80)

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

Defined in: [sdk/src/modules/actions.ts:96](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/actions.ts#L96)

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
getActionTransaction(offerId, index): Promise<ActionPostWithCallbackResponse>
```

Defined in: [sdk/src/modules/actions.ts:53](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/actions.ts#L53)

Get the transaction for an action.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offerId` | `string` | The offer ID |
| `index` | `number` | The index of the action |

#### Returns

`Promise`\<[`ActionPostWithCallbackResponse`](../type-aliases/ActionPostWithCallbackResponse.md)\>

The transaction for the action

#### Throws

An error if the public key is not provided
