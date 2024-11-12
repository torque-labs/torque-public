[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / ApiError

# Class: ApiError

## Extends

- `Error`

## Constructors

### new ApiError()

> **new ApiError**(`__namedParameters`): [`ApiError`](ApiError.md)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `object` |
| `__namedParameters.cause`? | `any` |
| `__namedParameters.data`? | `any` |
| `__namedParameters.message` | `string` |
| `__namedParameters.name` | [`ApiErrorNames`](../enumerations/ApiErrorNames.md) |

#### Returns

[`ApiError`](ApiError.md)

#### Overrides

`Error.constructor`

#### Defined in

[types/errors.ts:24](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/errors.ts#L24)

## Properties

<table>
<thead>
<tr>
<th>Property</th>
<th>Modifier</th>
<th>Type</th>
<th>Description</th>
<th>Overrides</th>
<th>Inherited from</th>
<th>Defined in</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`cause`

</td>
<td>

`public`

</td>
<td>

`any`

</td>
<td>

&hyphen;

</td>
<td>

`Error.cause`

</td>
<td>

&hyphen;

</td>
<td>

[types/errors.ts:20](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/errors.ts#L20)

</td>
</tr>
<tr>
<td>

`code`

</td>
<td>

`public`

</td>
<td>

`number`

</td>
<td>

&hyphen;

</td>
<td>

&hyphen;

</td>
<td>

&hyphen;

</td>
<td>

[types/errors.ts:22](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/errors.ts#L22)

</td>
</tr>
<tr>
<td>

`data`

</td>
<td>

`public`

</td>
<td>

`any`

</td>
<td>

&hyphen;

</td>
<td>

&hyphen;

</td>
<td>

&hyphen;

</td>
<td>

[types/errors.ts:21](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/errors.ts#L21)

</td>
</tr>
<tr>
<td>

`message`

</td>
<td>

`public`

</td>
<td>

`string`

</td>
<td>

&hyphen;

</td>
<td>

`Error.message`

</td>
<td>

&hyphen;

</td>
<td>

[types/errors.ts:19](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/errors.ts#L19)

</td>
</tr>
<tr>
<td>

`name`

</td>
<td>

`public`

</td>
<td>

[`ApiErrorNames`](../enumerations/ApiErrorNames.md)

</td>
<td>

&hyphen;

</td>
<td>

`Error.name`

</td>
<td>

&hyphen;

</td>
<td>

[types/errors.ts:18](https://github.com/torque-labs/torque-utils/blob/c76fb4101d477d1e8e6fb4f5de7a277964527c27/types/errors.ts#L18)

</td>
</tr>
<tr>
<td>

`stack?`

</td>
<td>

`public`

</td>
<td>

`string`

</td>
<td>

&hyphen;

</td>
<td>

&hyphen;

</td>
<td>

`Error.stack`

</td>
<td>

node\_modules/typescript/lib/lib.es5.d.ts:1078

</td>
</tr>
<tr>
<td>

`prepareStackTrace?`

</td>
<td>

`static`

</td>
<td>

(`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

</td>
<td>

Optional override for formatting stack traces

**See**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

</td>
<td>

&hyphen;

</td>
<td>

`Error.prepareStackTrace`

</td>
<td>

node\_modules/@types/node/globals.d.ts:98

</td>
</tr>
<tr>
<td>

`stackTraceLimit`

</td>
<td>

`static`

</td>
<td>

`number`

</td>
<td>

&hyphen;

</td>
<td>

&hyphen;

</td>
<td>

`Error.stackTraceLimit`

</td>
<td>

node\_modules/@types/node/globals.d.ts:100

</td>
</tr>
</tbody>
</table>

## Methods

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `targetObject` | `object` |
| `constructorOpt`? | `Function` |

#### Returns

`void`

#### Inherited from

`Error.captureStackTrace`

#### Defined in

node\_modules/@types/node/globals.d.ts:91
