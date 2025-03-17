[**@torque-labs/react**](../../../@torque-labs/react/README.md)

***

[Torque Labs](../../../README.md) / [@torque-labs/react](../README.md) / getOfferStatusFlags

# Function: getOfferStatusFlags()

```ts
function getOfferStatusFlags(offer): OfferStatus
```

Defined in: [packages/react/src/lib/offers.ts:17](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/react/src/lib/offers.ts#L17)

Gets the current status flags for an offer

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offer` | \{ `audienceId`: `null` \| `string`; `conversions`: `unknown`[]; `createdAt`: `Date`; `endTime`: `Date`; `id`: `string`; `metadata`: \{ `backgroundColor`: `null` \| `string`; `backgroundImage`: `null` \| `string`; `colorMode`: `null` \| `"light"` \| `"dark"`; `description`: `null` \| `string`; `image`: `null` \| `string`; `title`: `string`; `url`: `null` \| `string`; \}; `offerJourneys`: `unknown`[]; `project`: `Record`\<`string`, `unknown`\>; `projectId`: `null` \| `string`; `requirementJourneys`: `unknown`[]; `startTime`: `Date`; `status`: `"DRAFT"` \| `"ACTIVE"` \| `"CLOSED"`; `updatedAt`: `Date`; `user`: `Record`\<`string`, `unknown`\>; `userId`: `string`; \} & \{ `audience`: \| `null` \| \{ `address`: `null` \| `string`; `amount`: \| `null` \| `string` \| `number` \| `objectOutputType`\<\{ `d`: `ZodArray`\<`ZodNumber`, `"many"`\>; `e`: `ZodNumber`; `s`: `ZodNumber`; \}, `ZodTypeAny`, `"passthrough"`\>; `createdAt`: `Date`; `id`: `string`; `members`: `unknown`[]; `name`: `string`; `offers`: `unknown`[]; `project`: `Record`\<`string`, `unknown`\>; `projectId`: `string`; `tokenGateType`: `null` \| `"NFT"` \| `"SPL"`; `type`: `"ALLOWLIST"` \| `"DENYLIST"` \| `"TOKEN_GATE"`; `updatedAt`: `Date`; \}; `distributors`: \{ `asymmetricRewardEntries`: `unknown`[]; `closeTxSignature`: `null` \| `string`; `conversions`: `null` \| `number`; `crankerStatus`: `"IDLE"` \| `"RUNNING"` \| `"STOPPED"`; `crankGuard`: \{ `distributors`: `unknown`[]; `recipient`: `"USER"` \| `"PUBLISHER"` \| `"BOTH"` \| `"NONE"`; `user`: `Record`\<`string`, `unknown`\>; `userId`: `string`; \} & \{ `activation`: \| \{ `type`: ...; \} \| \{ `type`: ...; \} \| \{ `type`: ...; \} \| \{ `amount`: ...; `oracle`: ...; `type`: ...; \} \| \{ `date`: ...; `type`: ...; \} & \{ `requiredConversionCount`: ... \| ...; \}; `availability`: \| `null` \| \{ `maxConversionsPerRecipient`: ... \| ... \| ...; `maxTotalConversions`: ... \| ... \| ...; `recipientConversionPeriod`: ... \| ... \| ... \| ... \| ... \| ...; \}; `distributionFunctionInput`: \| \{ `type`: `CONVERSION_INDEX`; \} \| \{ `max`: ... \| ... \| ...; `min`: ... \| ... \| ...; `type`: `CONVERSION_DATA`; \} \| \{ `aggregationType`: `AggregationType`; `type`: `AGGREGATION`; \}; \}; `crankGuardId`: `string`; `cranks`: `unknown`[]; `currentBlockHash`: `null` \| `string`; `deployTxSignature`: `null` \| `string`; `distributionFunction`: \{ `createdAt`: `Date`; `curveDepth`: \| `null` \| `string` \| `number` \| `objectOutputType`\<\{ `d`: `ZodArray`\<..., ...\>; `e`: `ZodNumber`; `s`: `ZodNumber`; \}, `ZodTypeAny`, `"passthrough"`\>; `curveWidth`: \| `null` \| `string` \| `number` \| `objectOutputType`\<\{ `d`: `ZodArray`\<..., ...\>; `e`: `ZodNumber`; `s`: `ZodNumber`; \}, `ZodTypeAny`, `"passthrough"`\>; `distributors`: `unknown`[]; `id`: `string`; `slope`: \| `null` \| `string` \| `number` \| `objectOutputType`\<\{ `d`: `ZodArray`\<..., ...\>; `e`: `ZodNumber`; `s`: `ZodNumber`; \}, `ZodTypeAny`, `"passthrough"`\>; `tiers`: `any`; `trend`: `null` \| `"NEGATIVE"` \| `"POSITIVE"`; `type`: `"CONSTANT"` \| `"LINEAR"` \| `"STEP"` \| `"EXPONENTIAL"`; `updatedAt`: `Date`; `user`: `Record`\<`string`, `unknown`\>; `userId`: `string`; `yIntercept`: \| `null` \| `string` \| `number` \| `objectOutputType`\<\{ `d`: `ZodArray`\<..., ...\>; `e`: `ZodNumber`; `s`: `ZodNumber`; \}, `ZodTypeAny`, `"passthrough"`\>; \}; `distributionFunctionId`: `string`; `emissionType`: `"NFT"` \| `"SOL"` \| `"TOKENS"` \| `"POINTS"`; `index`: `number`; `offchainReward`: `Record`\<`string`, `unknown`\>; `offer`: `Record`\<`string`, `unknown`\>; `offerId`: `string`; `pointId`: `null` \| `string`; `pubkey`: `string`; `serializedDeployTx`: `null` \| `string`; `status`: `"DRAFT"` \| `"ACTIVE"` \| `"CLOSED"`; `tokenAddress`: `null` \| `string`; `tokenDecimals`: `number`; `totalFundAmount`: \| `string` \| `number` \| `objectOutputType`\<\{ `d`: `ZodArray`\<`ZodNumber`, `"many"`\>; `e`: `ZodNumber`; `s`: `ZodNumber`; \}, `ZodTypeAny`, `"passthrough"`\>; `type`: `"CONVERSION"` \| `"ASYMMETRIC"`; `user`: `Record`\<`string`, `unknown`\>; `userId`: `string`; \} & \{ `createdAt`: `Date`; `id`: `string`; `updatedAt`: `Date`; \}[]; `offerRequirements`: \{ `actionUrl`: `null` \| `string`; `config`: `any`; `createdAt`: `Date`; `id`: `string`; `offers`: `unknown`[]; `oracle`: \| `"TORQUE"` \| `"SOLANA_TX"` \| `"CUSTOM_EVENT_PROVIDER"` \| `"PYTH_MKT_CAP"` \| `"PYTH_MKT_VOLUME"` \| `"MESSAGE_SIGNATURE"` \| `"SOCIAL_MEDIA"`; `requirementJourneys`: `unknown`[]; `type`: `string`; `updatedAt`: `Date`; `user`: `Record`\<`string`, `unknown`\>; `userId`: `string`; \}[]; \} | The offer to get the status for |

## Returns

[`OfferStatus`](../type-aliases/OfferStatus.md)

The status flags for the offer
