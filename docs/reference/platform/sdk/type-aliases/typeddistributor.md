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

Defined in: sdk/src/types/schemaTypes.ts:275

## Properties

### closeTxSignature?

```ts
optional closeTxSignature: string | null;
```

Defined in: sdk/src/types/schemaTypes.ts:291

***

### conversions?

```ts
optional conversions: number | null;
```

Defined in: sdk/src/types/schemaTypes.ts:355

***

### crankerStatus

```ts
crankerStatus: "IDLE" | "RUNNING" | "STOPPED";
```

Defined in: sdk/src/types/schemaTypes.ts:279

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

Defined in: sdk/src/types/schemaTypes.ts:293

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
  recipientConversionPeriod: ... | null;
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

### currentBlockHash?

```ts
optional currentBlockHash: string | null;
```

Defined in: sdk/src/types/schemaTypes.ts:292

***

### deployTxSignature?

```ts
optional deployTxSignature: string | null;
```

Defined in: sdk/src/types/schemaTypes.ts:290

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

Defined in: sdk/src/types/schemaTypes.ts:327

#### createdAt?

```ts
optional createdAt: Date;
```

#### curveDepth?

```ts
optional curveDepth: 
  | 
  | number
  | string
  | {
  d: number[];
  e: number;
  s: number;
 }
  | null;
```

#### curveWidth?

```ts
optional curveWidth: 
  | 
  | number
  | string
  | {
  d: number[];
  e: number;
  s: number;
 }
  | null;
```

#### id

```ts
id: string;
```

#### slope?

```ts
optional slope: 
  | 
  | number
  | string
  | {
  d: number[];
  e: number;
  s: number;
 }
  | null;
```

#### tiers?

```ts
optional tiers: any | null;
```

#### trend?

```ts
optional trend: "NEGATIVE" | "POSITIVE" | null;
```

#### type

```ts
type: "CONSTANT" | "LINEAR" | "STEP" | "EXPONENTIAL";
```

#### updatedAt

```ts
updatedAt: Date;
```

#### yIntercept?

```ts
optional yIntercept: 
  | 
  | number
  | string
  | {
  d: number[];
  e: number;
  s: number;
 }
  | null;
```

***

### emissionType

```ts
emissionType: "SOL" | "TOKENS" | "NFT" | "POINTS";
```

Defined in: sdk/src/types/schemaTypes.ts:281

***

### index

```ts
index: number;
```

Defined in: sdk/src/types/schemaTypes.ts:277

***

### pubkey

```ts
pubkey: string;
```

Defined in: sdk/src/types/schemaTypes.ts:276

***

### serializedDeployTx?

```ts
optional serializedDeployTx: string | null;
```

Defined in: sdk/src/types/schemaTypes.ts:289

***

### status

```ts
status: "DRAFT" | "ACTIVE" | "CLOSED";
```

Defined in: sdk/src/types/schemaTypes.ts:278

***

### tokenAddress?

```ts
optional tokenAddress: string | null;
```

Defined in: sdk/src/types/schemaTypes.ts:282

***

### tokenDecimals?

```ts
optional tokenDecimals: number;
```

Defined in: sdk/src/types/schemaTypes.ts:283

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

Defined in: sdk/src/types/schemaTypes.ts:284

***

### type

```ts
type: "CONVERSION" | "ASYMMETRIC";
```

Defined in: sdk/src/types/schemaTypes.ts:280
