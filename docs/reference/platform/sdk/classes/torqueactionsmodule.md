[**@torque-labs/sdk**](../../../@torque-labs/sdk/README.md)

***

[Torque Labs](../../../README.md) / [@torque-labs/sdk](../README.md) / TorqueActionsModule

# Class: TorqueActionsModule

Defined in: [packages/sdk/src/modules/actions.ts:22](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/actions.ts#L22)

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

Defined in: [packages/sdk/src/modules/actions.ts:28](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/actions.ts#L28)

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

| Property | Type |
| ------ | ------ |
| <a id="_publickey"></a> `_publicKey` | `undefined` \| `string` |
| <a id="_token"></a> `_token` | `undefined` \| `string` |
| <a id="_transactions"></a> `_transactions` | [`TorqueTransactionsModule`](TorqueTransactionsModule.md) |
| <a id="baseurl"></a> `baseUrl` | `string` |

## Accessors

### publicKey

#### Set Signature

```ts
set publicKey(value): void
```

Defined in: [packages/sdk/src/modules/actions.ts:45](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/actions.ts#L45)

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

Defined in: [packages/sdk/src/modules/actions.ts:38](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/actions.ts#L38)

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

Defined in: [packages/sdk/src/modules/actions.ts:86](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/actions.ts#L86)

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

Defined in: [packages/sdk/src/modules/actions.ts:102](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/actions.ts#L102)

Execute an X action

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `targetType` | \| [`X_FOLLOW`](../enumerations/EventType.md#x_follow) \| [`X_LIKE`](../enumerations/EventType.md#x_like) \| [`X_REPOST`](../enumerations/EventType.md#x_repost) | The type of target |
| `targetId` | `string` | The id of the target |
| `telegramId`? | `string` | The id of the telegram user |
| `source`? | `"telegram"` \| `"web"` | The source of the action |

#### Returns

`Promise`\<`void`\>

The response from the API

***

### getActionTransaction()

```ts
getActionTransaction(offerId, index): Promise<{
  links:   | null
     | {
     next: {
        href: string;
        type: "post";
       };
    };
  transaction: string;
  type: LinkedAction;
}>
```

Defined in: [packages/sdk/src/modules/actions.ts:59](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/actions.ts#L59)

Get the transaction for an action.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offerId` | `string` | The offer ID |
| `index` | `number` | The index of the action |

#### Returns

`Promise`\<\{
  `links`:   \| `null`
     \| \{
     `next`: \{
        `href`: `string`;
        `type`: `"post"`;
       \};
    \};
  `transaction`: `string`;
  `type`: `LinkedAction`;
 \}\>

The transaction for the action

#### Throws

An error if the public key is not provided
