[**@torque-labs/react**](../../../@torque-labs/react/README.md)

***

[Torque Labs](../../../README.md) / [@torque-labs/react](../README.md) / useOfferAction

# Function: useOfferAction()

```ts
function useOfferAction(__namedParameters): {
  executeAction: UseMutationResult<unknown, Error, {
     index: number;
     offerId: string;
    }, unknown>;
  getAction: UseQueryResult<any, Error>;
}
```

Defined in: [packages/react/src/hooks/useOfferAction.ts:13](https://github.com/torque-labs/monorepo/blob/9238a1f6167cf2d739205996110f18c02ed8a04f/packages/react/src/hooks/useOfferAction.ts#L13)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `UseOfferActionOptions` |

## Returns

```ts
{
  executeAction: UseMutationResult<unknown, Error, {
     index: number;
     offerId: string;
    }, unknown>;
  getAction: UseQueryResult<any, Error>;
}
```

| Name | Type |
| ------ | ------ |
| `executeAction` | `UseMutationResult`\<`unknown`, `Error`, \{ `index`: `number`; `offerId`: `string`; \}, `unknown`\> |
| `getAction` | `UseQueryResult`\<`any`, `Error`\> |
