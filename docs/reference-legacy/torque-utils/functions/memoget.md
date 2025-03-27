[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / memoGet

# Function: memoGet()

```ts
function memoGet(
   memoData, 
   offerId, 
   title, 
   publisherHandle, 
   remainingConversions?, 
   imageUrl?, 
   description?, 
   userRewardType?, 
   userRewardToken?, 
   userRewardAmount?, 
   raffleRewardType?, 
   raffleRewardToken?, 
raffleRewardAmount?): Promise<ActionGetResponse>
```

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `memoData` | `object` | - |
| `memoData.fields` | (\{ `description`: `null` \| `string`; `image`: `null` \| `string`; `label`: `null` \| `string`; `name`: `string`; \} & \{ `type`: `"string"`; `validation`: \{ `match`: `null` \| `string`; `required`: `null` \| `boolean`; \}; \} \| \{ `description`: `null` \| `string`; `image`: `null` \| `string`; `label`: `null` \| `string`; `name`: `string`; \} & \{ `type`: `"number"`; `validation`: \{ `max`: `null` \| `number`; `min`: `null` \| `number`; \}; \} \| \{ `description`: `null` \| `string`; `image`: `null` \| `string`; `label`: `null` \| `string`; `name`: `string`; \} & \{ `type`: `"boolean"`; `validation`: \{ `match`: `null` \| `boolean`; \}; \})[] | The fields to collect from the user |
| `offerId` | `string` | - |
| `title` | `string` | - |
| `publisherHandle` | `string` | - |
| `remainingConversions`? | `number` | - |
| `imageUrl`? | `string` | - |
| `description`? | `string` | - |
| `userRewardType`? | `string` | - |
| `userRewardToken`? | `string` | - |
| `userRewardAmount`? | `number` | - |
| `raffleRewardType`? | `string` | - |
| `raffleRewardToken`? | `string` | - |
| `raffleRewardAmount`? | `number` | - |

## Returns

`Promise`\<`ActionGetResponse`\>

## Defined in

[solana-actions/buildGet.ts:328](https://github.com/torque-labs/torque-utils/blob/3bd29ca22f900f1cf2686f7f240bf82e15337207/solana-actions/buildGet.ts#L328)
