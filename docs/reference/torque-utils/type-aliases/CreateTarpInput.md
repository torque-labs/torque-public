[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / CreateTarpInput

# Type Alias: CreateTarpInput

```ts
type CreateTarpInput: {
  amount: number;
  audience: null | string;
  blinkOnly: null | boolean;
  content: null | string;
  conversionAudience: {
     campaignIds: string[];
     operation: ConversionAudienceOperation;
    };
  description: null | string;
  endTime: number;
  eventConfig: EventRequirementConfigSchema;
  imageUrl: null | string;
  maxEntries: null | number;
  participants: TarpParticipants;
  startTime: number;
  targetLink: null | string;
  timeConfig: {
     duration: number;
     requirement: TokenHoldingTimeConfigSchema;
     type: TOKEN_HOLDING;
    } | {
     duration: number;
     requirement: OpenPositionTimeConfigSchema;
     type: OPEN_POSITION;
    } | {
     duration: number;
     requirement: StakeSolTimeConfigSchema;
     type: STAKE_SOL;
    };
  title: string;
  tokenMint: string;
  tokenStandard: TokenStandard;
};
```

## Type declaration

| Name | Type | Default value |
| ------ | ------ | ------ |
| `amount` | `number` | - |
| `audience`? | `null` \| `string` | - |
| `blinkOnly`? | `null` \| `boolean` | - |
| `content`? | `null` \| `string` | - |
| `conversionAudience`? | \{ `campaignIds`: `string`[]; `operation`: [`ConversionAudienceOperation`](../enumerations/ConversionAudienceOperation.md); \} | - |
| `conversionAudience.campaignIds` | `string`[] | - |
| `conversionAudience.operation` | [`ConversionAudienceOperation`](../enumerations/ConversionAudienceOperation.md) | - |
| `description`? | `null` \| `string` | - |
| `endTime` | `number` | - |
| `eventConfig` | \| \{ `requirement`: `ClickActionSchema`; `type`: `CLICK`; \} \| \{ `requirement`: `CustomEventConfigSchema`; `type`: `CUSTOM_EVENT`; \} \| \{ `requirement`: `DriftBetActionSchema`; `type`: `DRIFT_BET`; \} \| \{ `requirement`: `DriftDepositActionSchema`; `type`: `DRIFT_DEPOSIT`; \} \| \{ `requirement`: `FormSubmissionActionSchema`; `type`: `FORM_SUBMISSION`; \} \| \{ `requirement`: `KaminoLendActionSchema`; `type`: `KAMINO_LEND`; \} \| \{ `requirement`: `MarginfiLendActionSchema`; `type`: `MARGINFI_LEND`; \} \| \{ `requirement`: `MemoActionSchema`; `type`: `MEMO`; \} \| \{ `requirement`: `NftBidBuySchema`; `type`: `NFT_BUY_BID`; \} \| \{ `requirement`: `NftCollectionTradeSchema`; `type`: `NFT_COLLECTION_TRADE`; \} \| \{ `requirement`: `RealmsVoteActionSchema`; `type`: `REALMS_VOTE`; \} \| \{ `requirement`: `StakeSolanaActionSchema`; `type`: `STAKE_SOL`; \} \| \{ `requirement`: `SwapActionSchema`; `timeConfig`: \{ `duration`: `number`; `requirement`: `TokenHoldingTimeConfigSchema`; `type`: `TOKEN_HOLDING`; \}; `type`: `SWAP`; \} \| \{ `requirement`: `TensorActionSchema`; `type`: `TENSOR_BID`; \} \| \{ `requirement`: `TensorActionSchema`; `type`: `TENSOR_BUY`; \} | EventRequirementConfigSchema |
| `imageUrl`? | `null` \| `string` | - |
| `maxEntries`? | `null` \| `number` | - |
| `participants` | [`TarpParticipants`](../enumerations/TarpParticipants.md) | - |
| `startTime` | `number` | - |
| `targetLink`? | `null` \| `string` | - |
| `timeConfig`? | \{ `duration`: `number`; `requirement`: `TokenHoldingTimeConfigSchema`; `type`: `TOKEN_HOLDING`; \} \| \{ `duration`: `number`; `requirement`: `OpenPositionTimeConfigSchema`; `type`: `OPEN_POSITION`; \} \| \{ `duration`: `number`; `requirement`: `StakeSolTimeConfigSchema`; `type`: `STAKE_SOL`; \} | - |
| `title` | `string` | - |
| `tokenMint` | `string` | - |
| `tokenStandard` | [`TokenStandard`](../enumerations/TokenStandard.md) | - |

## Defined in

[types/tarp.ts:53](https://github.com/torque-labs/torque-utils/blob/3bd29ca22f900f1cf2686f7f240bf82e15337207/types/tarp.ts#L53)
