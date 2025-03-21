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

Defined in: sdk/src/types/schemaTypes.ts:1414

## Properties

### description

```ts
description: string;
```

Defined in: sdk/src/types/schemaTypes.ts:1418

***

### disabled?

```ts
optional disabled: boolean;
```

Defined in: sdk/src/types/schemaTypes.ts:1420

***

### error?

```ts
optional error: 
  | {
  message: string;
 }
  | null;
```

Defined in: sdk/src/types/schemaTypes.ts:1429

***

### icon

```ts
icon: string;
```

Defined in: sdk/src/types/schemaTypes.ts:1416

***

### label

```ts
label: string;
```

Defined in: sdk/src/types/schemaTypes.ts:1419

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

Defined in: sdk/src/types/schemaTypes.ts:1421

#### actions

```ts
actions: {
  href: string;
  label: string;
  parameters: any[];
  type: "transaction" | "message" | "post" | "external-link";
 }[];
```

***

### title

```ts
title: string;
```

Defined in: sdk/src/types/schemaTypes.ts:1417

***

### type?

```ts
optional type: "action" | "completed";
```

Defined in: sdk/src/types/schemaTypes.ts:1415
