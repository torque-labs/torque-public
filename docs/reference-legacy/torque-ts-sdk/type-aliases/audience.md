# Type Alias: Audience

[**@torque-labs/torque-ts-sdk**](../) • **Docs**

***

[@torque-labs/torque-ts-sdk](../) / Audience

## Type Alias: Audience

```ts
type Audience: {
  audiences: Audience[];
  operation: Operation;
  targets: Target[];
};
```

Audiences are used to define the conditions under which a user can participate in a campaign.

### Type declaration

| Name        | Type                                        |
| ----------- | ------------------------------------------- |
| `audiences` | [`Audience`](audience.md)\[]                |
| `operation` | [`Operation`](../enumerations/operation.md) |
| `targets`   | [`Target`](target.md)\[]                    |

### Defined in

[src/types/audience.ts:8](https://github.com/torque-labs/torque-ts-sdk/blob/a30afeab92cb119627ec542f4c8aff2dd9faf383/src/types/audience.ts#L8)
