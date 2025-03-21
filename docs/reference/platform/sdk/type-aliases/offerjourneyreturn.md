[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / OfferJourneyReturn

# Type Alias: OfferJourneyReturn

```ts
type OfferJourneyReturn = {
  conversion:   | {
     convertedAt: Date;
     cranks: {
        allocation: any;
        createdAt: Date;
        id: string;
        isAsymmetricPayout: boolean;
        sequenceNumber: number;
        status: "STAGED" | "STARTED" | "PENDING" | "FAILED" | "INVALID" | "DONE";
        transaction: string | null;
        updatedAt: Date;
        webhookId: string | null;
       }[];
     createdAt: Date;
     id: string;
     updatedAt: Date;
    }
     | null;
  conversionId: string | null;
  createdAt: Date;
  id: string;
  index: number;
  requirementJourneys: {
     createdAt: Date;
     data: any | null;
     id: string;
     signature: string | null;
     status: "STAGED" | "STARTED" | "PENDING" | "FAILED" | "INVALID" | "DONE";
     updatedAt: Date;
    }[];
  status: "STAGED" | "STARTED" | "PENDING" | "FAILED" | "INVALID" | "DONE";
  updatedAt: Date;
  user: {
     createdAt: Date;
     id: string;
     publicKey: string;
     updatedAt: Date;
     verified: boolean;
    };
};
```

Defined in: sdk/src/types/schemaTypes.ts:1298

## Properties

### conversion?

```ts
optional conversion: 
  | {
  convertedAt: Date;
  cranks: {
     allocation: any;
     createdAt: Date;
     id: string;
     isAsymmetricPayout: boolean;
     sequenceNumber: number;
     status: "STAGED" | "STARTED" | "PENDING" | "FAILED" | "INVALID" | "DONE";
     transaction: string | null;
     updatedAt: Date;
     webhookId: string | null;
    }[];
  createdAt: Date;
  id: string;
  updatedAt: Date;
 }
  | null;
```

Defined in: sdk/src/types/schemaTypes.ts:1320

***

### conversionId?

```ts
optional conversionId: string | null;
```

Defined in: sdk/src/types/schemaTypes.ts:1302

***

### createdAt?

```ts
optional createdAt: Date;
```

Defined in: sdk/src/types/schemaTypes.ts:1303

***

### id

```ts
id: string;
```

Defined in: sdk/src/types/schemaTypes.ts:1299

***

### index?

```ts
optional index: number;
```

Defined in: sdk/src/types/schemaTypes.ts:1300

***

### requirementJourneys

```ts
requirementJourneys: {
  createdAt: Date;
  data: any | null;
  id: string;
  signature: string | null;
  status: "STAGED" | "STARTED" | "PENDING" | "FAILED" | "INVALID" | "DONE";
  updatedAt: Date;
 }[];
```

Defined in: sdk/src/types/schemaTypes.ts:1305

#### createdAt?

```ts
optional createdAt: Date;
```

#### data?

```ts
optional data: any | null;
```

#### id

```ts
id: string;
```

#### signature?

```ts
optional signature: string | null;
```

#### status

```ts
status: "STAGED" | "STARTED" | "PENDING" | "FAILED" | "INVALID" | "DONE";
```

#### updatedAt

```ts
updatedAt: Date;
```

***

### status

```ts
status: "STAGED" | "STARTED" | "PENDING" | "FAILED" | "INVALID" | "DONE";
```

Defined in: sdk/src/types/schemaTypes.ts:1301

***

### updatedAt

```ts
updatedAt: Date;
```

Defined in: sdk/src/types/schemaTypes.ts:1304

***

### user

```ts
user: {
  createdAt: Date;
  id: string;
  publicKey: string;
  updatedAt: Date;
  verified: boolean;
};
```

Defined in: sdk/src/types/schemaTypes.ts:1313

#### createdAt?

```ts
optional createdAt: Date;
```

#### id

```ts
id: string;
```

#### publicKey

```ts
publicKey: string;
```

#### updatedAt

```ts
updatedAt: Date;
```

#### verified?

```ts
optional verified: boolean;
```
