[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / UserBadgeResponse

# Type Alias: UserBadgeResponse

```ts
type UserBadgeResponse = {
  badge: {
     createdAt: Date;
     description: string | null;
     id: string;
     image: string;
     name: string;
     symbol: string | null;
     type: "POINT" | "BADGE";
     updatedAt: Date;
    };
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
```

Defined in: [sdk/src/types/schemaTypes.ts:904](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l904)

## Properties

### badge

```ts
badge: {
  createdAt: Date;
  description: string | null;
  id: string;
  image: string;
  name: string;
  symbol: string | null;
  type: "POINT" | "BADGE";
  updatedAt: Date;
};
```

Defined in: [sdk/src/types/schemaTypes.ts:908](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l908)

| Name | Type |
| ------ | ------ |
| `createdAt?` | `Date` |
| `description?` | `string` \| `null` |
| `id` | `string` |
| `image` | `string` |
| `name` | `string` |
| `symbol?` | `string` \| `null` |
| `type` | `"POINT"` \| `"BADGE"` |
| `updatedAt` | `Date` |

***

### createdAt?

```ts
optional createdAt: Date;
```

Defined in: [sdk/src/types/schemaTypes.ts:906](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l906)

***

### id

```ts
id: string;
```

Defined in: [sdk/src/types/schemaTypes.ts:905](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l905)

***

### updatedAt

```ts
updatedAt: Date;
```

Defined in: [sdk/src/types/schemaTypes.ts:907](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l907)
