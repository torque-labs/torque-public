# Class: TorqueAudienceClient

The TorqueAudienceClient class is used to manage and verify audiencess for the Torque API.

## Example

```ts
const client = new TorqueAudienceClient(TorqueAudienceClientOptions);

const audience = await client.buildAudience(<audienceData>);
const verified = await client.verifyAudience(audience);
```

## Constructors

### new TorqueAudienceClient()

```ts
new TorqueAudienceClient(options): TorqueAudienceClient
```

Create a new instance of the TorqueAdminClient class with the provided API key.

#### Parameters

| Parameter | Type                          | Description                               |
| --------- | ----------------------------- | ----------------------------------------- |
| `options` | `TorqueAudienceClientOptions` | The options for the TorqueAudienceClient. |

#### Returns

[`TorqueAudienceClient`](broken-reference)

#### Source

[src/classes/audience.ts:57](https://github.com/torque-labs/torque-ts-sdk/blob/4377d91cff1aa0b27936cb53a23174cb35cc6c04/src/classes/audience.ts#L57)

## Properties

| Property     | Modifier  | Type                                                  |
| ------------ | --------- | ----------------------------------------------------- |
| `client`     | `private` | [`TorqueRequestClient`](broken-reference)             |
| `userClient` | `private` | `undefined` \| [`TorqueUserClient`](broken-reference) |

## Methods

### buildAudience()

```ts
buildAudience(options): Promise<AudienceBuildResponse>
```

Builds an audience with the provided options.

#### Parameters

| Parameter | Type            | Description                         |
| --------- | --------------- | ----------------------------------- |
| `options` | `AudienceBuild` | The options for the audience build. |

#### Returns

`Promise` <`AudienceBuildResponse`>

The response from the API.

#### Throws

If there is an error building the audience.

#### Source

[src/classes/audience.ts:77](https://github.com/torque-labs/torque-ts-sdk/blob/4377d91cff1aa0b27936cb53a23174cb35cc6c04/src/classes/audience.ts#L77)

***

### logout()

```ts
logout(): Promise<void>
```

#### Returns

`Promise`<`void`>

#### Source

[src/classes/audience.ts:64](https://github.com/torque-labs/torque-ts-sdk/blob/4377d91cff1aa0b27936cb53a23174cb35cc6c04/src/classes/audience.ts#L64)

***

### verifyAudience()

```ts
verifyAudience(audience, publicKey?): Promise<boolean>
```

Verifies the current user with the provided audience.

#### Parameters

| Parameter    | Type       | Description                                |
| ------------ | ---------- | ------------------------------------------ |
| `audience`   | `Audience` | The options for the audience verification. |
| `publicKey`? | `string`   | -                                          |

#### Returns

`Promise`<`boolean`>

True if the user is verified with the audience, false otherwise.

#### Throws

If there is an error verifying the user with the audience.

#### Source

[src/classes/audience.ts:108](https://github.com/torque-labs/torque-ts-sdk/blob/4377d91cff1aa0b27936cb53a23174cb35cc6c04/src/classes/audience.ts#L108)
