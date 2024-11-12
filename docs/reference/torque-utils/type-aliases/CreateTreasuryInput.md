[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / CreateTreasuryInput

# Type Alias: CreateTreasuryInput

```ts
type CreateTreasuryInput: {
  description: null | string;
  imageUrl: null | string;
  offerId: string;
  payouts: number[];
  payoutsAvailable: number[];
  title: null | string;
  tokenAddress: null | string;
};
```

Create treasury input type

## Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `description`? | `null` \| `string` | - |
| `imageUrl`? | `null` \| `string` | - |
| `offerId` | `string` | The offer ID of the campaign/offer to create the loot box treasury for |
| `payouts` | `number`[] | - |
| `payoutsAvailable` | `number`[] | - |
| `title`? | `null` \| `string` | - |
| `tokenAddress`? | `null` \| `string` | - |

## Defined in

[types/lootBox.ts:22](https://github.com/torque-labs/torque-utils/blob/3bd29ca22f900f1cf2686f7f240bf82e15337207/types/lootBox.ts#L22)
