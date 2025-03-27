[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / RequirementResponse

# Type Alias: RequirementResponse

```ts
type RequirementResponse = {
  actionUrl: string | null;
  oracle:   | "TORQUE"
     | "SOLANA_TX"
     | "CUSTOM_EVENT_PROVIDER"
     | "PYTH_MKT_CAP"
     | "PYTH_MKT_VOLUME"
     | "MESSAGE_SIGNATURE"
     | "SOCIAL_MEDIA";
 } & 
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
        validation: "exactMatch" | "regEx";
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
     fields: (
        | {
        fieldName: ...;
        validation: ...;
       }
        | {
        fieldName: ...;
        validation: ...;
       }
        | {
        fieldName: ...;
        validation: ...;
       })[];
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
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
```

Defined in: [sdk/src/types/schemaTypes.ts:2409](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l2409)

## Type declaration

| Name | Type |
| ------ | ------ |
| `createdAt` | `Date` |
| `id` | `string` |
| `updatedAt` | `Date` |
