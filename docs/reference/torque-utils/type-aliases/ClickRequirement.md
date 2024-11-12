[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / ClickRequirement

# Type Alias: ClickRequirement

```ts
type ClickRequirement: {
  requirement: ClickActionSchema;
  type: CLICK;
};
```

Click requirement type

## Type declaration

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `requirement` | \{ `antiSybilFee`: `number`; `requireSignature`: `boolean`; `targetUrl`: `string`; \} | ClickActionSchema | - |
| `requirement.antiSybilFee`? | `number` | - | Require anti-sybil fee for the click action. If true, the user must pay a transaction fee to complete the requirement. |
| `requirement.requireSignature` | `boolean` | - | Require signature for the click action. If true, the user must sign a transaction to complete the requirement. |
| `requirement.targetUrl` | `string` | - | Target URL for the click action |
| `type` | `CLICK` | - | - |

## Defined in

[types/eventConfig/config.ts:57](https://github.com/torque-labs/torque-utils/blob/3bd29ca22f900f1cf2686f7f240bf82e15337207/types/eventConfig/config.ts#L57)
