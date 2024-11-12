[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / TimeConfigTokenHolding

# Type Alias: TimeConfigTokenHolding

```ts
type TimeConfigTokenHolding: {
  duration: number;
  requirement: TokenHoldingTimeConfigSchema;
  type: TOKEN_HOLDING;
};
```

The token holding time config type

## Type declaration

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `duration` | `number` | - | The duration of the requirement in seconds |
| `requirement` | \{ `amount`: `number`; `token`: `string`; `tokenStandard`: `string`; \} | TokenHoldingTimeConfigSchema | - |
| `requirement.amount` | `number` | - | The minimum amount to hold |
| `requirement.token` | `string` | - | The token to hold |
| `requirement.tokenStandard`? | `string` | - | The token standard of the token |
| `type` | `TOKEN_HOLDING` | - | - |

## Defined in

[types/timeConfig/config.ts:40](https://github.com/torque-labs/torque-utils/blob/3bd29ca22f900f1cf2686f7f240bf82e15337207/types/timeConfig/config.ts#L40)
