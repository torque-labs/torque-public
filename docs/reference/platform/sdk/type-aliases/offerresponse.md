[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / OfferResponse

# Type Alias: OfferResponse

```ts
type OfferResponse = {
  audience:   | {
     address: string | null;
     amount:   | 
        | number
        | string
        | {
        d: ...;
        e: ...;
        s: ...;
       }
        | null;
     createdAt: Date;
     id: string;
     name: string;
     tokenGateType: "NFT" | "SPL" | null;
     type: "ALLOWLIST" | "DENYLIST" | "TOKEN_GATE";
     updatedAt: Date;
    }
     | null;
  createdAt: Date;
  distributors: {
     closeTxSignature: string | null;
     conversions: number | null;
     crankerStatus: "IDLE" | "RUNNING" | "STOPPED";
     crankGuard: {
        activation:   | {
           type: ...;
          }
           | {
           type: ...;
          }
           | {
           type: ...;
          }
           | {
           amount: ...;
           oracle: ...;
           type: ...;
          }
           | {
           date: ...;
           type: ...;
          } & {
           requiredConversionCount: number;
          };
        availability:   | {
           maxConversionsPerRecipient: ...;
           maxTotalConversions: ...;
           recipientConversionPeriod: ...;
          }
           | null;
        distributionFunctionInput:   | {
           type: "CONVERSION_INDEX";
          }
           | {
           max: ...;
           min: ...;
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
        curveDepth: ... | null;
        curveWidth: ... | null;
        id: string;
        slope: ... | null;
        tiers: any | null;
        trend: ... | null;
        type: "CONSTANT" | "LINEAR" | "STEP" | "EXPONENTIAL";
        updatedAt: Date;
        yIntercept: ... | null;
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
    }[];
  endTime: Date;
  id: string;
  metadata: {
     backgroundColor: string | null;
     backgroundImage: string | null;
     colorMode: "light" | "dark" | null;
     description: string | null;
     image: string | null;
     title: string;
     url: string | null;
    };
  offerRequirements: {
     actionUrl: string | null;
     config: any;
     createdAt: Date;
     id: string;
     oracle:   | "TORQUE"
        | "SOLANA_TX"
        | "CUSTOM_EVENT_PROVIDER"
        | "PYTH_MKT_CAP"
        | "PYTH_MKT_VOLUME"
        | "MESSAGE_SIGNATURE"
        | "SOCIAL_MEDIA";
     type: string;
     updatedAt: Date;
    }[];
  startTime: Date;
  status: "DRAFT" | "ACTIVE" | "CLOSED";
  updatedAt: Date;
};
```

Defined in: [sdk/src/types/schemaTypes.ts:1603](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1603)

## Properties

### audience?

```ts
optional audience: 
  | {
  address: string | null;
  amount:   | 
     | number
     | string
     | {
     d: ...;
     e: ...;
     s: ...;
    }
     | null;
  createdAt: Date;
  id: string;
  name: string;
  tokenGateType: "NFT" | "SPL" | null;
  type: "ALLOWLIST" | "DENYLIST" | "TOKEN_GATE";
  updatedAt: Date;
 }
  | null;
```

Defined in: [sdk/src/types/schemaTypes.ts:1619](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1619)

***

### createdAt?

```ts
optional createdAt: Date;
```

Defined in: [sdk/src/types/schemaTypes.ts:1617](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1617)

***

### distributors

```ts
distributors: {
  closeTxSignature: string | null;
  conversions: number | null;
  crankerStatus: "IDLE" | "RUNNING" | "STOPPED";
  crankGuard: {
     activation:   | {
        type: ...;
       }
        | {
        type: ...;
       }
        | {
        type: ...;
       }
        | {
        amount: ...;
        oracle: ...;
        type: ...;
       }
        | {
        date: ...;
        type: ...;
       } & {
        requiredConversionCount: number;
       };
     availability:   | {
        maxConversionsPerRecipient: ...;
        maxTotalConversions: ...;
        recipientConversionPeriod: ...;
       }
        | null;
     distributionFunctionInput:   | {
        type: "CONVERSION_INDEX";
       }
        | {
        max: ...;
        min: ...;
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
     curveDepth: ... | null;
     curveWidth: ... | null;
     id: string;
     slope: ... | null;
     tiers: any | null;
     trend: ... | null;
     type: "CONSTANT" | "LINEAR" | "STEP" | "EXPONENTIAL";
     updatedAt: Date;
     yIntercept: ... | null;
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
 }[];
```

Defined in: [sdk/src/types/schemaTypes.ts:1660](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1660)

***

### endTime

```ts
endTime: Date;
```

Defined in: [sdk/src/types/schemaTypes.ts:1607](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1607)

***

### id

```ts
id: string;
```

Defined in: [sdk/src/types/schemaTypes.ts:1604](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1604)

***

### metadata

```ts
metadata: {
  backgroundColor: string | null;
  backgroundImage: string | null;
  colorMode: "light" | "dark" | null;
  description: string | null;
  image: string | null;
  title: string;
  url: string | null;
};
```

Defined in: [sdk/src/types/schemaTypes.ts:1608](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1608)

| Name | Type |
| ------ | ------ |
| `backgroundColor?` | `string` \| `null` |
| `backgroundImage?` | `string` \| `null` |
| `colorMode?` | `"light"` \| `"dark"` \| `null` |
| `description?` | `string` \| `null` |
| `image?` | `string` \| `null` |
| `title` | `string` |
| `url?` | `string` \| `null` |

***

### offerRequirements

```ts
offerRequirements: {
  actionUrl: string | null;
  config: any;
  createdAt: Date;
  id: string;
  oracle:   | "TORQUE"
     | "SOLANA_TX"
     | "CUSTOM_EVENT_PROVIDER"
     | "PYTH_MKT_CAP"
     | "PYTH_MKT_VOLUME"
     | "MESSAGE_SIGNATURE"
     | "SOCIAL_MEDIA";
  type: string;
  updatedAt: Date;
 }[];
```

Defined in: [sdk/src/types/schemaTypes.ts:1644](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1644)

| Name | Type |
| ------ | ------ |
| `actionUrl?` | `string` \| `null` |
| `config?` | `any` |
| `createdAt?` | `Date` |
| `id` | `string` |
| `oracle` | \| `"TORQUE"` \| `"SOLANA_TX"` \| `"CUSTOM_EVENT_PROVIDER"` \| `"PYTH_MKT_CAP"` \| `"PYTH_MKT_VOLUME"` \| `"MESSAGE_SIGNATURE"` \| `"SOCIAL_MEDIA"` |
| `type` | `string` |
| `updatedAt` | `Date` |

***

### startTime

```ts
startTime: Date;
```

Defined in: [sdk/src/types/schemaTypes.ts:1606](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1606)

***

### status

```ts
status: "DRAFT" | "ACTIVE" | "CLOSED";
```

Defined in: [sdk/src/types/schemaTypes.ts:1605](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1605)

***

### updatedAt

```ts
updatedAt: Date;
```

Defined in: [sdk/src/types/schemaTypes.ts:1618](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1618)
