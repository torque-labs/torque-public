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

Defined in: [sdk/src/modules/user.ts:31](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/user.ts#l31)

The auth input required to authenticate the user with the Torque API.

## Type declaration

| Name | Type |
| ------ | ------ |
| `pubKey` | `string` |
