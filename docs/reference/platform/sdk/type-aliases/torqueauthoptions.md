[**@torque-labs/sdk**](../README.md)

***

[@torque-labs/sdk](../README.md) / TorqueAuthOptions

# Type Alias: TorqueAuthOptions

```ts
type TorqueAuthOptions = {
  signInUrl: string;
  useTransaction: boolean;
};
```

Defined in: [sdk/src/modules/user.ts:78](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/user.ts#L78)

The auth options for the TorqueUserModule

## Properties

### signInUrl?

```ts
optional signInUrl: string;
```

Defined in: [sdk/src/modules/user.ts:87](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/user.ts#L87)

Sign-in URL

***

### useTransaction?

```ts
optional useTransaction: boolean;
```

Defined in: [sdk/src/modules/user.ts:82](https://github.com/torque-labs/monorepo/blob/f4ba71b316d908ec6167830d700bbcfae0be65a8/packages/sdk/src/modules/user.ts#L82)

Whether to user a signed trasaction hash for login
