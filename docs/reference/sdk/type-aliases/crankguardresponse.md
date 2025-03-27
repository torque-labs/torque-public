[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / CrankGuardResponse

# Type Alias: CrankGuardResponse

```ts
type CrankGuardResponse = {
  activation:   | {
     type: "OFFER_START";
    }
     | {
     type: "OFFER_CONCLUSION";
    }
     | {
     type: "CONVERSION_COUNT";
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
     type: "EVENT";
    }
     | {
     date: Date;
     type: "DATE";
    } & {
     requiredConversionCount: number;
    };
  availability:   | {
     maxConversionsPerRecipient: number | null;
     maxTotalConversions: number | null;
     recipientConversionPeriod: ... | ... | ... | ... | null;
    }
     | null;
  distributionFunctionInput:   | {
     type: "CONVERSION_INDEX";
    }
     | {
     max: number | null;
     min: number | null;
     type: "CONVERSION_DATA";
    }
     | {
     aggregationType: "BUY_VOLUME" | "BUY_AVERAGE";
     type: "AGGREGATION";
    };
  recipient: "USER" | "PUBLISHER" | "BOTH" | "NONE";
 } & {
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
```

Defined in: [sdk/src/types/schemaTypes.ts:189](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l189)

## Type declaration

| Name | Type |
| ------ | ------ |
| `activation` | \| \{ `type`: `"OFFER_START"`; \} \| \{ `type`: `"OFFER_CONCLUSION"`; \} \| \{ `type`: `"CONVERSION_COUNT"`; \} \| \{ `amount`: `number`; `oracle`: \| `"TORQUE"` \| `"SOLANA_TX"` \| `"CUSTOM_EVENT_PROVIDER"` \| `"PYTH_MKT_CAP"` \| `"PYTH_MKT_VOLUME"` \| `"MESSAGE_SIGNATURE"` \| `"SOCIAL_MEDIA"`; `type`: `"EVENT"`; \} \| \{ `date`: `Date`; `type`: `"DATE"`; \} & \{ `requiredConversionCount`: `number`; \} |
| `availability?` | \| \{ `maxConversionsPerRecipient`: `number` \| `null`; `maxTotalConversions`: `number` \| `null`; `recipientConversionPeriod`: ... \| ... \| ... \| ... \| `null`; \} \| `null` |
| `distributionFunctionInput` | \| \{ `type`: `"CONVERSION_INDEX"`; \} \| \{ `max`: `number` \| `null`; `min`: `number` \| `null`; `type`: `"CONVERSION_DATA"`; \} \| \{ `aggregationType`: `"BUY_VOLUME"` \| `"BUY_AVERAGE"`; `type`: `"AGGREGATION"`; \} |
| `recipient` | `"USER"` \| `"PUBLISHER"` \| `"BOTH"` \| `"NONE"` |

## Type declaration

| Name | Type |
| ------ | ------ |
| `createdAt` | `Date` |
| `id` | `string` |
| `updatedAt` | `Date` |
