[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / ActionPostWithCallbackResponse

# Type Alias: ActionPostWithCallbackResponse

```ts
type ActionPostWithCallbackResponse = {
  links:   | {
     next: {
        href: string;
        type: "post";
       };
    }
     | null;
  transaction: string;
  type: "post" | "transaction" | "message" | "external-link";
};
```

Defined in: sdk/src/types/schemaTypes.ts:1433

## Properties

### links?

```ts
optional links: 
  | {
  next: {
     href: string;
     type: "post";
    };
 }
  | null;
```

Defined in: sdk/src/types/schemaTypes.ts:1436

***

### transaction

```ts
transaction: string;
```

Defined in: sdk/src/types/schemaTypes.ts:1435

***

### type

```ts
type: "post" | "transaction" | "message" | "external-link";
```

Defined in: sdk/src/types/schemaTypes.ts:1434
