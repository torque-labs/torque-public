[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / serverRequest

# Function: serverRequest()

```ts
function serverRequest<T>(options): Promise<T>
```

Defined in: [sdk/src/utils/requests.ts:82](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/utils/requests.ts#L82)

Make a request to the Torque API.

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

## Throws

If the request fails
