# Type Alias: AndOperator

[**@torque-labs/torque-ts-sdk**](../) • **Docs**

***

[@torque-labs/torque-ts-sdk](../) / AndOperator

## Type Alias: AndOperator

```ts
type AndOperator: {
  $and: (Condition | AndOperator | OrOperator)[];
};
```

Aggregation and operator.

### Type declaration

| Name   | Type                                                                                                 |
| ------ | ---------------------------------------------------------------------------------------------------- |
| `$and` | ([`Condition`](condition.md) \| [`AndOperator`](andoperator.md) \| [`OrOperator`](oroperator.md))\[] |

### Defined in

[src/types/audience.ts:261](https://github.com/torque-labs/torque-ts-sdk/blob/a30afeab92cb119627ec542f4c8aff2dd9faf383/src/types/audience.ts#L261)
