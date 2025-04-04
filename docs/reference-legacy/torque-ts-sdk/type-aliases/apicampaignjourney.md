# Type Alias: ApiCampaignJourney

[**@torque-labs/torque-ts-sdk**](../) • **Docs**

***

[@torque-labs/torque-ts-sdk](../) / ApiCampaignJourney

## Type Alias: ApiCampaignJourney

```ts
type ApiCampaignJourney: {
  campaign: ApiCampaign;
  campaignId: string;
  currentStep: number;
  publisherPubKey: string;
  startTime: Date;
  startTx: string;
  status: ApiProgressStatus;
  totalSteps: number;
  transaction: string;
  updatedAt: Date;
  userBountySteps: {
     bountyStepId: string;
     id: string;
     status: ApiProgressStatus;
     transaction: string;
     userJourneyId: string;
    }[];
  userPubKey: string;
};
```

A user's campaign journey data.

### Type declaration

| Name               | Type                                                                                                                                                                        |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `campaign`         | [`ApiCampaign`](apicampaign.md)                                                                                                                                             |
| `campaignId`       | `string`                                                                                                                                                                    |
| `currentStep`      | `number`                                                                                                                                                                    |
| `publisherPubKey`  | `string`                                                                                                                                                                    |
| `startTime`?       | `Date`                                                                                                                                                                      |
| `startTx`?         | `string`                                                                                                                                                                    |
| `status`           | [`ApiProgressStatus`](../enumerations/apiprogressstatus.md)                                                                                                                 |
| `totalSteps`       | `number`                                                                                                                                                                    |
| `transaction`?     | `string`                                                                                                                                                                    |
| `updatedAt`        | `Date`                                                                                                                                                                      |
| `userBountySteps`? | { `bountyStepId`: `string`; `id`: `string`; `status`: [`ApiProgressStatus`](../enumerations/apiprogressstatus.md); `transaction`: `string`; `userJourneyId`: `string`; }\[] |
| `userPubKey`       | `string`                                                                                                                                                                    |

### Defined in

[src/types/api.ts:278](https://github.com/torque-labs/torque-ts-sdk/blob/a30afeab92cb119627ec542f4c8aff2dd9faf383/src/types/api.ts#L278)
