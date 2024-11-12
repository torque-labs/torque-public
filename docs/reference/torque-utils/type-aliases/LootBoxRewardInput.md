[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / LootBoxRewardInput

# Type Alias: LootBoxRewardInput

```ts
type LootBoxRewardInput: {
  enabled: true;
  rewards: {
     amount: number;
     users: number;
    }[];
  tokenAddress: string;
 } | {
  enabled: false;
};
```

Loot Box form input type

## Defined in

[types/campaigns.ts:147](https://github.com/torque-labs/torque-utils/blob/3bd29ca22f900f1cf2686f7f240bf82e15337207/types/campaigns.ts#L147)
