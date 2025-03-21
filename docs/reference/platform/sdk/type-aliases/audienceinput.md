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

Defined in: [sdk/src/types/schemaTypes.ts:46](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l46)

## Type declaration

| Name | Type |
| ------ | ------ |
| `name` | `string` |
