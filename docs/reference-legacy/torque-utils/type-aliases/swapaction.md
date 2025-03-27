[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / SwapAction

# Type Alias: SwapAction

```ts
type SwapAction: {
  inAmount: null | number;
  inToken: null | string;
  outAmount: null | number;
  outToken: null | string;
  usdcValue: null | number;
};
```

Swap action type

## Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `inAmount`? | `null` \| `number` | The amount of tokens to swap from |
| `inToken`? | `null` \| `string` | The token to swap from |
| `outAmount`? | `null` \| `number` | The amount of tokens to swap to |
| `outToken`? | `null` \| `string` | The token to swap to |
| `usdcValue`? | `null` \| `number` | The USDC value TODO: USDC Value for which token? |

## Defined in

[types/eventConfig/requirements.ts:77](https://github.com/torque-labs/torque-utils/blob/3bd29ca22f900f1cf2686f7f240bf82e15337207/types/eventConfig/requirements.ts#L77)
