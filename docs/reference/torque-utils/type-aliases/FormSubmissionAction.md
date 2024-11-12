[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / FormSubmissionAction

# Type Alias: FormSubmissionAction

```ts
type FormSubmissionAction: {
  antiSybilFee: number;
  fields: {
     label: string;
     name: string;
     options: {
        label: string;
        value: string;
       }[];
     required: null | boolean;
     type: FormFieldType;
    }[];
};
```

Form submission action type

## Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `antiSybilFee`? | `number` | Require anti-sybil fee for the form submission. If true, the user must pay a transaction fee to complete the requirement. Otherwise, the form submission will be completed and validated with a signature. |
| `fields` | \{ `label`: `string`; `name`: `string`; `options`: \{ `label`: `string`; `value`: `string`; \}[]; `required`: `null` \| `boolean`; `type`: [`FormFieldType`](../enumerations/FormFieldType.md); \}[] | The fields to collect from the user |

## Defined in

[types/eventConfig/requirements.ts:315](https://github.com/torque-labs/torque-utils/blob/3bd29ca22f900f1cf2686f7f240bf82e15337207/types/eventConfig/requirements.ts#L315)
