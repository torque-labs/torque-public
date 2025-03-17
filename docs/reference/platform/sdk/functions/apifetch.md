[**@torque-labs/sdk**](../../../@torque-labs/sdk/README.md)

***

[Torque Labs](../../../README.md) / [@torque-labs/sdk](../README.md) / apiFetch

# Function: apiFetch()

```ts
function apiFetch<T>(options): Promise<T>
```

Defined in: [packages/sdk/src/utils/requests.ts:48](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/utils/requests.ts#L48)

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
