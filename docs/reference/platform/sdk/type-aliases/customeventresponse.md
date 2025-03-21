[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / CustomEventResponse

# Type Alias: CustomEventResponse

```ts
type CustomEventResponse = {
  eventName: string;
  fields: {
     description: string | null;
     fieldName: string;
     label: string | null;
     type: "string" | "boolean" | "number";
    }[];
 } & {
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
```

Defined in: sdk/src/types/schemaTypes.ts:582

## Type declaration

| Name | Type |
| ------ | ------ |
| `eventName` | `string` |
| `fields` | \{ `description`: `string` \| `null`; `fieldName`: `string`; `label`: `string` \| `null`; `type`: `"string"` \| `"boolean"` \| `"number"`; \}[] |

## Type declaration

| Name | Type |
| ------ | ------ |
| `createdAt` | `Date` |
| `id` | `string` |
| `updatedAt` | `Date` |
