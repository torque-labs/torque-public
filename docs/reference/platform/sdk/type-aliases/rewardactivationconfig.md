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

Defined in: sdk/src/types/schemaTypes.ts:67

## Type declaration

| Name | Type |
| ------ | ------ |
| `requiredConversionCount?` | `number` |
