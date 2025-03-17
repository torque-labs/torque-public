**@torque-labs/sdk**

***

[Torque Labs](../../README.md) / @torque-labs/sdk

# `@torque-labs/sdk`

## Enumerations

| Enumeration | Description |
| ------ | ------ |
| [EventType](enumerations/EventType.md) | - |
| [TorqueSDKErrorTypes](enumerations/TorqueSDKErrorTypes.md) | - |

## Classes

| Class | Description |
| ------ | ------ |
| [TorqueActionsModule](classes/TorqueActionsModule.md) | The TorqueActionsModule class is used to interact with the actions endpoints of the Torque API. |
| [TorqueOffersModule](classes/TorqueOffersModule.md) | The TorqueOffersModule class is used to interact with the offers endpoints of the Torque API. |
| [TorqueSDK](classes/TorqueSDK.md) | The TorqueSDK class is used to interact with the Torque API. |
| [TorqueSDKError](classes/TorqueSDKError.md) | Torque SDK Custom Error Class |
| [TorqueTransactionsModule](classes/TorqueTransactionsModule.md) | The TorqueTransactionsModule class is used to handle transactions for the Torque SDK. It provides methods for creating, signing, and sending transactions. |
| [TorqueUserModule](classes/TorqueUserModule.md) | The TorqueUserModule class is used to handle user authentication for the Torque SDK as well as user management. |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [TorqueRequestOptions](interfaces/TorqueRequestOptions.md) | Interface for the Torque SDK request options |

## Type Aliases

| Type Alias | Description |
| ------ | ------ |
| [ActionPostWithCallbackResponse](type-aliases/ActionPostWithCallbackResponse.md) | - |
| [ApiResponse](type-aliases/ApiResponse.md) | Generic response for an API request. |
| [DistributorInput](type-aliases/DistributorInput.md) | - |
| [DistributorResponse](type-aliases/DistributorResponse.md) | - |
| [DistributorUpdateInput](type-aliases/DistributorUpdateInput.md) | - |
| [LeaderboardResponse](type-aliases/LeaderboardResponse.md) | - |
| [OffchainRewardInput](type-aliases/OffchainRewardInput.md) | - |
| [OffchainRewardType](type-aliases/OffchainRewardType.md) | - |
| [OfferInput](type-aliases/OfferInput.md) | - |
| [OfferJourneyReturn](type-aliases/OfferJourneyReturn.md) | - |
| [OfferResponse](type-aliases/OfferResponse.md) | - |
| [OfferUpdateInput](type-aliases/OfferUpdateInput.md) | - |
| [PrivySolanaWallet](type-aliases/PrivySolanaWallet.md) | - |
| [ProjectInput](type-aliases/ProjectInput.md) | - |
| [ProjectResponse](type-aliases/ProjectResponse.md) | - |
| [TorqueAuthInput](type-aliases/TorqueAuthInput.md) | The auth input required to authenticate the user with the Torque API. |
| [TorqueAuthOptions](type-aliases/TorqueAuthOptions.md) | The auth options for the TorqueUserModule |
| [TorqueSDKOptions](type-aliases/TorqueSDKOptions.md) | Torque SDK options |
| [UserWithConnectedAccounts](type-aliases/UserWithConnectedAccounts.md) | - |

## Functions

| Function | Description |
| ------ | ------ |
| [apiFetch](functions/apiFetch.md) | The full API fetch request function. |
| [serverActionRequest](functions/serverActionRequest.md) | Make a request to the Torque API with the action endpoint. |
| [serverRequest](functions/serverRequest.md) | Make a request to the Torque API. |
