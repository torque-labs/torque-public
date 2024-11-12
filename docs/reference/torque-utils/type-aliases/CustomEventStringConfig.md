[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / CustomEventStringConfig

# Type Alias: CustomEventStringConfig

> **CustomEventStringConfig**: `object` & `object`

Custom event config type for string properties

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `description`? | `null` \| `string` | A short description to the user of the custom event field | [types/custom-events/events.ts:21](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/custom-events/events.ts#L21) |
| `image`? | `null` \| `string` | An image to display with the custom event field in the UI (eg. screenshots) | [types/custom-events/events.ts:25](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/custom-events/events.ts#L25) |
| `label`? | `null` \| `string` | The label for the custom field that will displayed in the UI | [types/custom-events/events.ts:17](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/custom-events/events.ts#L17) |
| `name` | `string` | The name of the custom field | [types/custom-events/events.ts:13](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/custom-events/events.ts#L13) |

## Type declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `type` | `"string"` | String custom event field type | [types/custom-events/events.ts:36](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/custom-events/events.ts#L36) |
| `validation` | `object` | Validation for this custom event string property | [types/custom-events/events.ts:40](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/custom-events/events.ts#L40) |
| `validation.match`? | `null` \| `string` | A specific string value to match against (eg. Video_ID) | [types/custom-events/events.ts:48](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/custom-events/events.ts#L48) |
| `validation.required`? | `null` \| `boolean` | Whether the field is required or not | [types/custom-events/events.ts:44](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/custom-events/events.ts#L44) |

## Defined in

[types/custom-events/events.ts:102](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/custom-events/events.ts#L102)
