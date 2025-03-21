[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / TorqueRequestOptions

# Interface: TorqueRequestOptions

Defined in: [sdk/src/utils/requests.ts:9](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/utils/requests.ts#L9)

Interface for the Torque SDK request options

## Properties

### apiKey?

```ts
optional apiKey: string;
```

Defined in: [sdk/src/utils/requests.ts:38](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/utils/requests.ts#L38)

The API key for the request

***

### body?

```ts
optional body: unknown;
```

Defined in: [sdk/src/utils/requests.ts:33](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/utils/requests.ts#L33)

The body of the request (if applicable)

***

### headers?

```ts
optional headers: HeadersInit;
```

Defined in: [sdk/src/utils/requests.ts:23](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/utils/requests.ts#L23)

The headers for the request

***

### method

```ts
method: "POST" | "GET" | "PATCH" | "DELETE";
```

Defined in: [sdk/src/utils/requests.ts:18](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/utils/requests.ts#L18)

The HTTP method of the request

***

### token?

```ts
optional token: string;
```

Defined in: [sdk/src/utils/requests.ts:28](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/utils/requests.ts#L28)

The auth token for the request

***

### url

```ts
url: string;
```

Defined in: [sdk/src/utils/requests.ts:13](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/utils/requests.ts#L13)

The URL of the request
