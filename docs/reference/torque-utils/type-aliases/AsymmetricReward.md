[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / AsymmetricReward

# Type Alias: AsymmetricReward

> **AsymmetricReward**: `object`

Asymmetric Reward type

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `amount` | `string` | The amount to reward | [types/campaigns.ts:83](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/campaigns.ts#L83) |
| `participants`? | `null` \| `USER` \| `PUBLISHER` \| `BOTH` | Who can participate in the raffle, users, publishers, or both | [types/campaigns.ts:91](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/campaigns.ts#L91) |
| `payoutTx`? | `null` \| `string` | Leave blank: The transaction hash of the payout transaction | [types/campaigns.ts:95](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/campaigns.ts#L95) |
| `tokenAddress` | `string` | The token address to reward | [types/campaigns.ts:79](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/campaigns.ts#L79) |
| `userPubKey`? | `null` \| `string` | Leave blank: The user public key that will be populated in the payout transaction | [types/campaigns.ts:87](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/campaigns.ts#L87) |

## Defined in

[types/campaigns.ts:101](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/campaigns.ts#L101)
