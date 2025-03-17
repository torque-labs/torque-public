[**@torque-labs/sdk**](../../../@torque-labs/sdk/README.md)

***

[Torque Labs](../../../README.md) / [@torque-labs/sdk](../README.md) / TorqueRequestOptions

# Interface: TorqueRequestOptions

Defined in: [packages/sdk/src/utils/requests.ts:9](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/utils/requests.ts#L9)

Interface for the Torque SDK request options

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="apikey"></a> `apiKey?` | `string` | The API key for the request |
| <a id="body"></a> `body?` | `unknown` | The body of the request (if applicable) |
| <a id="headers"></a> `headers?` | `HeadersInit` | The headers for the request |
| <a id="method"></a> `method` | `"POST"` \| `"GET"` \| `"PATCH"` \| `"DELETE"` | The HTTP method of the request |
| <a id="token"></a> `token?` | `string` | The auth token for the request |
| <a id="url"></a> `url` | `string` | The URL of the request |
