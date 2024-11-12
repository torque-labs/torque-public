[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / memoGet

# Function: memoGet()

> **memoGet**(`memoData`, `offerId`, `title`, `publisherHandle`, `remainingConversions`?, `imageUrl`?, `description`?, `userRewardType`?, `userRewardToken`?, `userRewardAmount`?, `raffleRewardType`?, `raffleRewardToken`?, `raffleRewardAmount`?): `Promise`\<`ActionGetResponse`\>

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `memoData` | `object` | - |
| `memoData.fields` | (`object` & `object` \| `object` & `object` \| `object` & `object`)[] | The fields to collect from the user |
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

[solana-actions/buildGet.ts:328](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/solana-actions/buildGet.ts#L328)
