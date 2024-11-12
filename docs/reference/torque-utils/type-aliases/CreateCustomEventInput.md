[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / CreateCustomEventInput

# Type Alias: CreateCustomEventInput

> **CreateCustomEventInput**: `object`

Create custom event input type

## Type declaration

| Name | Type | Default value | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `config` | `Record`\<`string`, [`CustomEventFieldType`](../enumerations/CustomEventFieldType.md)\> | CustomEventDefinitionSchema | The custom event defintion as a JSON object. The object should be formatted as follows: `{ "<event property name>": "boolean" | "string" | "number" }` | [types/custom-events/events.ts:230](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/custom-events/events.ts#L230) |
| `name` | `string` | - | The name of the custom event to create | [types/custom-events/events.ts:219](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/custom-events/events.ts#L219) |

## Defined in

[types/custom-events/events.ts:236](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/custom-events/events.ts#L236)
