[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / DriftBetRequirement

# Type Alias: DriftBetRequirement

```ts
type DriftBetRequirement: {
  requirement: DriftBetActionSchema;
  type: DRIFT_BET;
};
```

Drift Bet requirement type

## Type declaration

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `requirement` | \{ `marketIndex`: `number`; `shares`: `number`; \} | DriftBetActionSchema | - |
| `requirement.marketIndex` | `number` | - | The market index to bet on |
| `requirement.shares` | `number` | - | The number of minimum shars to bet |
| `type` | `DRIFT_BET` | - | - |

## Defined in

[types/eventConfig/config.ts:85](https://github.com/torque-labs/torque-utils/blob/3bd29ca22f900f1cf2686f7f240bf82e15337207/types/eventConfig/config.ts#L85)
