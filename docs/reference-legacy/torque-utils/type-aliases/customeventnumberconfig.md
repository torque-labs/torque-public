[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / CustomEventNumberConfig

# Type Alias: CustomEventNumberConfig

```ts
type CustomEventNumberConfig: {
  description: null | string;
  image: null | string;
  label: null | string;
  name: string;
 } & {
  type: "number";
  validation: {
     max: null | number;
     min: null | number;
    };
};
```

Custom event config type for number properties

## Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `description`? | `null` \| `string` | A short description to the user of the custom event field |
| `image`? | `null` \| `string` | An image to display with the custom event field in the UI (eg. screenshots) |
| `label`? | `null` \| `string` | The label for the custom field that will displayed in the UI |
| `name` | `string` | The name of the custom field |

## Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `type` | `"number"` | Number custom event field type |
| `validation` | \{ `max`: `null` \| `number`; `min`: `null` \| `number`; \} | Validation for this custom event number property |
| `validation.max`? | `null` \| `number` | Maximum value for this number field |
| `validation.min`? | `null` \| `number` | Minimum value for this number field |

## Defined in

[types/custom-events/events.ts:109](https://github.com/torque-labs/torque-utils/blob/3bd29ca22f900f1cf2686f7f240bf82e15337207/types/custom-events/events.ts#L109)
