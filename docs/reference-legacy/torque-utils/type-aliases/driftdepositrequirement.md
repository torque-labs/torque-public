[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / DriftDepositRequirement

# Type Alias: DriftDepositRequirement

```ts
type DriftDepositRequirement: {
  requirement: DriftDepositActionSchema;
  type: DRIFT_DEPOSIT;
};
```

Drift Deposit requirement type

## Type declaration

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `requirement` | \{ `minAmount`: `number`; `tokenAddress`: `string`; \} | DriftDepositActionSchema | - |
| `requirement.minAmount` | `number` | - | The minimum amount to deposit |
| `requirement.tokenAddress` | `string` | - | The token address to deposit |
| `type` | `DRIFT_DEPOSIT` | - | - |

## Defined in

[types/eventConfig/config.ts:98](https://github.com/torque-labs/torque-utils/blob/3bd29ca22f900f1cf2686f7f240bf82e15337207/types/eventConfig/config.ts#L98)
