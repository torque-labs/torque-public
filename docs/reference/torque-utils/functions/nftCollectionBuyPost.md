[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / nftCollectionBuyPost

# Function: nftCollectionBuyPost()

```ts
function nftCollectionBuyPost(tensorFloorBuyAction): Promise<string>
```

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tensorFloorBuyAction` | `object` | - |
| `tensorFloorBuyAction.collectionAddress` | `string` | The collection address to trace |
| `tensorFloorBuyAction.tradeType` | [`NftCollectionTradeType`](../enumerations/NftCollectionTradeType.md) | The type of trade to perform |

## Returns

`Promise`\<`string`\>

## Defined in

[solana-actions/buildPost.ts:17](https://github.com/torque-labs/torque-utils/blob/3bd29ca22f900f1cf2686f7f240bf82e15337207/solana-actions/buildPost.ts#L17)
