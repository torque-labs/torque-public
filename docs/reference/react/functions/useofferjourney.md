[**@torque-labs/react**](../../../@torque-labs/react/README.md)

***

[Torque Labs](../../../README.md) / [@torque-labs/react](../README.md) / useOfferJourney

# Function: useOfferJourney()

```ts
function useOfferJourney(__namedParameters): UseQueryResult<{
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
}[], Error>
```

Defined in: [packages/react/src/hooks/useOfferJourney.ts:17](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/react/src/hooks/useOfferJourney.ts#L17)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `UseOfferJourneyOptions` |

## Returns

`UseQueryResult`\<\{
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
 \}[], `Error`\>
