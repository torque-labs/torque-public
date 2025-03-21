[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / RequirementConfig

# Type Alias: RequirementConfig

```ts
type RequirementConfig = 
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
        fieldName: string;
        validation: {
           type: "string";
           validation: "exactMatch" | "regEx";
           value: string;
          };
       }
        | {
        fieldName: string;
        validation: {
           max: number;
           min: number;
           type: "number";
          };
       }
        | {
        fieldName: string;
        validation: {
           exact: boolean;
           type: "boolean";
          };
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
};
```

Defined in: sdk/src/types/schemaTypes.ts:1485
