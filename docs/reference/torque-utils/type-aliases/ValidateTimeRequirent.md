[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / ValidateTimeRequirent

# Type Alias: ValidateTimeRequirent

```ts
type ValidateTimeRequirent: {
  body: {
     data: any;
     initalTransaction: string;
     timeConfig: TimeConfig;
     userPublicKey: string;
    };
};
```

Time validation request body when getting time validation

## Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `body` | \{ `data`: `any`; `initalTransaction`: `string`; `timeConfig`: [`TimeConfig`](TimeConfig.md); `userPublicKey`: `string`; \} | - |
| `body.data`? | `any` | Extra data to pass to the time config |
| `body.initalTransaction`? | `string` | The initial transaction signature |
| `body.timeConfig` | [`TimeConfig`](TimeConfig.md) | The time config to validate |
| `body.userPublicKey`? | `string` | The user's public key |

## Defined in

[types/timeConfig/validationInput.ts:6](https://github.com/torque-labs/torque-utils/blob/3bd29ca22f900f1cf2686f7f240bf82e15337207/types/timeConfig/validationInput.ts#L6)
