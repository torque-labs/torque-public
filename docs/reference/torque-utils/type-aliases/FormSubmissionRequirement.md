[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / FormSubmissionRequirement

# Type Alias: FormSubmissionRequirement

```ts
type FormSubmissionRequirement: {
  requirement: FormSubmissionActionSchema;
  type: FORM_SUBMISSION;
};
```

Form Submission requirement type

## Type declaration

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `requirement` | \{ `antiSybilFee`: `number`; `fields`: \{ `label`: `string`; `name`: `string`; `options`: \{ `label`: `string`; `value`: `string`; \}[]; `required`: `null` \| `boolean`; `type`: [`FormFieldType`](../enumerations/FormFieldType.md); \}[]; \} | FormSubmissionActionSchema | - |
| `requirement.antiSybilFee`? | `number` | - | Require anti-sybil fee for the form submission. If true, the user must pay a transaction fee to complete the requirement. Otherwise, the form submission will be completed and validated with a signature. |
| `requirement.fields` | \{ `label`: `string`; `name`: `string`; `options`: \{ `label`: `string`; `value`: `string`; \}[]; `required`: `null` \| `boolean`; `type`: [`FormFieldType`](../enumerations/FormFieldType.md); \}[] | - | The fields to collect from the user |
| `type` | `FORM_SUBMISSION` | - | - |

## Defined in

[types/eventConfig/config.ts:113](https://github.com/torque-labs/torque-utils/blob/3bd29ca22f900f1cf2686f7f240bf82e15337207/types/eventConfig/config.ts#L113)
