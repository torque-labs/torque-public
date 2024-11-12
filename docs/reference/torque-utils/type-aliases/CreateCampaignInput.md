[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / CreateCampaignInput

# Type Alias: CreateCampaignInput

```ts
type CreateCampaignInput: {
  asymmetricRewards: {
     amount: string;
     participants: null | USER | PUBLISHER | BOTH;
     payoutTx: null | string;
     tokenAddress: string;
     userPubKey: null | string;
    }[];
  audience: null | string;
  blinkOnly: null | boolean;
  campaignContent: null | string;
  campaignDescription: null | string;
  campaignImage: null | string;
  campaignName: string;
  campaignType: CampaignType;
  conversionAudience: {
     campaignIds: string[];
     operation: ConversionAudienceOperation;
    };
  conversionCount: null | number;
  endTime: number;
  eventConfig: (
     | {
     requirement: ClickActionSchema;
     type: CLICK;
    }
     | {
     requirement: CustomEventConfigSchema;
     type: CUSTOM_EVENT;
    }
     | {
     requirement: DriftBetActionSchema;
     type: DRIFT_BET;
    }
     | {
     requirement: DriftDepositActionSchema;
     type: DRIFT_DEPOSIT;
    }
     | {
     requirement: FormSubmissionActionSchema;
     type: FORM_SUBMISSION;
    }
     | {
     requirement: KaminoLendActionSchema;
     type: KAMINO_LEND;
    }
     | {
     requirement: MarginfiLendActionSchema;
     type: MARGINFI_LEND;
    }
     | {
     requirement: MemoActionSchema;
     type: MEMO;
    }
     | {
     requirement: NftBidBuySchema;
     type: NFT_BUY_BID;
    }
     | {
     requirement: NftCollectionTradeSchema;
     type: NFT_COLLECTION_TRADE;
    }
     | {
     requirement: RealmsVoteActionSchema;
     type: REALMS_VOTE;
    }
     | {
     requirement: StakeSolanaActionSchema;
     type: STAKE_SOL;
    }
     | {
     requirement: SwapActionSchema;
     timeConfig: {
        duration: number;
        requirement: TokenHoldingTimeConfigSchema;
        type: TOKEN_HOLDING;
       };
     type: SWAP;
    }
     | {
     requirement: TensorActionSchema;
     type: TENSOR_BID;
    }
     | {
     requirement: TensorActionSchema;
     type: TENSOR_BUY;
    })[];
  landingPage: string;
  lootBoxRewards: LootBoxRewardInputSchema;
  offerBgImage: null | string;
  offerTheme: OfferTheme;
  publisherPayoutPerConversion: number;
  publisherRewardType: RewardType;
  publisherTokenAddress: string;
  startTime: number;
  userPayoutPerConversion: number;
  userRewardType: POINTS | TOKENS | ASYMMETRIC_REWARD;
  userTokenAddress: string;
};
```

The create campaign input type.

## Type declaration

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `asymmetricRewards`? | \{ `amount`: `string`; `participants`: `null` \| `USER` \| `PUBLISHER` \| `BOTH`; `payoutTx`: `null` \| `string`; `tokenAddress`: `string`; `userPubKey`: `null` \| `string`; \}[] | - | The asymmetric/raffle rewards to distribute |
| `audience`? | `null` \| `string` | - | The audiences that the offer/campaign is available to |
| `blinkOnly`? | `null` \| `boolean` | - | Deprecated: Whether the offer/campaign is blink only or not |
| `campaignContent`? | `null` \| `string` | - | Full campaign content of the offer/campaign in Markdown This supports large format content such as images, videos, in Markdown format |
| `campaignDescription`? | `null` \| `string` | - | A short description of the offer/campaign |
| `campaignImage`? | `null` \| `string` | - | The featured image for the offer/campaign |
| `campaignName` | `string` | - | The name of the campaign |
| `campaignType` | [`CampaignType`](../enumerations/CampaignType.md) | - | The type of campaign |
| `conversionAudience`? | \{ `campaignIds`: `string`[]; `operation`: [`ConversionAudienceOperation`](../enumerations/ConversionAudienceOperation.md); \} | - | If set, the offer can only be completed by user's who have completed a conversion for the given offers prior |
| `conversionAudience.campaignIds` | `string`[] | - | - |
| `conversionAudience.operation` | [`ConversionAudienceOperation`](../enumerations/ConversionAudienceOperation.md) | - | - |
| `conversionCount`? | `null` \| `number` | - | The total number of conversions |
| `endTime` | `number` | - | The end time of the campaign/offer in Unix timestamp |
| `eventConfig` | ( \| \{ `requirement`: `ClickActionSchema`; `type`: `CLICK`; \} \| \{ `requirement`: `CustomEventConfigSchema`; `type`: `CUSTOM_EVENT`; \} \| \{ `requirement`: `DriftBetActionSchema`; `type`: `DRIFT_BET`; \} \| \{ `requirement`: `DriftDepositActionSchema`; `type`: `DRIFT_DEPOSIT`; \} \| \{ `requirement`: `FormSubmissionActionSchema`; `type`: `FORM_SUBMISSION`; \} \| \{ `requirement`: `KaminoLendActionSchema`; `type`: `KAMINO_LEND`; \} \| \{ `requirement`: `MarginfiLendActionSchema`; `type`: `MARGINFI_LEND`; \} \| \{ `requirement`: `MemoActionSchema`; `type`: `MEMO`; \} \| \{ `requirement`: `NftBidBuySchema`; `type`: `NFT_BUY_BID`; \} \| \{ `requirement`: `NftCollectionTradeSchema`; `type`: `NFT_COLLECTION_TRADE`; \} \| \{ `requirement`: `RealmsVoteActionSchema`; `type`: `REALMS_VOTE`; \} \| \{ `requirement`: `StakeSolanaActionSchema`; `type`: `STAKE_SOL`; \} \| \{ `requirement`: `SwapActionSchema`; `timeConfig`: \{ `duration`: `number`; `requirement`: `TokenHoldingTimeConfigSchema`; `type`: `TOKEN_HOLDING`; \}; `type`: `SWAP`; \} \| \{ `requirement`: `TensorActionSchema`; `type`: `TENSOR_BID`; \} \| \{ `requirement`: `TensorActionSchema`; `type`: `TENSOR_BUY`; \})[] | - | The event requirements for the offer/campaign [EventRequirementConfig](EventRequirementConfig.md) |
| `landingPage` | `string` | - | Default launding page for the offer/campaign to link users to |
| `lootBoxRewards` | \{ `enabled`: `true`; `rewards`: \{ `amount`: `number`; `users`: `number`; \}[]; `tokenAddress`: `string`; \} \| \{ `enabled`: `false`; \} | LootBoxRewardInputSchema | The lootbox rewards to distribute |
| `offerBgImage`? | `null` \| `string` | - | The background image for the offer/campaign |
| `offerTheme` | [`OfferTheme`](../enumerations/OfferTheme.md) | - | The theme of the offer/campaign |
| `publisherPayoutPerConversion` | `number` | - | The payout per conversion for each referral by a publisher |
| `publisherRewardType` | [`RewardType`](../enumerations/RewardType.md) | - | The publisher reward type |
| `publisherTokenAddress`? | `string` | - | The publisher token address |
| `startTime` | `number` | - | The start time of the campaign/offer in Unix timestamp |
| `userPayoutPerConversion`? | `number` | - | The payout per conversion for each user |
| `userRewardType`? | `POINTS` \| `TOKENS` \| `ASYMMETRIC_REWARD` | - | The user reward type |
| `userTokenAddress`? | `string` | - | The user token address |

## Defined in

[types/campaigns.ts:269](https://github.com/torque-labs/torque-utils/blob/3bd29ca22f900f1cf2686f7f240bf82e15337207/types/campaigns.ts#L269)
