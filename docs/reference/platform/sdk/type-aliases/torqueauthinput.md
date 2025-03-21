[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / TorqueAuthInput

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

Defined in: [sdk/src/modules/user.ts:31](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/user.ts#L31)

The auth input required to authenticate the user with the Torque API.

## Type declaration

| Name | Type |
| ------ | ------ |
| `pubKey` | `string` |
