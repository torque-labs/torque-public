[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / serverRequest

# Function: serverRequest()

```ts
function serverRequest<T>(options): Promise<T>
```

Defined in: [sdk/src/utils/requests.ts:82](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/utils/requests.ts#l82)

Make a request to the Torque API.

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

## Throws

If the request fails
