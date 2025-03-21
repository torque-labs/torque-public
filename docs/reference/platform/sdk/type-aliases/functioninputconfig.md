[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / FunctionInputConfig

# Type Alias: FunctionInputConfig

```ts
type FunctionInputConfig = 
  | {
  type: "CONVERSION_INDEX";
 }
  | {
  max: number | null;
  min: number | null;
  type: "CONVERSION_DATA";
 }
  | {
  aggregationType: "BUY_VOLUME" | "BUY_AVERAGE";
  type: "AGGREGATION";
};
```

Defined in: sdk/src/types/schemaTypes.ts:83
