[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / TypedAudience

# Type Alias: TypedAudience

```ts
type TypedAudience = {
  name: string;
 } & 
  | {
  addresses: string[];
  type: "ALLOWLIST";
 }
  | {
  addresses: string[];
  type: "DENYLIST";
 }
  | {
  address: string | null;
  amount: number;
  tokenGateType: "NFT" | "SPL";
  type: "TOKEN_GATE";
};
```

Defined in: sdk/src/types/schemaTypes.ts:5

## Type declaration

| Name | Type |
| ------ | ------ |
| `name` | `string` |
