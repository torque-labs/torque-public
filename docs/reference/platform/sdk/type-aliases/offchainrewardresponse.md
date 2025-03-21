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

Defined in: [sdk/src/types/schemaTypes.ts:919](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l919)

## Properties

### createdAt?

```ts
optional createdAt: Date;
```

Defined in: [sdk/src/types/schemaTypes.ts:926](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l926)

***

### description?

```ts
optional description: string | null;
```

Defined in: [sdk/src/types/schemaTypes.ts:924](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l924)

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

Defined in: [sdk/src/types/schemaTypes.ts:943](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l943)

***

### id

```ts
id: string;
```

Defined in: [sdk/src/types/schemaTypes.ts:920](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l920)

***

### image

```ts
image: string;
```

Defined in: [sdk/src/types/schemaTypes.ts:923](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l923)

***

### name

```ts
name: string;
```

Defined in: [sdk/src/types/schemaTypes.ts:922](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l922)

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

Defined in: [sdk/src/types/schemaTypes.ts:928](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l928)

***

### symbol?

```ts
optional symbol: string | null;
```

Defined in: [sdk/src/types/schemaTypes.ts:925](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l925)

***

### type

```ts
type: "POINT" | "BADGE";
```

Defined in: [sdk/src/types/schemaTypes.ts:921](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l921)

***

### updatedAt

```ts
updatedAt: Date;
```

Defined in: [sdk/src/types/schemaTypes.ts:927](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l927)

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

Defined in: [sdk/src/types/schemaTypes.ts:1097](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1097)
