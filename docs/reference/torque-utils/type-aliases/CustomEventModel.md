[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / CustomEventModel

# Type Alias: CustomEventModel

```ts
type CustomEventModel: {
  config: CustomEventDefinitionSchema;
  id: string;
  name: string;
};
```

Custom event model type

## Type declaration

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `config` | `Record`\<`string`, [`CustomEventFieldType`](../enumerations/CustomEventFieldType.md)\> | CustomEventDefinitionSchema | The custom event defintion as a JSON object. The object should be formatted as follows: `{ "<event property name>": "boolean" | "string" | "number" }` |
| `id` | `string` | - | The internal ID of the custom event |
| `name` | `string` | - | The name of the custom event |

## Defined in

[types/custom-events/events.ts:210](https://github.com/torque-labs/torque-utils/blob/3bd29ca22f900f1cf2686f7f240bf82e15337207/types/custom-events/events.ts#L210)
