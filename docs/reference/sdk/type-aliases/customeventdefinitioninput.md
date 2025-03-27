[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / CustomEventDefinitionInput

# Type Alias: CustomEventDefinitionInput

```ts
type CustomEventDefinitionInput = {
  eventName: string;
  fields: {
     description: string | null;
     fieldName: string;
     label: string | null;
     type: "string" | "boolean" | "number";
    }[];
};
```

Defined in: [sdk/src/types/schemaTypes.ts:868](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l868)

## Properties

### eventName

```ts
eventName: string;
```

Defined in: [sdk/src/types/schemaTypes.ts:869](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l869)

***

### fields

```ts
fields: {
  description: string | null;
  fieldName: string;
  label: string | null;
  type: "string" | "boolean" | "number";
 }[];
```

Defined in: [sdk/src/types/schemaTypes.ts:870](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l870)

| Name | Type |
| ------ | ------ |
| `description?` | `string` \| `null` |
| `fieldName` | `string` |
| `label?` | `string` \| `null` |
| `type` | `"string"` \| `"boolean"` \| `"number"` |
