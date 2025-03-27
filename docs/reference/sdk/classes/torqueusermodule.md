[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / TorqueUserModule

# Class: TorqueUserModule

Defined in: [sdk/src/modules/user.ts:98](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/user.ts#l98)

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

Defined in: [sdk/src/modules/user.ts:124](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/user.ts#l124)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |
| `signer` | \| `Adapter` \| `Keypair` \| [`PrivySolanaWallet`](../type-aliases/privysolanawallet.md) |
| `connection` | `Connection` |

#### Returns

`TorqueUserModule`

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="_connection"></a> `_connection` | `Connection` | The solana connection RPC endpoint |
| <a id="_signer"></a> `_signer` | \| `Adapter` \| `Keypair` \| [`PrivySolanaWallet`](../type-aliases/privysolanawallet.md) | The user's wallet/signer for Solana |
| <a id="_token"></a> `_token` | `undefined` \| `string` | The user's auth token for the API |
| <a id="apiurl"></a> `apiUrl` | `string` | The base URL of the Torque API |
| <a id="currentuser"></a> `currentUser` | \| `undefined` \| [`UserWithConnectedAccounts`](../type-aliases/userwithconnectedaccounts.md) | The current user |

## Accessors

### token

#### Get Signature

```ts
get token(): undefined | string
```

Defined in: [sdk/src/modules/user.ts:133](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/user.ts#l133)

Get the auth token

##### Returns

`undefined` \| `string`

#### Set Signature

```ts
set token(value): void
```

Defined in: [sdk/src/modules/user.ts:140](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/user.ts#l140)

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

Defined in: [sdk/src/modules/user.ts:391](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/user.ts#l391)

Create offchain reward

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `data` | [`OffchainRewardInput`](../type-aliases/offchainrewardinput.md) | The offchain reward data |

#### Returns

`Promise`\<[`OffchainRewardResponse`](../type-aliases/offchainrewardresponse.md)\>

The created offchain reward

***

### deleteOffchainReward()

```ts
deleteOffchainReward(offchainrewardid): Promise<{
  message: string;
}>
```

Defined in: [sdk/src/modules/user.ts:415](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/user.ts#l415)

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

Defined in: [sdk/src/modules/user.ts:455](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/user.ts#l455)

Get the user's badges

#### Returns

`Promise`\<[`UserBadgeResponse`](../type-aliases/userbadgeresponse.md) & \{
  `badge`: [`OffchainRewardResponse`](../type-aliases/offchainrewardresponse.md);
 \}[]\>

The user's badges

***

### getCurrentUser()

```ts
getCurrentUser(): Promise<UserWithConnectedAccounts>
```

Defined in: [sdk/src/modules/user.ts:353](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/user.ts#l353)

Get the current user

#### Returns

`Promise`\<[`UserWithConnectedAccounts`](../type-aliases/userwithconnectedaccounts.md)\>

The current user

***

### getOffchainRewards()

```ts
getOffchainRewards(userid?, type?): Promise<OffchainRewardResponse[]>
```

Defined in: [sdk/src/modules/user.ts:428](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/user.ts#l428)

Get all offchain rewards

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `userId`? | `string` |
| `type`? | [`OffchainRewardType`](../enumerations/offchainrewardtype.md) |

#### Returns

`Promise`\<[`OffchainRewardResponse`](../type-aliases/offchainrewardresponse.md)[]\>

All offchain rewards

***

### login()

```ts
login(options?, authinput?): Promise<undefined | string>
```

Defined in: [sdk/src/modules/user.ts:154](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/user.ts#l154)

Authenticate the user with the API using the provided login data.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options`? | [`TorqueAuthOptions`](../type-aliases/torqueauthoptions.md) | The authentication options |
| `authInput`? | [`TorqueAuthInput`](../type-aliases/torqueauthinput.md) | The login input object if you want to manually handle the login process |

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

Defined in: [sdk/src/modules/user.ts:262](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/user.ts#l262)

Logout the user from the API.

#### Returns

`Promise`\<`void`\>

***

### setOffchainAllocationEndpoint()

```ts
setOffchainAllocationEndpoint(endpoint): Promise<void>
```

Defined in: [sdk/src/modules/user.ts:335](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/user.ts#l335)

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

Defined in: [sdk/src/modules/user.ts:482](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/user.ts#l482)

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

Defined in: [sdk/src/modules/user.ts:298](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/user.ts#l298)

Constructs the body for the login API request based on the authentication type.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `params` | [`TorqueAuthInput`](../type-aliases/torqueauthinput.md) | The authentication input object |

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

Defined in: [sdk/src/modules/user.ts:274](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/user.ts#l274)

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
