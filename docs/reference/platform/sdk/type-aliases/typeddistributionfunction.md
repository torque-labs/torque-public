[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / TypedDistributionFunction

# Type Alias: TypedDistributionFunction

```ts
type TypedDistributionFunction = {
  createdAt: Date;
  curveDepth:   | 
     | number
     | string
     | {
     d: number[];
     e: number;
     s: number;
    }
     | null;
  curveWidth:   | 
     | number
     | string
     | {
     d: number[];
     e: number;
     s: number;
    }
     | null;
  id: string;
  slope:   | 
     | number
     | string
     | {
     d: number[];
     e: number;
     s: number;
    }
     | null;
  tiers: any | null;
  trend: "NEGATIVE" | "POSITIVE" | null;
  type: "CONSTANT" | "LINEAR" | "STEP" | "EXPONENTIAL";
  updatedAt: Date;
 } & 
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

Defined in: sdk/src/types/schemaTypes.ts:233

## Type declaration

| Name | Type |
| ------ | ------ |
| `createdAt?` | `Date` |
| `curveDepth?` | \| \| `number` \| `string` \| \{ `d`: `number`[]; `e`: `number`; `s`: `number`; \} \| `null` |
| `curveWidth?` | \| \| `number` \| `string` \| \{ `d`: `number`[]; `e`: `number`; `s`: `number`; \} \| `null` |
| `id` | `string` |
| `slope?` | \| \| `number` \| `string` \| \{ `d`: `number`[]; `e`: `number`; `s`: `number`; \} \| `null` |
| `tiers?` | `any` \| `null` |
| `trend?` | `"NEGATIVE"` \| `"POSITIVE"` \| `null` |
| `type` | `"CONSTANT"` \| `"LINEAR"` \| `"STEP"` \| `"EXPONENTIAL"` |
| `updatedAt` | `Date` |
