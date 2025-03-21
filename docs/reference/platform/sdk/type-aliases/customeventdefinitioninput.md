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

Defined in: sdk/src/types/schemaTypes.ts:573

## Properties

### eventName

```ts
eventName: string;
```

Defined in: sdk/src/types/schemaTypes.ts:574

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

Defined in: sdk/src/types/schemaTypes.ts:575

#### description?

```ts
optional description: string | null;
```

#### fieldName

```ts
fieldName: string;
```

#### label?

```ts
optional label: string | null;
```

#### type

```ts
type: "string" | "boolean" | "number";
```
