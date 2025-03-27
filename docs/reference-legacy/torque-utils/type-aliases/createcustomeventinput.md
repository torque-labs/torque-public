# Type Alias: CreateCustomEventInput

[**@torque-labs/torque-utils**](../) • **Docs**

***

[@torque-labs/torque-utils](../) / CreateCustomEventInput

## Type Alias: CreateCustomEventInput

```ts
type CreateCustomEventInput: {
  config: CustomEventDefinitionSchema;
  name: string;
};
```

Create custom event input type

### Type declaration

| Name     | Type                                                                                  | Default value               | Description                                                                                               |
| -------- | ------------------------------------------------------------------------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------- |
| `config` | `Record`<`string`, [`CustomEventFieldType`](../enumerations/customeventfieldtype.md)> | CustomEventDefinitionSchema | The custom event defintion as a JSON object. The object should be formatted as follows: \`{ "": "boolean" |
| `name`   | `string`                                                                              | -                           | The name of the custom event to create                                                                    |

### Defined in

[types/custom-events/events.ts:236](https://github.com/torque-labs/torque-utils/blob/3bd29ca22f900f1cf2686f7f240bf82e15337207/types/custom-events/events.ts#L236)
