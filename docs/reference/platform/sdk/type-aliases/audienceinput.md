[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / AudienceInput

# Type Alias: AudienceInput

```ts
type AudienceInput = {
  name: string;
 } & 
  | {
  addresses: string[] | null;
  slug: string | null;
  type: "ALLOWLIST";
 }
  | {
  addresses: string[] | null;
  slug: string | null;
  type: "DENYLIST";
 }
  | {
  address: string | null;
  amount: number;
  tokenGateType: "NFT" | "SPL";
  type: "TOKEN_GATE";
};
```

Defined in: sdk/src/types/schemaTypes.ts:33

## Type declaration

| Name | Type |
| ------ | ------ |
| `name` | `string` |
