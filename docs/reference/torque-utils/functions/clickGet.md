[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / clickGet

# Function: clickGet()

> **clickGet**(`clickData`, `offerId`, `title`, `publisherHandle`, `remainingConversions`?, `imageUrl`?, `description`?, `userRewardType`?, `userRewardToken`?, `userRewardAmount`?, `raffleRewardType`?, `raffleRewardToken`?, `raffleRewardAmount`?, `requireSignature`?, `antiSybilFee`?): `Promise`\<`ActionGetResponse`\>

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `clickData` | `object` | - |
| `clickData.antiSybilFee`? | `number` | Require anti-sybil fee for the click action. If true, the user must pay a transaction fee to complete the requirement. |
| `clickData.requireSignature` | `boolean` | Require signature for the click action. If true, the user must sign a transaction to complete the requirement. |
| `clickData.targetUrl` | `string` | Target URL for the click action |
| `offerId` | `string` | - |
| `title`? | `string` | - |
| `publisherHandle`? | `string` | - |
| `remainingConversions`? | `number` | - |
| `imageUrl`? | `string` | - |
| `description`? | `string` | - |
| `userRewardType`? | `string` | - |
| `userRewardToken`? | `string` | - |
| `userRewardAmount`? | `number` | - |
| `raffleRewardType`? | `string` | - |
| `raffleRewardToken`? | `string` | - |
| `raffleRewardAmount`? | `number` | - |
| `requireSignature`? | `boolean` | - |
| `antiSybilFee`? | `number` | - |

## Returns

`Promise`\<`ActionGetResponse`\>

## Defined in

[solana-actions/buildGet.ts:405](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/solana-actions/buildGet.ts#L405)
