[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / RewardActivationConfig

# Type Alias: RewardActivationConfig

```ts
type RewardActivationConfig = 
  | {
  type: "OFFER_START";
 }
  | {
  type: "OFFER_CONCLUSION";
 }
  | {
  type: "CONVERSION_COUNT";
 }
  | {
  amount: number;
  oracle:   | "TORQUE"
     | "SOLANA_TX"
     | "CUSTOM_EVENT_PROVIDER"
     | "PYTH_MKT_CAP"
     | "PYTH_MKT_VOLUME"
     | "MESSAGE_SIGNATURE"
     | "SOCIAL_MEDIA";
  type: "EVENT";
 }
  | {
  date: Date;
  type: "DATE";
 } & {
  requiredConversionCount: number;
};
```

Defined in: [sdk/src/types/schemaTypes.ts:90](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l90)

## Type declaration

| Name | Type |
| ------ | ------ |
| `requiredConversionCount?` | `number` |
