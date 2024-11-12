[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / RealmsVoteRequirement

# Type Alias: RealmsVoteRequirement

```ts
type RealmsVoteRequirement: {
  requirement: RealmsVoteActionSchema;
  type: REALMS_VOTE;
};
```

Realms Vote requirement type

## Type declaration

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `requirement` | \{ `customProgramId`: `string`; `daoPubKey`: `string`; `proposalPubKey`: `string`; \} | RealmsVoteActionSchema | - |
| `requirement.customProgramId`? | `string` | - | The custom program ID for the proposal |
| `requirement.daoPubKey` | `string` | - | The public key of the DAO |
| `requirement.proposalPubKey` | `string` | - | The public key of the proposal |
| `type` | `REALMS_VOTE` | - | - |

## Defined in

[types/eventConfig/config.ts:197](https://github.com/torque-labs/torque-utils/blob/3bd29ca22f900f1cf2686f7f240bf82e15337207/types/eventConfig/config.ts#L197)
