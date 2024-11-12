[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / FormSubmissionRequirement

# Type Alias: FormSubmissionRequirement

> **FormSubmissionRequirement**: `object`

Form Submission requirement type

## Type declaration

| Name | Type | Default value | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| `requirement` | `object` | FormSubmissionActionSchema | - | [types/eventConfig/config.ts:107](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/eventConfig/config.ts#L107) |
| `requirement.antiSybilFee`? | `number` | - | Require anti-sybil fee for the form submission. If true, the user must pay a transaction fee to complete the requirement. Otherwise, the form submission will be completed and validated with a signature. | [types/eventConfig/requirements.ts:309](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/eventConfig/requirements.ts#L309) |
| `requirement.fields` | `object`[] | - | The fields to collect from the user | [types/eventConfig/requirements.ts:303](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/eventConfig/requirements.ts#L303) |
| `type` | `FORM_SUBMISSION` | - | - | [types/eventConfig/config.ts:106](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/eventConfig/config.ts#L106) |

## Defined in

[types/eventConfig/config.ts:113](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/eventConfig/config.ts#L113)
