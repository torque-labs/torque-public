[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / AudienceResponse

# Type Alias: AudienceResponse

```ts
type AudienceResponse = {
  address: string | null;
  amount:   | 
     | number
     | string
     | {
     d: number[];
     e: number;
     s: number;
    }
     | null;
  createdAt: Date;
  id: string;
  name: string;
  tokenGateType: "NFT" | "SPL" | null;
  type: "ALLOWLIST" | "DENYLIST" | "TOKEN_GATE";
  updatedAt: Date;
};
```

Defined in: sdk/src/types/schemaTypes.ts:19

## Properties

### address?

```ts
optional address: string | null;
```

Defined in: sdk/src/types/schemaTypes.ts:24

***

### amount?

```ts
optional amount: 
  | 
  | number
  | string
  | {
  d: number[];
  e: number;
  s: number;
 }
  | null;
```

Defined in: sdk/src/types/schemaTypes.ts:25

***

### createdAt?

```ts
optional createdAt: Date;
```

Defined in: sdk/src/types/schemaTypes.ts:30

***

### id

```ts
id: string;
```

Defined in: sdk/src/types/schemaTypes.ts:20

***

### name

```ts
name: string;
```

Defined in: sdk/src/types/schemaTypes.ts:21

***

### tokenGateType?

```ts
optional tokenGateType: "NFT" | "SPL" | null;
```

Defined in: sdk/src/types/schemaTypes.ts:23

***

### type

```ts
type: "ALLOWLIST" | "DENYLIST" | "TOKEN_GATE";
```

Defined in: sdk/src/types/schemaTypes.ts:22

***

### updatedAt

```ts
updatedAt: Date;
```

Defined in: sdk/src/types/schemaTypes.ts:31
