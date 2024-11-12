[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / SwapRequirement

# Type Alias: SwapRequirement

> **SwapRequirement**: `object`

Swap requirement type

## Type declaration

| Name | Type | Default value | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `requirement` | `object` | SwapActionSchema | - | [types/eventConfig/config.ts:219](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/eventConfig/config.ts#L219) |
| `requirement.inAmount`? | `null` \| `number` | - | The amount of tokens to swap from | [types/eventConfig/requirements.ts:28](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/eventConfig/requirements.ts#L28) |
| `requirement.inToken`? | `null` \| `string` | - | The token to swap from | [types/eventConfig/requirements.ts:20](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/eventConfig/requirements.ts#L20) |
| `requirement.outAmount`? | `null` \| `number` | - | The amount of tokens to swap to | [types/eventConfig/requirements.ts:32](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/eventConfig/requirements.ts#L32) |
| `requirement.outToken`? | `null` \| `string` | - | The token to swap to | [types/eventConfig/requirements.ts:24](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/eventConfig/requirements.ts#L24) |
| `requirement.usdcValue`? | `null` \| `number` | - | The USDC value TODO: USDC Value for which token? | [types/eventConfig/requirements.ts:37](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/eventConfig/requirements.ts#L37) |
| `timeConfig`? | `object` | - | - | [types/eventConfig/config.ts:220](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/eventConfig/config.ts#L220) |
| `timeConfig.duration` | `number` | - | The duration of the requirement in seconds | [types/timeConfig/config.ts:24](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/timeConfig/config.ts#L24) |
| `timeConfig.requirement` | `object` | TokenHoldingTimeConfigSchema | - | [types/timeConfig/config.ts:33](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/timeConfig/config.ts#L33) |
| `timeConfig.requirement.amount` | `number` | - | The minimum amount to hold | [types/timeConfig/requirements.ts:11](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/timeConfig/requirements.ts#L11) |
| `timeConfig.requirement.token` | `string` | - | The token to hold | [types/timeConfig/requirements.ts:7](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/timeConfig/requirements.ts#L7) |
| `timeConfig.requirement.tokenStandard`? | `string` | - | The token standard of the token | [types/timeConfig/requirements.ts:15](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/timeConfig/requirements.ts#L15) |
| `timeConfig.type` | `TOKEN_HOLDING` | - | - | [types/timeConfig/config.ts:32](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/timeConfig/config.ts#L32) |
| `type` | `SWAP` | - | - | [types/eventConfig/config.ts:218](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/eventConfig/config.ts#L218) |

## Defined in

[types/eventConfig/config.ts:226](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/eventConfig/config.ts#L226)
