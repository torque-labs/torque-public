# Type Alias: CampaignAnalytics

[**@torque-labs/torque-ts-sdk**](../) • **Docs**

***

[@torque-labs/torque-ts-sdk](../) / CampaignAnalytics

## Type Alias: CampaignAnalytics

```ts
type CampaignAnalytics: {
  conversions: {
     15min: ConversionTime[];
     1d: ConversionTime[];
     1hr: ConversionTime[];
    };
  counts: {
     converted: number;
     started: number;
    };
  payouts: {
     amount: number;
     count: number;
    };
  starts: {
     15min: ConversionTime[];
     1d: ConversionTime[];
     1hr: ConversionTime[];
    };
  volume: number | null;
};
```

Campaign analytics type retrieved from the API.

### Type declaration

| Name                | Type                                                                                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `conversions`       | { `15min`: [`ConversionTime`](conversiontime.md)\[]; `1d`: [`ConversionTime`](conversiontime.md)\[]; `1hr`: [`ConversionTime`](conversiontime.md)\[]; } |
| `conversions.15min` | [`ConversionTime`](conversiontime.md)\[]                                                                                                                |
| `conversions.1d`    | [`ConversionTime`](conversiontime.md)\[]                                                                                                                |
| `conversions.1hr`   | [`ConversionTime`](conversiontime.md)\[]                                                                                                                |
| `counts`            | { `converted`: `number`; `started`: `number`; }                                                                                                         |
| `counts.converted`  | `number`                                                                                                                                                |
| `counts.started`    | `number`                                                                                                                                                |
| `payouts`           | { `amount`: `number`; `count`: `number`; }                                                                                                              |
| `payouts.amount`    | `number`                                                                                                                                                |
| `payouts.count`     | `number`                                                                                                                                                |
| `starts`            | { `15min`: [`ConversionTime`](conversiontime.md)\[]; `1d`: [`ConversionTime`](conversiontime.md)\[]; `1hr`: [`ConversionTime`](conversiontime.md)\[]; } |
| `starts.15min`      | [`ConversionTime`](conversiontime.md)\[]                                                                                                                |
| `starts.1d`         | [`ConversionTime`](conversiontime.md)\[]                                                                                                                |
| `starts.1hr`        | [`ConversionTime`](conversiontime.md)\[]                                                                                                                |
| `volume`?           | `number` \| `null`                                                                                                                                      |

### Defined in

[src/types/analytics.ts:12](https://github.com/torque-labs/torque-ts-sdk/blob/a30afeab92cb119627ec542f4c8aff2dd9faf383/src/types/analytics.ts#L12)
