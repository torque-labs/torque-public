[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / CustomEventRequirement

# Type Alias: CustomEventRequirement

> **CustomEventRequirement**: `object`

Custom event requirement type

## Type declaration

| Name | Type | Default value | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `requirement` | `object` | CustomEventConfigSchema | - | [types/eventConfig/config.ts:64](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/eventConfig/config.ts#L64) |
| `requirement.description`? | `null` \| `string` | - | A short description to the user of the custom event | [types/custom-events/events.ts:131](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/custom-events/events.ts#L131) |
| `requirement.eventName` | `string` | - | The name of the custom event that will be used in the POST request to the API | [types/custom-events/events.ts:127](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/custom-events/events.ts#L127) |
| `requirement.fields` | (`object` & `object` \| `object` & `object` \| `object` & `object`)[] | - | Array of custom event property fields and the validation | [types/custom-events/events.ts:145](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/custom-events/events.ts#L145) |
| `requirement.formEnabled` | `boolean` | - | Depreceated: Whether it's enabled as a form directly in the UI NOTE: This is depreceated. Use `FORM_SUBMISSION` instead | [types/custom-events/events.ts:137](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/custom-events/events.ts#L137) |
| `requirement.targetUrl`? | `null` \| `string` | - | The target URL for more information, or where the requirement can be completed | [types/custom-events/events.ts:141](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/custom-events/events.ts#L141) |
| `type` | `CUSTOM_EVENT` | - | - | [types/eventConfig/config.ts:63](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/eventConfig/config.ts#L63) |

## Defined in

[types/eventConfig/config.ts:70](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/eventConfig/config.ts#L70)
