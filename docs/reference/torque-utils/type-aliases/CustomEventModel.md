[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / CustomEventModel

# Type Alias: CustomEventModel

> **CustomEventModel**: `object`

Custom event model type

## Type declaration

| Name | Type | Default value | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `config` | `Record`\<`string`, [`CustomEventFieldType`](../enumerations/CustomEventFieldType.md)\> | CustomEventDefinitionSchema | The custom event defintion as a JSON object. The object should be formatted as follows: `{ "<event property name>": "boolean" | "string" | "number" }` | [types/custom-events/events.ts:204](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/custom-events/events.ts#L204) |
| `id` | `string` | - | The internal ID of the custom event | [types/custom-events/events.ts:189](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/custom-events/events.ts#L189) |
| `name` | `string` | - | The name of the custom event | [types/custom-events/events.ts:193](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/custom-events/events.ts#L193) |

## Defined in

[types/custom-events/events.ts:210](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/custom-events/events.ts#L210)
