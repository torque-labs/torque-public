[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / OfferInput

# Type Alias: OfferInput

```ts
type OfferInput = {
  audience:   | {
     name: string;
    } & 
     | {
     addresses: ...;
     slug: ...;
     type: "ALLOWLIST";
    }
     | {
     addresses: ...;
     slug: ...;
     type: "DENYLIST";
    }
     | {
     address: ...;
     amount: number;
     tokenGateType: "NFT" | "SPL";
     type: "TOKEN_GATE";
    }
     | {
     audienceId: string | null;
    };
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

Defined in: [sdk/src/types/schemaTypes.ts:1127](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1127)

## Properties

### audience?

```ts
optional audience: 
  | {
  name: string;
 } & 
  | {
  addresses: ...;
  slug: ...;
  type: "ALLOWLIST";
 }
  | {
  addresses: ...;
  slug: ...;
  type: "DENYLIST";
 }
  | {
  address: ...;
  amount: number;
  tokenGateType: "NFT" | "SPL";
  type: "TOKEN_GATE";
 }
  | {
  audienceId: string | null;
};
```

Defined in: [sdk/src/types/schemaTypes.ts:1128](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1128)

***

### endTime

```ts
endTime: Date;
```

Defined in: [sdk/src/types/schemaTypes.ts:1359](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1359)

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

Defined in: [sdk/src/types/schemaTypes.ts:1360](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1360)

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

Defined in: [sdk/src/types/schemaTypes.ts:1369](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1369)

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

Defined in: [sdk/src/types/schemaTypes.ts:1155](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1155)

***

### startTime

```ts
startTime: Date;
```

Defined in: [sdk/src/types/schemaTypes.ts:1358](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1358)
