[**@torque-labs/react**](../README.md)

***

[@torque-labs/react](../README.md) / TorqueContextValue

# Interface: TorqueContextValue

Defined in: [react/src/context.tsx:11](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/react/src/context.tsx#L11)

The TorqueContextValue interface defines the value of the TorqueContext.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="authenticate"></a> `authenticate` | (`authInput`?: `TorqueAuthInput`, `signInUrl`?: `string`) => `Promise`\<`void`\> | Authenticates the user with the Torque SDK |
| <a id="connectmodalopen"></a> `connectModalOpen` | `boolean` | The state of the connect modal |
| <a id="currentuser"></a> `currentUser?` | `UserWithConnectedAccounts` | The current user |
| <a id="isauthenticated"></a> `isAuthenticated` | `boolean` | Flag indicating if the user is authenticated. (same as initialized) |
| <a id="isloading"></a> `isLoading` | `boolean` | Whether the Torque SDK is loading |
| <a id="isverified"></a> `isVerified` | `boolean` | Flag indicating if the user is verified |
| <a id="logout"></a> `logout` | (`disconnect`?: `boolean`) => `Promise`\<`void`\> | Logout the user from the Torque SDK |
| <a id="setconnectmodalopen"></a> `setConnectModalOpen` | `Dispatch`\<`SetStateAction`\<`boolean`\>\> | Set the visibility of the wallet connect modal |
| <a id="setusetransactionforauth"></a> `setUseTransactionForAuth` | `Dispatch`\<`SetStateAction`\<`boolean`\>\> | Set the flag whether to use transactions for authentication |
| <a id="torque"></a> `torque` | `TorqueSDK` | The Torque SDK instance |
| <a id="usetransactionforauth"></a> `useTransactionForAuth` | `boolean` | Flag to set if the user should use transactions for authentication (eg. Ledger) |
| <a id="wallet"></a> `wallet?` | `Adapter` \| `PrivySolanaWallet` | The wallet adapter instance |
