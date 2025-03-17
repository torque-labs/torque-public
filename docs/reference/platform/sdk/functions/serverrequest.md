[**@torque-labs/sdk**](../../../@torque-labs/sdk/README.md)

***

[Torque Labs](../../../README.md) / [@torque-labs/sdk](../README.md) / serverRequest

# Function: serverRequest()

```ts
function serverRequest<T>(options): Promise<T>
```

Defined in: [packages/sdk/src/utils/requests.ts:82](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/utils/requests.ts#L82)

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
