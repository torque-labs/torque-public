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

Defined in: [sdk/src/types/schemaTypes.ts:877](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l877)

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
