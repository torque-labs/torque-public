[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / TypedCrankGuard

# Type Alias: TypedCrankGuard

```ts
type TypedCrankGuard = {
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

Defined in: [sdk/src/types/schemaTypes.ts:137](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l137)

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

Defined in: [sdk/src/types/schemaTypes.ts:139](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l139)

#### Type declaration

| Name | Type |
| ------ | ------ |
| `requiredConversionCount?` | `number` |

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

Defined in: [sdk/src/types/schemaTypes.ts:181](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l181)

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

Defined in: [sdk/src/types/schemaTypes.ts:168](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l168)

***

### recipient

```ts
recipient: "USER" | "PUBLISHER" | "BOTH" | "NONE";
```

Defined in: [sdk/src/types/schemaTypes.ts:138](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l138)
