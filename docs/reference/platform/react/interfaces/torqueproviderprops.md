[**@torque-labs/react**](../README.md)

***

[@torque-labs/react](../README.md) / TorqueProviderProps

# Interface: TorqueProviderProps

Defined in: [react/src/context.tsx:82](https://github.com/torque-labs/monorepo/blob/2ebf07140779767733d669c69d4b6e369a4193c3/packages/react/src/context.tsx#L82)

The TorqueProviderProps interface defines the props for the TorqueProvider component.

## Properties

| Property | Type | Description |
| ------ | ------ | ------ |
| <a id="children"></a> `children?` | `ReactNode` | The children to render |
| <a id="options"></a> `options` | \{ `apiUrl`: `string`; `authDomain`: `string`; `rpcUrl`: `string`; \} | The Torque UI library options |
| `options.apiUrl` | `string` | The API URL for the Torque API server |
| `options.authDomain?` | `string` | The domain to display when signing in with Solana |
| `options.rpcUrl` | `string` | The RPC URL for the Solana network |
| <a id="wallet"></a> `wallet?` | `null` \| `Adapter` \| `PrivySolanaWallet` | The wallet to use for the Torque SDK |
