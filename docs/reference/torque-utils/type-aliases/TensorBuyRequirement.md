[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / TensorBuyRequirement

# Type Alias: TensorBuyRequirement

```ts
type TensorBuyRequirement: {
  requirement: TensorActionSchema;
  type: TENSOR_BUY;
};
```

Tensor Buy requirement type

## Type declaration

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `requirement` | \{ `collectionIds`: `string`[]; \} | TensorActionSchema | - |
| `requirement.collectionIds` | `string`[] | - | The collection ID of the tension collection for the requirement |
| `type` | `TENSOR_BUY` | - | - |

## Defined in

[types/eventConfig/config.ts:252](https://github.com/torque-labs/torque-utils/blob/3bd29ca22f900f1cf2686f7f240bf82e15337207/types/eventConfig/config.ts#L252)
