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

Defined in: [sdk/src/types/schemaTypes.ts:23](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l23)

## Properties

### address?

```ts
optional address: string | null;
```

Defined in: [sdk/src/types/schemaTypes.ts:28](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l28)

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

Defined in: [sdk/src/types/schemaTypes.ts:29](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l29)

***

### createdAt?

```ts
optional createdAt: Date;
```

Defined in: [sdk/src/types/schemaTypes.ts:43](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l43)

***

### id

```ts
id: string;
```

Defined in: [sdk/src/types/schemaTypes.ts:24](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l24)

***

### name

```ts
name: string;
```

Defined in: [sdk/src/types/schemaTypes.ts:25](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l25)

***

### tokenGateType?

```ts
optional tokenGateType: "NFT" | "SPL" | null;
```

Defined in: [sdk/src/types/schemaTypes.ts:27](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l27)

***

### type

```ts
type: "ALLOWLIST" | "DENYLIST" | "TOKEN_GATE";
```

Defined in: [sdk/src/types/schemaTypes.ts:26](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l26)

***

### updatedAt

```ts
updatedAt: Date;
```

Defined in: [sdk/src/types/schemaTypes.ts:44](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l44)
