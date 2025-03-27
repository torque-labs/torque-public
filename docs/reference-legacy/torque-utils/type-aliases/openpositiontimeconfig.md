[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / OpenPositionTimeConfig

# Type Alias: OpenPositionTimeConfig

```ts
type OpenPositionTimeConfig: {
  amount: number;
  pool: string;
  protocol: string;
  token: string;
};
```

Open position time config type

## Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `amount` | `number` | The minimum amount to have |
| `pool`? | `string` | The pool address |
| `protocol`? | `string` | The protocol address |
| `token` | `string` | The token to have an open position form |

## Defined in

[types/timeConfig/requirements.ts:50](https://github.com/torque-labs/torque-utils/blob/3bd29ca22f900f1cf2686f7f240bf82e15337207/types/timeConfig/requirements.ts#L50)
