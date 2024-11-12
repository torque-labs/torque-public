[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / CustomEventConfig

# Type Alias: CustomEventConfig

```ts
type CustomEventConfig: {
  description: null | string;
  eventName: string;
  fields: ({
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
    } | {
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
    } | {
     description: null | string;
     image: null | string;
     label: null | string;
     name: string;
    } & {
     type: "boolean";
     validation: {
        match: null | boolean;
       };
    })[];
  formEnabled: boolean;
  targetUrl: null | string;
};
```

Custom event requirement type

## Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `description`? | `null` \| `string` | A short description to the user of the custom event |
| `eventName` | `string` | The name of the custom event that will be used in the POST request to the API |
| `fields` | (\{ `description`: `null` \| `string`; `image`: `null` \| `string`; `label`: `null` \| `string`; `name`: `string`; \} & \{ `type`: `"string"`; `validation`: \{ `match`: `null` \| `string`; `required`: `null` \| `boolean`; \}; \} \| \{ `description`: `null` \| `string`; `image`: `null` \| `string`; `label`: `null` \| `string`; `name`: `string`; \} & \{ `type`: `"number"`; `validation`: \{ `max`: `null` \| `number`; `min`: `null` \| `number`; \}; \} \| \{ `description`: `null` \| `string`; `image`: `null` \| `string`; `label`: `null` \| `string`; `name`: `string`; \} & \{ `type`: `"boolean"`; `validation`: \{ `match`: `null` \| `boolean`; \}; \})[] | Array of custom event property fields and the validation |
| `formEnabled` | `boolean` | Depreceated: Whether it's enabled as a form directly in the UI NOTE: This is depreceated. Use `FORM_SUBMISSION` instead |
| `targetUrl`? | `null` \| `string` | The target URL for more information, or where the requirement can be completed |

## Defined in

[types/custom-events/events.ts:157](https://github.com/torque-labs/torque-utils/blob/3bd29ca22f900f1cf2686f7f240bf82e15337207/types/custom-events/events.ts#L157)
