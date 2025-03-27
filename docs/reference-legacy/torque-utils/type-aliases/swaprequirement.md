[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / SwapRequirement

# Type Alias: SwapRequirement

```ts
type SwapRequirement: {
  requirement: SwapActionSchema;
  timeConfig: {
     duration: number;
     requirement: TokenHoldingTimeConfigSchema;
     type: TOKEN_HOLDING;
    };
  type: SWAP;
};
```

Swap requirement type

## Type declaration

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `requirement` | \{ `inAmount`: `null` \| `number`; `inToken`: `null` \| `string`; `outAmount`: `null` \| `number`; `outToken`: `null` \| `string`; `usdcValue`: `null` \| `number`; \} | SwapActionSchema | - |
| `requirement.inAmount`? | `null` \| `number` | - | The amount of tokens to swap from |
| `requirement.inToken`? | `null` \| `string` | - | The token to swap from |
| `requirement.outAmount`? | `null` \| `number` | - | The amount of tokens to swap to |
| `requirement.outToken`? | `null` \| `string` | - | The token to swap to |
| `requirement.usdcValue`? | `null` \| `number` | - | The USDC value TODO: USDC Value for which token? |
| `timeConfig`? | \{ `duration`: `number`; `requirement`: `TokenHoldingTimeConfigSchema`; `type`: `TOKEN_HOLDING`; \} | - | - |
| `timeConfig.duration` | `number` | - | The duration of the requirement in seconds |
| `timeConfig.requirement` | \{ `amount`: `number`; `token`: `string`; `tokenStandard`: `string`; \} | TokenHoldingTimeConfigSchema | - |
| `timeConfig.requirement.amount` | `number` | - | The minimum amount to hold |
| `timeConfig.requirement.token` | `string` | - | The token to hold |
| `timeConfig.requirement.tokenStandard`? | `string` | - | The token standard of the token |
| `timeConfig.type` | `TOKEN_HOLDING` | - | - |
| `type` | `SWAP` | - | - |

## Defined in

[types/eventConfig/config.ts:226](https://github.com/torque-labs/torque-utils/blob/3bd29ca22f900f1cf2686f7f240bf82e15337207/types/eventConfig/config.ts#L226)
