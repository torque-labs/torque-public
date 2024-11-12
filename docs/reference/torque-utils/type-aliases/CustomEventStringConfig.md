[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / CustomEventStringConfig

# Type Alias: CustomEventStringConfig

```ts
type CustomEventStringConfig: {
  description: null | string;
  image: null | string;
  label: null | string;
  name: string;
 } & {
  type: "string";
  validation: {
     match: null | string;
     required: null | boolean;
    };
};
```

Custom event config type for string properties

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
| `type` | `"string"` | String custom event field type |
| `validation` | \{ `match`: `null` \| `string`; `required`: `null` \| `boolean`; \} | Validation for this custom event string property |
| `validation.match`? | `null` \| `string` | A specific string value to match against (eg. Video_ID) |
| `validation.required`? | `null` \| `boolean` | Whether the field is required or not |

## Defined in

[types/custom-events/events.ts:102](https://github.com/torque-labs/torque-utils/blob/3bd29ca22f900f1cf2686f7f240bf82e15337207/types/custom-events/events.ts#L102)
