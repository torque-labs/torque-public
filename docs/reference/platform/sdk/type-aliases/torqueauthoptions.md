[**@torque-labs/sdk**](../../../@torque-labs/sdk/README.md)

***

[Torque Labs](../../../README.md) / [@torque-labs/sdk](../README.md) / TorqueAuthOptions

# Type Alias: TorqueAuthOptions

```ts
type TorqueAuthOptions = {
  signInUrl: string;
  useTransaction: boolean;
};
```

Defined in: [packages/sdk/src/modules/user.ts:84](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/sdk/src/modules/user.ts#L84)

The auth options for the TorqueUserModule

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="signinurl"></a> `signInUrl?` | `string` | Sign-in URL |
| <a id="usetransaction"></a> `useTransaction?` | `boolean` | Whether to user a signed trasaction hash for login |
