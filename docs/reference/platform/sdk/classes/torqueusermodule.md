[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / TorqueUserModule

# Class: TorqueUserModule

Defined in: [sdk/src/modules/user.ts:98](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/user.ts#L98)

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

Defined in: [sdk/src/modules/user.ts:124](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/user.ts#L124)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |
| `signer` | \| `Adapter` \| `Keypair` \| [`PrivySolanaWallet`](../type-aliases/PrivySolanaWallet.md) |
| `connection` | `Connection` |

#### Returns

`TorqueUserModule`

## Properties

### \_connection

```ts
private _connection: Connection;
```

Defined in: [sdk/src/modules/user.ts:122](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/user.ts#L122)

The solana connection RPC endpoint

***

### \_signer

```ts
private _signer: 
  | Adapter
  | Keypair
  | PrivySolanaWallet;
```

Defined in: [sdk/src/modules/user.ts:117](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/user.ts#L117)

The user's wallet/signer for Solana

***

### \_token

```ts
private _token: undefined | string;
```

Defined in: [sdk/src/modules/user.ts:112](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/user.ts#L112)

The user's auth token for the API

***

### apiUrl

```ts
apiUrl: string;
```

Defined in: [sdk/src/modules/user.ts:102](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/user.ts#L102)

The base URL of the Torque API

***

### currentUser

```ts
currentUser: 
  | undefined
  | UserWithConnectedAccounts;
```

Defined in: [sdk/src/modules/user.ts:107](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/user.ts#L107)

The current user

## Accessors

### token

#### Get Signature

```ts
get token(): undefined | string
```

Defined in: [sdk/src/modules/user.ts:133](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/user.ts#L133)

Get the auth token

##### Returns

`undefined` \| `string`

#### Set Signature

```ts
set token(value): void
```

Defined in: [sdk/src/modules/user.ts:140](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/user.ts#L140)

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
createOffchainReward(data): Promise<OffchainRewardResponse>
```

Defined in: [sdk/src/modules/user.ts:391](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/user.ts#L391)

Create offchain reward

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | [`OffchainRewardInput`](../type-aliases/OffchainRewardInput.md) | The offchain reward data |

#### Returns

`Promise`\<[`OffchainRewardResponse`](../type-aliases/OffchainRewardResponse.md)\>

The created offchain reward

***

### deleteOffchainReward()

```ts
deleteOffchainReward(offchainRewardId): Promise<{
  message: string;
}>
```

Defined in: [sdk/src/modules/user.ts:415](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/user.ts#L415)

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
getBadges(): Promise<UserBadgeResponse & {
  badge: OffchainRewardResponse;
}[]>
```

Defined in: [sdk/src/modules/user.ts:455](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/user.ts#L455)

Get the user's badges

#### Returns

`Promise`\<[`UserBadgeResponse`](../type-aliases/UserBadgeResponse.md) & \{
  `badge`: [`OffchainRewardResponse`](../type-aliases/OffchainRewardResponse.md);
 \}[]\>

The user's badges

***

### getCurrentUser()

```ts
getCurrentUser(): Promise<UserWithConnectedAccounts>
```

Defined in: [sdk/src/modules/user.ts:353](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/user.ts#L353)

Get the current user

#### Returns

`Promise`\<[`UserWithConnectedAccounts`](../type-aliases/UserWithConnectedAccounts.md)\>

The current user

***

### getOffchainRewards()

```ts
getOffchainRewards(userId?, type?): Promise<OffchainRewardResponse[]>
```

Defined in: [sdk/src/modules/user.ts:428](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/user.ts#L428)

Get all offchain rewards

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `userId`? | `string` |
| `type`? | [`OffchainRewardType`](../enumerations/OffchainRewardType.md) |

#### Returns

`Promise`\<[`OffchainRewardResponse`](../type-aliases/OffchainRewardResponse.md)[]\>

All offchain rewards

***

### login()

```ts
login(options?, authInput?): Promise<undefined | string>
```

Defined in: [sdk/src/modules/user.ts:154](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/user.ts#L154)

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

Defined in: [sdk/src/modules/user.ts:262](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/user.ts#L262)

Logout the user from the API.

#### Returns

`Promise`\<`void`\>

***

### setOffchainAllocationEndpoint()

```ts
setOffchainAllocationEndpoint(endpoint): Promise<void>
```

Defined in: [sdk/src/modules/user.ts:335](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/user.ts#L335)

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

Defined in: [sdk/src/modules/user.ts:482](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/user.ts#L482)

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

Defined in: [sdk/src/modules/user.ts:298](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/user.ts#L298)

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

Defined in: [sdk/src/modules/user.ts:274](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/user.ts#L274)

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
