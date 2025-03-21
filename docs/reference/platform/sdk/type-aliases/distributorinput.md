[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / DistributorInput

# Type Alias: DistributorInput

```ts
type DistributorInput = {
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
        recipientConversionPeriod: ... | ... | ... | ... | null;
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
  distributionFunction:   | {
     type: "CONSTANT";
     yIntercept: number;
    }
     | {
     slope: number;
     trend: "NEGATIVE" | "POSITIVE";
     type: "LINEAR";
     yIntercept: number;
    }
     | {
     tiers: {
        input: number;
        output: number;
       }[];
     type: "STEP";
    }
     | {
     curveDepth: number;
     curveWidth: number;
     type: "EXPONENTIAL";
     yIntercept: number;
    };
  emissionType: "SOL" | "TOKENS" | "NFT" | "POINTS";
  pointId: string | null;
  tokenAddress: string | null;
  tokenDecimals: number;
  totalFundAmount: number;
  type: "CONVERSION" | "ASYMMETRIC";
};
```

Defined in: [sdk/src/types/schemaTypes.ts:694](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l694)

## Properties

### crankGuard

```ts
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
     recipientConversionPeriod: ... | ... | ... | ... | null;
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

Defined in: [sdk/src/types/schemaTypes.ts:695](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l695)

| Name | Type |
| ------ | ------ |
| `activation` | \| \{ `type`: `"OFFER_START"`; \} \| \{ `type`: `"OFFER_CONCLUSION"`; \} \| \{ `type`: `"CONVERSION_COUNT"`; \} \| \{ `amount`: `number`; `oracle`: \| `"TORQUE"` \| `"SOLANA_TX"` \| `"CUSTOM_EVENT_PROVIDER"` \| `"PYTH_MKT_CAP"` \| `"PYTH_MKT_VOLUME"` \| `"MESSAGE_SIGNATURE"` \| `"SOCIAL_MEDIA"`; `type`: `"EVENT"`; \} \| \{ `date`: `Date`; `type`: `"DATE"`; \} & \{ `requiredConversionCount`: `number`; \} |
| `availability?` | \| \{ `maxConversionsPerRecipient`: `number` \| `null`; `maxTotalConversions`: `number` \| `null`; `recipientConversionPeriod`: ... \| ... \| ... \| ... \| `null`; \} \| `null` |
| `distributionFunctionInput` | \| \{ `type`: `"CONVERSION_INDEX"`; \} \| \{ `max`: `number` \| `null`; `min`: `number` \| `null`; `type`: `"CONVERSION_DATA"`; \} \| \{ `aggregationType`: `"BUY_VOLUME"` \| `"BUY_AVERAGE"`; `type`: `"AGGREGATION"`; \} |
| `recipient` | `"USER"` \| `"PUBLISHER"` \| `"BOTH"` \| `"NONE"` |

***

### distributionFunction

```ts
distributionFunction: 
  | {
  type: "CONSTANT";
  yIntercept: number;
 }
  | {
  slope: number;
  trend: "NEGATIVE" | "POSITIVE";
  type: "LINEAR";
  yIntercept: number;
 }
  | {
  tiers: {
     input: number;
     output: number;
    }[];
  type: "STEP";
 }
  | {
  curveDepth: number;
  curveWidth: number;
  type: "EXPONENTIAL";
  yIntercept: number;
};
```

Defined in: [sdk/src/types/schemaTypes.ts:747](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l747)

***

### emissionType

```ts
emissionType: "SOL" | "TOKENS" | "NFT" | "POINTS";
```

Defined in: [sdk/src/types/schemaTypes.ts:771](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l771)

***

### pointId?

```ts
optional pointId: string | null;
```

Defined in: [sdk/src/types/schemaTypes.ts:772](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l772)

***

### tokenAddress?

```ts
optional tokenAddress: string | null;
```

Defined in: [sdk/src/types/schemaTypes.ts:773](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l773)

***

### tokenDecimals?

```ts
optional tokenDecimals: number;
```

Defined in: [sdk/src/types/schemaTypes.ts:774](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l774)

***

### totalFundAmount

```ts
totalFundAmount: number;
```

Defined in: [sdk/src/types/schemaTypes.ts:775](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l775)

***

### type

```ts
type: "CONVERSION" | "ASYMMETRIC";
```

Defined in: [sdk/src/types/schemaTypes.ts:776](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l776)
