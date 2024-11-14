# Type Alias: NftCollectionTradeRequirement

[**@torque-labs/torque-utils**](../) • **Docs**

***

[@torque-labs/torque-utils](../) / NftCollectionTradeRequirement

## Type Alias: NftCollectionTradeRequirement

```ts
type NftCollectionTradeRequirement: {
  requirement: NftCollectionTradeSchema;
  type: NFT_COLLECTION_TRADE;
};
```

NFT Collection Trade requirement type

### Type declaration

| Name                            | Type                                                                                                                   | Default value            | Description                     |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------ | ------------------------------- |
| `requirement`                   | { `collectionAddress`: `string`; `tradeType`: [`NftCollectionTradeType`](../enumerations/nftcollectiontradetype.md); } | NftCollectionTradeSchema | -                               |
| `requirement.collectionAddress` | `string`                                                                                                               | -                        | The collection address to trace |
| `requirement.tradeType`         | [`NftCollectionTradeType`](../enumerations/nftcollectiontradetype.md)                                                  | -                        | The type of trade to perform    |
| `type`                          | `NFT_COLLECTION_TRADE`                                                                                                 | -                        | -                               |

### Defined in

[types/eventConfig/config.ts:182](https://github.com/torque-labs/torque-utils/blob/3bd29ca22f900f1cf2686f7f240bf82e15337207/types/eventConfig/config.ts#L182)
