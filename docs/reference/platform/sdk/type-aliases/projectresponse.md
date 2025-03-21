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

Defined in: sdk/src/types/schemaTypes.ts:1366

## Properties

### createdAt?

```ts
optional createdAt: Date;
```

Defined in: sdk/src/types/schemaTypes.ts:1376

***

### description?

```ts
optional description: string | null;
```

Defined in: sdk/src/types/schemaTypes.ts:1370

***

### discord?

```ts
optional discord: string | null;
```

Defined in: sdk/src/types/schemaTypes.ts:1373

***

### id

```ts
id: string;
```

Defined in: sdk/src/types/schemaTypes.ts:1367

***

### image?

```ts
optional image: string | null;
```

Defined in: sdk/src/types/schemaTypes.ts:1369

***

### name

```ts
name: string;
```

Defined in: sdk/src/types/schemaTypes.ts:1368

***

### offchainAllocationEndpoint?

```ts
optional offchainAllocationEndpoint: string | null;
```

Defined in: sdk/src/types/schemaTypes.ts:1375

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

Defined in: sdk/src/types/schemaTypes.ts:1384

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

Defined in: sdk/src/types/schemaTypes.ts:1378

#### createdAt?

```ts
optional createdAt: Date;
```

#### id

```ts
id: string;
```

#### role

```ts
role: "ADMIN" | "BUILDER" | "VIEWER";
```

#### updatedAt

```ts
updatedAt: Date;
```

***

### telegram?

```ts
optional telegram: string | null;
```

Defined in: sdk/src/types/schemaTypes.ts:1371

***

### twitter?

```ts
optional twitter: string | null;
```

Defined in: sdk/src/types/schemaTypes.ts:1372

***

### updatedAt

```ts
updatedAt: Date;
```

Defined in: sdk/src/types/schemaTypes.ts:1377

***

### website?

```ts
optional website: string | null;
```

Defined in: sdk/src/types/schemaTypes.ts:1374
