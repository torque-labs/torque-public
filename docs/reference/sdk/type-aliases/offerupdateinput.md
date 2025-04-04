[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / OfferUpdateInput

# Type Alias: OfferUpdateInput

```ts
type OfferUpdateInput = {
  audienceId: string;
  endTime: Date;
  metadata: {
     backgroundColor: string | null;
     backgroundImage: string | null;
     colorMode: "light" | "dark" | null;
     description: string | null;
     image: string | null;
     title: string;
     url: string | null;
    };
  projectId: string | null;
  requirements:   | {
     config: {
        amount: {
           max: number;
           min: number;
           type: "number";
          };
        tokenAddress: {
           type: "string";
           validation: "exactMatch" | "regEx";
           value: string;
          };
       };
     oracle: "SOLANA_TX";
     type: "BURN";
    }
     | {
     config: {
        amount: {
           max: number;
           min: number;
           type: "number";
          };
        tokenAddress: {
           type: "string";
           validation: "exactMatch" | "regEx";
           value: string;
          };
       };
     oracle: "SOLANA_TX";
     type: "BUY";
    }
     | {
     config: {
        amount: {
           max: number;
           min: number;
           type: "number";
          };
        tokenAddress: {
           type: "string";
           validation: "exactMatch" | "regEx";
           value: string;
          };
       };
     oracle: "SOLANA_TX";
     type: "SELL";
    }
     | {
     config: {
        amount: {
           max: number;
           min: number;
           type: "number";
          };
        seconds: number;
        validatorAddress: {
           type: "string";
           validation: "exactMatch" | "regEx";
           value: string;
          };
       };
     oracle: "SOLANA_TX";
     type: "STAKE_SOL";
    }
     | {
     config: {
        customProgram: {
           type: "string";
           validation: ... | ...;
           value: string;
          };
        dao: {
           type: "string";
           validation: "exactMatch" | "regEx";
           value: string;
          };
        proposal: {
           type: "string";
           validation: "exactMatch" | "regEx";
           value: string;
          };
       };
     oracle: "SOLANA_TX";
     type: "VOTE";
    }
     | {
     config: {
        message: {
           type: "string";
           validation: "exactMatch" | "regEx";
           value: string;
          };
       };
     oracle: "MESSAGE_SIGNATURE";
     type: "MESSAGE_SIGNATURE";
    }
     | {
     config: {
        targetId: {
           type: "string";
           validation: "exactMatch" | "regEx";
           value: string;
          };
       };
     oracle: "SOCIAL_MEDIA";
     type: "X_FOLLOW";
    }
     | {
     config: {
        targetId: {
           type: "string";
           validation: "exactMatch" | "regEx";
           value: string;
          };
       };
     oracle: "SOCIAL_MEDIA";
     type: "X_LIKE";
    }
     | {
     config: {
        targetId: {
           type: "string";
           validation: "exactMatch" | "regEx";
           value: string;
          };
       };
     oracle: "SOCIAL_MEDIA";
     type: "X_REPOST";
    }
     | {
     config: {
        targetId: {
           type: "string";
           validation: "exactMatch" | "regEx";
           value: string;
          };
       };
     oracle: "SOCIAL_MEDIA";
     type: "X_COMMENT";
    }
     | {
     config: {
        eventName: string;
        fields: (... | ... | ...)[];
       };
     oracle: "CUSTOM_EVENT_PROVIDER";
     type: "CUSTOM";
    }
     | {
     config: {
        amount: {
           max: number;
           min: number;
           type: "number";
          };
        proposal: {
           type: "string";
           validation: "exactMatch" | "regEx";
           value: string;
          };
       };
     oracle: "CUSTOM_EVENT_PROVIDER";
     type: "META_DAO_BUY";
    } & {
     actionUrl: string | null;
     oracle:   | "TORQUE"
        | "SOLANA_TX"
        | "CUSTOM_EVENT_PROVIDER"
        | "PYTH_MKT_CAP"
        | "PYTH_MKT_VOLUME"
        | "MESSAGE_SIGNATURE"
        | "SOCIAL_MEDIA";
    }[];
  startTime: Date;
};
```

Defined in: [sdk/src/types/schemaTypes.ts:1371](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1371)

## Properties

### audienceId?

```ts
optional audienceId: string;
```

Defined in: [sdk/src/types/schemaTypes.ts:1372](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1372)

***

### endTime

```ts
endTime: Date;
```

Defined in: [sdk/src/types/schemaTypes.ts:1577](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1577)

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

Defined in: [sdk/src/types/schemaTypes.ts:1578](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1578)

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

### projectId?

```ts
optional projectId: string | null;
```

Defined in: [sdk/src/types/schemaTypes.ts:1587](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1587)

***

### requirements

```ts
requirements: 
  | {
  config: {
     amount: {
        max: number;
        min: number;
        type: "number";
       };
     tokenAddress: {
        type: "string";
        validation: "exactMatch" | "regEx";
        value: string;
       };
    };
  oracle: "SOLANA_TX";
  type: "BURN";
 }
  | {
  config: {
     amount: {
        max: number;
        min: number;
        type: "number";
       };
     tokenAddress: {
        type: "string";
        validation: "exactMatch" | "regEx";
        value: string;
       };
    };
  oracle: "SOLANA_TX";
  type: "BUY";
 }
  | {
  config: {
     amount: {
        max: number;
        min: number;
        type: "number";
       };
     tokenAddress: {
        type: "string";
        validation: "exactMatch" | "regEx";
        value: string;
       };
    };
  oracle: "SOLANA_TX";
  type: "SELL";
 }
  | {
  config: {
     amount: {
        max: number;
        min: number;
        type: "number";
       };
     seconds: number;
     validatorAddress: {
        type: "string";
        validation: "exactMatch" | "regEx";
        value: string;
       };
    };
  oracle: "SOLANA_TX";
  type: "STAKE_SOL";
 }
  | {
  config: {
     customProgram: {
        type: "string";
        validation: ... | ...;
        value: string;
       };
     dao: {
        type: "string";
        validation: "exactMatch" | "regEx";
        value: string;
       };
     proposal: {
        type: "string";
        validation: "exactMatch" | "regEx";
        value: string;
       };
    };
  oracle: "SOLANA_TX";
  type: "VOTE";
 }
  | {
  config: {
     message: {
        type: "string";
        validation: "exactMatch" | "regEx";
        value: string;
       };
    };
  oracle: "MESSAGE_SIGNATURE";
  type: "MESSAGE_SIGNATURE";
 }
  | {
  config: {
     targetId: {
        type: "string";
        validation: "exactMatch" | "regEx";
        value: string;
       };
    };
  oracle: "SOCIAL_MEDIA";
  type: "X_FOLLOW";
 }
  | {
  config: {
     targetId: {
        type: "string";
        validation: "exactMatch" | "regEx";
        value: string;
       };
    };
  oracle: "SOCIAL_MEDIA";
  type: "X_LIKE";
 }
  | {
  config: {
     targetId: {
        type: "string";
        validation: "exactMatch" | "regEx";
        value: string;
       };
    };
  oracle: "SOCIAL_MEDIA";
  type: "X_REPOST";
 }
  | {
  config: {
     targetId: {
        type: "string";
        validation: "exactMatch" | "regEx";
        value: string;
       };
    };
  oracle: "SOCIAL_MEDIA";
  type: "X_COMMENT";
 }
  | {
  config: {
     eventName: string;
     fields: (... | ... | ...)[];
    };
  oracle: "CUSTOM_EVENT_PROVIDER";
  type: "CUSTOM";
 }
  | {
  config: {
     amount: {
        max: number;
        min: number;
        type: "number";
       };
     proposal: {
        type: "string";
        validation: "exactMatch" | "regEx";
        value: string;
       };
    };
  oracle: "CUSTOM_EVENT_PROVIDER";
  type: "META_DAO_BUY";
 } & {
  actionUrl: string | null;
  oracle:   | "TORQUE"
     | "SOLANA_TX"
     | "CUSTOM_EVENT_PROVIDER"
     | "PYTH_MKT_CAP"
     | "PYTH_MKT_VOLUME"
     | "MESSAGE_SIGNATURE"
     | "SOCIAL_MEDIA";
 }[];
```

Defined in: [sdk/src/types/schemaTypes.ts:1373](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1373)

***

### startTime

```ts
startTime: Date;
```

Defined in: [sdk/src/types/schemaTypes.ts:1576](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1576)
