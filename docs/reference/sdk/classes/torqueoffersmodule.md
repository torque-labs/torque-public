# TorqueOffersModule

[**@torque-labs/sdk**](../)

***

[@torque-labs/sdk](../) / TorqueOffersModule

## Class: TorqueOffersModule

Defined in: [sdk/src/modules/offers.ts:40](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/offers.ts#l40)

The TorqueOffersModule class is used to interact with the offers endpoints of the Torque API.

### Param

The URL of the Torque API server

### Param

The auth token for the API

### Constructors

#### new TorqueOffersModule()

```ts
new TorqueOffersModule(
   url, 
   transactions, 
   token?): TorqueOffersModule
```

Defined in: [sdk/src/modules/offers.ts:48](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/offers.ts#l48)

**Parameters**

| Parameter      | Type                                                      |
| -------------- | --------------------------------------------------------- |
| `url`          | `string`                                                  |
| `transactions` | [`TorqueTransactionsModule`](torquetransactionsmodule.md) |
| `token`?       | `string`                                                  |

**Returns**

`TorqueOffersModule`

### Properties

| Property        | Type                                                      |
| --------------- | --------------------------------------------------------- |
| `_publicKey`    | `undefined` \| `string`                                   |
| `_token`        | `undefined` \| `string`                                   |
| `_transactions` | [`TorqueTransactionsModule`](torquetransactionsmodule.md) |
| `actions`       | [`TorqueActionsModule`](torqueactionsmodule.md)           |
| `baseUrl`       | `string`                                                  |

### Accessors

#### publicKey

**Set Signature**

```ts
set publicKey(value): void
```

Defined in: [sdk/src/modules/offers.ts:67](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/offers.ts#l67)

Set private public key for the offers module

**Parameters**

| Parameter | Type                    |
| --------- | ----------------------- |
| `value`   | `undefined` \| `string` |

**Returns**

`void`

***

#### token

**Set Signature**

```ts
set token(value): void
```

Defined in: [sdk/src/modules/offers.ts:59](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/offers.ts#l59)

Set private token for the offers module

**Parameters**

| Parameter | Type                    |
| --------- | ----------------------- |
| `value`   | `undefined` \| `string` |

**Returns**

`void`

### Methods

#### addDistributor()

```ts
addDistributor(offerid, distributor): Promise<DistributorResponse>
```

Defined in: [sdk/src/modules/offers.ts:223](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/offers.ts#l223)

Adds a reward distributor to an offer

**Parameters**

| Parameter     | Type                                                      | Description                                        |
| ------------- | --------------------------------------------------------- | -------------------------------------------------- |
| `offerId`     | `string`                                                  | The offerId of the offer to add the distributor to |
| `distributor` | [`DistributorInput`](../type-aliases/distributorinput.md) | The distributor input parameters                   |

**Returns**

`Promise`<[`DistributorResponse`](../type-aliases/distributorresponse.md)>

The created distributor object

***

#### chooseAsymmetricRewardWinner()

```ts
chooseAsymmetricRewardWinner(distributorid): Promise<{
  publicKey: string;
  winner: string;
}>
```

Defined in: [sdk/src/modules/offers.ts:358](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/offers.ts#l358)

Choose asymmetric reward winner

**Parameters**

| Parameter       | Type     | Description                                                   |
| --------------- | -------- | ------------------------------------------------------------- |
| `distributorId` | `string` | The distributorId of the distributor to choose the winner for |

**Returns**

`Promise`<{`publicKey`: `string`;`winner`: `string`;\
}>

The winner of the asymmetric reward

***

#### closeDistributor()

```ts
closeDistributor(offerid, distributorid): Promise<{
  signature: string;
}>
```

Defined in: [sdk/src/modules/offers.ts:326](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/offers.ts#l326)

Closes the distributor for the given offer and distributor IDs

**Parameters**

| Parameter       | Type     | Description                                      |
| --------------- | -------- | ------------------------------------------------ |
| `offerId`       | `string` | The ID of the offer to close the distributor for |
| `distributorId` | `string` | The ID of the distributor to close               |

**Returns**

`Promise`<{`signature`: `string`;\
}>

The signature of the transaction

***

#### createOffer()

```ts
createOffer(offer): Promise<OfferResponse>
```

Defined in: [sdk/src/modules/offers.ts:119](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/offers.ts#l119)

Create an offer

**Parameters**

| Parameter | Type                                          | Description     |
| --------- | --------------------------------------------- | --------------- |
| `offer`   | [`OfferInput`](../type-aliases/offerinput.md) | The offer input |

**Returns**

`Promise`<[`OfferResponse`](../type-aliases/offerresponse.md)>

The created offer object

***

#### createProject()

```ts
createProject(projectdata): Promise<ProjectResponse>
```

Defined in: [sdk/src/modules/offers.ts:394](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/offers.ts#l394)

Create a project

**Parameters**

| Parameter     | Type                                              | Description      |
| ------------- | ------------------------------------------------- | ---------------- |
| `projectData` | [`ProjectInput`](../type-aliases/projectinput.md) | The project data |

**Returns**

`Promise`<[`ProjectResponse`](../type-aliases/projectresponse.md)>

The created project object

***

#### deployDistributor()

```ts
deployDistributor(offerid, distributorid): Promise<{
  signature: string;
}>
```

Defined in: [sdk/src/modules/offers.ts:286](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/offers.ts#l286)

Gets the Solana action for deploying a distributor

**Parameters**

| Parameter       | Type     | Description                                        |
| --------------- | -------- | -------------------------------------------------- |
| `offerId`       | `string` | The offerId of the offer to add the distributor to |
| `distributorId` | `string` | The distributorId of the distributor to deploy     |

**Returns**

`Promise`<{`signature`: `string`;\
}>

The serialized transaction for the deploy distributor action

***

#### getAsymmetricRewardEntries()

```ts
getAsymmetricRewardEntries(distributorid): Promise<Record<string, number>>
```

Defined in: [sdk/src/modules/offers.ts:343](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/offers.ts#l343)

Get the asymmetric reward entries for a distributor

**Parameters**

| Parameter       | Type     | Description                                                 |
| --------------- | -------- | ----------------------------------------------------------- |
| `distributorId` | `string` | The distributorId of the distributor to get the entries for |

**Returns**

`Promise`<`Record`<`string`, `number`>>

The asymmetric reward entries for the distributor

***

#### getLeaderboard()

```ts
getLeaderboard(projectid, offchainrewardid): Promise<LeaderboardResponse>
```

Defined in: [sdk/src/modules/offers.ts:373](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/offers.ts#l373)

Fetch a leaderboard for the specific off-chain reward

**Parameters**

| Parameter          | Type     | Description                                               |
| ------------------ | -------- | --------------------------------------------------------- |
| `projectId`        | `string` | -                                                         |
| `offchainRewardId` | `string` | The id of the off-chain reward to get the leaderboard for |

**Returns**

`Promise`<[`LeaderboardResponse`](../type-aliases/leaderboardresponse.md)>

***

#### getOfferById()

```ts
getOfferById(id): Promise<OfferResponse>
```

Defined in: [sdk/src/modules/offers.ts:83](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/offers.ts#l83)

Fetch a single offer

**Parameters**

| Parameter | Type     | Description                     |
| --------- | -------- | ------------------------------- |
| `id`      | `string` | The offerId of the offer to get |

**Returns**

`Promise`<[`OfferResponse`](../type-aliases/offerresponse.md)>

a single offer

***

#### getOffers()

```ts
getOffers(
   status, 
   userId?, 
projectId?): Promise<OfferResponse[]>
```

Defined in: [sdk/src/modules/offers.ts:99](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/offers.ts#l99)

Fetch the offers with optional filters for status and userId

**Parameters**

| Parameter    | Type                                            | Description                                              |
| ------------ | ----------------------------------------------- | -------------------------------------------------------- |
| `status`     | [`OfferStatus`](../enumerations/offerstatus.md) | (optional) The status of the offer. Defaults to ACTIVE.  |
| `userId`?    | `string`                                        | (optional) The userId or public key of the offer creator |
| `projectId`? | `string`                                        | -                                                        |

**Returns**

`Promise`<[`OfferResponse`](../type-aliases/offerresponse.md)\[]>

a list of offers

***

#### getProject()

```ts
getProject(projectid, includeoffers?): Promise<ProjectResponse>
```

Defined in: [sdk/src/modules/offers.ts:419](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/offers.ts#l419)

Get a project

**Parameters**

| Parameter        | Type      | Description                                                  |
| ---------------- | --------- | ------------------------------------------------------------ |
| `projectId`      | `string`  | The project ID                                               |
| `includeOffers`? | `boolean` | (optional) Whether to include offers in the project response |

**Returns**

`Promise`<[`ProjectResponse`](../type-aliases/projectresponse.md)>

The project object

***

#### getProjects()

```ts
getProjects(includeoffers?): Promise<ProjectResponse[]>
```

Defined in: [sdk/src/modules/offers.ts:442](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/offers.ts#l442)

Get projects

**Parameters**

| Parameter        | Type      | Description                                                  |
| ---------------- | --------- | ------------------------------------------------------------ |
| `includeOffers`? | `boolean` | (optional) Whether to include offers in the project response |

**Returns**

`Promise`<[`ProjectResponse`](../type-aliases/projectresponse.md)\[]>

A list of project objects

***

#### getUserJourneys()

```ts
getUserJourneys(
   offerId, 
   userPubkey?, 
status?): Promise<OfferJourneyReturn[]>
```

Defined in: [sdk/src/modules/offers.ts:201](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/offers.ts#l201)

Get user journeys on the offer

**Parameters**

| Parameter     | Type                                                  | Description                                             |
| ------------- | ----------------------------------------------------- | ------------------------------------------------------- |
| `offerId`     | `string`                                              | The offerId of the offer to get the user journeys for   |
| `userPubkey`? | `string`                                              | The public key of the user to get the user journeys for |
| `status`?     | [`ProgressStatus`](../enumerations/progressstatus.md) | The status of the user journeys to get                  |

**Returns**

`Promise`<[`OfferJourneyReturn`](../type-aliases/offerjourneyreturn.md)\[]>

***

#### startOffer()

```ts
startOffer(offerid, referrer?): Promise<void>
```

Defined in: [sdk/src/modules/offers.ts:174](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/offers.ts#l174)

Accept/start an offer for a user

**Parameters**

| Parameter   | Type     | Description                                     |
| ----------- | -------- | ----------------------------------------------- |
| `offerId`   | `string` | The offerId of the offer to accept for the user |
| `referrer`? | `string` | -                                               |

**Returns**

`Promise`<`void`>

***

#### updateDistributor()

```ts
updateDistributor(
   offerId, 
   distributorId, 
distributor): Promise<DistributorResponse>
```

Defined in: [sdk/src/modules/offers.ts:253](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/offers.ts#l253)

Update a distributor

**Parameters**

| Parameter       | Type                                                                  | Description                                       |
| --------------- | --------------------------------------------------------------------- | ------------------------------------------------- |
| `offerId`       | `string`                                                              | The ID of the offer that contains the distributor |
| `distributorId` | `string`                                                              | The ID of the distributor to update               |
| `distributor`   | [`DistributorUpdateInput`](../type-aliases/distributorupdateinput.md) | The updated distributor data                      |

**Returns**

`Promise`<[`DistributorResponse`](../type-aliases/distributorresponse.md)>

The updated distributor object

***

#### updateOffer()

```ts
updateOffer(offerid, offer): Promise<OfferResponse>
```

Defined in: [sdk/src/modules/offers.ts:148](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/offers.ts#l148)

Update an offer

**Parameters**

| Parameter | Type                                                      | Description                   |
| --------- | --------------------------------------------------------- | ----------------------------- |
| `offerId` | `string`                                                  | The ID of the offer to update |
| `offer`   | [`OfferUpdateInput`](../type-aliases/offerupdateinput.md) | The updated offer data        |

**Returns**

`Promise`<[`OfferResponse`](../type-aliases/offerresponse.md)>

The updated offer object
