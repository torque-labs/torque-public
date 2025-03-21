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

Defined in: sdk/src/types/schemaTypes.ts:609

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

Defined in: sdk/src/types/schemaTypes.ts:613

#### createdAt?

```ts
optional createdAt: Date;
```

#### description?

```ts
optional description: string | null;
```

#### id

```ts
id: string;
```

#### image

```ts
image: string;
```

#### name

```ts
name: string;
```

#### symbol?

```ts
optional symbol: string | null;
```

#### type

```ts
type: "POINT" | "BADGE";
```

#### updatedAt

```ts
updatedAt: Date;
```

***

### createdAt?

```ts
optional createdAt: Date;
```

Defined in: sdk/src/types/schemaTypes.ts:611

***

### id

```ts
id: string;
```

Defined in: sdk/src/types/schemaTypes.ts:610

***

### updatedAt

```ts
updatedAt: Date;
```

Defined in: sdk/src/types/schemaTypes.ts:612
