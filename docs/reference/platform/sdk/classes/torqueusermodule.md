[**@torque-labs/sdk**](../../../@torque-labs/sdk/README.md)

***

[Torque Labs](../../../README.md) / [@torque-labs/sdk](../README.md) / TorqueUserModule

# Class: TorqueUserModule

Defined in: [packages/sdk/src/modules/user.ts:104](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/user.ts#L104)

The TorqueUserModule class is used to handle user authentication
for the Torque SDK as well as user management.

## Param

The URL of the Torque API server

## Param

The signer for the user

## Param

The connection to the Solana network

## Constructors

### new TorqueUserModule()

```ts
new TorqueUserModule(
   url, 
   signer, 
   connection): TorqueUserModule
```

Defined in: [packages/sdk/src/modules/user.ts:125](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/user.ts#L125)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |
| `signer` | \| `Adapter` \| `Keypair` \| [`PrivySolanaWallet`](../type-aliases/PrivySolanaWallet.md) |
| `connection` | `Connection` |

#### Returns

`TorqueUserModule`

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="_connection"></a> `_connection` | `Connection` | The solana connection RPC endpoint |
| <a id="_signer"></a> `_signer` | \| `Adapter` \| `Keypair` \| [`PrivySolanaWallet`](../type-aliases/PrivySolanaWallet.md) | The user's wallet/signer for Solana |
| <a id="_token"></a> `_token` | `undefined` \| `string` | The user's auth token for the API |
| <a id="apiurl"></a> `apiUrl` | `string` | The base URL of the Torque API |

## Accessors

### token

#### Get Signature

```ts
get token(): undefined | string
```

Defined in: [packages/sdk/src/modules/user.ts:134](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/user.ts#L134)

Get the auth token

##### Returns

`undefined` \| `string`

#### Set Signature

```ts
set token(value): void
```

Defined in: [packages/sdk/src/modules/user.ts:141](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/user.ts#L141)

Set the auth token

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `undefined` \| `string` |

##### Returns

`void`

## Methods

### createOffchainReward()

```ts
createOffchainReward(data): Promise<{
  createdAt: Date;
  description: null | string;
  distributors: unknown[];
  id: string;
  image: string;
  name: string;
  project: Record<string, unknown>;
  projectId: string;
  symbol: null | string;
  type: "POINT" | "BADGE";
  updatedAt: Date;
  userBadges: unknown[];
}>
```

Defined in: [packages/sdk/src/modules/user.ts:385](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/user.ts#L385)

Create offchain reward

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | \{ `description`: `null` \| `string`; `image`: `string`; `name`: `string`; `symbol`: `null` \| `string`; `type`: `"POINT"` \| `"BADGE"`; \} | The offchain reward data |
| `data.description`? | `null` \| `string` | - |
| `data.image` | `string` | - |
| `data.name` | `string` | - |
| `data.symbol`? | `null` \| `string` | - |
| `data.type` | `"POINT"` \| `"BADGE"` | - |

#### Returns

`Promise`\<\{
  `createdAt`: `Date`;
  `description`: `null` \| `string`;
  `distributors`: `unknown`[];
  `id`: `string`;
  `image`: `string`;
  `name`: `string`;
  `project`: `Record`\<`string`, `unknown`\>;
  `projectId`: `string`;
  `symbol`: `null` \| `string`;
  `type`: `"POINT"` \| `"BADGE"`;
  `updatedAt`: `Date`;
  `userBadges`: `unknown`[];
 \}\>

The created offchain reward

***

### deleteOffchainReward()

```ts
deleteOffchainReward(offchainRewardId): Promise<{
  message: string;
}>
```

Defined in: [packages/sdk/src/modules/user.ts:409](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/user.ts#L409)

Delete offchain reward

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offchainRewardId` | `string` | The id of the offchain reward to delete |

#### Returns

`Promise`\<\{
  `message`: `string`;
 \}\>

The deleted offchain reward

***

### getBadges()

```ts
getBadges(): Promise<{
  badge: Record<string, unknown>;
  badgeId: string;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user: Record<string, unknown>;
  userId: string;
 } & {
  badge: {
     createdAt: Date;
     description: null | string;
     distributors: unknown[];
     id: string;
     image: string;
     name: string;
     project: Record<string, unknown>;
     projectId: string;
     symbol: null | string;
     type: "POINT" | "BADGE";
     updatedAt: Date;
     userBadges: unknown[];
    };
}[]>
```

Defined in: [packages/sdk/src/modules/user.ts:449](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/user.ts#L449)

Get the user's badges

#### Returns

`Promise`\<\{
  `badge`: `Record`\<`string`, `unknown`\>;
  `badgeId`: `string`;
  `createdAt`: `Date`;
  `id`: `string`;
  `updatedAt`: `Date`;
  `user`: `Record`\<`string`, `unknown`\>;
  `userId`: `string`;
 \} & \{
  `badge`: \{
     `createdAt`: `Date`;
     `description`: `null` \| `string`;
     `distributors`: `unknown`[];
     `id`: `string`;
     `image`: `string`;
     `name`: `string`;
     `project`: `Record`\<`string`, `unknown`\>;
     `projectId`: `string`;
     `symbol`: `null` \| `string`;
     `type`: `"POINT"` \| `"BADGE"`;
     `updatedAt`: `Date`;
     `userBadges`: `unknown`[];
    \};
 \}[]\>

The user's badges

***

### getCurrentUser()

```ts
getCurrentUser(): Promise<{
  apiKeys: unknown[];
  connected: {
     x: null | string;
    };
  connectedAccounts: Record<string, unknown>;
  crankGuards: unknown[];
  createdAt: Date;
  distributionFunctions: unknown[];
  distributors: unknown[];
  events: unknown[];
  id: string;
  offerRequirements: unknown[];
  offers: unknown[];
  projectRoles: unknown[];
  projects: unknown[];
  publicKey: string;
  rateLimits: unknown[];
  referrerConversions: unknown[];
  referrerJourneys: unknown[];
  requirementJourneys: unknown[];
  templates: unknown[];
  updatedAt: Date;
  userBadges: unknown[];
  userConversions: unknown[];
  userJourneys: unknown[];
  xAuth: Record<string, unknown>;
}>
```

Defined in: [packages/sdk/src/modules/user.ts:354](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/user.ts#L354)

Get the user

#### Returns

`Promise`\<\{
  `apiKeys`: `unknown`[];
  `connected`: \{
     `x`: `null` \| `string`;
    \};
  `connectedAccounts`: `Record`\<`string`, `unknown`\>;
  `crankGuards`: `unknown`[];
  `createdAt`: `Date`;
  `distributionFunctions`: `unknown`[];
  `distributors`: `unknown`[];
  `events`: `unknown`[];
  `id`: `string`;
  `offerRequirements`: `unknown`[];
  `offers`: `unknown`[];
  `projectRoles`: `unknown`[];
  `projects`: `unknown`[];
  `publicKey`: `string`;
  `rateLimits`: `unknown`[];
  `referrerConversions`: `unknown`[];
  `referrerJourneys`: `unknown`[];
  `requirementJourneys`: `unknown`[];
  `templates`: `unknown`[];
  `updatedAt`: `Date`;
  `userBadges`: `unknown`[];
  `userConversions`: `unknown`[];
  `userJourneys`: `unknown`[];
  `xAuth`: `Record`\<`string`, `unknown`\>;
 \}\>

The user

***

### getOffchainRewards()

```ts
getOffchainRewards(userId?, type?): Promise<{
  createdAt: Date;
  description: null | string;
  distributors: unknown[];
  id: string;
  image: string;
  name: string;
  project: Record<string, unknown>;
  projectId: string;
  symbol: null | string;
  type: "POINT" | "BADGE";
  updatedAt: Date;
  userBadges: unknown[];
}[]>
```

Defined in: [packages/sdk/src/modules/user.ts:422](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/user.ts#L422)

Get all offchain rewards

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `userId`? | `string` |
| `type`? | `"POINT"` \| `"BADGE"` |

#### Returns

`Promise`\<\{
  `createdAt`: `Date`;
  `description`: `null` \| `string`;
  `distributors`: `unknown`[];
  `id`: `string`;
  `image`: `string`;
  `name`: `string`;
  `project`: `Record`\<`string`, `unknown`\>;
  `projectId`: `string`;
  `symbol`: `null` \| `string`;
  `type`: `"POINT"` \| `"BADGE"`;
  `updatedAt`: `Date`;
  `userBadges`: `unknown`[];
 \}[]\>

All offchain rewards

***

### login()

```ts
login(options?, authInput?): Promise<undefined | string>
```

Defined in: [packages/sdk/src/modules/user.ts:155](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/user.ts#L155)

Authenticate the user with the API using the provided login data.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options`? | [`TorqueAuthOptions`](../type-aliases/TorqueAuthOptions.md) | The authentication options |
| `authInput`? | [`TorqueAuthInput`](../type-aliases/TorqueAuthInput.md) | The login input object if you want to manually handle the login process |

#### Returns

`Promise`\<`undefined` \| `string`\>

The auth token for the API

#### Throws

If the authentication fails

***

### logout()

```ts
logout(): Promise<void>
```

Defined in: [packages/sdk/src/modules/user.ts:263](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/user.ts#L263)

Logout the user from the API.

#### Returns

`Promise`\<`void`\>

***

### setOffchainAllocationEndpoint()

```ts
setOffchainAllocationEndpoint(endpoint): Promise<void>
```

Defined in: [packages/sdk/src/modules/user.ts:336](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/user.ts#L336)

Set offchain allocation endpoint

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `endpoint` | `string` | The offchain allocation endpoint |

#### Returns

`Promise`\<`void`\>

***

### setXTokens()

```ts
setXTokens(
   xAccessToken, 
   xRefreshToken, 
   privyAccessToken, 
   privyIdentityToken, 
accessTokenExpiresInSeconds): Promise<void>
```

Defined in: [packages/sdk/src/modules/user.ts:476](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/user.ts#L476)

Set the user's X tokens

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `xAccessToken` | `string` | The user's X access token |
| `xRefreshToken` | `string` | The user's X refresh token |
| `privyAccessToken` | `string` | The user's Privy access token |
| `privyIdentityToken` | `string` | The user's Privy identity token |
| `accessTokenExpiresInSeconds` | `number` | The user's X access token expiry in seconds |

#### Returns

`Promise`\<`void`\>

***

### constructLoginBody()

```ts
static constructLoginBody(params): 
  | undefined
  | {
  authType: "siws";
  payload: {
     input: SolanaSignInInput;
     output: SolanaSignInOutput;
    };
  pubKey: string;
 }
  | {
  authType: "basic";
  payload: {
     input: string;
     output: string;
    };
  pubKey: string;
}
```

Defined in: [packages/sdk/src/modules/user.ts:299](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/user.ts#L299)

Constructs the body for the login API request based on the authentication type.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | [`TorqueAuthInput`](../type-aliases/TorqueAuthInput.md) | The authentication input object |

#### Returns

  \| `undefined`
  \| \{
  `authType`: `"siws"`;
  `payload`: \{
     `input`: `SolanaSignInInput`;
     `output`: `SolanaSignInOutput`;
    \};
  `pubKey`: `string`;
 \}
  \| \{
  `authType`: `"basic"`;
  `payload`: \{
     `input`: `string`;
     `output`: `string`;
    \};
  `pubKey`: `string`;
 \}

The constructed body for the verify API request, formatted based on the authentication type.

***

### getLoginPayload()

```ts
static getLoginPayload(uri): {
  expirationTime: string;
  issuedAt: string;
  statement: string;
  uri: string;
}
```

Defined in: [packages/sdk/src/modules/user.ts:275](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/user.ts#L275)

Get the default login payload/message to be signed for authentication.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `uri` | `string` | URL to use for the login payload. Defaults to `https://app.torque.so`. |

#### Returns

```ts
{
  expirationTime: string;
  issuedAt: string;
  statement: string;
  uri: string;
}
```

The login payload to be signed for authentication

| Name | Type |
| ------ | ------ |
| `expirationTime` | `string` |
| `issuedAt` | `string` |
| `statement` | `string` |
| `uri` | `string` |
