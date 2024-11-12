[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / AsymmetricReward

# Type Alias: AsymmetricReward

```ts
type AsymmetricReward: {
  amount: string;
  participants: null | USER | PUBLISHER | BOTH;
  payoutTx: null | string;
  tokenAddress: string;
  userPubKey: null | string;
};
```

Asymmetric Reward type

## Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `amount` | `string` | The amount to reward |
| `participants`? | `null` \| `USER` \| `PUBLISHER` \| `BOTH` | Who can participate in the raffle, users, publishers, or both |
| `payoutTx`? | `null` \| `string` | Leave blank: The transaction hash of the payout transaction |
| `tokenAddress` | `string` | The token address to reward |
| `userPubKey`? | `null` \| `string` | Leave blank: The user public key that will be populated in the payout transaction |

## Defined in

[types/campaigns.ts:101](https://github.com/torque-labs/torque-utils/blob/3bd29ca22f900f1cf2686f7f240bf82e15337207/types/campaigns.ts#L101)
