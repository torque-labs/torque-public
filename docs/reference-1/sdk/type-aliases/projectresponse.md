[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / ProjectResponse

# Type Alias: ProjectResponse

```ts
type ProjectResponse = {
  createdAt: Date;
  description: string | null;
  discord: string | null;
  id: string;
  image: string | null;
  name: string;
  offchainAllocationEndpoint: string | null;
  offers:   | {
     endTime: Date;
     metadata: {
        backgroundColor: ...;
        backgroundImage: ...;
        colorMode: ...;
        description: ...;
        image: ...;
        title: string;
        url: ...;
       };
     startTime: Date;
     status: "DRAFT" | "ACTIVE" | "CLOSED";
    } & {
     distributors: {
        id: ...;
        status: ...;
       }[];
     id: string;
    }[]
     | null;
  roles: {
     createdAt: Date;
     id: string;
     role: "ADMIN" | "BUILDER" | "VIEWER";
     updatedAt: Date;
    }[];
  telegram: string | null;
  twitter: string | null;
  updatedAt: Date;
  website: string | null;
};
```

Defined in: [sdk/src/types/schemaTypes.ts:1878](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1878)

## Properties

### createdAt?

```ts
optional createdAt: Date;
```

Defined in: [sdk/src/types/schemaTypes.ts:1888](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1888)

***

### description?

```ts
optional description: string | null;
```

Defined in: [sdk/src/types/schemaTypes.ts:1882](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1882)

***

### discord?

```ts
optional discord: string | null;
```

Defined in: [sdk/src/types/schemaTypes.ts:1885](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1885)

***

### id

```ts
id: string;
```

Defined in: [sdk/src/types/schemaTypes.ts:1879](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1879)

***

### image?

```ts
optional image: string | null;
```

Defined in: [sdk/src/types/schemaTypes.ts:1881](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1881)

***

### name

```ts
name: string;
```

Defined in: [sdk/src/types/schemaTypes.ts:1880](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1880)

***

### offchainAllocationEndpoint?

```ts
optional offchainAllocationEndpoint: string | null;
```

Defined in: [sdk/src/types/schemaTypes.ts:1887](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1887)

***

### offers?

```ts
optional offers: 
  | {
  endTime: Date;
  metadata: {
     backgroundColor: ...;
     backgroundImage: ...;
     colorMode: ...;
     description: ...;
     image: ...;
     title: string;
     url: ...;
    };
  startTime: Date;
  status: "DRAFT" | "ACTIVE" | "CLOSED";
 } & {
  distributors: {
     id: ...;
     status: ...;
    }[];
  id: string;
 }[]
  | null;
```

Defined in: [sdk/src/types/schemaTypes.ts:1896](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1896)

***

### roles

```ts
roles: {
  createdAt: Date;
  id: string;
  role: "ADMIN" | "BUILDER" | "VIEWER";
  updatedAt: Date;
 }[];
```

Defined in: [sdk/src/types/schemaTypes.ts:1890](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1890)

| Name | Type |
| ------ | ------ |
| `createdAt?` | `Date` |
| `id` | `string` |
| `role` | `"ADMIN"` \| `"BUILDER"` \| `"VIEWER"` |
| `updatedAt` | `Date` |

***

### telegram?

```ts
optional telegram: string | null;
```

Defined in: [sdk/src/types/schemaTypes.ts:1883](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1883)

***

### twitter?

```ts
optional twitter: string | null;
```

Defined in: [sdk/src/types/schemaTypes.ts:1884](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1884)

***

### updatedAt

```ts
updatedAt: Date;
```

Defined in: [sdk/src/types/schemaTypes.ts:1889](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1889)

***

### website?

```ts
optional website: string | null;
```

Defined in: [sdk/src/types/schemaTypes.ts:1886](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1886)
