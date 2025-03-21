[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / DistributorUpdateInput

# Type Alias: DistributorUpdateInput

```ts
type DistributorUpdateInput = {
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

Defined in: [sdk/src/types/schemaTypes.ts:778](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l778)

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

Defined in: [sdk/src/types/schemaTypes.ts:779](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l779)

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

Defined in: [sdk/src/types/schemaTypes.ts:831](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l831)

***

### emissionType

```ts
emissionType: "SOL" | "TOKENS" | "NFT" | "POINTS";
```

Defined in: [sdk/src/types/schemaTypes.ts:855](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l855)

***

### pointId?

```ts
optional pointId: string | null;
```

Defined in: [sdk/src/types/schemaTypes.ts:856](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l856)

***

### tokenAddress?

```ts
optional tokenAddress: string | null;
```

Defined in: [sdk/src/types/schemaTypes.ts:857](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l857)

***

### tokenDecimals?

```ts
optional tokenDecimals: number;
```

Defined in: [sdk/src/types/schemaTypes.ts:858](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l858)

***

### totalFundAmount

```ts
totalFundAmount: number;
```

Defined in: [sdk/src/types/schemaTypes.ts:859](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l859)

***

### type

```ts
type: "CONVERSION" | "ASYMMETRIC";
```

Defined in: [sdk/src/types/schemaTypes.ts:860](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l860)
