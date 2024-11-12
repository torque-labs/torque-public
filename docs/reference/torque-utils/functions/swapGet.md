[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / swapGet

# Function: swapGet()

> **swapGet**(`swapAction`, `offerId`, `offerTitle`, `publisherHandle`, `offerImageUrl`?, `remainingConversions`?, `userRewardType`?, `userRewardToken`?, `userRewardAmount`?, `raffleRewardType`?, `raffleRewardToken`?, `raffleRewardAmount`?, `holdForSeconds`?, `currentConversions`?): `Promise`\<`ActionGetResponse`\>

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `swapAction` | `object` | - |
| `swapAction.inAmount`? | `null` \| `number` | The amount of tokens to swap from |
| `swapAction.inToken`? | `null` \| `string` | The token to swap from |
| `swapAction.outAmount`? | `null` \| `number` | The amount of tokens to swap to |
| `swapAction.outToken`? | `null` \| `string` | The token to swap to |
| `swapAction.usdcValue`? | `null` \| `number` | The USDC value TODO: USDC Value for which token? |
| `offerId`? | `string` | - |
| `offerTitle`? | `string` | - |
| `publisherHandle`? | `string` | - |
| `offerImageUrl`? | `string` | - |
| `remainingConversions`? | `number` | - |
| `userRewardType`? | `string` | - |
| `userRewardToken`? | `string` | - |
| `userRewardAmount`? | `number` | - |
| `raffleRewardType`? | `string` | - |
| `raffleRewardToken`? | `string` | - |
| `raffleRewardAmount`? | `number` | - |
| `holdForSeconds`? | `number` | - |
| `currentConversions`? | `number` | - |

## Returns

`Promise`\<`ActionGetResponse`\>

## Defined in

[solana-actions/buildGet.ts:187](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/solana-actions/buildGet.ts#L187)
