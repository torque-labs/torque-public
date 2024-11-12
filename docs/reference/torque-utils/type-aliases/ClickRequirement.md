[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / ClickRequirement

# Type Alias: ClickRequirement

> **ClickRequirement**: `object`

Click requirement type

## Type declaration

| Name | Type | Default value | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `requirement` | `object` | ClickActionSchema | - | [types/eventConfig/config.ts:51](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/eventConfig/config.ts#L51) |
| `requirement.antiSybilFee`? | `number` | - | Require anti-sybil fee for the click action. If true, the user must pay a transaction fee to complete the requirement. | [types/eventConfig/requirements.ts:216](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/eventConfig/requirements.ts#L216) |
| `requirement.requireSignature` | `boolean` | - | Require signature for the click action. If true, the user must sign a transaction to complete the requirement. | [types/eventConfig/requirements.ts:211](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/eventConfig/requirements.ts#L211) |
| `requirement.targetUrl` | `string` | - | Target URL for the click action | [types/eventConfig/requirements.ts:206](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/eventConfig/requirements.ts#L206) |
| `type` | `CLICK` | - | - | [types/eventConfig/config.ts:50](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/eventConfig/config.ts#L50) |

## Defined in

[types/eventConfig/config.ts:57](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/eventConfig/config.ts#L57)
