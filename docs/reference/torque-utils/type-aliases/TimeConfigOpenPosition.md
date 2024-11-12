[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / TimeConfigOpenPosition

# Type Alias: TimeConfigOpenPosition

> **TimeConfigOpenPosition**: `object`

Open position time config type

## Type declaration

| Name | Type | Default value | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `duration` | `number` | - | The duration of the requirement in seconds | [types/timeConfig/config.ts:24](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/timeConfig/config.ts#L24) |
| `requirement` | `object` | OpenPositionTimeConfigSchema | - | [types/timeConfig/config.ts:50](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/timeConfig/config.ts#L50) |
| `requirement.amount` | `number` | - | The minimum amount to have | [types/timeConfig/requirements.ts:36](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/timeConfig/requirements.ts#L36) |
| `requirement.pool`? | `string` | - | The pool address | [types/timeConfig/requirements.ts:44](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/timeConfig/requirements.ts#L44) |
| `requirement.protocol`? | `string` | - | The protocol address | [types/timeConfig/requirements.ts:40](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/timeConfig/requirements.ts#L40) |
| `requirement.token` | `string` | - | The token to have an open position form | [types/timeConfig/requirements.ts:32](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/timeConfig/requirements.ts#L32) |
| `type` | `OPEN_POSITION` | - | - | [types/timeConfig/config.ts:49](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/timeConfig/config.ts#L49) |

## Defined in

[types/timeConfig/config.ts:57](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/timeConfig/config.ts#L57)
