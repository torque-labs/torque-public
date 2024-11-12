[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / TimeConfigOpenPosition

# Type Alias: TimeConfigOpenPosition

```ts
type TimeConfigOpenPosition: {
  duration: number;
  requirement: OpenPositionTimeConfigSchema;
  type: OPEN_POSITION;
};
```

Open position time config type

## Type declaration

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `duration` | `number` | - | The duration of the requirement in seconds |
| `requirement` | \{ `amount`: `number`; `pool`: `string`; `protocol`: `string`; `token`: `string`; \} | OpenPositionTimeConfigSchema | - |
| `requirement.amount` | `number` | - | The minimum amount to have |
| `requirement.pool`? | `string` | - | The pool address |
| `requirement.protocol`? | `string` | - | The protocol address |
| `requirement.token` | `string` | - | The token to have an open position form |
| `type` | `OPEN_POSITION` | - | - |

## Defined in

[types/timeConfig/config.ts:57](https://github.com/torque-labs/torque-utils/blob/3bd29ca22f900f1cf2686f7f240bf82e15337207/types/timeConfig/config.ts#L57)
