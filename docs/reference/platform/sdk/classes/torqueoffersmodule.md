[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / TorqueOffersModule

# Class: TorqueOffersModule

Defined in: [sdk/src/modules/offers.ts:40](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/offers.ts#L40)

The TorqueOffersModule class is used to interact with the offers endpoints of the Torque API.

## Param

The URL of the Torque API server

## Param

The auth token for the API

## Constructors

### new TorqueOffersModule()

```ts
new TorqueOffersModule(
   url, 
   transactions, 
   token?): TorqueOffersModule
```

Defined in: [sdk/src/modules/offers.ts:48](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/offers.ts#L48)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |
| `transactions` | [`TorqueTransactionsModule`](TorqueTransactionsModule.md) |
| `token`? | `string` |

#### Returns

`TorqueOffersModule`

## Properties

### \_publicKey

```ts
private _publicKey: undefined | string;
```

Defined in: [sdk/src/modules/offers.ts:44](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/offers.ts#L44)

***

### \_token

```ts
private _token: undefined | string;
```

Defined in: [sdk/src/modules/offers.ts:45](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/offers.ts#L45)

***

### \_transactions

```ts
private _transactions: TorqueTransactionsModule;
```

Defined in: [sdk/src/modules/offers.ts:46](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/offers.ts#L46)

***

### actions

```ts
actions: TorqueActionsModule;
```

Defined in: [sdk/src/modules/offers.ts:42](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/offers.ts#L42)

***

### baseUrl

```ts
baseUrl: string;
```

Defined in: [sdk/src/modules/offers.ts:41](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/offers.ts#L41)

## Accessors

### publicKey

#### Set Signature

```ts
set publicKey(value): void
```

Defined in: [sdk/src/modules/offers.ts:67](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/offers.ts#L67)

Set private public key for the offers module

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `undefined` \| `string` |

##### Returns

`void`

***

### token

#### Set Signature

```ts
set token(value): void
```

Defined in: [sdk/src/modules/offers.ts:59](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/offers.ts#L59)

Set private token for the offers module

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `undefined` \| `string` |

##### Returns

`void`

## Methods

### addDistributor()

```ts
addDistributor(offerId, distributor): Promise<DistributorResponse>
```

Defined in: [sdk/src/modules/offers.ts:223](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/offers.ts#L223)

Adds a reward distributor to an offer

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offerId` | `string` | The offerId of the offer to add the distributor to |
| `distributor` | [`DistributorInput`](../type-aliases/DistributorInput.md) | The distributor input parameters |

#### Returns

`Promise`\<[`DistributorResponse`](../type-aliases/DistributorResponse.md)\>

The created distributor object

***

### chooseAsymmetricRewardWinner()

```ts
chooseAsymmetricRewardWinner(distributorId): Promise<{
  publicKey: string;
  winner: string;
}>
```

Defined in: [sdk/src/modules/offers.ts:358](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/offers.ts#L358)

Choose asymmetric reward winner

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `distributorId` | `string` | The distributorId of the distributor to choose the winner for |

#### Returns

`Promise`\<\{
  `publicKey`: `string`;
  `winner`: `string`;
 \}\>

The winner of the asymmetric reward

***

### closeDistributor()

```ts
closeDistributor(offerId, distributorId): Promise<{
  signature: string;
}>
```

Defined in: [sdk/src/modules/offers.ts:326](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/offers.ts#L326)

Closes the distributor for the given offer and distributor IDs

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offerId` | `string` | The ID of the offer to close the distributor for |
| `distributorId` | `string` | The ID of the distributor to close |

#### Returns

`Promise`\<\{
  `signature`: `string`;
 \}\>

The signature of the transaction

***

### createOffer()

```ts
createOffer(offer): Promise<OfferResponse>
```

Defined in: [sdk/src/modules/offers.ts:119](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/offers.ts#L119)

Create an offer

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offer` | [`OfferInput`](../type-aliases/OfferInput.md) | The offer input |

#### Returns

`Promise`\<[`OfferResponse`](../type-aliases/OfferResponse.md)\>

The created offer object

***

### createProject()

```ts
createProject(projectData): Promise<ProjectResponse>
```

Defined in: [sdk/src/modules/offers.ts:394](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/offers.ts#L394)

Create a project

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectData` | [`ProjectInput`](../type-aliases/ProjectInput.md) | The project data |

#### Returns

`Promise`\<[`ProjectResponse`](../type-aliases/ProjectResponse.md)\>

The created project object

***

### deployDistributor()

```ts
deployDistributor(offerId, distributorId): Promise<{
  signature: string;
}>
```

Defined in: [sdk/src/modules/offers.ts:286](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/offers.ts#L286)

Gets the Solana action for deploying a distributor

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offerId` | `string` | The offerId of the offer to add the distributor to |
| `distributorId` | `string` | The distributorId of the distributor to deploy |

#### Returns

`Promise`\<\{
  `signature`: `string`;
 \}\>

The serialized transaction for the deploy distributor action

***

### getAsymmetricRewardEntries()

```ts
getAsymmetricRewardEntries(distributorId): Promise<Record<string, number>>
```

Defined in: [sdk/src/modules/offers.ts:343](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/offers.ts#L343)

Get the asymmetric reward entries for a distributor

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `distributorId` | `string` | The distributorId of the distributor to get the entries for |

#### Returns

`Promise`\<`Record`\<`string`, `number`\>\>

The asymmetric reward entries for the distributor

***

### getLeaderboard()

```ts
getLeaderboard(projectId, offchainRewardId): Promise<LeaderboardResponse>
```

Defined in: [sdk/src/modules/offers.ts:373](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/offers.ts#L373)

Fetch a leaderboard for the specific off-chain reward

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | - |
| `offchainRewardId` | `string` | The id of the off-chain reward to get the leaderboard for |

#### Returns

`Promise`\<[`LeaderboardResponse`](../type-aliases/LeaderboardResponse.md)\>

***

### getOfferById()

```ts
getOfferById(id): Promise<OfferResponse>
```

Defined in: [sdk/src/modules/offers.ts:83](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/offers.ts#L83)

Fetch a single offer

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The offerId of the offer to get |

#### Returns

`Promise`\<[`OfferResponse`](../type-aliases/OfferResponse.md)\>

a single offer

***

### getOffers()

```ts
getOffers(
   status, 
   userId?, 
projectId?): Promise<OfferResponse[]>
```

Defined in: [sdk/src/modules/offers.ts:99](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/offers.ts#L99)

Fetch the offers with optional filters for status and userId

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `status` | `OfferStatus` | (optional) The status of the offer. Defaults to ACTIVE. |
| `userId`? | `string` | (optional) The userId or public key of the offer creator |
| `projectId`? | `string` | - |

#### Returns

`Promise`\<[`OfferResponse`](../type-aliases/OfferResponse.md)[]\>

a list of offers

***

### getProject()

```ts
getProject(projectId, includeOffers?): Promise<ProjectResponse>
```

Defined in: [sdk/src/modules/offers.ts:419](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/offers.ts#L419)

Get a project

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The project ID |
| `includeOffers`? | `boolean` | (optional) Whether to include offers in the project response |

#### Returns

`Promise`\<[`ProjectResponse`](../type-aliases/ProjectResponse.md)\>

The project object

***

### getProjects()

```ts
getProjects(includeOffers?): Promise<ProjectResponse[]>
```

Defined in: [sdk/src/modules/offers.ts:442](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/offers.ts#L442)

Get projects

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `includeOffers`? | `boolean` | (optional) Whether to include offers in the project response |

#### Returns

`Promise`\<[`ProjectResponse`](../type-aliases/ProjectResponse.md)[]\>

A list of project objects

***

### getUserJourneys()

```ts
getUserJourneys(
   offerId, 
   userPubkey?, 
status?): Promise<OfferJourneyReturn[]>
```

Defined in: [sdk/src/modules/offers.ts:201](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/offers.ts#L201)

Get user journeys on the offer

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offerId` | `string` | The offerId of the offer to get the user journeys for |
| `userPubkey`? | `string` | The public key of the user to get the user journeys for |
| `status`? | `ProgressStatus` | The status of the user journeys to get |

#### Returns

`Promise`\<[`OfferJourneyReturn`](../type-aliases/OfferJourneyReturn.md)[]\>

***

### startOffer()

```ts
startOffer(offerId, referrer?): Promise<void>
```

Defined in: [sdk/src/modules/offers.ts:174](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/offers.ts#L174)

Accept/start an offer for a user

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offerId` | `string` | The offerId of the offer to accept for the user |
| `referrer`? | `string` | - |

#### Returns

`Promise`\<`void`\>

***

### updateDistributor()

```ts
updateDistributor(
   offerId, 
   distributorId, 
distributor): Promise<DistributorResponse>
```

Defined in: [sdk/src/modules/offers.ts:253](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/offers.ts#L253)

Update a distributor

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offerId` | `string` | The ID of the offer that contains the distributor |
| `distributorId` | `string` | The ID of the distributor to update |
| `distributor` | [`DistributorUpdateInput`](../type-aliases/DistributorUpdateInput.md) | The updated distributor data |

#### Returns

`Promise`\<[`DistributorResponse`](../type-aliases/DistributorResponse.md)\>

The updated distributor object

***

### updateOffer()

```ts
updateOffer(offerId, offer): Promise<OfferResponse>
```

Defined in: [sdk/src/modules/offers.ts:148](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/offers.ts#L148)

Update an offer

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offerId` | `string` | The ID of the offer to update |
| `offer` | [`OfferUpdateInput`](../type-aliases/OfferUpdateInput.md) | The updated offer data |

#### Returns

`Promise`\<[`OfferResponse`](../type-aliases/OfferResponse.md)\>

The updated offer object
