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

Defined in: sdk/src/types/schemaTypes.ts:1158

## Properties

### endTime

```ts
endTime: Date;
```

Defined in: sdk/src/types/schemaTypes.ts:1161

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

Defined in: sdk/src/types/schemaTypes.ts:1162

#### backgroundColor?

```ts
optional backgroundColor: string | null;
```

#### backgroundImage?

```ts
optional backgroundImage: string | null;
```

#### colorMode?

```ts
optional colorMode: "light" | "dark" | null;
```

#### description?

```ts
optional description: string | null;
```

#### image?

```ts
optional image: string | null;
```

#### title

```ts
title: string;
```

#### url?

```ts
optional url: string | null;
```

***

### startTime

```ts
startTime: Date;
```

Defined in: sdk/src/types/schemaTypes.ts:1160

***

### status

```ts
status: "DRAFT" | "ACTIVE" | "CLOSED";
```

Defined in: sdk/src/types/schemaTypes.ts:1159
