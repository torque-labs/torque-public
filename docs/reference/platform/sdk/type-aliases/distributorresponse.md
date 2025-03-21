[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / DistributorResponse

# Type Alias: DistributorResponse

```ts
type DistributorResponse = {
  closeTxSignature: string | null;
  conversions: number | null;
  crankerStatus: "IDLE" | "RUNNING" | "STOPPED";
  crankGuard: {
     activation:   | {
        type: "OFFER_START";
       }
        | {
        type: "OFFER_CONCLUSION";
       }
        | {
        type: "CONVERSION_COUNT";
       }
        | {
        amount: number;
        oracle:   | "TORQUE"
           | "SOLANA_TX"
           | "CUSTOM_EVENT_PROVIDER"
           | "PYTH_MKT_CAP"
           | "PYTH_MKT_VOLUME"
           | "MESSAGE_SIGNATURE"
           | "SOCIAL_MEDIA";
        type: "EVENT";
       }
        | {
        date: Date;
        type: "DATE";
       } & {
        requiredConversionCount: number;
       };
     availability:   | {
        maxConversionsPerRecipient: ... | ...;
        maxTotalConversions: ... | ...;
        recipientConversionPeriod: ... | ...;
       }
        | null;
     distributionFunctionInput:   | {
        type: "CONVERSION_INDEX";
       }
        | {
        max: number | null;
        min: number | null;
        type: "CONVERSION_DATA";
       }
        | {
        aggregationType: "BUY_VOLUME" | "BUY_AVERAGE";
        type: "AGGREGATION";
       };
     recipient: "USER" | "PUBLISHER" | "BOTH" | "NONE";
    };
  currentBlockHash: string | null;
  deployTxSignature: string | null;
  distributionFunction: {
     createdAt: Date;
     curveDepth:   | 
        | number
        | string
        | {
        d: ...[];
        e: number;
        s: number;
       }
        | null;
     curveWidth:   | 
        | number
        | string
        | {
        d: ...[];
        e: number;
        s: number;
       }
        | null;
     id: string;
     slope:   | 
        | number
        | string
        | {
        d: ...[];
        e: number;
        s: number;
       }
        | null;
     tiers: any | null;
     trend: "NEGATIVE" | "POSITIVE" | null;
     type: "CONSTANT" | "LINEAR" | "STEP" | "EXPONENTIAL";
     updatedAt: Date;
     yIntercept:   | 
        | number
        | string
        | {
        d: ...[];
        e: number;
        s: number;
       }
        | null;
    };
  emissionType: "SOL" | "TOKENS" | "NFT" | "POINTS";
  index: number;
  pubkey: string;
  serializedDeployTx: string | null;
  status: "DRAFT" | "ACTIVE" | "CLOSED";
  tokenAddress: string | null;
  tokenDecimals: number;
  totalFundAmount:   | number
     | string
     | {
     d: number[];
     e: number;
     s: number;
    };
  type: "CONVERSION" | "ASYMMETRIC";
 } & {
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
```

Defined in: sdk/src/types/schemaTypes.ts:357

## Type declaration

| Name | Type |
| ------ | ------ |
| `closeTxSignature?` | `string` \| `null` |
| `conversions?` | `number` \| `null` |
| `crankerStatus` | `"IDLE"` \| `"RUNNING"` \| `"STOPPED"` |
| `crankGuard?` | \{ `activation`: \| \{ `type`: `"OFFER_START"`; \} \| \{ `type`: `"OFFER_CONCLUSION"`; \} \| \{ `type`: `"CONVERSION_COUNT"`; \} \| \{ `amount`: `number`; `oracle`: \| `"TORQUE"` \| `"SOLANA_TX"` \| `"CUSTOM_EVENT_PROVIDER"` \| `"PYTH_MKT_CAP"` \| `"PYTH_MKT_VOLUME"` \| `"MESSAGE_SIGNATURE"` \| `"SOCIAL_MEDIA"`; `type`: `"EVENT"`; \} \| \{ `date`: `Date`; `type`: `"DATE"`; \} & \{ `requiredConversionCount`: `number`; \}; `availability`: \| \{ `maxConversionsPerRecipient`: ... \| ...; `maxTotalConversions`: ... \| ...; `recipientConversionPeriod`: ... \| ...; \} \| `null`; `distributionFunctionInput`: \| \{ `type`: `"CONVERSION_INDEX"`; \} \| \{ `max`: `number` \| `null`; `min`: `number` \| `null`; `type`: `"CONVERSION_DATA"`; \} \| \{ `aggregationType`: `"BUY_VOLUME"` \| `"BUY_AVERAGE"`; `type`: `"AGGREGATION"`; \}; `recipient`: `"USER"` \| `"PUBLISHER"` \| `"BOTH"` \| `"NONE"`; \} |
| `crankGuard.activation` | \| \{ `type`: `"OFFER_START"`; \} \| \{ `type`: `"OFFER_CONCLUSION"`; \} \| \{ `type`: `"CONVERSION_COUNT"`; \} \| \{ `amount`: `number`; `oracle`: \| `"TORQUE"` \| `"SOLANA_TX"` \| `"CUSTOM_EVENT_PROVIDER"` \| `"PYTH_MKT_CAP"` \| `"PYTH_MKT_VOLUME"` \| `"MESSAGE_SIGNATURE"` \| `"SOCIAL_MEDIA"`; `type`: `"EVENT"`; \} \| \{ `date`: `Date`; `type`: `"DATE"`; \} & \{ `requiredConversionCount`: `number`; \} |
| `crankGuard.availability?` | \| \{ `maxConversionsPerRecipient`: ... \| ...; `maxTotalConversions`: ... \| ...; `recipientConversionPeriod`: ... \| ...; \} \| `null` |
| `crankGuard.distributionFunctionInput` | \| \{ `type`: `"CONVERSION_INDEX"`; \} \| \{ `max`: `number` \| `null`; `min`: `number` \| `null`; `type`: `"CONVERSION_DATA"`; \} \| \{ `aggregationType`: `"BUY_VOLUME"` \| `"BUY_AVERAGE"`; `type`: `"AGGREGATION"`; \} |
| `crankGuard.recipient` | `"USER"` \| `"PUBLISHER"` \| `"BOTH"` \| `"NONE"` |
| `currentBlockHash?` | `string` \| `null` |
| `deployTxSignature?` | `string` \| `null` |
| `distributionFunction?` | \{ `createdAt`: `Date`; `curveDepth`: \| \| `number` \| `string` \| \{ `d`: ...[]; `e`: `number`; `s`: `number`; \} \| `null`; `curveWidth`: \| \| `number` \| `string` \| \{ `d`: ...[]; `e`: `number`; `s`: `number`; \} \| `null`; `id`: `string`; `slope`: \| \| `number` \| `string` \| \{ `d`: ...[]; `e`: `number`; `s`: `number`; \} \| `null`; `tiers`: `any` \| `null`; `trend`: `"NEGATIVE"` \| `"POSITIVE"` \| `null`; `type`: `"CONSTANT"` \| `"LINEAR"` \| `"STEP"` \| `"EXPONENTIAL"`; `updatedAt`: `Date`; `yIntercept`: \| \| `number` \| `string` \| \{ `d`: ...[]; `e`: `number`; `s`: `number`; \} \| `null`; \} |
| `distributionFunction.createdAt?` | `Date` |
| `distributionFunction.curveDepth?` | \| \| `number` \| `string` \| \{ `d`: ...[]; `e`: `number`; `s`: `number`; \} \| `null` |
| `distributionFunction.curveWidth?` | \| \| `number` \| `string` \| \{ `d`: ...[]; `e`: `number`; `s`: `number`; \} \| `null` |
| `distributionFunction.id` | `string` |
| `distributionFunction.slope?` | \| \| `number` \| `string` \| \{ `d`: ...[]; `e`: `number`; `s`: `number`; \} \| `null` |
| `distributionFunction.tiers?` | `any` \| `null` |
| `distributionFunction.trend?` | `"NEGATIVE"` \| `"POSITIVE"` \| `null` |
| `distributionFunction.type` | `"CONSTANT"` \| `"LINEAR"` \| `"STEP"` \| `"EXPONENTIAL"` |
| `distributionFunction.updatedAt` | `Date` |
| `distributionFunction.yIntercept?` | \| \| `number` \| `string` \| \{ `d`: ...[]; `e`: `number`; `s`: `number`; \} \| `null` |
| `emissionType` | `"SOL"` \| `"TOKENS"` \| `"NFT"` \| `"POINTS"` |
| `index` | `number` |
| `pubkey` | `string` |
| `serializedDeployTx?` | `string` \| `null` |
| `status` | `"DRAFT"` \| `"ACTIVE"` \| `"CLOSED"` |
| `tokenAddress?` | `string` \| `null` |
| `tokenDecimals?` | `number` |
| `totalFundAmount` | \| `number` \| `string` \| \{ `d`: `number`[]; `e`: `number`; `s`: `number`; \} |
| `type` | `"CONVERSION"` \| `"ASYMMETRIC"` |

## Type declaration

| Name | Type |
| ------ | ------ |
| `createdAt` | `Date` |
| `id` | `string` |
| `updatedAt` | `Date` |
