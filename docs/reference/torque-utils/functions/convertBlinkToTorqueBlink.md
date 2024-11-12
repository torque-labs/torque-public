[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / convertBlinkToTorqueBlink

# Function: convertBlinkToTorqueBlink()

```ts
function convertBlinkToTorqueBlink(
   blink, 
   eventType, 
   eventConfig, 
   offerId, 
   publisherHandle, 
   remainingConversions?, 
   userRewardType?, 
   userRewardToken?, 
   userRewardAmount?, 
   raffleRewardType?, 
   raffleRewardToken?, 
   raffleRewardAmount?, 
   holdForSeconds?, 
   currentConversions?, 
index?): Promise<ActionGetResponse>
```

## Parameters

| Parameter | Type |
| ------ | ------ |
| `blink` | `ActionGetResponse` |
| `eventType` | [`EventType`](../enumerations/EventType.md) |
| `eventConfig` | `any` |
| `offerId` | `string` |
| `publisherHandle` | `string` |
| `remainingConversions`? | `number` |
| `userRewardType`? | `string` |
| `userRewardToken`? | `string` |
| `userRewardAmount`? | `number` |
| `raffleRewardType`? | `string` |
| `raffleRewardToken`? | `string` |
| `raffleRewardAmount`? | `number` |
| `holdForSeconds`? | `number` |
| `currentConversions`? | `number` |
| `index`? | `number` |

## Returns

`Promise`\<`ActionGetResponse`\>

## Defined in

[solana-actions/buildGet.ts:70](https://github.com/torque-labs/torque-utils/blob/3bd29ca22f900f1cf2686f7f240bf82e15337207/solana-actions/buildGet.ts#L70)
