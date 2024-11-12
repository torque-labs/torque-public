[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / CreateCampaignInput

# Type Alias: CreateCampaignInput

> **CreateCampaignInput**: `object`

The create campaign input type.

## Type declaration

| Name | Type | Default value | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `asymmetricRewards`? | `object`[] | - | The asymmetric/raffle rewards to distribute | [types/campaigns.ts:242](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/campaigns.ts#L242) |
| `audience`? | `null` \| `string` | - | The audiences that the offer/campaign is available to | [types/campaigns.ts:258](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/campaigns.ts#L258) |
| `blinkOnly`? | `null` \| `boolean` | - | Deprecated: Whether the offer/campaign is blink only or not | [types/campaigns.ts:196](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/campaigns.ts#L196) |
| `campaignContent`? | `null` \| `string` | - | Full campaign content of the offer/campaign in Markdown This supports large format content such as images, videos, in Markdown format | [types/campaigns.ts:184](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/campaigns.ts#L184) |
| `campaignDescription`? | `null` \| `string` | - | A short description of the offer/campaign | [types/campaigns.ts:179](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/campaigns.ts#L179) |
| `campaignImage`? | `null` \| `string` | - | The featured image for the offer/campaign | [types/campaigns.ts:188](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/campaigns.ts#L188) |
| `campaignName` | `string` | - | The name of the campaign | [types/campaigns.ts:171](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/campaigns.ts#L171) |
| `campaignType` | [`CampaignType`](../enumerations/CampaignType.md) | - | The type of campaign | [types/campaigns.ts:175](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/campaigns.ts#L175) |
| `conversionAudience`? | `object` | - | If set, the offer can only be completed by user's who have completed a conversion for the given offers prior | [types/campaigns.ts:263](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/campaigns.ts#L263) |
| `conversionAudience.campaignIds` | `string`[] | - | - | [types/campaigns.ts:59](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/campaigns.ts#L59) |
| `conversionAudience.operation` | [`ConversionAudienceOperation`](../enumerations/ConversionAudienceOperation.md) | - | - | [types/campaigns.ts:60](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/campaigns.ts#L60) |
| `conversionCount`? | `null` \| `number` | - | The total number of conversions | [types/campaigns.ts:214](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/campaigns.ts#L214) |
| `endTime` | `number` | - | The end time of the campaign/offer in Unix timestamp | [types/campaigns.ts:254](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/campaigns.ts#L254) |
| `eventConfig` | (`object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object` \| `object`)[] | - | The event requirements for the offer/campaign [EventRequirementConfig](EventRequirementConfig.md) | [types/campaigns.ts:210](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/campaigns.ts#L210) |
| `landingPage` | `string` | - | Default launding page for the offer/campaign to link users to | [types/campaigns.ts:192](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/campaigns.ts#L192) |
| `lootBoxRewards` | `object` \| `object` | LootBoxRewardInputSchema | The lootbox rewards to distribute | [types/campaigns.ts:246](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/campaigns.ts#L246) |
| `offerBgImage`? | `null` \| `string` | - | The background image for the offer/campaign | [types/campaigns.ts:204](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/campaigns.ts#L204) |
| `offerTheme` | [`OfferTheme`](../enumerations/OfferTheme.md) | - | The theme of the offer/campaign | [types/campaigns.ts:200](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/campaigns.ts#L200) |
| `publisherPayoutPerConversion` | `number` | - | The payout per conversion for each referral by a publisher | [types/campaigns.ts:226](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/campaigns.ts#L226) |
| `publisherRewardType` | [`RewardType`](../enumerations/RewardType.md) | - | The publisher reward type | [types/campaigns.ts:218](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/campaigns.ts#L218) |
| `publisherTokenAddress`? | `string` | - | The publisher token address | [types/campaigns.ts:222](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/campaigns.ts#L222) |
| `startTime` | `number` | - | The start time of the campaign/offer in Unix timestamp | [types/campaigns.ts:250](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/campaigns.ts#L250) |
| `userPayoutPerConversion`? | `number` | - | The payout per conversion for each user | [types/campaigns.ts:238](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/campaigns.ts#L238) |
| `userRewardType`? | `POINTS` \| `TOKENS` \| `ASYMMETRIC_REWARD` | - | The user reward type | [types/campaigns.ts:230](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/campaigns.ts#L230) |
| `userTokenAddress`? | `string` | - | The user token address | [types/campaigns.ts:234](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/campaigns.ts#L234) |

## Defined in

[types/campaigns.ts:269](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/campaigns.ts#L269)
