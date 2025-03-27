[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / ClickAction

# Type Alias: ClickAction

```ts
type ClickAction: {
  antiSybilFee: number;
  requireSignature: boolean;
  targetUrl: string;
};
```

Click action type

## Type declaration

| Name | Type | Description |
| ------ | ------ | ------ |
| `antiSybilFee`? | `number` | Require anti-sybil fee for the click action. If true, the user must pay a transaction fee to complete the requirement. |
| `requireSignature` | `boolean` | Require signature for the click action. If true, the user must sign a transaction to complete the requirement. |
| `targetUrl` | `string` | Target URL for the click action |

## Defined in

[types/eventConfig/requirements.ts:222](https://github.com/torque-labs/torque-utils/blob/3bd29ca22f900f1cf2686f7f240bf82e15337207/types/eventConfig/requirements.ts#L222)
