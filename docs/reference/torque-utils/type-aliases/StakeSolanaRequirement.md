[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / StakeSolanaRequirement

# Type Alias: StakeSolanaRequirement

```ts
type StakeSolanaRequirement: {
  requirement: StakeSolanaActionSchema;
  type: STAKE_SOL;
};
```

Stake Solana requirement type

## Type declaration

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `requirement` | \{ `amount`: `number`; `epochs`: `number`; `validator`: `string`; \} | StakeSolanaActionSchema | - |
| `requirement.amount` | `number` | - | The minimum amount to stake |
| `requirement.epochs` | `number` | - | The minimum number of epochs to stake for |
| `requirement.validator` | `string` | - | The validator to stake with |
| `type` | `STAKE_SOL` | - | - |

## Defined in

[types/eventConfig/config.ts:210](https://github.com/torque-labs/torque-utils/blob/3bd29ca22f900f1cf2686f7f240bf82e15337207/types/eventConfig/config.ts#L210)
