[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / apiFetch

# Function: apiFetch()

```ts
function apiFetch<T>(options): Promise<T>
```

Defined in: [sdk/src/utils/requests.ts:48](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/utils/requests.ts#l48)

The full API fetch request function.

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`TorqueRequestOptions`](../interfaces/torquerequestoptions.md) | The options for the request |

## Returns

`Promise`\<`T`\>

The response data from the request
