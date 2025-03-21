[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / CrankGuardInput

# Type Alias: CrankGuardInput

```ts
type CrankGuardInput = {
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
     recipientConversionPeriod: "HOURLY" | "DAILY" | "WEEKLY" | "MONTHLY" | null;
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

Defined in: sdk/src/types/schemaTypes.ts:170

## Properties

### activation

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

Defined in: sdk/src/types/schemaTypes.ts:172

#### Type declaration

##### requiredConversionCount?

```ts
optional requiredConversionCount: number;
```

***

### availability?

```ts
optional availability: 
  | {
  maxConversionsPerRecipient: number | null;
  maxTotalConversions: number | null;
  recipientConversionPeriod: "HOURLY" | "DAILY" | "WEEKLY" | "MONTHLY" | null;
 }
  | null;
```

Defined in: sdk/src/types/schemaTypes.ts:198

***

### distributionFunctionInput

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

Defined in: sdk/src/types/schemaTypes.ts:188

***

### recipient

```ts
recipient: "USER" | "PUBLISHER" | "BOTH" | "NONE";
```

Defined in: sdk/src/types/schemaTypes.ts:171
