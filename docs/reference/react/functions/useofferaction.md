# useOfferAction

[**@torque-labs/react**](../)

***

[@torque-labs/react](../) / useOfferAction

## Function: useOfferAction()

```ts
function useOfferAction(__namedParameters): {
  executeAction: UseMutationResult<string, Error, {
     index: number;
     offerId: string;
    }, unknown>;
  getAction: UseQueryResult<ActionPostWithCallbackResponse, TorqueSDKError>;
}
```

Defined in: [react/src/hooks/useOfferAction.ts:15](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/react/src/hooks/useOfferAction.ts#L15)

### Parameters

| Parameter           | Type                                                                                             |
| ------------------- | ------------------------------------------------------------------------------------------------ |
| `__namedParameters` | [`UseOfferActionOptions`](../../../reference/platform/react/interfaces/UseOfferActionOptions.md) |

### Returns

```ts
{
  executeAction: UseMutationResult<string, Error, {
     index: number;
     offerId: string;
    }, unknown>;
  getAction: UseQueryResult<ActionPostWithCallbackResponse, TorqueSDKError>;
}
```

| Name            | Type                                                                                           |
| --------------- | ---------------------------------------------------------------------------------------------- |
| `executeAction` | `UseMutationResult`<`string`, `Error`, { `index`: `number`; `offerId`: `string`; }, `unknown`> |
| `getAction`     | `UseQueryResult`<`ActionPostWithCallbackResponse`, `TorqueSDKError`>                           |
