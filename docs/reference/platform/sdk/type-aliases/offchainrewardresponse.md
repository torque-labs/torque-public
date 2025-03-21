[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / OffchainRewardResponse

# Type Alias: OffchainRewardResponse

```ts
type OffchainRewardResponse = {
  createdAt: Date;
  description: string | null;
  distributors:   | {
     closeTxSignature: ... | ...;
     conversions: ... | ...;
     crankerStatus: "IDLE" | "RUNNING" | "STOPPED";
     crankGuard: {
        activation: ... & ...;
        availability: ... | ...;
        distributionFunctionInput: ... | ... | ...;
        recipient: ... | ... | ... | ...;
       };
     currentBlockHash: ... | ...;
     deployTxSignature: ... | ...;
     distributionFunction: {
        createdAt: Date;
        curveDepth: ... | ...;
        curveWidth: ... | ...;
        id: string;
        slope: ... | ...;
        tiers: ... | ...;
        trend: ... | ...;
        type: ... | ... | ... | ...;
        updatedAt: Date;
        yIntercept: ... | ...;
       };
     emissionType: "SOL" | "TOKENS" | "NFT" | "POINTS";
     index: number;
     pubkey: string;
     serializedDeployTx: ... | ...;
     status: "DRAFT" | "ACTIVE" | "CLOSED";
     tokenAddress: ... | ...;
     tokenDecimals: number;
     totalFundAmount:   | number
        | string
        | {
        d: ...[];
        e: number;
        s: number;
       };
     type: "CONVERSION" | "ASYMMETRIC";
    } & {
     createdAt: Date;
     id: string;
     updatedAt: Date;
    }[]
     | null;
  id: string;
  image: string;
  name: string;
  project:   | {
     createdAt: Date;
     description: string | null;
     discord: string | null;
     id: string;
     image: string | null;
     name: string;
     offchainAllocationEndpoint: string | null;
     telegram: string | null;
     twitter: string | null;
     updatedAt: Date;
     website: string | null;
    }
     | null;
  symbol: string | null;
  type: "POINT" | "BADGE";
  updatedAt: Date;
  userBadges:   | {
     badge: {
        createdAt: Date;
        description: string | null;
        id: string;
        image: string;
        name: string;
        symbol: string | null;
        type: "POINT" | "BADGE";
        updatedAt: Date;
       };
     createdAt: Date;
     id: string;
     updatedAt: Date;
    }[]
     | null;
};
```

Defined in: sdk/src/types/schemaTypes.ts:624

## Properties

### createdAt?

```ts
optional createdAt: Date;
```

Defined in: sdk/src/types/schemaTypes.ts:631

***

### description?

```ts
optional description: string | null;
```

Defined in: sdk/src/types/schemaTypes.ts:629

***

### distributors?

```ts
optional distributors: 
  | {
  closeTxSignature: ... | ...;
  conversions: ... | ...;
  crankerStatus: "IDLE" | "RUNNING" | "STOPPED";
  crankGuard: {
     activation: ... & ...;
     availability: ... | ...;
     distributionFunctionInput: ... | ... | ...;
     recipient: ... | ... | ... | ...;
    };
  currentBlockHash: ... | ...;
  deployTxSignature: ... | ...;
  distributionFunction: {
     createdAt: Date;
     curveDepth: ... | ...;
     curveWidth: ... | ...;
     id: string;
     slope: ... | ...;
     tiers: ... | ...;
     trend: ... | ...;
     type: ... | ... | ... | ...;
     updatedAt: Date;
     yIntercept: ... | ...;
    };
  emissionType: "SOL" | "TOKENS" | "NFT" | "POINTS";
  index: number;
  pubkey: string;
  serializedDeployTx: ... | ...;
  status: "DRAFT" | "ACTIVE" | "CLOSED";
  tokenAddress: ... | ...;
  tokenDecimals: number;
  totalFundAmount:   | number
     | string
     | {
     d: ...[];
     e: number;
     s: number;
    };
  type: "CONVERSION" | "ASYMMETRIC";
 } & {
  createdAt: Date;
  id: string;
  updatedAt: Date;
 }[]
  | null;
```

Defined in: sdk/src/types/schemaTypes.ts:646

***

### id

```ts
id: string;
```

Defined in: sdk/src/types/schemaTypes.ts:625

***

### image

```ts
image: string;
```

Defined in: sdk/src/types/schemaTypes.ts:628

***

### name

```ts
name: string;
```

Defined in: sdk/src/types/schemaTypes.ts:627

***

### project?

```ts
optional project: 
  | {
  createdAt: Date;
  description: string | null;
  discord: string | null;
  id: string;
  image: string | null;
  name: string;
  offchainAllocationEndpoint: string | null;
  telegram: string | null;
  twitter: string | null;
  updatedAt: Date;
  website: string | null;
 }
  | null;
```

Defined in: sdk/src/types/schemaTypes.ts:633

***

### symbol?

```ts
optional symbol: string | null;
```

Defined in: sdk/src/types/schemaTypes.ts:630

***

### type

```ts
type: "POINT" | "BADGE";
```

Defined in: sdk/src/types/schemaTypes.ts:626

***

### updatedAt

```ts
updatedAt: Date;
```

Defined in: sdk/src/types/schemaTypes.ts:632

***

### userBadges?

```ts
optional userBadges: 
  | {
  badge: {
     createdAt: Date;
     description: string | null;
     id: string;
     image: string;
     name: string;
     symbol: string | null;
     type: "POINT" | "BADGE";
     updatedAt: Date;
    };
  createdAt: Date;
  id: string;
  updatedAt: Date;
 }[]
  | null;
```

Defined in: sdk/src/types/schemaTypes.ts:732
