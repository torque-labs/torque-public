[**@torque-labs/react**](../../../@torque-labs/react/README.md)

***

[Torque Labs](../../../README.md) / [@torque-labs/react](../README.md) / useCreateOffer

# Function: useCreateOffer()

```ts
function useCreateOffer(__namedParameters): UseMutationResult<{
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
 }, Error, {
  audience:   | { name: string; } & ({ type: "ALLOWLIST"; addresses?: string[] | null | undefined; slug?: string | null | undefined; } | { type: "DENYLIST"; addresses?: string[] | null | undefined; slug?: string | null | undefined; } | { ...; })
     | {
     audienceId: null | string;
    };
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
  projectId: null | string;
  requirements: (
     | {
     config: {
        eventName: string;
        fields: (
           | {
           fieldName: string;
           validation: {
              type: "string";
              validation: ... | ...;
              value: ... | ...;
             };
          }
           | {
           fieldName: string;
           validation: {
              max: ... | ...;
              min: ... | ...;
              type: "number";
             };
          }
           | {
           fieldName: string;
           validation: {
              exact: boolean;
              type: "boolean";
             };
          })[];
       };
     oracle: "CUSTOM_EVENT_PROVIDER";
     type: CUSTOM;
    }
     | ({ type: EventType.BURN; config: { amount: { type: "number"; min?: number | undefined; max?: number | undefined; }; tokenAddress: { value: string; validation: "exactMatch" | "regEx"; type: "string"; }; }; oracle: "SOLANA_TX"; } | ... 10 more ... | { ...; }) & { ...; })[];
  startTime: Date;
}>
```

Defined in: [packages/react/src/hooks/useCreateOffer.ts:11](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/react/src/hooks/useCreateOffer.ts#L11)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `UseCreateOfferOptions` |

## Returns

`UseMutationResult`\<\{
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
 \}, `Error`, \{
  `audience`:   \| \{ name: string; \} & (\{ type: "ALLOWLIST"; addresses?: string\[\] \| null \| undefined; slug?: string \| null \| undefined; \} \| \{ type: "DENYLIST"; addresses?: string\[\] \| null \| undefined; slug?: string \| null \| undefined; \} \| \{ ...; \})
     \| \{
     `audienceId`: `null` \| `string`;
    \};
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
  `projectId`: `null` \| `string`;
  `requirements`: (
     \| \{
     `config`: \{
        `eventName`: `string`;
        `fields`: (
           \| \{
           `fieldName`: `string`;
           `validation`: \{
              `type`: `"string"`;
              `validation`: ... \| ...;
              `value`: ... \| ...;
             \};
          \}
           \| \{
           `fieldName`: `string`;
           `validation`: \{
              `max`: ... \| ...;
              `min`: ... \| ...;
              `type`: `"number"`;
             \};
          \}
           \| \{
           `fieldName`: `string`;
           `validation`: \{
              `exact`: `boolean`;
              `type`: `"boolean"`;
             \};
          \})[];
       \};
     `oracle`: `"CUSTOM_EVENT_PROVIDER"`;
     `type`: [`CUSTOM`](../../sdk/enumerations/EventType.md#custom);
    \}
     \| (\{ type: EventType.BURN; config: \{ amount: \{ type: "number"; min?: number \| undefined; max?: number \| undefined; \}; tokenAddress: \{ value: string; validation: "exactMatch" \| "regEx"; type: "string"; \}; \}; oracle: "SOLANA\_TX"; \} \| ... 10 more ... \| \{ ...; \}) & \{ ...; \})[];
  `startTime`: `Date`;
 \}\>
