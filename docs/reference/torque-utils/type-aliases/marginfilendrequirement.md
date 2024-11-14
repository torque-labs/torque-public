[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / MarginfiLendRequirement

# Type Alias: MarginfiLendRequirement

```ts
type MarginfiLendRequirement: {
  requirement: MarginfiLendActionSchema;
  type: MARGINFI_LEND;
};
```

Marginfi Lend requirement type

## Type declaration

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `requirement` | \{ `amount`: `number`; `tokenAddress`: `string`; \} | MarginfiLendActionSchema | - |
| `requirement.amount` | `number` | - | The minimum amount to lend |
| `requirement.tokenAddress` | `string` | - | The token address to lend |
| `type` | `MARGINFI_LEND` | - | - |

## Defined in

[types/eventConfig/config.ts:141](https://github.com/torque-labs/torque-utils/blob/3bd29ca22f900f1cf2686f7f240bf82e15337207/types/eventConfig/config.ts#L141)
