[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / DistributionFunctionInput

# Type Alias: DistributionFunctionInput

```ts
type DistributionFunctionInput = 
  | {
  type: "CONSTANT";
  yIntercept: number;
 }
  | {
  slope: number;
  trend: "NEGATIVE" | "POSITIVE";
  type: "LINEAR";
  yIntercept: number;
 }
  | {
  tiers: {
     input: number;
     output: number;
    }[];
  type: "STEP";
 }
  | {
  curveDepth: number;
  curveWidth: number;
  type: "EXPONENTIAL";
  yIntercept: number;
};
```

Defined in: sdk/src/types/schemaTypes.ts:213
