[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / KaminoLendRequirement

# Type Alias: KaminoLendRequirement

```ts
type KaminoLendRequirement: {
  requirement: KaminoLendActionSchema;
  type: KAMINO_LEND;
};
```

Kamino Lend requirement type

## Type declaration

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `requirement` | \{ `amount`: `number`; `tokenAddress`: `string`; \} | KaminoLendActionSchema | - |
| `requirement.amount` | `number` | - | The minimum amount to lend |
| `requirement.tokenAddress` | `string` | - | The token address to lend |
| `type` | `KAMINO_LEND` | - | - |

## Defined in

[types/eventConfig/config.ts:128](https://github.com/torque-labs/torque-utils/blob/3bd29ca22f900f1cf2686f7f240bf82e15337207/types/eventConfig/config.ts#L128)
