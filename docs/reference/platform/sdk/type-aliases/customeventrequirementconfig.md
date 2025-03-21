[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / CustomEventRequirementConfig

# Type Alias: CustomEventRequirementConfig

```ts
type CustomEventRequirementConfig = {
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
};
```

Defined in: sdk/src/types/schemaTypes.ts:1457

## Properties

### config

```ts
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
```

Defined in: sdk/src/types/schemaTypes.ts:1459

#### eventName

```ts
eventName: string;
```

#### fields

```ts
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
```

***

### oracle

```ts
oracle: "CUSTOM_EVENT_PROVIDER";
```

Defined in: sdk/src/types/schemaTypes.ts:1483

***

### type

```ts
type: "CUSTOM";
```

Defined in: sdk/src/types/schemaTypes.ts:1458
