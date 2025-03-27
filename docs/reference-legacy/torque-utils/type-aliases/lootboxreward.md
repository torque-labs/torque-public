[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / LootBoxReward

# Type Alias: LootBoxReward

```ts
type LootBoxReward: {
  rewards: {
     amount: number;
     users: number;
    }[];
  tokenAddress: string;
};
```

Loot Box Reward Schematype

## Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `rewards` | \{ `amount`: `number`; `users`: `number`; \}[] | The groups of rewards to distribute |
| `tokenAddress` | `string` | The token address to reward |

## Defined in

[types/campaigns.ts:122](https://github.com/torque-labs/torque-utils/blob/3bd29ca22f900f1cf2686f7f240bf82e15337207/types/campaigns.ts#L122)
