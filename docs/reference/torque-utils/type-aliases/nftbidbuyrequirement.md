[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / NftBidBuyRequirement

# Type Alias: NftBidBuyRequirement

```ts
type NftBidBuyRequirement: {
  requirement: NftBidBuySchema;
  type: NFT_BUY_BID;
};
```

NFT Bid Buy requirement type

## Type declaration

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `requirement` | \{ `minAmount`: `number`; `mint`: `string`; \} | NftBidBuySchema | - |
| `requirement.minAmount`? | `number` | - | The minimum amount to bid |
| `requirement.mint` | `string` | - | The NFT mint to bid or buy |
| `type` | `NFT_BUY_BID` | - | - |

## Defined in

[types/eventConfig/config.ts:169](https://github.com/torque-labs/torque-utils/blob/3bd29ca22f900f1cf2686f7f240bf82e15337207/types/eventConfig/config.ts#L169)
