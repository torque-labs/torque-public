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

Defined in: [sdk/src/types/schemaTypes.ts:1982](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1982)

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

Defined in: [sdk/src/types/schemaTypes.ts:1984](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1984)

| Name | Type |
| ------ | ------ |
| `eventName` | `string` |
| `fields` | ( \| \{ `fieldname`: `string`; `validation`: \{ `type`: `"string"`; `validation`: `"exactmatch"` \| `"regex"`; `value`: `string`; \}; \} \| \{ `fieldname`: `string`; `validation`: \{ `max`: `number`; `min`: `number`; `type`: `"number"`; \}; \} \| \{ `fieldname`: `string`; `validation`: \{ `exact`: `boolean`; `type`: `"boolean"`; \}; \})[] |

***

### oracle

```ts
oracle: "CUSTOM_EVENT_PROVIDER";
```

Defined in: [sdk/src/types/schemaTypes.ts:2012](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l2012)

***

### type

```ts
type: "CUSTOM";
```

Defined in: [sdk/src/types/schemaTypes.ts:1983](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1983)
