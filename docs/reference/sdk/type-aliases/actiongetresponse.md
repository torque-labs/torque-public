[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / ActionGetResponse

# Type Alias: ActionGetResponse

```ts
type ActionGetResponse = {
  description: string;
  disabled: boolean;
  error:   | {
     message: string;
    }
     | null;
  icon: string;
  label: string;
  links: {
     actions: {
        href: string;
        label: string;
        parameters: any[];
        type: "transaction" | "message" | "post" | "external-link";
       }[];
    };
  title: string;
  type: "action" | "completed";
};
```

Defined in: [sdk/src/types/schemaTypes.ts:1933](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1933)

## Properties

### description

```ts
description: string;
```

Defined in: [sdk/src/types/schemaTypes.ts:1937](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1937)

***

### disabled?

```ts
optional disabled: boolean;
```

Defined in: [sdk/src/types/schemaTypes.ts:1939](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1939)

***

### error?

```ts
optional error: 
  | {
  message: string;
 }
  | null;
```

Defined in: [sdk/src/types/schemaTypes.ts:1950](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1950)

***

### icon

```ts
icon: string;
```

Defined in: [sdk/src/types/schemaTypes.ts:1935](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1935)

***

### label

```ts
label: string;
```

Defined in: [sdk/src/types/schemaTypes.ts:1938](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1938)

***

### links?

```ts
optional links: {
  actions: {
     href: string;
     label: string;
     parameters: any[];
     type: "transaction" | "message" | "post" | "external-link";
    }[];
};
```

Defined in: [sdk/src/types/schemaTypes.ts:1940](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1940)

| Name | Type |
| ------ | ------ |
| `actions` | \{ `href`: `string`; `label`: `string`; `parameters`: `any`[]; `type`: `"transaction"` \| `"message"` \| `"post"` \| `"external-link"`; \}[] |

***

### title

```ts
title: string;
```

Defined in: [sdk/src/types/schemaTypes.ts:1936](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1936)

***

### type?

```ts
optional type: "action" | "completed";
```

Defined in: [sdk/src/types/schemaTypes.ts:1934](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1934)
