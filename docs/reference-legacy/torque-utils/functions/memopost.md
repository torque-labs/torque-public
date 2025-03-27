[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / memoPost

# Function: memoPost()

```ts
function memoPost(memoAction, query): Promise<string>
```

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `memoAction` | `object` | - |
| `memoAction.fields` | (\{ `description`: `null` \| `string`; `image`: `null` \| `string`; `label`: `null` \| `string`; `name`: `string`; \} & \{ `type`: `"string"`; `validation`: \{ `match`: `null` \| `string`; `required`: `null` \| `boolean`; \}; \} \| \{ `description`: `null` \| `string`; `image`: `null` \| `string`; `label`: `null` \| `string`; `name`: `string`; \} & \{ `type`: `"number"`; `validation`: \{ `max`: `null` \| `number`; `min`: `null` \| `number`; \}; \} \| \{ `description`: `null` \| `string`; `image`: `null` \| `string`; `label`: `null` \| `string`; `name`: `string`; \} & \{ `type`: `"boolean"`; `validation`: \{ `match`: `null` \| `boolean`; \}; \})[] | The fields to collect from the user |
| `query` | `object` | - |

## Returns

`Promise`\<`string`\>

## Defined in

[solana-actions/buildPost.ts:44](https://github.com/torque-labs/torque-utils/blob/3bd29ca22f900f1cf2686f7f240bf82e15337207/solana-actions/buildPost.ts#L44)
