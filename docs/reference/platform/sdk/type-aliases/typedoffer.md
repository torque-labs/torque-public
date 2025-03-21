[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / TypedOffer

# Type Alias: TypedOffer

```ts
type TypedOffer = {
  endTime: Date;
  metadata: {
     backgroundColor: string | null;
     backgroundImage: string | null;
     colorMode: "light" | "dark" | null;
     description: string | null;
     image: string | null;
     title: string;
     url: string | null;
    };
  startTime: Date;
  status: "DRAFT" | "ACTIVE" | "CLOSED";
};
```

Defined in: [sdk/src/types/schemaTypes.ts:1589](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1589)

## Properties

### endTime

```ts
endTime: Date;
```

Defined in: [sdk/src/types/schemaTypes.ts:1592](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1592)

***

### metadata

```ts
metadata: {
  backgroundColor: string | null;
  backgroundImage: string | null;
  colorMode: "light" | "dark" | null;
  description: string | null;
  image: string | null;
  title: string;
  url: string | null;
};
```

Defined in: [sdk/src/types/schemaTypes.ts:1593](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1593)

| Name | Type |
| ------ | ------ |
| `backgroundColor?` | `string` \| `null` |
| `backgroundImage?` | `string` \| `null` |
| `colorMode?` | `"light"` \| `"dark"` \| `null` |
| `description?` | `string` \| `null` |
| `image?` | `string` \| `null` |
| `title` | `string` |
| `url?` | `string` \| `null` |

***

### startTime

```ts
startTime: Date;
```

Defined in: [sdk/src/types/schemaTypes.ts:1591](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1591)

***

### status

```ts
status: "DRAFT" | "ACTIVE" | "CLOSED";
```

Defined in: [sdk/src/types/schemaTypes.ts:1590](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1590)
