[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / MemoAction

# Type Alias: MemoAction

```ts
type MemoAction: {
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
};
```

Memo action config type

## Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `fields` | (\{ `description`: `null` \| `string`; `image`: `null` \| `string`; `label`: `null` \| `string`; `name`: `string`; \} & \{ `type`: `"string"`; `validation`: \{ `match`: `null` \| `string`; `required`: `null` \| `boolean`; \}; \} \| \{ `description`: `null` \| `string`; `image`: `null` \| `string`; `label`: `null` \| `string`; `name`: `string`; \} & \{ `type`: `"number"`; `validation`: \{ `max`: `null` \| `number`; `min`: `null` \| `number`; \}; \} \| \{ `description`: `null` \| `string`; `image`: `null` \| `string`; `label`: `null` \| `string`; `name`: `string`; \} & \{ `type`: `"boolean"`; `validation`: \{ `match`: `null` \| `boolean`; \}; \})[] | The fields to collect from the user |

## Defined in

[types/eventConfig/requirements.ts:243](https://github.com/torque-labs/torque-utils/blob/3bd29ca22f900f1cf2686f7f240bf82e15337207/types/eventConfig/requirements.ts#L243)
