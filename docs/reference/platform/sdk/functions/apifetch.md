[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / apiFetch

# Function: apiFetch()

```ts
function apiFetch<T>(options): Promise<T>
```

Defined in: [sdk/src/utils/requests.ts:48](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/utils/requests.ts#L48)

The full API fetch request function.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`TorqueRequestOptions`](../interfaces/TorqueRequestOptions.md) | The options for the request |

## Returns

`Promise`\<`T`\>

The response data from the request
