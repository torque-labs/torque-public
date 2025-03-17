[**@torque-labs/sdk**](../../../@torque-labs/sdk/README.md)

***

[Torque Labs](../../../README.md) / [@torque-labs/sdk](../README.md) / TorqueOffersModule

# Class: TorqueOffersModule

Defined in: [packages/sdk/src/modules/offers.ts:53](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/offers.ts#L53)

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

Defined in: [packages/sdk/src/modules/offers.ts:61](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/offers.ts#L61)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `url` | `string` |
| `transactions` | [`TorqueTransactionsModule`](TorqueTransactionsModule.md) |
| `token`? | `string` |

#### Returns

`TorqueOffersModule`

## Properties

| Property | Type |
| ------ | ------ |
| <a id="_publickey"></a> `_publicKey` | `undefined` \| `string` |
| <a id="_token"></a> `_token` | `undefined` \| `string` |
| <a id="_transactions"></a> `_transactions` | [`TorqueTransactionsModule`](TorqueTransactionsModule.md) |
| <a id="actions"></a> `actions` | [`TorqueActionsModule`](TorqueActionsModule.md) |
| <a id="baseurl"></a> `baseUrl` | `string` |

## Accessors

### publicKey

#### Set Signature

```ts
set publicKey(value): void
```

Defined in: [packages/sdk/src/modules/offers.ts:80](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/offers.ts#L80)

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

Defined in: [packages/sdk/src/modules/offers.ts:72](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/offers.ts#L72)

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
addDistributor(offerId, distributor): Promise<{
  asymmetricRewardEntries: unknown[];
  closeTxSignature: null | string;
  conversions: null | number;
  crankerStatus: "IDLE" | "RUNNING" | "STOPPED";
  crankGuard: {
     distributors: unknown[];
     recipient: "USER" | "PUBLISHER" | "BOTH" | "NONE";
     user: Record<string, unknown>;
     userId: string;
    } & {
     activation:   | {
        type: OFFER_START;
       }
        | {
        type: OFFER_CONCLUSION;
       }
        | {
        type: CONVERSION_COUNT;
       }
        | {
        amount: number;
        oracle:   | "TORQUE"
           | "SOLANA_TX"
           | "CUSTOM_EVENT_PROVIDER"
           | "PYTH_MKT_CAP"
           | "PYTH_MKT_VOLUME"
           | "MESSAGE_SIGNATURE"
           | "SOCIAL_MEDIA";
        type: EVENT;
       }
        | {
        date: Date;
        type: DATE;
       } & {
        requiredConversionCount: number;
       };
     availability:   | null
        | {
        maxConversionsPerRecipient: null | number;
        maxTotalConversions: null | number;
        recipientConversionPeriod: null | HOURLY | DAILY | WEEKLY | MONTHLY;
       };
     distributionFunctionInput:   | {
        type: CONVERSION_INDEX;
       }
        | {
        max: null | number;
        min: null | number;
        type: CONVERSION_DATA;
       }
        | {
        aggregationType: AggregationType;
        type: AGGREGATION;
       };
    };
  crankGuardId: string;
  cranks: unknown[];
  currentBlockHash: null | string;
  deployTxSignature: null | string;
  distributionFunction: {
     createdAt: Date;
     curveDepth:   | null
        | string
        | number
        | objectOutputType<{
        d: ZodArray<ZodNumber, "many">;
        e: ZodNumber;
        s: ZodNumber;
       }, ZodTypeAny, "passthrough">;
     curveWidth:   | null
        | string
        | number
        | objectOutputType<{
        d: ZodArray<ZodNumber, "many">;
        e: ZodNumber;
        s: ZodNumber;
       }, ZodTypeAny, "passthrough">;
     distributors: unknown[];
     id: string;
     slope:   | null
        | string
        | number
        | objectOutputType<{
        d: ZodArray<ZodNumber, "many">;
        e: ZodNumber;
        s: ZodNumber;
       }, ZodTypeAny, "passthrough">;
     tiers: any;
     trend: null | "NEGATIVE" | "POSITIVE";
     type: "CONSTANT" | "LINEAR" | "STEP" | "EXPONENTIAL";
     updatedAt: Date;
     user: Record<string, unknown>;
     userId: string;
     yIntercept:   | null
        | string
        | number
        | objectOutputType<{
        d: ZodArray<ZodNumber, "many">;
        e: ZodNumber;
        s: ZodNumber;
       }, ZodTypeAny, "passthrough">;
    };
  distributionFunctionId: string;
  emissionType: "NFT" | "SOL" | "TOKENS" | "POINTS";
  index: number;
  offchainReward: Record<string, unknown>;
  offer: Record<string, unknown>;
  offerId: string;
  pointId: null | string;
  pubkey: string;
  serializedDeployTx: null | string;
  status: "DRAFT" | "ACTIVE" | "CLOSED";
  tokenAddress: null | string;
  tokenDecimals: number;
  totalFundAmount:   | string
     | number
     | objectOutputType<{
     d: ZodArray<ZodNumber, "many">;
     e: ZodNumber;
     s: ZodNumber;
    }, ZodTypeAny, "passthrough">;
  type: "CONVERSION" | "ASYMMETRIC";
  user: Record<string, unknown>;
  userId: string;
 } & {
  createdAt: Date;
  id: string;
  updatedAt: Date;
}>
```

Defined in: [packages/sdk/src/modules/offers.ts:246](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/offers.ts#L246)

Adds a reward distributor to an offer

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offerId` | `string` | The offerId of the offer to add the distributor to |
| `distributor` | \{ `crankGuard`: \{ `activation`: \| \{ `type`: `OFFER_START`; \} \| \{ `type`: `OFFER_CONCLUSION`; \} \| \{ `type`: `CONVERSION_COUNT`; \} \| \{ `amount`: `number`; `oracle`: \| `"TORQUE"` \| `"SOLANA_TX"` \| `"CUSTOM_EVENT_PROVIDER"` \| `"PYTH_MKT_CAP"` \| `"PYTH_MKT_VOLUME"` \| `"MESSAGE_SIGNATURE"` \| `"SOCIAL_MEDIA"`; `type`: `EVENT`; \} \| \{ `date`: `Date`; `type`: `DATE`; \} & \{ `requiredConversionCount`: `number`; \}; `availability`: \| `null` \| \{ `maxConversionsPerRecipient`: `null` \| `number`; `maxTotalConversions`: `null` \| `number`; `recipientConversionPeriod`: `null` \| `HOURLY` \| `DAILY` \| `WEEKLY` \| `MONTHLY`; \}; `distributionFunctionInput`: \| \{ `type`: `CONVERSION_INDEX`; \} \| \{ `max`: `null` \| `number`; `min`: `null` \| `number`; `type`: `CONVERSION_DATA`; \} \| \{ `aggregationType`: `AggregationType`; `type`: `AGGREGATION`; \}; `recipient`: `"USER"` \| `"PUBLISHER"` \| `"BOTH"` \| `"NONE"`; \}; `distributionFunction`: \| \{ `type`: `"CONSTANT"`; `yIntercept`: `number`; \} \| \{ `slope`: `number`; `trend`: `"NEGATIVE"` \| `"POSITIVE"`; `type`: `"LINEAR"`; `yIntercept`: `number`; \} \| \{ `tiers`: \{ `input`: `number`; `output`: `number`; \}[]; `type`: `"STEP"`; \} \| \{ `curveDepth`: `number`; `curveWidth`: `number`; `type`: `"EXPONENTIAL"`; `yIntercept`: `number`; \}; `emissionType`: `"NFT"` \| `"SOL"` \| `"TOKENS"` \| `"POINTS"`; `pointId`: `null` \| `string`; `tokenAddress`: `null` \| `string`; `tokenDecimals`: `number`; `totalFundAmount`: `number`; `type`: `"CONVERSION"` \| `"ASYMMETRIC"`; \} | The distributor input parameters |
| `distributor.crankGuard` | \{ `activation`: \| \{ `type`: `OFFER_START`; \} \| \{ `type`: `OFFER_CONCLUSION`; \} \| \{ `type`: `CONVERSION_COUNT`; \} \| \{ `amount`: `number`; `oracle`: \| `"TORQUE"` \| `"SOLANA_TX"` \| `"CUSTOM_EVENT_PROVIDER"` \| `"PYTH_MKT_CAP"` \| `"PYTH_MKT_VOLUME"` \| `"MESSAGE_SIGNATURE"` \| `"SOCIAL_MEDIA"`; `type`: `EVENT`; \} \| \{ `date`: `Date`; `type`: `DATE`; \} & \{ `requiredConversionCount`: `number`; \}; `availability`: \| `null` \| \{ `maxConversionsPerRecipient`: `null` \| `number`; `maxTotalConversions`: `null` \| `number`; `recipientConversionPeriod`: `null` \| `HOURLY` \| `DAILY` \| `WEEKLY` \| `MONTHLY`; \}; `distributionFunctionInput`: \| \{ `type`: `CONVERSION_INDEX`; \} \| \{ `max`: `null` \| `number`; `min`: `null` \| `number`; `type`: `CONVERSION_DATA`; \} \| \{ `aggregationType`: `AggregationType`; `type`: `AGGREGATION`; \}; `recipient`: `"USER"` \| `"PUBLISHER"` \| `"BOTH"` \| `"NONE"`; \} | - |
| `distributor.crankGuard.activation` | \| \{ `type`: `OFFER_START`; \} \| \{ `type`: `OFFER_CONCLUSION`; \} \| \{ `type`: `CONVERSION_COUNT`; \} \| \{ `amount`: `number`; `oracle`: \| `"TORQUE"` \| `"SOLANA_TX"` \| `"CUSTOM_EVENT_PROVIDER"` \| `"PYTH_MKT_CAP"` \| `"PYTH_MKT_VOLUME"` \| `"MESSAGE_SIGNATURE"` \| `"SOCIAL_MEDIA"`; `type`: `EVENT`; \} \| \{ `date`: `Date`; `type`: `DATE`; \} & \{ `requiredConversionCount`: `number`; \} | - |
| `distributor.crankGuard.availability`? | \| `null` \| \{ `maxConversionsPerRecipient`: `null` \| `number`; `maxTotalConversions`: `null` \| `number`; `recipientConversionPeriod`: `null` \| `HOURLY` \| `DAILY` \| `WEEKLY` \| `MONTHLY`; \} | - |
| `distributor.crankGuard.distributionFunctionInput` | \| \{ `type`: `CONVERSION_INDEX`; \} \| \{ `max`: `null` \| `number`; `min`: `null` \| `number`; `type`: `CONVERSION_DATA`; \} \| \{ `aggregationType`: `AggregationType`; `type`: `AGGREGATION`; \} | - |
| `distributor.crankGuard.recipient` | `"USER"` \| `"PUBLISHER"` \| `"BOTH"` \| `"NONE"` | - |
| `distributor.distributionFunction` | \| \{ `type`: `"CONSTANT"`; `yIntercept`: `number`; \} \| \{ `slope`: `number`; `trend`: `"NEGATIVE"` \| `"POSITIVE"`; `type`: `"LINEAR"`; `yIntercept`: `number`; \} \| \{ `tiers`: \{ `input`: `number`; `output`: `number`; \}[]; `type`: `"STEP"`; \} \| \{ `curveDepth`: `number`; `curveWidth`: `number`; `type`: `"EXPONENTIAL"`; `yIntercept`: `number`; \} | - |
| `distributor.emissionType` | `"NFT"` \| `"SOL"` \| `"TOKENS"` \| `"POINTS"` | - |
| `distributor.pointId`? | `null` \| `string` | - |
| `distributor.tokenAddress`? | `null` \| `string` | - |
| `distributor.tokenDecimals`? | `number` | - |
| `distributor.totalFundAmount` | `number` | - |
| `distributor.type` | `"CONVERSION"` \| `"ASYMMETRIC"` | - |

#### Returns

`Promise`\<\{
  `asymmetricRewardEntries`: `unknown`[];
  `closeTxSignature`: `null` \| `string`;
  `conversions`: `null` \| `number`;
  `crankerStatus`: `"IDLE"` \| `"RUNNING"` \| `"STOPPED"`;
  `crankGuard`: \{
     `distributors`: `unknown`[];
     `recipient`: `"USER"` \| `"PUBLISHER"` \| `"BOTH"` \| `"NONE"`;
     `user`: `Record`\<`string`, `unknown`\>;
     `userId`: `string`;
    \} & \{
     `activation`:   \| \{
        `type`: `OFFER_START`;
       \}
        \| \{
        `type`: `OFFER_CONCLUSION`;
       \}
        \| \{
        `type`: `CONVERSION_COUNT`;
       \}
        \| \{
        `amount`: `number`;
        `oracle`:   \| `"TORQUE"`
           \| `"SOLANA_TX"`
           \| `"CUSTOM_EVENT_PROVIDER"`
           \| `"PYTH_MKT_CAP"`
           \| `"PYTH_MKT_VOLUME"`
           \| `"MESSAGE_SIGNATURE"`
           \| `"SOCIAL_MEDIA"`;
        `type`: `EVENT`;
       \}
        \| \{
        `date`: `Date`;
        `type`: `DATE`;
       \} & \{
        `requiredConversionCount`: `number`;
       \};
     `availability`:   \| `null`
        \| \{
        `maxConversionsPerRecipient`: `null` \| `number`;
        `maxTotalConversions`: `null` \| `number`;
        `recipientConversionPeriod`: `null` \| `HOURLY` \| `DAILY` \| `WEEKLY` \| `MONTHLY`;
       \};
     `distributionFunctionInput`:   \| \{
        `type`: `CONVERSION_INDEX`;
       \}
        \| \{
        `max`: `null` \| `number`;
        `min`: `null` \| `number`;
        `type`: `CONVERSION_DATA`;
       \}
        \| \{
        `aggregationType`: `AggregationType`;
        `type`: `AGGREGATION`;
       \};
    \};
  `crankGuardId`: `string`;
  `cranks`: `unknown`[];
  `currentBlockHash`: `null` \| `string`;
  `deployTxSignature`: `null` \| `string`;
  `distributionFunction`: \{
     `createdAt`: `Date`;
     `curveDepth`:   \| `null`
        \| `string`
        \| `number`
        \| `objectOutputType`\<\{
        `d`: `ZodArray`\<`ZodNumber`, `"many"`\>;
        `e`: `ZodNumber`;
        `s`: `ZodNumber`;
       \}, `ZodTypeAny`, `"passthrough"`\>;
     `curveWidth`:   \| `null`
        \| `string`
        \| `number`
        \| `objectOutputType`\<\{
        `d`: `ZodArray`\<`ZodNumber`, `"many"`\>;
        `e`: `ZodNumber`;
        `s`: `ZodNumber`;
       \}, `ZodTypeAny`, `"passthrough"`\>;
     `distributors`: `unknown`[];
     `id`: `string`;
     `slope`:   \| `null`
        \| `string`
        \| `number`
        \| `objectOutputType`\<\{
        `d`: `ZodArray`\<`ZodNumber`, `"many"`\>;
        `e`: `ZodNumber`;
        `s`: `ZodNumber`;
       \}, `ZodTypeAny`, `"passthrough"`\>;
     `tiers`: `any`;
     `trend`: `null` \| `"NEGATIVE"` \| `"POSITIVE"`;
     `type`: `"CONSTANT"` \| `"LINEAR"` \| `"STEP"` \| `"EXPONENTIAL"`;
     `updatedAt`: `Date`;
     `user`: `Record`\<`string`, `unknown`\>;
     `userId`: `string`;
     `yIntercept`:   \| `null`
        \| `string`
        \| `number`
        \| `objectOutputType`\<\{
        `d`: `ZodArray`\<`ZodNumber`, `"many"`\>;
        `e`: `ZodNumber`;
        `s`: `ZodNumber`;
       \}, `ZodTypeAny`, `"passthrough"`\>;
    \};
  `distributionFunctionId`: `string`;
  `emissionType`: `"NFT"` \| `"SOL"` \| `"TOKENS"` \| `"POINTS"`;
  `index`: `number`;
  `offchainReward`: `Record`\<`string`, `unknown`\>;
  `offer`: `Record`\<`string`, `unknown`\>;
  `offerId`: `string`;
  `pointId`: `null` \| `string`;
  `pubkey`: `string`;
  `serializedDeployTx`: `null` \| `string`;
  `status`: `"DRAFT"` \| `"ACTIVE"` \| `"CLOSED"`;
  `tokenAddress`: `null` \| `string`;
  `tokenDecimals`: `number`;
  `totalFundAmount`:   \| `string`
     \| `number`
     \| `objectOutputType`\<\{
     `d`: `ZodArray`\<`ZodNumber`, `"many"`\>;
     `e`: `ZodNumber`;
     `s`: `ZodNumber`;
    \}, `ZodTypeAny`, `"passthrough"`\>;
  `type`: `"CONVERSION"` \| `"ASYMMETRIC"`;
  `user`: `Record`\<`string`, `unknown`\>;
  `userId`: `string`;
 \} & \{
  `createdAt`: `Date`;
  `id`: `string`;
  `updatedAt`: `Date`;
 \}\>

The created distributor object

***

### chooseAsymmetricRewardWinner()

```ts
chooseAsymmetricRewardWinner(distributorId): Promise<{
  publicKey: string;
  winner: string;
}>
```

Defined in: [packages/sdk/src/modules/offers.ts:381](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/offers.ts#L381)

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

Defined in: [packages/sdk/src/modules/offers.ts:349](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/offers.ts#L349)

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
createOffer(offer): Promise<{
  audienceId: null | string;
  conversions: unknown[];
  createdAt: Date;
  endTime: Date;
  id: string;
  metadata: {
     backgroundColor: null | string;
     backgroundImage: null | string;
     colorMode: null | "light" | "dark";
     description: null | string;
     image: null | string;
     title: string;
     url: null | string;
    };
  offerJourneys: unknown[];
  project: Record<string, unknown>;
  projectId: null | string;
  requirementJourneys: unknown[];
  startTime: Date;
  status: "DRAFT" | "ACTIVE" | "CLOSED";
  updatedAt: Date;
  user: Record<string, unknown>;
  userId: string;
 } & {
  audience:   | null
     | {
     address: null | string;
     amount:   | null
        | string
        | number
        | objectOutputType<{
        d: ZodArray<ZodNumber, "many">;
        e: ZodNumber;
        s: ZodNumber;
       }, ZodTypeAny, "passthrough">;
     createdAt: Date;
     id: string;
     members: unknown[];
     name: string;
     offers: unknown[];
     project: Record<string, unknown>;
     projectId: string;
     tokenGateType: null | "NFT" | "SPL";
     type: "ALLOWLIST" | "DENYLIST" | "TOKEN_GATE";
     updatedAt: Date;
    };
  distributors: {
     asymmetricRewardEntries: unknown[];
     closeTxSignature: null | string;
     conversions: null | number;
     crankerStatus: "IDLE" | "RUNNING" | "STOPPED";
     crankGuard: {
        distributors: ...[];
        recipient: "USER" | "PUBLISHER" | "BOTH" | "NONE";
        user: Record<..., ...>;
        userId: string;
       } & {
        activation: ... | ... | ... | ... | ... & {
           requiredConversionCount: ...;
          };
        availability:   | null
           | {
           maxConversionsPerRecipient: ...;
           maxTotalConversions: ...;
           recipientConversionPeriod: ...;
          };
        distributionFunctionInput:   | {
           type: ...;
          }
           | {
           max: ...;
           min: ...;
           type: ...;
          }
           | {
           aggregationType: ...;
           type: ...;
          };
       };
     crankGuardId: string;
     cranks: unknown[];
     currentBlockHash: null | string;
     deployTxSignature: null | string;
     distributionFunction: {
        createdAt: Date;
        curveDepth:   | null
           | string
           | number
           | objectOutputType<{
           d: ...;
           e: ...;
           s: ...;
          }, ZodTypeAny, "passthrough">;
        curveWidth:   | null
           | string
           | number
           | objectOutputType<{
           d: ...;
           e: ...;
           s: ...;
          }, ZodTypeAny, "passthrough">;
        distributors: unknown[];
        id: string;
        slope:   | null
           | string
           | number
           | objectOutputType<{
           d: ...;
           e: ...;
           s: ...;
          }, ZodTypeAny, "passthrough">;
        tiers: any;
        trend: null | "NEGATIVE" | "POSITIVE";
        type: "CONSTANT" | "LINEAR" | "STEP" | "EXPONENTIAL";
        updatedAt: Date;
        user: Record<string, unknown>;
        userId: string;
        yIntercept:   | null
           | string
           | number
           | objectOutputType<{
           d: ...;
           e: ...;
           s: ...;
          }, ZodTypeAny, "passthrough">;
       };
     distributionFunctionId: string;
     emissionType: "NFT" | "SOL" | "TOKENS" | "POINTS";
     index: number;
     offchainReward: Record<string, unknown>;
     offer: Record<string, unknown>;
     offerId: string;
     pointId: null | string;
     pubkey: string;
     serializedDeployTx: null | string;
     status: "DRAFT" | "ACTIVE" | "CLOSED";
     tokenAddress: null | string;
     tokenDecimals: number;
     totalFundAmount:   | string
        | number
        | objectOutputType<{
        d: ZodArray<ZodNumber, "many">;
        e: ZodNumber;
        s: ZodNumber;
       }, ZodTypeAny, "passthrough">;
     type: "CONVERSION" | "ASYMMETRIC";
     user: Record<string, unknown>;
     userId: string;
    } & {
     createdAt: Date;
     id: string;
     updatedAt: Date;
    }[];
  offerRequirements: {
     actionUrl: null | string;
     config: any;
     createdAt: Date;
     id: string;
     offers: unknown[];
     oracle:   | "TORQUE"
        | "SOLANA_TX"
        | "CUSTOM_EVENT_PROVIDER"
        | "PYTH_MKT_CAP"
        | "PYTH_MKT_VOLUME"
        | "MESSAGE_SIGNATURE"
        | "SOCIAL_MEDIA";
     requirementJourneys: unknown[];
     type: string;
     updatedAt: Date;
     user: Record<string, unknown>;
     userId: string;
    }[];
}>
```

Defined in: [packages/sdk/src/modules/offers.ts:142](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/offers.ts#L142)

Create an offer

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offer` | \{ `audience`: \| \{ name: string; \} & (\{ type: "ALLOWLIST"; addresses?: string\[\] \| null \| undefined; slug?: string \| null \| undefined; \} \| \{ type: "DENYLIST"; addresses?: string\[\] \| null \| undefined; slug?: string \| null \| undefined; \} \| \{ ...; \}) \| \{ `audienceId`: `null` \| `string`; \}; `endTime`: `Date`; `metadata`: \{ `backgroundColor`: `null` \| `string`; `backgroundImage`: `null` \| `string`; `colorMode`: `null` \| `"light"` \| `"dark"`; `description`: `null` \| `string`; `image`: `null` \| `string`; `title`: `string`; `url`: `null` \| `string`; \}; `projectId`: `null` \| `string`; `requirements`: ( \| \{ `config`: \{ `eventName`: `string`; `fields`: ( \| \{ `fieldName`: `string`; `validation`: \{ `type`: `"string"`; `validation`: `"exactMatch"` \| `"regEx"`; `value`: `string`; \}; \} \| \{ `fieldName`: `string`; `validation`: \{ `max`: `number`; `min`: `number`; `type`: `"number"`; \}; \} \| \{ `fieldName`: `string`; `validation`: \{ `exact`: `boolean`; `type`: `"boolean"`; \}; \})[]; \}; `oracle`: `"CUSTOM_EVENT_PROVIDER"`; `type`: [`CUSTOM`](../enumerations/EventType.md#custom); \} \| (\{ type: EventType.BURN; config: \{ amount: \{ type: "number"; min?: number \| undefined; max?: number \| undefined; \}; tokenAddress: \{ value: string; validation: "exactMatch" \| "regEx"; type: "string"; \}; \}; oracle: "SOLANA\_TX"; \} \| ... 10 more ... \| \{ ...; \}) & \{ ...; \})[]; `startTime`: `Date`; \} | The offer input |
| `offer.audience`? | \| \{ name: string; \} & (\{ type: "ALLOWLIST"; addresses?: string\[\] \| null \| undefined; slug?: string \| null \| undefined; \} \| \{ type: "DENYLIST"; addresses?: string\[\] \| null \| undefined; slug?: string \| null \| undefined; \} \| \{ ...; \}) \| \{ `audienceId`: `null` \| `string`; \} | - |
| `offer.endTime` | `Date` | - |
| `offer.metadata` | \{ `backgroundColor`: `null` \| `string`; `backgroundImage`: `null` \| `string`; `colorMode`: `null` \| `"light"` \| `"dark"`; `description`: `null` \| `string`; `image`: `null` \| `string`; `title`: `string`; `url`: `null` \| `string`; \} | - |
| `offer.metadata.backgroundColor`? | `null` \| `string` | - |
| `offer.metadata.backgroundImage`? | `null` \| `string` | - |
| `offer.metadata.colorMode`? | `null` \| `"light"` \| `"dark"` | - |
| `offer.metadata.description`? | `null` \| `string` | - |
| `offer.metadata.image`? | `null` \| `string` | - |
| `offer.metadata.title` | `string` | - |
| `offer.metadata.url`? | `null` \| `string` | - |
| `offer.projectId`? | `null` \| `string` | - |
| `offer.requirements` | ( \| \{ `config`: \{ `eventName`: `string`; `fields`: ( \| \{ `fieldName`: `string`; `validation`: \{ `type`: `"string"`; `validation`: `"exactMatch"` \| `"regEx"`; `value`: `string`; \}; \} \| \{ `fieldName`: `string`; `validation`: \{ `max`: `number`; `min`: `number`; `type`: `"number"`; \}; \} \| \{ `fieldName`: `string`; `validation`: \{ `exact`: `boolean`; `type`: `"boolean"`; \}; \})[]; \}; `oracle`: `"CUSTOM_EVENT_PROVIDER"`; `type`: [`CUSTOM`](../enumerations/EventType.md#custom); \} \| (\{ type: EventType.BURN; config: \{ amount: \{ type: "number"; min?: number \| undefined; max?: number \| undefined; \}; tokenAddress: \{ value: string; validation: "exactMatch" \| "regEx"; type: "string"; \}; \}; oracle: "SOLANA\_TX"; \} \| ... 10 more ... \| \{ ...; \}) & \{ ...; \})[] | - |
| `offer.startTime` | `Date` | - |

#### Returns

`Promise`\<\{
  `audienceId`: `null` \| `string`;
  `conversions`: `unknown`[];
  `createdAt`: `Date`;
  `endTime`: `Date`;
  `id`: `string`;
  `metadata`: \{
     `backgroundColor`: `null` \| `string`;
     `backgroundImage`: `null` \| `string`;
     `colorMode`: `null` \| `"light"` \| `"dark"`;
     `description`: `null` \| `string`;
     `image`: `null` \| `string`;
     `title`: `string`;
     `url`: `null` \| `string`;
    \};
  `offerJourneys`: `unknown`[];
  `project`: `Record`\<`string`, `unknown`\>;
  `projectId`: `null` \| `string`;
  `requirementJourneys`: `unknown`[];
  `startTime`: `Date`;
  `status`: `"DRAFT"` \| `"ACTIVE"` \| `"CLOSED"`;
  `updatedAt`: `Date`;
  `user`: `Record`\<`string`, `unknown`\>;
  `userId`: `string`;
 \} & \{
  `audience`:   \| `null`
     \| \{
     `address`: `null` \| `string`;
     `amount`:   \| `null`
        \| `string`
        \| `number`
        \| `objectOutputType`\<\{
        `d`: `ZodArray`\<`ZodNumber`, `"many"`\>;
        `e`: `ZodNumber`;
        `s`: `ZodNumber`;
       \}, `ZodTypeAny`, `"passthrough"`\>;
     `createdAt`: `Date`;
     `id`: `string`;
     `members`: `unknown`[];
     `name`: `string`;
     `offers`: `unknown`[];
     `project`: `Record`\<`string`, `unknown`\>;
     `projectId`: `string`;
     `tokenGateType`: `null` \| `"NFT"` \| `"SPL"`;
     `type`: `"ALLOWLIST"` \| `"DENYLIST"` \| `"TOKEN_GATE"`;
     `updatedAt`: `Date`;
    \};
  `distributors`: \{
     `asymmetricRewardEntries`: `unknown`[];
     `closeTxSignature`: `null` \| `string`;
     `conversions`: `null` \| `number`;
     `crankerStatus`: `"IDLE"` \| `"RUNNING"` \| `"STOPPED"`;
     `crankGuard`: \{
        `distributors`: ...[];
        `recipient`: `"USER"` \| `"PUBLISHER"` \| `"BOTH"` \| `"NONE"`;
        `user`: `Record`\<..., ...\>;
        `userId`: `string`;
       \} & \{
        `activation`: ... \| ... \| ... \| ... \| ... & \{
           `requiredConversionCount`: ...;
          \};
        `availability`:   \| `null`
           \| \{
           `maxConversionsPerRecipient`: ...;
           `maxTotalConversions`: ...;
           `recipientConversionPeriod`: ...;
          \};
        `distributionFunctionInput`:   \| \{
           `type`: ...;
          \}
           \| \{
           `max`: ...;
           `min`: ...;
           `type`: ...;
          \}
           \| \{
           `aggregationType`: ...;
           `type`: ...;
          \};
       \};
     `crankGuardId`: `string`;
     `cranks`: `unknown`[];
     `currentBlockHash`: `null` \| `string`;
     `deployTxSignature`: `null` \| `string`;
     `distributionFunction`: \{
        `createdAt`: `Date`;
        `curveDepth`:   \| `null`
           \| `string`
           \| `number`
           \| `objectOutputType`\<\{
           `d`: ...;
           `e`: ...;
           `s`: ...;
          \}, `ZodTypeAny`, `"passthrough"`\>;
        `curveWidth`:   \| `null`
           \| `string`
           \| `number`
           \| `objectOutputType`\<\{
           `d`: ...;
           `e`: ...;
           `s`: ...;
          \}, `ZodTypeAny`, `"passthrough"`\>;
        `distributors`: `unknown`[];
        `id`: `string`;
        `slope`:   \| `null`
           \| `string`
           \| `number`
           \| `objectOutputType`\<\{
           `d`: ...;
           `e`: ...;
           `s`: ...;
          \}, `ZodTypeAny`, `"passthrough"`\>;
        `tiers`: `any`;
        `trend`: `null` \| `"NEGATIVE"` \| `"POSITIVE"`;
        `type`: `"CONSTANT"` \| `"LINEAR"` \| `"STEP"` \| `"EXPONENTIAL"`;
        `updatedAt`: `Date`;
        `user`: `Record`\<`string`, `unknown`\>;
        `userId`: `string`;
        `yIntercept`:   \| `null`
           \| `string`
           \| `number`
           \| `objectOutputType`\<\{
           `d`: ...;
           `e`: ...;
           `s`: ...;
          \}, `ZodTypeAny`, `"passthrough"`\>;
       \};
     `distributionFunctionId`: `string`;
     `emissionType`: `"NFT"` \| `"SOL"` \| `"TOKENS"` \| `"POINTS"`;
     `index`: `number`;
     `offchainReward`: `Record`\<`string`, `unknown`\>;
     `offer`: `Record`\<`string`, `unknown`\>;
     `offerId`: `string`;
     `pointId`: `null` \| `string`;
     `pubkey`: `string`;
     `serializedDeployTx`: `null` \| `string`;
     `status`: `"DRAFT"` \| `"ACTIVE"` \| `"CLOSED"`;
     `tokenAddress`: `null` \| `string`;
     `tokenDecimals`: `number`;
     `totalFundAmount`:   \| `string`
        \| `number`
        \| `objectOutputType`\<\{
        `d`: `ZodArray`\<`ZodNumber`, `"many"`\>;
        `e`: `ZodNumber`;
        `s`: `ZodNumber`;
       \}, `ZodTypeAny`, `"passthrough"`\>;
     `type`: `"CONVERSION"` \| `"ASYMMETRIC"`;
     `user`: `Record`\<`string`, `unknown`\>;
     `userId`: `string`;
    \} & \{
     `createdAt`: `Date`;
     `id`: `string`;
     `updatedAt`: `Date`;
    \}[];
  `offerRequirements`: \{
     `actionUrl`: `null` \| `string`;
     `config`: `any`;
     `createdAt`: `Date`;
     `id`: `string`;
     `offers`: `unknown`[];
     `oracle`:   \| `"TORQUE"`
        \| `"SOLANA_TX"`
        \| `"CUSTOM_EVENT_PROVIDER"`
        \| `"PYTH_MKT_CAP"`
        \| `"PYTH_MKT_VOLUME"`
        \| `"MESSAGE_SIGNATURE"`
        \| `"SOCIAL_MEDIA"`;
     `requirementJourneys`: `unknown`[];
     `type`: `string`;
     `updatedAt`: `Date`;
     `user`: `Record`\<`string`, `unknown`\>;
     `userId`: `string`;
    \}[];
 \}\>

The created offer object

***

### createProject()

```ts
createProject(projectData): Promise<{
  audience: unknown[];
  createdAt: Date;
  customEvent: unknown[];
  description: null | string;
  discord: null | string;
  id: string;
  image: null | string;
  name: string;
  offchainAllocationEndpoint: null | string;
  offchainRewards: unknown[];
  offers:   | null
     | {
     audience: Record<string, unknown>;
     audienceId: null | string;
     conversions: unknown[];
     distributors: unknown[];
     endTime: Date;
     metadata: {
        backgroundColor: null | string;
        backgroundImage: null | string;
        colorMode: null | "light" | "dark";
        description: null | string;
        image: null | string;
        title: string;
        url: null | string;
       };
     offerJourneys: unknown[];
     offerRequirements: unknown[];
     project: Record<string, unknown>;
     projectId: null | string;
     requirementJourneys: unknown[];
     startTime: Date;
     status: "DRAFT" | "ACTIVE" | "CLOSED";
     user: Record<string, unknown>;
     userId: string;
    } & {
     distributors: {
        id: string;
        status: string;
       }[];
     id: string;
    }[];
  owner: Record<string, unknown>;
  ownerId: string;
  roles: {
     createdAt: Date;
     id: string;
     project: Record<string, unknown>;
     projectId: string;
     role: "ADMIN" | "BUILDER" | "VIEWER";
     updatedAt: Date;
     user: Record<string, unknown>;
     userId: string;
    }[];
  telegram: null | string;
  twitter: null | string;
  updatedAt: Date;
  website: null | string;
}>
```

Defined in: [packages/sdk/src/modules/offers.ts:417](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/offers.ts#L417)

Create a project

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectData` | \{ `createdAt`: `Date`; `description`: `null` \| `string`; `discord`: `null` \| `string`; `id`: `string`; `image`: `null` \| `string`; `name`: `string`; `offchainAllocationEndpoint`: `null` \| `string`; `ownerId`: `string`; `telegram`: `null` \| `string`; `twitter`: `null` \| `string`; `updatedAt`: `Date`; `website`: `null` \| `string`; \} | The project data |
| `projectData.createdAt`? | `Date` | - |
| `projectData.description`? | `null` \| `string` | - |
| `projectData.discord`? | `null` \| `string` | - |
| `projectData.id`? | `string` | - |
| `projectData.image`? | `null` \| `string` | - |
| `projectData.name` | `string` | - |
| `projectData.offchainAllocationEndpoint`? | `null` \| `string` | - |
| `projectData.ownerId` | `string` | - |
| `projectData.telegram`? | `null` \| `string` | - |
| `projectData.twitter`? | `null` \| `string` | - |
| `projectData.updatedAt`? | `Date` | - |
| `projectData.website`? | `null` \| `string` | - |

#### Returns

`Promise`\<\{
  `audience`: `unknown`[];
  `createdAt`: `Date`;
  `customEvent`: `unknown`[];
  `description`: `null` \| `string`;
  `discord`: `null` \| `string`;
  `id`: `string`;
  `image`: `null` \| `string`;
  `name`: `string`;
  `offchainAllocationEndpoint`: `null` \| `string`;
  `offchainRewards`: `unknown`[];
  `offers`:   \| `null`
     \| \{
     `audience`: `Record`\<`string`, `unknown`\>;
     `audienceId`: `null` \| `string`;
     `conversions`: `unknown`[];
     `distributors`: `unknown`[];
     `endTime`: `Date`;
     `metadata`: \{
        `backgroundColor`: `null` \| `string`;
        `backgroundImage`: `null` \| `string`;
        `colorMode`: `null` \| `"light"` \| `"dark"`;
        `description`: `null` \| `string`;
        `image`: `null` \| `string`;
        `title`: `string`;
        `url`: `null` \| `string`;
       \};
     `offerJourneys`: `unknown`[];
     `offerRequirements`: `unknown`[];
     `project`: `Record`\<`string`, `unknown`\>;
     `projectId`: `null` \| `string`;
     `requirementJourneys`: `unknown`[];
     `startTime`: `Date`;
     `status`: `"DRAFT"` \| `"ACTIVE"` \| `"CLOSED"`;
     `user`: `Record`\<`string`, `unknown`\>;
     `userId`: `string`;
    \} & \{
     `distributors`: \{
        `id`: `string`;
        `status`: `string`;
       \}[];
     `id`: `string`;
    \}[];
  `owner`: `Record`\<`string`, `unknown`\>;
  `ownerId`: `string`;
  `roles`: \{
     `createdAt`: `Date`;
     `id`: `string`;
     `project`: `Record`\<`string`, `unknown`\>;
     `projectId`: `string`;
     `role`: `"ADMIN"` \| `"BUILDER"` \| `"VIEWER"`;
     `updatedAt`: `Date`;
     `user`: `Record`\<`string`, `unknown`\>;
     `userId`: `string`;
    \}[];
  `telegram`: `null` \| `string`;
  `twitter`: `null` \| `string`;
  `updatedAt`: `Date`;
  `website`: `null` \| `string`;
 \}\>

The created project object

***

### deployDistributor()

```ts
deployDistributor(offerId, distributorId): Promise<{
  signature: string;
}>
```

Defined in: [packages/sdk/src/modules/offers.ts:309](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/offers.ts#L309)

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

Defined in: [packages/sdk/src/modules/offers.ts:366](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/offers.ts#L366)

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
getLeaderboard(projectId, offchainRewardId): Promise<{
  allocations: {
     pubKey: string;
     total: number;
    }[];
  pointId: string;
}>
```

Defined in: [packages/sdk/src/modules/offers.ts:396](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/offers.ts#L396)

Fetch a leaderboard for the specific off-chain reward

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | - |
| `offchainRewardId` | `string` | The id of the off-chain reward to get the leaderboard for |

#### Returns

`Promise`\<\{
  `allocations`: \{
     `pubKey`: `string`;
     `total`: `number`;
    \}[];
  `pointId`: `string`;
 \}\>

***

### getOfferById()

```ts
getOfferById(id): Promise<{
  audienceId: null | string;
  conversions: unknown[];
  createdAt: Date;
  endTime: Date;
  id: string;
  metadata: {
     backgroundColor: null | string;
     backgroundImage: null | string;
     colorMode: null | "light" | "dark";
     description: null | string;
     image: null | string;
     title: string;
     url: null | string;
    };
  offerJourneys: unknown[];
  project: Record<string, unknown>;
  projectId: null | string;
  requirementJourneys: unknown[];
  startTime: Date;
  status: "DRAFT" | "ACTIVE" | "CLOSED";
  updatedAt: Date;
  user: Record<string, unknown>;
  userId: string;
 } & {
  audience:   | null
     | {
     address: null | string;
     amount:   | null
        | string
        | number
        | objectOutputType<{
        d: ZodArray<ZodNumber, "many">;
        e: ZodNumber;
        s: ZodNumber;
       }, ZodTypeAny, "passthrough">;
     createdAt: Date;
     id: string;
     members: unknown[];
     name: string;
     offers: unknown[];
     project: Record<string, unknown>;
     projectId: string;
     tokenGateType: null | "NFT" | "SPL";
     type: "ALLOWLIST" | "DENYLIST" | "TOKEN_GATE";
     updatedAt: Date;
    };
  distributors: {
     asymmetricRewardEntries: unknown[];
     closeTxSignature: null | string;
     conversions: null | number;
     crankerStatus: "IDLE" | "RUNNING" | "STOPPED";
     crankGuard: {
        distributors: ...[];
        recipient: "USER" | "PUBLISHER" | "BOTH" | "NONE";
        user: Record<..., ...>;
        userId: string;
       } & {
        activation: ... | ... | ... | ... | ... & {
           requiredConversionCount: ...;
          };
        availability:   | null
           | {
           maxConversionsPerRecipient: ...;
           maxTotalConversions: ...;
           recipientConversionPeriod: ...;
          };
        distributionFunctionInput:   | {
           type: ...;
          }
           | {
           max: ...;
           min: ...;
           type: ...;
          }
           | {
           aggregationType: ...;
           type: ...;
          };
       };
     crankGuardId: string;
     cranks: unknown[];
     currentBlockHash: null | string;
     deployTxSignature: null | string;
     distributionFunction: {
        createdAt: Date;
        curveDepth:   | null
           | string
           | number
           | objectOutputType<{
           d: ...;
           e: ...;
           s: ...;
          }, ZodTypeAny, "passthrough">;
        curveWidth:   | null
           | string
           | number
           | objectOutputType<{
           d: ...;
           e: ...;
           s: ...;
          }, ZodTypeAny, "passthrough">;
        distributors: unknown[];
        id: string;
        slope:   | null
           | string
           | number
           | objectOutputType<{
           d: ...;
           e: ...;
           s: ...;
          }, ZodTypeAny, "passthrough">;
        tiers: any;
        trend: null | "NEGATIVE" | "POSITIVE";
        type: "CONSTANT" | "LINEAR" | "STEP" | "EXPONENTIAL";
        updatedAt: Date;
        user: Record<string, unknown>;
        userId: string;
        yIntercept:   | null
           | string
           | number
           | objectOutputType<{
           d: ...;
           e: ...;
           s: ...;
          }, ZodTypeAny, "passthrough">;
       };
     distributionFunctionId: string;
     emissionType: "NFT" | "SOL" | "TOKENS" | "POINTS";
     index: number;
     offchainReward: Record<string, unknown>;
     offer: Record<string, unknown>;
     offerId: string;
     pointId: null | string;
     pubkey: string;
     serializedDeployTx: null | string;
     status: "DRAFT" | "ACTIVE" | "CLOSED";
     tokenAddress: null | string;
     tokenDecimals: number;
     totalFundAmount:   | string
        | number
        | objectOutputType<{
        d: ZodArray<ZodNumber, "many">;
        e: ZodNumber;
        s: ZodNumber;
       }, ZodTypeAny, "passthrough">;
     type: "CONVERSION" | "ASYMMETRIC";
     user: Record<string, unknown>;
     userId: string;
    } & {
     createdAt: Date;
     id: string;
     updatedAt: Date;
    }[];
  offerRequirements: {
     actionUrl: null | string;
     config: any;
     createdAt: Date;
     id: string;
     offers: unknown[];
     oracle:   | "TORQUE"
        | "SOLANA_TX"
        | "CUSTOM_EVENT_PROVIDER"
        | "PYTH_MKT_CAP"
        | "PYTH_MKT_VOLUME"
        | "MESSAGE_SIGNATURE"
        | "SOCIAL_MEDIA";
     requirementJourneys: unknown[];
     type: string;
     updatedAt: Date;
     user: Record<string, unknown>;
     userId: string;
    }[];
}>
```

Defined in: [packages/sdk/src/modules/offers.ts:96](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/offers.ts#L96)

Fetch a single offer

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `string` | The offerId of the offer to get |

#### Returns

`Promise`\<\{
  `audienceId`: `null` \| `string`;
  `conversions`: `unknown`[];
  `createdAt`: `Date`;
  `endTime`: `Date`;
  `id`: `string`;
  `metadata`: \{
     `backgroundColor`: `null` \| `string`;
     `backgroundImage`: `null` \| `string`;
     `colorMode`: `null` \| `"light"` \| `"dark"`;
     `description`: `null` \| `string`;
     `image`: `null` \| `string`;
     `title`: `string`;
     `url`: `null` \| `string`;
    \};
  `offerJourneys`: `unknown`[];
  `project`: `Record`\<`string`, `unknown`\>;
  `projectId`: `null` \| `string`;
  `requirementJourneys`: `unknown`[];
  `startTime`: `Date`;
  `status`: `"DRAFT"` \| `"ACTIVE"` \| `"CLOSED"`;
  `updatedAt`: `Date`;
  `user`: `Record`\<`string`, `unknown`\>;
  `userId`: `string`;
 \} & \{
  `audience`:   \| `null`
     \| \{
     `address`: `null` \| `string`;
     `amount`:   \| `null`
        \| `string`
        \| `number`
        \| `objectOutputType`\<\{
        `d`: `ZodArray`\<`ZodNumber`, `"many"`\>;
        `e`: `ZodNumber`;
        `s`: `ZodNumber`;
       \}, `ZodTypeAny`, `"passthrough"`\>;
     `createdAt`: `Date`;
     `id`: `string`;
     `members`: `unknown`[];
     `name`: `string`;
     `offers`: `unknown`[];
     `project`: `Record`\<`string`, `unknown`\>;
     `projectId`: `string`;
     `tokenGateType`: `null` \| `"NFT"` \| `"SPL"`;
     `type`: `"ALLOWLIST"` \| `"DENYLIST"` \| `"TOKEN_GATE"`;
     `updatedAt`: `Date`;
    \};
  `distributors`: \{
     `asymmetricRewardEntries`: `unknown`[];
     `closeTxSignature`: `null` \| `string`;
     `conversions`: `null` \| `number`;
     `crankerStatus`: `"IDLE"` \| `"RUNNING"` \| `"STOPPED"`;
     `crankGuard`: \{
        `distributors`: ...[];
        `recipient`: `"USER"` \| `"PUBLISHER"` \| `"BOTH"` \| `"NONE"`;
        `user`: `Record`\<..., ...\>;
        `userId`: `string`;
       \} & \{
        `activation`: ... \| ... \| ... \| ... \| ... & \{
           `requiredConversionCount`: ...;
          \};
        `availability`:   \| `null`
           \| \{
           `maxConversionsPerRecipient`: ...;
           `maxTotalConversions`: ...;
           `recipientConversionPeriod`: ...;
          \};
        `distributionFunctionInput`:   \| \{
           `type`: ...;
          \}
           \| \{
           `max`: ...;
           `min`: ...;
           `type`: ...;
          \}
           \| \{
           `aggregationType`: ...;
           `type`: ...;
          \};
       \};
     `crankGuardId`: `string`;
     `cranks`: `unknown`[];
     `currentBlockHash`: `null` \| `string`;
     `deployTxSignature`: `null` \| `string`;
     `distributionFunction`: \{
        `createdAt`: `Date`;
        `curveDepth`:   \| `null`
           \| `string`
           \| `number`
           \| `objectOutputType`\<\{
           `d`: ...;
           `e`: ...;
           `s`: ...;
          \}, `ZodTypeAny`, `"passthrough"`\>;
        `curveWidth`:   \| `null`
           \| `string`
           \| `number`
           \| `objectOutputType`\<\{
           `d`: ...;
           `e`: ...;
           `s`: ...;
          \}, `ZodTypeAny`, `"passthrough"`\>;
        `distributors`: `unknown`[];
        `id`: `string`;
        `slope`:   \| `null`
           \| `string`
           \| `number`
           \| `objectOutputType`\<\{
           `d`: ...;
           `e`: ...;
           `s`: ...;
          \}, `ZodTypeAny`, `"passthrough"`\>;
        `tiers`: `any`;
        `trend`: `null` \| `"NEGATIVE"` \| `"POSITIVE"`;
        `type`: `"CONSTANT"` \| `"LINEAR"` \| `"STEP"` \| `"EXPONENTIAL"`;
        `updatedAt`: `Date`;
        `user`: `Record`\<`string`, `unknown`\>;
        `userId`: `string`;
        `yIntercept`:   \| `null`
           \| `string`
           \| `number`
           \| `objectOutputType`\<\{
           `d`: ...;
           `e`: ...;
           `s`: ...;
          \}, `ZodTypeAny`, `"passthrough"`\>;
       \};
     `distributionFunctionId`: `string`;
     `emissionType`: `"NFT"` \| `"SOL"` \| `"TOKENS"` \| `"POINTS"`;
     `index`: `number`;
     `offchainReward`: `Record`\<`string`, `unknown`\>;
     `offer`: `Record`\<`string`, `unknown`\>;
     `offerId`: `string`;
     `pointId`: `null` \| `string`;
     `pubkey`: `string`;
     `serializedDeployTx`: `null` \| `string`;
     `status`: `"DRAFT"` \| `"ACTIVE"` \| `"CLOSED"`;
     `tokenAddress`: `null` \| `string`;
     `tokenDecimals`: `number`;
     `totalFundAmount`:   \| `string`
        \| `number`
        \| `objectOutputType`\<\{
        `d`: `ZodArray`\<`ZodNumber`, `"many"`\>;
        `e`: `ZodNumber`;
        `s`: `ZodNumber`;
       \}, `ZodTypeAny`, `"passthrough"`\>;
     `type`: `"CONVERSION"` \| `"ASYMMETRIC"`;
     `user`: `Record`\<`string`, `unknown`\>;
     `userId`: `string`;
    \} & \{
     `createdAt`: `Date`;
     `id`: `string`;
     `updatedAt`: `Date`;
    \}[];
  `offerRequirements`: \{
     `actionUrl`: `null` \| `string`;
     `config`: `any`;
     `createdAt`: `Date`;
     `id`: `string`;
     `offers`: `unknown`[];
     `oracle`:   \| `"TORQUE"`
        \| `"SOLANA_TX"`
        \| `"CUSTOM_EVENT_PROVIDER"`
        \| `"PYTH_MKT_CAP"`
        \| `"PYTH_MKT_VOLUME"`
        \| `"MESSAGE_SIGNATURE"`
        \| `"SOCIAL_MEDIA"`;
     `requirementJourneys`: `unknown`[];
     `type`: `string`;
     `updatedAt`: `Date`;
     `user`: `Record`\<`string`, `unknown`\>;
     `userId`: `string`;
    \}[];
 \}\>

a single offer

***

### getOffers()

```ts
getOffers(
   status, 
   userId?, 
   projectId?): Promise<{
  audienceId: null | string;
  conversions: unknown[];
  createdAt: Date;
  endTime: Date;
  id: string;
  metadata: {
     backgroundColor: null | string;
     backgroundImage: null | string;
     colorMode: null | "light" | "dark";
     description: null | string;
     image: null | string;
     title: string;
     url: null | string;
    };
  offerJourneys: unknown[];
  project: Record<string, unknown>;
  projectId: null | string;
  requirementJourneys: unknown[];
  startTime: Date;
  status: "DRAFT" | "ACTIVE" | "CLOSED";
  updatedAt: Date;
  user: Record<string, unknown>;
  userId: string;
 } & {
  audience:   | null
     | {
     address: null | string;
     amount:   | null
        | string
        | number
        | objectOutputType<{
        d: ZodArray<ZodNumber, "many">;
        e: ZodNumber;
        s: ZodNumber;
       }, ZodTypeAny, "passthrough">;
     createdAt: Date;
     id: string;
     members: unknown[];
     name: string;
     offers: unknown[];
     project: Record<string, unknown>;
     projectId: string;
     tokenGateType: null | "NFT" | "SPL";
     type: "ALLOWLIST" | "DENYLIST" | "TOKEN_GATE";
     updatedAt: Date;
    };
  distributors: {
     asymmetricRewardEntries: unknown[];
     closeTxSignature: null | string;
     conversions: null | number;
     crankerStatus: "IDLE" | "RUNNING" | "STOPPED";
     crankGuard: {
        distributors: ... | ...;
        recipient: ... | ... | ... | ...;
        user: ... | ...;
        userId: string;
       } & {
        activation: ... & ...;
        availability: ... | ... | ...;
        distributionFunctionInput: ... | ... | ...;
       };
     crankGuardId: string;
     cranks: unknown[];
     currentBlockHash: null | string;
     deployTxSignature: null | string;
     distributionFunction: {
        createdAt: Date;
        curveDepth: null | string | number | objectOutputType<..., ..., ...>;
        curveWidth: null | string | number | objectOutputType<..., ..., ...>;
        distributors: ...[];
        id: string;
        slope: null | string | number | objectOutputType<..., ..., ...>;
        tiers: any;
        trend: null | "NEGATIVE" | "POSITIVE";
        type: "CONSTANT" | "LINEAR" | "STEP" | "EXPONENTIAL";
        updatedAt: Date;
        user: Record<..., ...>;
        userId: string;
        yIntercept: null | string | number | objectOutputType<..., ..., ...>;
       };
     distributionFunctionId: string;
     emissionType: "NFT" | "SOL" | "TOKENS" | "POINTS";
     index: number;
     offchainReward: Record<string, unknown>;
     offer: Record<string, unknown>;
     offerId: string;
     pointId: null | string;
     pubkey: string;
     serializedDeployTx: null | string;
     status: "DRAFT" | "ACTIVE" | "CLOSED";
     tokenAddress: null | string;
     tokenDecimals: number;
     totalFundAmount:   | string
        | number
        | objectOutputType<{
        d: ZodArray<..., ...>;
        e: ZodNumber;
        s: ZodNumber;
       }, ZodTypeAny, "passthrough">;
     type: "CONVERSION" | "ASYMMETRIC";
     user: Record<string, unknown>;
     userId: string;
    } & {
     createdAt: Date;
     id: string;
     updatedAt: Date;
    }[];
  offerRequirements: {
     actionUrl: null | string;
     config: any;
     createdAt: Date;
     id: string;
     offers: unknown[];
     oracle:   | "TORQUE"
        | "SOLANA_TX"
        | "CUSTOM_EVENT_PROVIDER"
        | "PYTH_MKT_CAP"
        | "PYTH_MKT_VOLUME"
        | "MESSAGE_SIGNATURE"
        | "SOCIAL_MEDIA";
     requirementJourneys: unknown[];
     type: string;
     updatedAt: Date;
     user: Record<string, unknown>;
     userId: string;
    }[];
}[]>
```

Defined in: [packages/sdk/src/modules/offers.ts:122](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/offers.ts#L122)

Fetch the offers with optional filters for status and userId

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `status` | `"DRAFT"` \| `"ACTIVE"` \| `"CLOSED"` | (optional) The status of the offer. Defaults to ACTIVE. |
| `userId`? | `string` | (optional) The userId or public key of the offer creator |
| `projectId`? | `string` | - |

#### Returns

`Promise`\<\{
  `audienceId`: `null` \| `string`;
  `conversions`: `unknown`[];
  `createdAt`: `Date`;
  `endTime`: `Date`;
  `id`: `string`;
  `metadata`: \{
     `backgroundColor`: `null` \| `string`;
     `backgroundImage`: `null` \| `string`;
     `colorMode`: `null` \| `"light"` \| `"dark"`;
     `description`: `null` \| `string`;
     `image`: `null` \| `string`;
     `title`: `string`;
     `url`: `null` \| `string`;
    \};
  `offerJourneys`: `unknown`[];
  `project`: `Record`\<`string`, `unknown`\>;
  `projectId`: `null` \| `string`;
  `requirementJourneys`: `unknown`[];
  `startTime`: `Date`;
  `status`: `"DRAFT"` \| `"ACTIVE"` \| `"CLOSED"`;
  `updatedAt`: `Date`;
  `user`: `Record`\<`string`, `unknown`\>;
  `userId`: `string`;
 \} & \{
  `audience`:   \| `null`
     \| \{
     `address`: `null` \| `string`;
     `amount`:   \| `null`
        \| `string`
        \| `number`
        \| `objectOutputType`\<\{
        `d`: `ZodArray`\<`ZodNumber`, `"many"`\>;
        `e`: `ZodNumber`;
        `s`: `ZodNumber`;
       \}, `ZodTypeAny`, `"passthrough"`\>;
     `createdAt`: `Date`;
     `id`: `string`;
     `members`: `unknown`[];
     `name`: `string`;
     `offers`: `unknown`[];
     `project`: `Record`\<`string`, `unknown`\>;
     `projectId`: `string`;
     `tokenGateType`: `null` \| `"NFT"` \| `"SPL"`;
     `type`: `"ALLOWLIST"` \| `"DENYLIST"` \| `"TOKEN_GATE"`;
     `updatedAt`: `Date`;
    \};
  `distributors`: \{
     `asymmetricRewardEntries`: `unknown`[];
     `closeTxSignature`: `null` \| `string`;
     `conversions`: `null` \| `number`;
     `crankerStatus`: `"IDLE"` \| `"RUNNING"` \| `"STOPPED"`;
     `crankGuard`: \{
        `distributors`: ... \| ...;
        `recipient`: ... \| ... \| ... \| ...;
        `user`: ... \| ...;
        `userId`: `string`;
       \} & \{
        `activation`: ... & ...;
        `availability`: ... \| ... \| ...;
        `distributionFunctionInput`: ... \| ... \| ...;
       \};
     `crankGuardId`: `string`;
     `cranks`: `unknown`[];
     `currentBlockHash`: `null` \| `string`;
     `deployTxSignature`: `null` \| `string`;
     `distributionFunction`: \{
        `createdAt`: `Date`;
        `curveDepth`: `null` \| `string` \| `number` \| `objectOutputType`\<..., ..., ...\>;
        `curveWidth`: `null` \| `string` \| `number` \| `objectOutputType`\<..., ..., ...\>;
        `distributors`: ...[];
        `id`: `string`;
        `slope`: `null` \| `string` \| `number` \| `objectOutputType`\<..., ..., ...\>;
        `tiers`: `any`;
        `trend`: `null` \| `"NEGATIVE"` \| `"POSITIVE"`;
        `type`: `"CONSTANT"` \| `"LINEAR"` \| `"STEP"` \| `"EXPONENTIAL"`;
        `updatedAt`: `Date`;
        `user`: `Record`\<..., ...\>;
        `userId`: `string`;
        `yIntercept`: `null` \| `string` \| `number` \| `objectOutputType`\<..., ..., ...\>;
       \};
     `distributionFunctionId`: `string`;
     `emissionType`: `"NFT"` \| `"SOL"` \| `"TOKENS"` \| `"POINTS"`;
     `index`: `number`;
     `offchainReward`: `Record`\<`string`, `unknown`\>;
     `offer`: `Record`\<`string`, `unknown`\>;
     `offerId`: `string`;
     `pointId`: `null` \| `string`;
     `pubkey`: `string`;
     `serializedDeployTx`: `null` \| `string`;
     `status`: `"DRAFT"` \| `"ACTIVE"` \| `"CLOSED"`;
     `tokenAddress`: `null` \| `string`;
     `tokenDecimals`: `number`;
     `totalFundAmount`:   \| `string`
        \| `number`
        \| `objectOutputType`\<\{
        `d`: `ZodArray`\<..., ...\>;
        `e`: `ZodNumber`;
        `s`: `ZodNumber`;
       \}, `ZodTypeAny`, `"passthrough"`\>;
     `type`: `"CONVERSION"` \| `"ASYMMETRIC"`;
     `user`: `Record`\<`string`, `unknown`\>;
     `userId`: `string`;
    \} & \{
     `createdAt`: `Date`;
     `id`: `string`;
     `updatedAt`: `Date`;
    \}[];
  `offerRequirements`: \{
     `actionUrl`: `null` \| `string`;
     `config`: `any`;
     `createdAt`: `Date`;
     `id`: `string`;
     `offers`: `unknown`[];
     `oracle`:   \| `"TORQUE"`
        \| `"SOLANA_TX"`
        \| `"CUSTOM_EVENT_PROVIDER"`
        \| `"PYTH_MKT_CAP"`
        \| `"PYTH_MKT_VOLUME"`
        \| `"MESSAGE_SIGNATURE"`
        \| `"SOCIAL_MEDIA"`;
     `requirementJourneys`: `unknown`[];
     `type`: `string`;
     `updatedAt`: `Date`;
     `user`: `Record`\<`string`, `unknown`\>;
     `userId`: `string`;
    \}[];
 \}[]\>

a list of offers

***

### getProject()

```ts
getProject(projectId, includeOffers?): Promise<{
  audience: unknown[];
  createdAt: Date;
  customEvent: unknown[];
  description: null | string;
  discord: null | string;
  id: string;
  image: null | string;
  name: string;
  offchainAllocationEndpoint: null | string;
  offchainRewards: unknown[];
  offers:   | null
     | {
     audience: Record<string, unknown>;
     audienceId: null | string;
     conversions: unknown[];
     distributors: unknown[];
     endTime: Date;
     metadata: {
        backgroundColor: null | string;
        backgroundImage: null | string;
        colorMode: null | "light" | "dark";
        description: null | string;
        image: null | string;
        title: string;
        url: null | string;
       };
     offerJourneys: unknown[];
     offerRequirements: unknown[];
     project: Record<string, unknown>;
     projectId: null | string;
     requirementJourneys: unknown[];
     startTime: Date;
     status: "DRAFT" | "ACTIVE" | "CLOSED";
     user: Record<string, unknown>;
     userId: string;
    } & {
     distributors: {
        id: string;
        status: string;
       }[];
     id: string;
    }[];
  owner: Record<string, unknown>;
  ownerId: string;
  roles: {
     createdAt: Date;
     id: string;
     project: Record<string, unknown>;
     projectId: string;
     role: "ADMIN" | "BUILDER" | "VIEWER";
     updatedAt: Date;
     user: Record<string, unknown>;
     userId: string;
    }[];
  telegram: null | string;
  twitter: null | string;
  updatedAt: Date;
  website: null | string;
}>
```

Defined in: [packages/sdk/src/modules/offers.ts:442](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/offers.ts#L442)

Get a project

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `projectId` | `string` | The project ID |
| `includeOffers`? | `boolean` | (optional) Whether to include offers in the project response |

#### Returns

`Promise`\<\{
  `audience`: `unknown`[];
  `createdAt`: `Date`;
  `customEvent`: `unknown`[];
  `description`: `null` \| `string`;
  `discord`: `null` \| `string`;
  `id`: `string`;
  `image`: `null` \| `string`;
  `name`: `string`;
  `offchainAllocationEndpoint`: `null` \| `string`;
  `offchainRewards`: `unknown`[];
  `offers`:   \| `null`
     \| \{
     `audience`: `Record`\<`string`, `unknown`\>;
     `audienceId`: `null` \| `string`;
     `conversions`: `unknown`[];
     `distributors`: `unknown`[];
     `endTime`: `Date`;
     `metadata`: \{
        `backgroundColor`: `null` \| `string`;
        `backgroundImage`: `null` \| `string`;
        `colorMode`: `null` \| `"light"` \| `"dark"`;
        `description`: `null` \| `string`;
        `image`: `null` \| `string`;
        `title`: `string`;
        `url`: `null` \| `string`;
       \};
     `offerJourneys`: `unknown`[];
     `offerRequirements`: `unknown`[];
     `project`: `Record`\<`string`, `unknown`\>;
     `projectId`: `null` \| `string`;
     `requirementJourneys`: `unknown`[];
     `startTime`: `Date`;
     `status`: `"DRAFT"` \| `"ACTIVE"` \| `"CLOSED"`;
     `user`: `Record`\<`string`, `unknown`\>;
     `userId`: `string`;
    \} & \{
     `distributors`: \{
        `id`: `string`;
        `status`: `string`;
       \}[];
     `id`: `string`;
    \}[];
  `owner`: `Record`\<`string`, `unknown`\>;
  `ownerId`: `string`;
  `roles`: \{
     `createdAt`: `Date`;
     `id`: `string`;
     `project`: `Record`\<`string`, `unknown`\>;
     `projectId`: `string`;
     `role`: `"ADMIN"` \| `"BUILDER"` \| `"VIEWER"`;
     `updatedAt`: `Date`;
     `user`: `Record`\<`string`, `unknown`\>;
     `userId`: `string`;
    \}[];
  `telegram`: `null` \| `string`;
  `twitter`: `null` \| `string`;
  `updatedAt`: `Date`;
  `website`: `null` \| `string`;
 \}\>

The project object

***

### getProjects()

```ts
getProjects(includeOffers?): Promise<{
  audience: unknown[];
  createdAt: Date;
  customEvent: unknown[];
  description: null | string;
  discord: null | string;
  id: string;
  image: null | string;
  name: string;
  offchainAllocationEndpoint: null | string;
  offchainRewards: unknown[];
  offers:   | null
     | {
     audience: Record<string, unknown>;
     audienceId: null | string;
     conversions: unknown[];
     distributors: unknown[];
     endTime: Date;
     metadata: {
        backgroundColor: null | string;
        backgroundImage: null | string;
        colorMode: null | "light" | "dark";
        description: null | string;
        image: null | string;
        title: string;
        url: null | string;
       };
     offerJourneys: unknown[];
     offerRequirements: unknown[];
     project: Record<string, unknown>;
     projectId: null | string;
     requirementJourneys: unknown[];
     startTime: Date;
     status: "DRAFT" | "ACTIVE" | "CLOSED";
     user: Record<string, unknown>;
     userId: string;
    } & {
     distributors: {
        id: string;
        status: string;
       }[];
     id: string;
    }[];
  owner: Record<string, unknown>;
  ownerId: string;
  roles: {
     createdAt: Date;
     id: string;
     project: Record<string, unknown>;
     projectId: string;
     role: "ADMIN" | "BUILDER" | "VIEWER";
     updatedAt: Date;
     user: Record<string, unknown>;
     userId: string;
    }[];
  telegram: null | string;
  twitter: null | string;
  updatedAt: Date;
  website: null | string;
}[]>
```

Defined in: [packages/sdk/src/modules/offers.ts:465](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/offers.ts#L465)

Get projects

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `includeOffers`? | `boolean` | (optional) Whether to include offers in the project response |

#### Returns

`Promise`\<\{
  `audience`: `unknown`[];
  `createdAt`: `Date`;
  `customEvent`: `unknown`[];
  `description`: `null` \| `string`;
  `discord`: `null` \| `string`;
  `id`: `string`;
  `image`: `null` \| `string`;
  `name`: `string`;
  `offchainAllocationEndpoint`: `null` \| `string`;
  `offchainRewards`: `unknown`[];
  `offers`:   \| `null`
     \| \{
     `audience`: `Record`\<`string`, `unknown`\>;
     `audienceId`: `null` \| `string`;
     `conversions`: `unknown`[];
     `distributors`: `unknown`[];
     `endTime`: `Date`;
     `metadata`: \{
        `backgroundColor`: `null` \| `string`;
        `backgroundImage`: `null` \| `string`;
        `colorMode`: `null` \| `"light"` \| `"dark"`;
        `description`: `null` \| `string`;
        `image`: `null` \| `string`;
        `title`: `string`;
        `url`: `null` \| `string`;
       \};
     `offerJourneys`: `unknown`[];
     `offerRequirements`: `unknown`[];
     `project`: `Record`\<`string`, `unknown`\>;
     `projectId`: `null` \| `string`;
     `requirementJourneys`: `unknown`[];
     `startTime`: `Date`;
     `status`: `"DRAFT"` \| `"ACTIVE"` \| `"CLOSED"`;
     `user`: `Record`\<`string`, `unknown`\>;
     `userId`: `string`;
    \} & \{
     `distributors`: \{
        `id`: `string`;
        `status`: `string`;
       \}[];
     `id`: `string`;
    \}[];
  `owner`: `Record`\<`string`, `unknown`\>;
  `ownerId`: `string`;
  `roles`: \{
     `createdAt`: `Date`;
     `id`: `string`;
     `project`: `Record`\<`string`, `unknown`\>;
     `projectId`: `string`;
     `role`: `"ADMIN"` \| `"BUILDER"` \| `"VIEWER"`;
     `updatedAt`: `Date`;
     `user`: `Record`\<`string`, `unknown`\>;
     `userId`: `string`;
    \}[];
  `telegram`: `null` \| `string`;
  `twitter`: `null` \| `string`;
  `updatedAt`: `Date`;
  `website`: `null` \| `string`;
 \}[]\>

A list of project objects

***

### getUserJourneys()

```ts
getUserJourneys(
   offerId, 
   userPubkey?, 
   status?): Promise<{
  conversion:   | null
     | {
     asymmetricRewardEntries: unknown[];
     convertedAt: Date;
     cranks: {
        allocation: any;
        conversion: Record<string, unknown>;
        conversionId: string;
        createdAt: Date;
        distributor: Record<string, unknown>;
        distributorId: string;
        id: string;
        isAsymmetricPayout: boolean;
        sequenceNumber: number;
        status: "STAGED" | "STARTED" | "PENDING" | "FAILED" | "INVALID" | "DONE";
        transaction: null | string;
        updatedAt: Date;
        webhookId: null | string;
       }[];
     createdAt: Date;
     id: string;
     offer: Record<string, unknown>;
     offerId: string;
     offerJourney: Record<string, unknown>;
     offerJourneyId: string;
     referrer: Record<string, unknown>;
     referrerId: string;
     updatedAt: Date;
     user: Record<string, unknown>;
     userId: string;
    };
  conversionId: null | string;
  createdAt: Date;
  id: string;
  index: number;
  offer: Record<string, unknown>;
  offerId: string;
  referrer: Record<string, unknown>;
  referrerId: string;
  requirementJourneys: {
     createdAt: Date;
     data: any;
     id: string;
     offer: Record<string, unknown>;
     offerId: string;
     offerJourney: Record<string, unknown>;
     offerJourneyId: string;
     offerRequirement: Record<string, unknown>;
     offerRequirementId: string;
     signature: null | string;
     status: "STAGED" | "STARTED" | "PENDING" | "FAILED" | "INVALID" | "DONE";
     updatedAt: Date;
     user: Record<string, unknown>;
     userId: string;
    }[];
  status: "STAGED" | "STARTED" | "PENDING" | "FAILED" | "INVALID" | "DONE";
  updatedAt: Date;
  user: {
     apiKeys: unknown[];
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
    };
  userId: string;
}[]>
```

Defined in: [packages/sdk/src/modules/offers.ts:224](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/offers.ts#L224)

Get user journeys on the offer

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offerId` | `string` | The offerId of the offer to get the user journeys for |
| `userPubkey`? | `string` | The public key of the user to get the user journeys for |
| `status`? | `"STAGED"` \| `"STARTED"` \| `"PENDING"` \| `"FAILED"` \| `"INVALID"` \| `"DONE"` | The status of the user journeys to get |

#### Returns

`Promise`\<\{
  `conversion`:   \| `null`
     \| \{
     `asymmetricRewardEntries`: `unknown`[];
     `convertedAt`: `Date`;
     `cranks`: \{
        `allocation`: `any`;
        `conversion`: `Record`\<`string`, `unknown`\>;
        `conversionId`: `string`;
        `createdAt`: `Date`;
        `distributor`: `Record`\<`string`, `unknown`\>;
        `distributorId`: `string`;
        `id`: `string`;
        `isAsymmetricPayout`: `boolean`;
        `sequenceNumber`: `number`;
        `status`: `"STAGED"` \| `"STARTED"` \| `"PENDING"` \| `"FAILED"` \| `"INVALID"` \| `"DONE"`;
        `transaction`: `null` \| `string`;
        `updatedAt`: `Date`;
        `webhookId`: `null` \| `string`;
       \}[];
     `createdAt`: `Date`;
     `id`: `string`;
     `offer`: `Record`\<`string`, `unknown`\>;
     `offerId`: `string`;
     `offerJourney`: `Record`\<`string`, `unknown`\>;
     `offerJourneyId`: `string`;
     `referrer`: `Record`\<`string`, `unknown`\>;
     `referrerId`: `string`;
     `updatedAt`: `Date`;
     `user`: `Record`\<`string`, `unknown`\>;
     `userId`: `string`;
    \};
  `conversionId`: `null` \| `string`;
  `createdAt`: `Date`;
  `id`: `string`;
  `index`: `number`;
  `offer`: `Record`\<`string`, `unknown`\>;
  `offerId`: `string`;
  `referrer`: `Record`\<`string`, `unknown`\>;
  `referrerId`: `string`;
  `requirementJourneys`: \{
     `createdAt`: `Date`;
     `data`: `any`;
     `id`: `string`;
     `offer`: `Record`\<`string`, `unknown`\>;
     `offerId`: `string`;
     `offerJourney`: `Record`\<`string`, `unknown`\>;
     `offerJourneyId`: `string`;
     `offerRequirement`: `Record`\<`string`, `unknown`\>;
     `offerRequirementId`: `string`;
     `signature`: `null` \| `string`;
     `status`: `"STAGED"` \| `"STARTED"` \| `"PENDING"` \| `"FAILED"` \| `"INVALID"` \| `"DONE"`;
     `updatedAt`: `Date`;
     `user`: `Record`\<`string`, `unknown`\>;
     `userId`: `string`;
    \}[];
  `status`: `"STAGED"` \| `"STARTED"` \| `"PENDING"` \| `"FAILED"` \| `"INVALID"` \| `"DONE"`;
  `updatedAt`: `Date`;
  `user`: \{
     `apiKeys`: `unknown`[];
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
    \};
  `userId`: `string`;
 \}[]\>

***

### startOffer()

```ts
startOffer(offerId, referrer?): Promise<void>
```

Defined in: [packages/sdk/src/modules/offers.ts:197](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/offers.ts#L197)

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
   distributor): Promise<{
  asymmetricRewardEntries: unknown[];
  closeTxSignature: null | string;
  conversions: null | number;
  crankerStatus: "IDLE" | "RUNNING" | "STOPPED";
  crankGuard: {
     distributors: unknown[];
     recipient: "USER" | "PUBLISHER" | "BOTH" | "NONE";
     user: Record<string, unknown>;
     userId: string;
    } & {
     activation:   | {
        type: OFFER_START;
       }
        | {
        type: OFFER_CONCLUSION;
       }
        | {
        type: CONVERSION_COUNT;
       }
        | {
        amount: number;
        oracle:   | "TORQUE"
           | "SOLANA_TX"
           | "CUSTOM_EVENT_PROVIDER"
           | "PYTH_MKT_CAP"
           | "PYTH_MKT_VOLUME"
           | "MESSAGE_SIGNATURE"
           | "SOCIAL_MEDIA";
        type: EVENT;
       }
        | {
        date: Date;
        type: DATE;
       } & {
        requiredConversionCount: number;
       };
     availability:   | null
        | {
        maxConversionsPerRecipient: null | number;
        maxTotalConversions: null | number;
        recipientConversionPeriod: null | HOURLY | DAILY | WEEKLY | MONTHLY;
       };
     distributionFunctionInput:   | {
        type: CONVERSION_INDEX;
       }
        | {
        max: null | number;
        min: null | number;
        type: CONVERSION_DATA;
       }
        | {
        aggregationType: AggregationType;
        type: AGGREGATION;
       };
    };
  crankGuardId: string;
  cranks: unknown[];
  currentBlockHash: null | string;
  deployTxSignature: null | string;
  distributionFunction: {
     createdAt: Date;
     curveDepth:   | null
        | string
        | number
        | objectOutputType<{
        d: ZodArray<ZodNumber, "many">;
        e: ZodNumber;
        s: ZodNumber;
       }, ZodTypeAny, "passthrough">;
     curveWidth:   | null
        | string
        | number
        | objectOutputType<{
        d: ZodArray<ZodNumber, "many">;
        e: ZodNumber;
        s: ZodNumber;
       }, ZodTypeAny, "passthrough">;
     distributors: unknown[];
     id: string;
     slope:   | null
        | string
        | number
        | objectOutputType<{
        d: ZodArray<ZodNumber, "many">;
        e: ZodNumber;
        s: ZodNumber;
       }, ZodTypeAny, "passthrough">;
     tiers: any;
     trend: null | "NEGATIVE" | "POSITIVE";
     type: "CONSTANT" | "LINEAR" | "STEP" | "EXPONENTIAL";
     updatedAt: Date;
     user: Record<string, unknown>;
     userId: string;
     yIntercept:   | null
        | string
        | number
        | objectOutputType<{
        d: ZodArray<ZodNumber, "many">;
        e: ZodNumber;
        s: ZodNumber;
       }, ZodTypeAny, "passthrough">;
    };
  distributionFunctionId: string;
  emissionType: "NFT" | "SOL" | "TOKENS" | "POINTS";
  index: number;
  offchainReward: Record<string, unknown>;
  offer: Record<string, unknown>;
  offerId: string;
  pointId: null | string;
  pubkey: string;
  serializedDeployTx: null | string;
  status: "DRAFT" | "ACTIVE" | "CLOSED";
  tokenAddress: null | string;
  tokenDecimals: number;
  totalFundAmount:   | string
     | number
     | objectOutputType<{
     d: ZodArray<ZodNumber, "many">;
     e: ZodNumber;
     s: ZodNumber;
    }, ZodTypeAny, "passthrough">;
  type: "CONVERSION" | "ASYMMETRIC";
  user: Record<string, unknown>;
  userId: string;
 } & {
  createdAt: Date;
  id: string;
  updatedAt: Date;
}>
```

Defined in: [packages/sdk/src/modules/offers.ts:276](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/offers.ts#L276)

Update a distributor

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offerId` | `string` | The ID of the offer that contains the distributor |
| `distributorId` | `string` | The ID of the distributor to update |
| `distributor` | \{ `crankGuard`: \{ `activation`: \| \{ `type`: `OFFER_START`; \} \| \{ `type`: `OFFER_CONCLUSION`; \} \| \{ `type`: `CONVERSION_COUNT`; \} \| \{ `amount`: `number`; `oracle`: \| `"TORQUE"` \| `"SOLANA_TX"` \| `"CUSTOM_EVENT_PROVIDER"` \| `"PYTH_MKT_CAP"` \| `"PYTH_MKT_VOLUME"` \| `"MESSAGE_SIGNATURE"` \| `"SOCIAL_MEDIA"`; `type`: `EVENT`; \} \| \{ `date`: `Date`; `type`: `DATE`; \} & \{ `requiredConversionCount`: `number`; \}; `availability`: \| `null` \| \{ `maxConversionsPerRecipient`: `null` \| `number`; `maxTotalConversions`: `null` \| `number`; `recipientConversionPeriod`: `null` \| `HOURLY` \| `DAILY` \| `WEEKLY` \| `MONTHLY`; \}; `distributionFunctionInput`: \| \{ `type`: `CONVERSION_INDEX`; \} \| \{ `max`: `null` \| `number`; `min`: `null` \| `number`; `type`: `CONVERSION_DATA`; \} \| \{ `aggregationType`: `AggregationType`; `type`: `AGGREGATION`; \}; `recipient`: `"USER"` \| `"PUBLISHER"` \| `"BOTH"` \| `"NONE"`; \}; `distributionFunction`: \| \{ `type`: `"CONSTANT"`; `yIntercept`: `number`; \} \| \{ `slope`: `number`; `trend`: `"NEGATIVE"` \| `"POSITIVE"`; `type`: `"LINEAR"`; `yIntercept`: `number`; \} \| \{ `tiers`: \{ `input`: `number`; `output`: `number`; \}[]; `type`: `"STEP"`; \} \| \{ `curveDepth`: `number`; `curveWidth`: `number`; `type`: `"EXPONENTIAL"`; `yIntercept`: `number`; \}; `emissionType`: `"NFT"` \| `"SOL"` \| `"TOKENS"` \| `"POINTS"`; `pointId`: `null` \| `string`; `tokenAddress`: `null` \| `string`; `tokenDecimals`: `number`; `totalFundAmount`: `number`; `type`: `"CONVERSION"` \| `"ASYMMETRIC"`; \} | The updated distributor data |
| `distributor.crankGuard` | \{ `activation`: \| \{ `type`: `OFFER_START`; \} \| \{ `type`: `OFFER_CONCLUSION`; \} \| \{ `type`: `CONVERSION_COUNT`; \} \| \{ `amount`: `number`; `oracle`: \| `"TORQUE"` \| `"SOLANA_TX"` \| `"CUSTOM_EVENT_PROVIDER"` \| `"PYTH_MKT_CAP"` \| `"PYTH_MKT_VOLUME"` \| `"MESSAGE_SIGNATURE"` \| `"SOCIAL_MEDIA"`; `type`: `EVENT`; \} \| \{ `date`: `Date`; `type`: `DATE`; \} & \{ `requiredConversionCount`: `number`; \}; `availability`: \| `null` \| \{ `maxConversionsPerRecipient`: `null` \| `number`; `maxTotalConversions`: `null` \| `number`; `recipientConversionPeriod`: `null` \| `HOURLY` \| `DAILY` \| `WEEKLY` \| `MONTHLY`; \}; `distributionFunctionInput`: \| \{ `type`: `CONVERSION_INDEX`; \} \| \{ `max`: `null` \| `number`; `min`: `null` \| `number`; `type`: `CONVERSION_DATA`; \} \| \{ `aggregationType`: `AggregationType`; `type`: `AGGREGATION`; \}; `recipient`: `"USER"` \| `"PUBLISHER"` \| `"BOTH"` \| `"NONE"`; \} | - |
| `distributor.crankGuard.activation` | \| \{ `type`: `OFFER_START`; \} \| \{ `type`: `OFFER_CONCLUSION`; \} \| \{ `type`: `CONVERSION_COUNT`; \} \| \{ `amount`: `number`; `oracle`: \| `"TORQUE"` \| `"SOLANA_TX"` \| `"CUSTOM_EVENT_PROVIDER"` \| `"PYTH_MKT_CAP"` \| `"PYTH_MKT_VOLUME"` \| `"MESSAGE_SIGNATURE"` \| `"SOCIAL_MEDIA"`; `type`: `EVENT`; \} \| \{ `date`: `Date`; `type`: `DATE`; \} & \{ `requiredConversionCount`: `number`; \} | - |
| `distributor.crankGuard.availability`? | \| `null` \| \{ `maxConversionsPerRecipient`: `null` \| `number`; `maxTotalConversions`: `null` \| `number`; `recipientConversionPeriod`: `null` \| `HOURLY` \| `DAILY` \| `WEEKLY` \| `MONTHLY`; \} | - |
| `distributor.crankGuard.distributionFunctionInput` | \| \{ `type`: `CONVERSION_INDEX`; \} \| \{ `max`: `null` \| `number`; `min`: `null` \| `number`; `type`: `CONVERSION_DATA`; \} \| \{ `aggregationType`: `AggregationType`; `type`: `AGGREGATION`; \} | - |
| `distributor.crankGuard.recipient` | `"USER"` \| `"PUBLISHER"` \| `"BOTH"` \| `"NONE"` | - |
| `distributor.distributionFunction` | \| \{ `type`: `"CONSTANT"`; `yIntercept`: `number`; \} \| \{ `slope`: `number`; `trend`: `"NEGATIVE"` \| `"POSITIVE"`; `type`: `"LINEAR"`; `yIntercept`: `number`; \} \| \{ `tiers`: \{ `input`: `number`; `output`: `number`; \}[]; `type`: `"STEP"`; \} \| \{ `curveDepth`: `number`; `curveWidth`: `number`; `type`: `"EXPONENTIAL"`; `yIntercept`: `number`; \} | - |
| `distributor.emissionType` | `"NFT"` \| `"SOL"` \| `"TOKENS"` \| `"POINTS"` | - |
| `distributor.pointId`? | `null` \| `string` | - |
| `distributor.tokenAddress`? | `null` \| `string` | - |
| `distributor.tokenDecimals`? | `number` | - |
| `distributor.totalFundAmount` | `number` | - |
| `distributor.type` | `"CONVERSION"` \| `"ASYMMETRIC"` | - |

#### Returns

`Promise`\<\{
  `asymmetricRewardEntries`: `unknown`[];
  `closeTxSignature`: `null` \| `string`;
  `conversions`: `null` \| `number`;
  `crankerStatus`: `"IDLE"` \| `"RUNNING"` \| `"STOPPED"`;
  `crankGuard`: \{
     `distributors`: `unknown`[];
     `recipient`: `"USER"` \| `"PUBLISHER"` \| `"BOTH"` \| `"NONE"`;
     `user`: `Record`\<`string`, `unknown`\>;
     `userId`: `string`;
    \} & \{
     `activation`:   \| \{
        `type`: `OFFER_START`;
       \}
        \| \{
        `type`: `OFFER_CONCLUSION`;
       \}
        \| \{
        `type`: `CONVERSION_COUNT`;
       \}
        \| \{
        `amount`: `number`;
        `oracle`:   \| `"TORQUE"`
           \| `"SOLANA_TX"`
           \| `"CUSTOM_EVENT_PROVIDER"`
           \| `"PYTH_MKT_CAP"`
           \| `"PYTH_MKT_VOLUME"`
           \| `"MESSAGE_SIGNATURE"`
           \| `"SOCIAL_MEDIA"`;
        `type`: `EVENT`;
       \}
        \| \{
        `date`: `Date`;
        `type`: `DATE`;
       \} & \{
        `requiredConversionCount`: `number`;
       \};
     `availability`:   \| `null`
        \| \{
        `maxConversionsPerRecipient`: `null` \| `number`;
        `maxTotalConversions`: `null` \| `number`;
        `recipientConversionPeriod`: `null` \| `HOURLY` \| `DAILY` \| `WEEKLY` \| `MONTHLY`;
       \};
     `distributionFunctionInput`:   \| \{
        `type`: `CONVERSION_INDEX`;
       \}
        \| \{
        `max`: `null` \| `number`;
        `min`: `null` \| `number`;
        `type`: `CONVERSION_DATA`;
       \}
        \| \{
        `aggregationType`: `AggregationType`;
        `type`: `AGGREGATION`;
       \};
    \};
  `crankGuardId`: `string`;
  `cranks`: `unknown`[];
  `currentBlockHash`: `null` \| `string`;
  `deployTxSignature`: `null` \| `string`;
  `distributionFunction`: \{
     `createdAt`: `Date`;
     `curveDepth`:   \| `null`
        \| `string`
        \| `number`
        \| `objectOutputType`\<\{
        `d`: `ZodArray`\<`ZodNumber`, `"many"`\>;
        `e`: `ZodNumber`;
        `s`: `ZodNumber`;
       \}, `ZodTypeAny`, `"passthrough"`\>;
     `curveWidth`:   \| `null`
        \| `string`
        \| `number`
        \| `objectOutputType`\<\{
        `d`: `ZodArray`\<`ZodNumber`, `"many"`\>;
        `e`: `ZodNumber`;
        `s`: `ZodNumber`;
       \}, `ZodTypeAny`, `"passthrough"`\>;
     `distributors`: `unknown`[];
     `id`: `string`;
     `slope`:   \| `null`
        \| `string`
        \| `number`
        \| `objectOutputType`\<\{
        `d`: `ZodArray`\<`ZodNumber`, `"many"`\>;
        `e`: `ZodNumber`;
        `s`: `ZodNumber`;
       \}, `ZodTypeAny`, `"passthrough"`\>;
     `tiers`: `any`;
     `trend`: `null` \| `"NEGATIVE"` \| `"POSITIVE"`;
     `type`: `"CONSTANT"` \| `"LINEAR"` \| `"STEP"` \| `"EXPONENTIAL"`;
     `updatedAt`: `Date`;
     `user`: `Record`\<`string`, `unknown`\>;
     `userId`: `string`;
     `yIntercept`:   \| `null`
        \| `string`
        \| `number`
        \| `objectOutputType`\<\{
        `d`: `ZodArray`\<`ZodNumber`, `"many"`\>;
        `e`: `ZodNumber`;
        `s`: `ZodNumber`;
       \}, `ZodTypeAny`, `"passthrough"`\>;
    \};
  `distributionFunctionId`: `string`;
  `emissionType`: `"NFT"` \| `"SOL"` \| `"TOKENS"` \| `"POINTS"`;
  `index`: `number`;
  `offchainReward`: `Record`\<`string`, `unknown`\>;
  `offer`: `Record`\<`string`, `unknown`\>;
  `offerId`: `string`;
  `pointId`: `null` \| `string`;
  `pubkey`: `string`;
  `serializedDeployTx`: `null` \| `string`;
  `status`: `"DRAFT"` \| `"ACTIVE"` \| `"CLOSED"`;
  `tokenAddress`: `null` \| `string`;
  `tokenDecimals`: `number`;
  `totalFundAmount`:   \| `string`
     \| `number`
     \| `objectOutputType`\<\{
     `d`: `ZodArray`\<`ZodNumber`, `"many"`\>;
     `e`: `ZodNumber`;
     `s`: `ZodNumber`;
    \}, `ZodTypeAny`, `"passthrough"`\>;
  `type`: `"CONVERSION"` \| `"ASYMMETRIC"`;
  `user`: `Record`\<`string`, `unknown`\>;
  `userId`: `string`;
 \} & \{
  `createdAt`: `Date`;
  `id`: `string`;
  `updatedAt`: `Date`;
 \}\>

The updated distributor object

***

### updateOffer()

```ts
updateOffer(offerId, offer): Promise<{
  audienceId: null | string;
  conversions: unknown[];
  createdAt: Date;
  endTime: Date;
  id: string;
  metadata: {
     backgroundColor: null | string;
     backgroundImage: null | string;
     colorMode: null | "light" | "dark";
     description: null | string;
     image: null | string;
     title: string;
     url: null | string;
    };
  offerJourneys: unknown[];
  project: Record<string, unknown>;
  projectId: null | string;
  requirementJourneys: unknown[];
  startTime: Date;
  status: "DRAFT" | "ACTIVE" | "CLOSED";
  updatedAt: Date;
  user: Record<string, unknown>;
  userId: string;
 } & {
  audience:   | null
     | {
     address: null | string;
     amount:   | null
        | string
        | number
        | objectOutputType<{
        d: ZodArray<ZodNumber, "many">;
        e: ZodNumber;
        s: ZodNumber;
       }, ZodTypeAny, "passthrough">;
     createdAt: Date;
     id: string;
     members: unknown[];
     name: string;
     offers: unknown[];
     project: Record<string, unknown>;
     projectId: string;
     tokenGateType: null | "NFT" | "SPL";
     type: "ALLOWLIST" | "DENYLIST" | "TOKEN_GATE";
     updatedAt: Date;
    };
  distributors: {
     asymmetricRewardEntries: unknown[];
     closeTxSignature: null | string;
     conversions: null | number;
     crankerStatus: "IDLE" | "RUNNING" | "STOPPED";
     crankGuard: {
        distributors: ...[];
        recipient: "USER" | "PUBLISHER" | "BOTH" | "NONE";
        user: Record<..., ...>;
        userId: string;
       } & {
        activation: ... | ... | ... | ... | ... & {
           requiredConversionCount: ...;
          };
        availability:   | null
           | {
           maxConversionsPerRecipient: ...;
           maxTotalConversions: ...;
           recipientConversionPeriod: ...;
          };
        distributionFunctionInput:   | {
           type: ...;
          }
           | {
           max: ...;
           min: ...;
           type: ...;
          }
           | {
           aggregationType: ...;
           type: ...;
          };
       };
     crankGuardId: string;
     cranks: unknown[];
     currentBlockHash: null | string;
     deployTxSignature: null | string;
     distributionFunction: {
        createdAt: Date;
        curveDepth:   | null
           | string
           | number
           | objectOutputType<{
           d: ...;
           e: ...;
           s: ...;
          }, ZodTypeAny, "passthrough">;
        curveWidth:   | null
           | string
           | number
           | objectOutputType<{
           d: ...;
           e: ...;
           s: ...;
          }, ZodTypeAny, "passthrough">;
        distributors: unknown[];
        id: string;
        slope:   | null
           | string
           | number
           | objectOutputType<{
           d: ...;
           e: ...;
           s: ...;
          }, ZodTypeAny, "passthrough">;
        tiers: any;
        trend: null | "NEGATIVE" | "POSITIVE";
        type: "CONSTANT" | "LINEAR" | "STEP" | "EXPONENTIAL";
        updatedAt: Date;
        user: Record<string, unknown>;
        userId: string;
        yIntercept:   | null
           | string
           | number
           | objectOutputType<{
           d: ...;
           e: ...;
           s: ...;
          }, ZodTypeAny, "passthrough">;
       };
     distributionFunctionId: string;
     emissionType: "NFT" | "SOL" | "TOKENS" | "POINTS";
     index: number;
     offchainReward: Record<string, unknown>;
     offer: Record<string, unknown>;
     offerId: string;
     pointId: null | string;
     pubkey: string;
     serializedDeployTx: null | string;
     status: "DRAFT" | "ACTIVE" | "CLOSED";
     tokenAddress: null | string;
     tokenDecimals: number;
     totalFundAmount:   | string
        | number
        | objectOutputType<{
        d: ZodArray<ZodNumber, "many">;
        e: ZodNumber;
        s: ZodNumber;
       }, ZodTypeAny, "passthrough">;
     type: "CONVERSION" | "ASYMMETRIC";
     user: Record<string, unknown>;
     userId: string;
    } & {
     createdAt: Date;
     id: string;
     updatedAt: Date;
    }[];
  offerRequirements: {
     actionUrl: null | string;
     config: any;
     createdAt: Date;
     id: string;
     offers: unknown[];
     oracle:   | "TORQUE"
        | "SOLANA_TX"
        | "CUSTOM_EVENT_PROVIDER"
        | "PYTH_MKT_CAP"
        | "PYTH_MKT_VOLUME"
        | "MESSAGE_SIGNATURE"
        | "SOCIAL_MEDIA";
     requirementJourneys: unknown[];
     type: string;
     updatedAt: Date;
     user: Record<string, unknown>;
     userId: string;
    }[];
}>
```

Defined in: [packages/sdk/src/modules/offers.ts:171](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/offers.ts#L171)

Update an offer

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `offerId` | `string` | The ID of the offer to update |
| `offer` | \{ `audienceId`: `string`; `endTime`: `Date`; `metadata`: \{ `backgroundColor`: `null` \| `string`; `backgroundImage`: `null` \| `string`; `colorMode`: `null` \| `"light"` \| `"dark"`; `description`: `null` \| `string`; `image`: `null` \| `string`; `title`: `string`; `url`: `null` \| `string`; \}; `projectId`: `null` \| `string`; `requirements`: ( \| \{ `config`: \{ `eventName`: `string`; `fields`: ( \| \{ `fieldName`: `string`; `validation`: \{ `type`: `"string"`; `validation`: `"exactMatch"` \| `"regEx"`; `value`: `string`; \}; \} \| \{ `fieldName`: `string`; `validation`: \{ `max`: `number`; `min`: `number`; `type`: `"number"`; \}; \} \| \{ `fieldName`: `string`; `validation`: \{ `exact`: `boolean`; `type`: `"boolean"`; \}; \})[]; \}; `oracle`: `"CUSTOM_EVENT_PROVIDER"`; `type`: [`CUSTOM`](../enumerations/EventType.md#custom); \} \| (\{ type: EventType.BURN; config: \{ amount: \{ type: "number"; min?: number \| undefined; max?: number \| undefined; \}; tokenAddress: \{ value: string; validation: "exactMatch" \| "regEx"; type: "string"; \}; \}; oracle: "SOLANA\_TX"; \} \| ... 10 more ... \| \{ ...; \}) & \{ ...; \})[]; `startTime`: `Date`; \} | The updated offer data |
| `offer.audienceId`? | `string` | - |
| `offer.endTime` | `Date` | - |
| `offer.metadata` | \{ `backgroundColor`: `null` \| `string`; `backgroundImage`: `null` \| `string`; `colorMode`: `null` \| `"light"` \| `"dark"`; `description`: `null` \| `string`; `image`: `null` \| `string`; `title`: `string`; `url`: `null` \| `string`; \} | - |
| `offer.metadata.backgroundColor`? | `null` \| `string` | - |
| `offer.metadata.backgroundImage`? | `null` \| `string` | - |
| `offer.metadata.colorMode`? | `null` \| `"light"` \| `"dark"` | - |
| `offer.metadata.description`? | `null` \| `string` | - |
| `offer.metadata.image`? | `null` \| `string` | - |
| `offer.metadata.title` | `string` | - |
| `offer.metadata.url`? | `null` \| `string` | - |
| `offer.projectId`? | `null` \| `string` | - |
| `offer.requirements` | ( \| \{ `config`: \{ `eventName`: `string`; `fields`: ( \| \{ `fieldName`: `string`; `validation`: \{ `type`: `"string"`; `validation`: `"exactMatch"` \| `"regEx"`; `value`: `string`; \}; \} \| \{ `fieldName`: `string`; `validation`: \{ `max`: `number`; `min`: `number`; `type`: `"number"`; \}; \} \| \{ `fieldName`: `string`; `validation`: \{ `exact`: `boolean`; `type`: `"boolean"`; \}; \})[]; \}; `oracle`: `"CUSTOM_EVENT_PROVIDER"`; `type`: [`CUSTOM`](../enumerations/EventType.md#custom); \} \| (\{ type: EventType.BURN; config: \{ amount: \{ type: "number"; min?: number \| undefined; max?: number \| undefined; \}; tokenAddress: \{ value: string; validation: "exactMatch" \| "regEx"; type: "string"; \}; \}; oracle: "SOLANA\_TX"; \} \| ... 10 more ... \| \{ ...; \}) & \{ ...; \})[] | - |
| `offer.startTime` | `Date` | - |

#### Returns

`Promise`\<\{
  `audienceId`: `null` \| `string`;
  `conversions`: `unknown`[];
  `createdAt`: `Date`;
  `endTime`: `Date`;
  `id`: `string`;
  `metadata`: \{
     `backgroundColor`: `null` \| `string`;
     `backgroundImage`: `null` \| `string`;
     `colorMode`: `null` \| `"light"` \| `"dark"`;
     `description`: `null` \| `string`;
     `image`: `null` \| `string`;
     `title`: `string`;
     `url`: `null` \| `string`;
    \};
  `offerJourneys`: `unknown`[];
  `project`: `Record`\<`string`, `unknown`\>;
  `projectId`: `null` \| `string`;
  `requirementJourneys`: `unknown`[];
  `startTime`: `Date`;
  `status`: `"DRAFT"` \| `"ACTIVE"` \| `"CLOSED"`;
  `updatedAt`: `Date`;
  `user`: `Record`\<`string`, `unknown`\>;
  `userId`: `string`;
 \} & \{
  `audience`:   \| `null`
     \| \{
     `address`: `null` \| `string`;
     `amount`:   \| `null`
        \| `string`
        \| `number`
        \| `objectOutputType`\<\{
        `d`: `ZodArray`\<`ZodNumber`, `"many"`\>;
        `e`: `ZodNumber`;
        `s`: `ZodNumber`;
       \}, `ZodTypeAny`, `"passthrough"`\>;
     `createdAt`: `Date`;
     `id`: `string`;
     `members`: `unknown`[];
     `name`: `string`;
     `offers`: `unknown`[];
     `project`: `Record`\<`string`, `unknown`\>;
     `projectId`: `string`;
     `tokenGateType`: `null` \| `"NFT"` \| `"SPL"`;
     `type`: `"ALLOWLIST"` \| `"DENYLIST"` \| `"TOKEN_GATE"`;
     `updatedAt`: `Date`;
    \};
  `distributors`: \{
     `asymmetricRewardEntries`: `unknown`[];
     `closeTxSignature`: `null` \| `string`;
     `conversions`: `null` \| `number`;
     `crankerStatus`: `"IDLE"` \| `"RUNNING"` \| `"STOPPED"`;
     `crankGuard`: \{
        `distributors`: ...[];
        `recipient`: `"USER"` \| `"PUBLISHER"` \| `"BOTH"` \| `"NONE"`;
        `user`: `Record`\<..., ...\>;
        `userId`: `string`;
       \} & \{
        `activation`: ... \| ... \| ... \| ... \| ... & \{
           `requiredConversionCount`: ...;
          \};
        `availability`:   \| `null`
           \| \{
           `maxConversionsPerRecipient`: ...;
           `maxTotalConversions`: ...;
           `recipientConversionPeriod`: ...;
          \};
        `distributionFunctionInput`:   \| \{
           `type`: ...;
          \}
           \| \{
           `max`: ...;
           `min`: ...;
           `type`: ...;
          \}
           \| \{
           `aggregationType`: ...;
           `type`: ...;
          \};
       \};
     `crankGuardId`: `string`;
     `cranks`: `unknown`[];
     `currentBlockHash`: `null` \| `string`;
     `deployTxSignature`: `null` \| `string`;
     `distributionFunction`: \{
        `createdAt`: `Date`;
        `curveDepth`:   \| `null`
           \| `string`
           \| `number`
           \| `objectOutputType`\<\{
           `d`: ...;
           `e`: ...;
           `s`: ...;
          \}, `ZodTypeAny`, `"passthrough"`\>;
        `curveWidth`:   \| `null`
           \| `string`
           \| `number`
           \| `objectOutputType`\<\{
           `d`: ...;
           `e`: ...;
           `s`: ...;
          \}, `ZodTypeAny`, `"passthrough"`\>;
        `distributors`: `unknown`[];
        `id`: `string`;
        `slope`:   \| `null`
           \| `string`
           \| `number`
           \| `objectOutputType`\<\{
           `d`: ...;
           `e`: ...;
           `s`: ...;
          \}, `ZodTypeAny`, `"passthrough"`\>;
        `tiers`: `any`;
        `trend`: `null` \| `"NEGATIVE"` \| `"POSITIVE"`;
        `type`: `"CONSTANT"` \| `"LINEAR"` \| `"STEP"` \| `"EXPONENTIAL"`;
        `updatedAt`: `Date`;
        `user`: `Record`\<`string`, `unknown`\>;
        `userId`: `string`;
        `yIntercept`:   \| `null`
           \| `string`
           \| `number`
           \| `objectOutputType`\<\{
           `d`: ...;
           `e`: ...;
           `s`: ...;
          \}, `ZodTypeAny`, `"passthrough"`\>;
       \};
     `distributionFunctionId`: `string`;
     `emissionType`: `"NFT"` \| `"SOL"` \| `"TOKENS"` \| `"POINTS"`;
     `index`: `number`;
     `offchainReward`: `Record`\<`string`, `unknown`\>;
     `offer`: `Record`\<`string`, `unknown`\>;
     `offerId`: `string`;
     `pointId`: `null` \| `string`;
     `pubkey`: `string`;
     `serializedDeployTx`: `null` \| `string`;
     `status`: `"DRAFT"` \| `"ACTIVE"` \| `"CLOSED"`;
     `tokenAddress`: `null` \| `string`;
     `tokenDecimals`: `number`;
     `totalFundAmount`:   \| `string`
        \| `number`
        \| `objectOutputType`\<\{
        `d`: `ZodArray`\<`ZodNumber`, `"many"`\>;
        `e`: `ZodNumber`;
        `s`: `ZodNumber`;
       \}, `ZodTypeAny`, `"passthrough"`\>;
     `type`: `"CONVERSION"` \| `"ASYMMETRIC"`;
     `user`: `Record`\<`string`, `unknown`\>;
     `userId`: `string`;
    \} & \{
     `createdAt`: `Date`;
     `id`: `string`;
     `updatedAt`: `Date`;
    \}[];
  `offerRequirements`: \{
     `actionUrl`: `null` \| `string`;
     `config`: `any`;
     `createdAt`: `Date`;
     `id`: `string`;
     `offers`: `unknown`[];
     `oracle`:   \| `"TORQUE"`
        \| `"SOLANA_TX"`
        \| `"CUSTOM_EVENT_PROVIDER"`
        \| `"PYTH_MKT_CAP"`
        \| `"PYTH_MKT_VOLUME"`
        \| `"MESSAGE_SIGNATURE"`
        \| `"SOCIAL_MEDIA"`;
     `requirementJourneys`: `unknown`[];
     `type`: `string`;
     `updatedAt`: `Date`;
     `user`: `Record`\<`string`, `unknown`\>;
     `userId`: `string`;
    \}[];
 \}\>

The updated offer object
