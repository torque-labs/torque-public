[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / OfferAudienceInput

# Type Alias: OfferAudienceInput

```ts
type OfferAudienceInput = 
  | {
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
 }
  | {
  audienceId: string | null;
};
```

Defined in: sdk/src/types/schemaTypes.ts:49
