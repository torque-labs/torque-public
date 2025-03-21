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

Defined in: sdk/src/types/schemaTypes.ts:443

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

Defined in: sdk/src/types/schemaTypes.ts:444

#### activation

```ts
activation: 
  | {
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
```

##### Type declaration

###### requiredConversionCount?

```ts
optional requiredConversionCount: number;
```

#### availability?

```ts
optional availability: 
  | {
  maxConversionsPerRecipient: number | null;
  maxTotalConversions: number | null;
  recipientConversionPeriod: ... | ... | ... | ... | null;
 }
  | null;
```

#### distributionFunctionInput

```ts
distributionFunctionInput: 
  | {
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
```

#### recipient

```ts
recipient: "USER" | "PUBLISHER" | "BOTH" | "NONE";
```

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

Defined in: sdk/src/types/schemaTypes.ts:478

***

### emissionType

```ts
emissionType: "SOL" | "TOKENS" | "NFT" | "POINTS";
```

Defined in: sdk/src/types/schemaTypes.ts:498

***

### pointId?

```ts
optional pointId: string | null;
```

Defined in: sdk/src/types/schemaTypes.ts:499

***

### tokenAddress?

```ts
optional tokenAddress: string | null;
```

Defined in: sdk/src/types/schemaTypes.ts:500

***

### tokenDecimals?

```ts
optional tokenDecimals: number;
```

Defined in: sdk/src/types/schemaTypes.ts:501

***

### totalFundAmount

```ts
totalFundAmount: number;
```

Defined in: sdk/src/types/schemaTypes.ts:502

***

### type

```ts
type: "CONVERSION" | "ASYMMETRIC";
```

Defined in: sdk/src/types/schemaTypes.ts:503
