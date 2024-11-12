[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / fetchSingleCollectionDetails

# Function: fetchSingleCollectionDetails()

```ts
function fetchSingleCollectionDetails(collectionId): Promise<{
  collId: collection.collId;
  compressed: collection.compressed;
  imageUri: collection.imageUri;
  metadataProgram: any;
  name: collection.name;
  slugdisplay: collection.slugDisplay;
  stats: collection.stats;
  symbol: collection.symbol;
  tokenStandard: collection.tokenStandard;
  whitelistPda: collection.whitelistPda;
}>
```

Fetches single collection details

## Parameters

| Parameter | Type |
| ------ | ------ |
| `collectionId` | `string` |

## Returns

`Promise`\<\{
  `collId`: `collection.collId`;
  `compressed`: `collection.compressed`;
  `imageUri`: `collection.imageUri`;
  `metadataProgram`: `any`;
  `name`: `collection.name`;
  `slugdisplay`: `collection.slugDisplay`;
  `stats`: `collection.stats`;
  `symbol`: `collection.symbol`;
  `tokenStandard`: `collection.tokenStandard`;
  `whitelistPda`: `collection.whitelistPda`;
 \}\>

| Name | Type | Default value |
| ------ | ------ | ------ |
| `collId` | `any` | collection.collId |
| `compressed` | `any` | collection.compressed |
| `imageUri` | `any` | collection.imageUri |
| `metadataProgram` | `any` | - |
| `name` | `any` | collection.name |
| `slugdisplay` | `any` | collection.slugDisplay |
| `stats` | `any` | collection.stats |
| `symbol` | `any` | collection.symbol |
| `tokenStandard` | `any` | collection.tokenStandard |
| `whitelistPda` | `any` | collection.whitelistPda |

## Defined in

[lib/tensor-api.ts:99](https://github.com/torque-labs/torque-utils/blob/3bd29ca22f900f1cf2686f7f240bf82e15337207/lib/tensor-api.ts#L99)
