[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / CustomEventRequest

# Type Alias: CustomEventRequest

```ts
type CustomEventRequest: {
  context: null | Record<string, string | number | boolean>;
  event_data: Record<string, string | number | boolean>;
  event_name: string;
  timestamp: string | number;
  user: {
     pubKey: string;
    } & Record<string, string | number | boolean>;
};
```

Custom event request type

## Type declaration

| Name | Type |
| ------ | ------ |
| `context`? | `null` \| `Record`\<`string`, `string` \| `number` \| `boolean`\> |
| `event_data` | `Record`\<`string`, `string` \| `number` \| `boolean`\> |
| `event_name` | `string` |
| `timestamp` | `string` \| `number` |
| `user` | \{ `pubKey`: `string`; \} & `Record`\<`string`, `string` \| `number` \| `boolean`\> |

## Defined in

[types/events.ts:115](https://github.com/torque-labs/torque-utils/blob/3bd29ca22f900f1cf2686f7f240bf82e15337207/types/events.ts#L115)
