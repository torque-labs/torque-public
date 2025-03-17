[**@torque-labs/sdk**](../../../@torque-labs/sdk/README.md)

***

[Torque Labs](../../../README.md) / [@torque-labs/sdk](../README.md) / TorqueSDKError

# Class: TorqueSDKError

Defined in: [packages/database/src/errors.ts:19](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/database/src/errors.ts#L19)

Torque SDK Custom Error Class

This class extends the built-in Error class and adds additional properties
to help with debugging and tracking errors in Torque.

## Param

The error type

## Param

The error message

## Param

The error cause

## Param

The error data

## Extends

- `Error`

## Constructors

### new TorqueSDKError()

```ts
new TorqueSDKError(__namedParameters): TorqueSDKError
```

Defined in: [packages/database/src/errors.ts:25](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/database/src/errors.ts#L25)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | \{ `cause`: `any`; `data`: `any`; `message`: `string`; `name`: [`TorqueSDKErrorTypes`](../enumerations/TorqueSDKErrorTypes.md); \} |
| `__namedParameters.cause`? | `any` |
| `__namedParameters.data`? | `any` |
| `__namedParameters.message` | `string` |
| `__namedParameters.name` | [`TorqueSDKErrorTypes`](../enumerations/TorqueSDKErrorTypes.md) |

#### Returns

`TorqueSDKError`

#### Overrides

```ts
Error.constructor
```

## Properties

| Property | Type | Description | Overrides | Inherited from |
| ------ | ------ | ------ | ------ | ------ |
| <a id="cause"></a> `cause` | `any` | - | `Error.cause` | - |
| <a id="data"></a> `data` | `any` | - | - | - |
| <a id="message"></a> `message` | `string` | - | `Error.message` | - |
| <a id="name"></a> `name` | [`TorqueSDKErrorTypes`](../enumerations/TorqueSDKErrorTypes.md) | - | `Error.name` | - |
| <a id="stack"></a> `stack?` | `string` | - | - | `Error.stack` |
| <a id="preparestacktrace"></a> `prepareStackTrace?` | (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any` | Optional override for formatting stack traces **See** https://v8.dev/docs/stack-trace-api#customizing-stack-traces | - | `Error.prepareStackTrace` |
| <a id="stacktracelimit"></a> `stackTraceLimit` | `number` | - | - | `Error.stackTraceLimit` |

## Methods

### captureStackTrace()

```ts
static captureStackTrace(targetObject, constructorOpt?): void
```

Defined in: node\_modules/@types/node/globals.d.ts:136

Create .stack property on a target object

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetObject` | `object` |
| `constructorOpt`? | `Function` |

#### Returns

`void`

#### Inherited from

```ts
Error.captureStackTrace
```
