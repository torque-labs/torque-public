[**@torque-labs/sdk**](../../../@torque-labs/sdk/README.md)

***

[Torque Labs](../../../README.md) / [@torque-labs/sdk](../README.md) / TorqueAuthInput

# Type Alias: TorqueAuthInput

```ts
type TorqueAuthInput = {
  pubKey: string;
 } & 
  | {
  authType: "siws";
  payload: {
     input: SolanaSignInInput;
     output: SolanaSignInOutput;
    };
 }
  | {
  authType: "basic" | "transaction";
  payload: {
     input: string;
     output: string;
    };
 }
  | {
  authType: "privy";
  payload: {
     authToken: string;
     identityToken: string;
    };
};
```

Defined in: [packages/sdk/src/modules/user.ts:37](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/user.ts#L37)

The auth input required to authenticate the user with the Torque API.

## Type declaration

| Name | Type |
| ------ | ------ |
| `pubKey` | `string` |
