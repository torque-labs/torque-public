[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / TypedDistributor

# Type Alias: TypedDistributor

```ts
type TypedDistributor = {
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
        maxConversionsPerRecipient: number | null;
        maxTotalConversions: number | null;
        recipientConversionPeriod: ... | null;
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
        d: number[];
        e: number;
        s: number;
       }
        | null;
     curveWidth:   | 
        | number
        | string
        | {
        d: number[];
        e: number;
        s: number;
       }
        | null;
     id: string;
     slope:   | 
        | number
        | string
        | {
        d: number[];
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
        d: number[];
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
};
```

Defined in: [sdk/src/types/schemaTypes.ts:404](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l404)

## Properties

### closeTxSignature?

```ts
optional closeTxSignature: string | null;
```

Defined in: [sdk/src/types/schemaTypes.ts:423](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l423)

***

### conversions?

```ts
optional conversions: number | null;
```

Defined in: [sdk/src/types/schemaTypes.ts:545](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l545)

***

### crankerStatus

```ts
crankerStatus: "IDLE" | "RUNNING" | "STOPPED";
```

Defined in: [sdk/src/types/schemaTypes.ts:408](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l408)

***

### crankGuard?

```ts
optional crankGuard: {
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
     maxConversionsPerRecipient: number | null;
     maxTotalConversions: number | null;
     recipientConversionPeriod: ... | null;
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
```

Defined in: [sdk/src/types/schemaTypes.ts:425](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l425)

| Name | Type |
| ------ | ------ |
| `activation` | \| \{ `type`: `"OFFER_START"`; \} \| \{ `type`: `"OFFER_CONCLUSION"`; \} \| \{ `type`: `"CONVERSION_COUNT"`; \} \| \{ `amount`: `number`; `oracle`: \| `"TORQUE"` \| `"SOLANA_TX"` \| `"CUSTOM_EVENT_PROVIDER"` \| `"PYTH_MKT_CAP"` \| `"PYTH_MKT_VOLUME"` \| `"MESSAGE_SIGNATURE"` \| `"SOCIAL_MEDIA"`; `type`: `"EVENT"`; \} \| \{ `date`: `Date`; `type`: `"DATE"`; \} & \{ `requiredConversionCount`: `number`; \} |
| `availability?` | \| \{ `maxConversionsPerRecipient`: `number` \| `null`; `maxTotalConversions`: `number` \| `null`; `recipientConversionPeriod`: ... \| `null`; \} \| `null` |
| `distributionFunctionInput` | \| \{ `type`: `"CONVERSION_INDEX"`; \} \| \{ `max`: `number` \| `null`; `min`: `number` \| `null`; `type`: `"CONVERSION_DATA"`; \} \| \{ `aggregationType`: `"BUY_VOLUME"` \| `"BUY_AVERAGE"`; `type`: `"AGGREGATION"`; \} |
| `recipient` | `"USER"` \| `"PUBLISHER"` \| `"BOTH"` \| `"NONE"` |

***

### currentBlockHash?

```ts
optional currentBlockHash: string | null;
```

Defined in: [sdk/src/types/schemaTypes.ts:424](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l424)

***

### deployTxSignature?

```ts
optional deployTxSignature: string | null;
```

Defined in: [sdk/src/types/schemaTypes.ts:422](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l422)

***

### distributionFunction?

```ts
optional distributionFunction: {
  createdAt: Date;
  curveDepth:   | 
     | number
     | string
     | {
     d: number[];
     e: number;
     s: number;
    }
     | null;
  curveWidth:   | 
     | number
     | string
     | {
     d: number[];
     e: number;
     s: number;
    }
     | null;
  id: string;
  slope:   | 
     | number
     | string
     | {
     d: number[];
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
     d: number[];
     e: number;
     s: number;
    }
     | null;
};
```

Defined in: [sdk/src/types/schemaTypes.ts:479](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l479)

| Name | Type |
| ------ | ------ |
| `createdAt?` | `Date` |
| `curveDepth?` | \| \| `number` \| `string` \| \{ `d`: `number`[]; `e`: `number`; `s`: `number`; \} \| `null` |
| `curveWidth?` | \| \| `number` \| `string` \| \{ `d`: `number`[]; `e`: `number`; `s`: `number`; \} \| `null` |
| `id` | `string` |
| `slope?` | \| \| `number` \| `string` \| \{ `d`: `number`[]; `e`: `number`; `s`: `number`; \} \| `null` |
| `tiers?` | `any` \| `null` |
| `trend?` | `"NEGATIVE"` \| `"POSITIVE"` \| `null` |
| `type` | `"CONSTANT"` \| `"LINEAR"` \| `"STEP"` \| `"EXPONENTIAL"` |
| `updatedAt` | `Date` |
| `yIntercept?` | \| \| `number` \| `string` \| \{ `d`: `number`[]; `e`: `number`; `s`: `number`; \} \| `null` |

***

### emissionType

```ts
emissionType: "SOL" | "TOKENS" | "NFT" | "POINTS";
```

Defined in: [sdk/src/types/schemaTypes.ts:410](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l410)

***

### index

```ts
index: number;
```

Defined in: [sdk/src/types/schemaTypes.ts:406](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l406)

***

### pubkey

```ts
pubkey: string;
```

Defined in: [sdk/src/types/schemaTypes.ts:405](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l405)

***

### serializedDeployTx?

```ts
optional serializedDeployTx: string | null;
```

Defined in: [sdk/src/types/schemaTypes.ts:421](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l421)

***

### status

```ts
status: "DRAFT" | "ACTIVE" | "CLOSED";
```

Defined in: [sdk/src/types/schemaTypes.ts:407](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l407)

***

### tokenAddress?

```ts
optional tokenAddress: string | null;
```

Defined in: [sdk/src/types/schemaTypes.ts:411](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l411)

***

### tokenDecimals?

```ts
optional tokenDecimals: number;
```

Defined in: [sdk/src/types/schemaTypes.ts:412](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l412)

***

### totalFundAmount

```ts
totalFundAmount: 
  | number
  | string
  | {
  d: number[];
  e: number;
  s: number;
};
```

Defined in: [sdk/src/types/schemaTypes.ts:413](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l413)

***

### type

```ts
type: "CONVERSION" | "ASYMMETRIC";
```

Defined in: [sdk/src/types/schemaTypes.ts:409](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l409)
