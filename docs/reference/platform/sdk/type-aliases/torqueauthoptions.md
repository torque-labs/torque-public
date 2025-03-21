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

Defined in: [sdk/src/modules/user.ts:78](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/user.ts#l78)

The auth options for the TorqueUserModule

## Properties

### signInUrl?

```ts
optional signInUrl: string;
```

Defined in: [sdk/src/modules/user.ts:87](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/user.ts#l87)

Sign-in URL

***

### useTransaction?

```ts
optional useTransaction: boolean;
```

Defined in: [sdk/src/modules/user.ts:82](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/sdk/src/modules/user.ts#l82)

Whether to user a signed trasaction hash for login
