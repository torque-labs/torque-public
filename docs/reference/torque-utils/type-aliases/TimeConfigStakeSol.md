[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / TimeConfigStakeSol

# Type Alias: TimeConfigStakeSol

```ts
type TimeConfigStakeSol: {
  duration: number;
  requirement: StakeSolTimeConfigSchema;
  type: STAKE_SOL;
};
```

Stake solana time config type

## Type declaration

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `duration` | `number` | - | The duration of the requirement in seconds |
| `requirement` | \{ `epochs`: `number`; \} | StakeSolTimeConfigSchema | - |
| `requirement.epochs` | `number` | - | The number of epochs to stake for |
| `type` | `STAKE_SOL` | - | - |

## Defined in

[types/timeConfig/config.ts:74](https://github.com/torque-labs/torque-utils/blob/3bd29ca22f900f1cf2686f7f240bf82e15337207/types/timeConfig/config.ts#L74)
