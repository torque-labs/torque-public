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

Defined in: [sdk/src/types/schemaTypes.ts:1956](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1956)

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

Defined in: [sdk/src/types/schemaTypes.ts:1959](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1959)

***

### transaction

```ts
transaction: string;
```

Defined in: [sdk/src/types/schemaTypes.ts:1958](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1958)

***

### type

```ts
type: "post" | "transaction" | "message" | "external-link";
```

Defined in: [sdk/src/types/schemaTypes.ts:1957](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/types/schematypes.ts#l1957)
