# Type Alias: OrOperator

[**@torque-labs/torque-ts-sdk**](../) • **Docs**

***

[@torque-labs/torque-ts-sdk](../) / OrOperator

## Type Alias: OrOperator

```ts
type OrOperator: {
  $or: (Condition | AndOperator | OrOperator)[];
};
```

Aggregation or operator.

### Type declaration

| Name  | Type                                                                                                 |
| ----- | ---------------------------------------------------------------------------------------------------- |
| `$or` | ([`Condition`](condition.md) \| [`AndOperator`](andoperator.md) \| [`OrOperator`](oroperator.md))\[] |

### Defined in

[src/types/audience.ts:268](https://github.com/torque-labs/torque-ts-sdk/blob/a30afeab92cb119627ec542f4c8aff2dd9faf383/src/types/audience.ts#L268)
