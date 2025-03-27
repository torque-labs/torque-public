# Torque TS SDK

**@torque-labs/torque-ts-sdk** • **Docs**

***

## Torque Client TypeScript SDK

The official Torque Client TypeScript SDK.

### Enumerations

| Enumeration                                            | Description                                                                |
| ------------------------------------------------------ | -------------------------------------------------------------------------- |
| [ActionType](enumerations/actiontype.md)               | The type of action that will be used to filter the addresses for a target. |
| [ApiProgressStatus](enumerations/apiprogressstatus.md) | Campaign journey progress status.                                          |
| [ApiRewardType](enumerations/apirewardtype.md)         | The rewards type of a campaign.                                            |
| [ApiStatus](enumerations/apistatus.md)                 | The API response success type.                                             |
| [ApiTxnTypes](enumerations/apitxntypes.md)             | Torque functions that require a wallet signature.                          |
| [AudienceType](enumerations/audiencetype.md)           | -                                                                          |
| [Operation](enumerations/operation.md)                 | The operation type of an audience.                                         |
| [TargetType](enumerations/targettype.md)               | The target type of an audience.                                            |

### Classes

| Class                                                   | Description                                                                                                                                                                              |
| ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [TorqueAdminClient](classes/torqueadminclient.md)       | The TorqueAdminClient class is used to manage admin actions in the Torque API.                                                                                                           |
| [TorqueAudienceClient](classes/torqueaudienceclient.md) | The TorqueAudienceClient class is used to manage and verify audiencess for the Torque API.                                                                                               |
| [TorqueRequestClient](classes/torquerequestclient.md)   | The TorqueRequestClient class is used to make requests to the Torque API. It provides methods for performing API requests and handling responses.                                        |
| [TorqueSDK](classes/torquesdk.md)                       | The official Torque Typescript SDK.                                                                                                                                                      |
| [TorqueUserClient](classes/torqueuserclient.md)         | The TorqueUserClient class is used to authenticate a user with the Torque API. The user client allows publishers to fetch campaigns and offers that are savailable for the current user. |

### Interfaces

| Interface                                      | Description                 |
| ---------------------------------------------- | --------------------------- |
| [SignatureField](interfaces/signaturefield.md) | Transaction result response |

### Type Aliases

| Type alias                                                                                                                 | Description                                                                                   |
| -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [ActionRequirementsInput](type-aliases/actionrequirementsinput.md)                                                         | Action requirements input.                                                                    |
| [ActionTarget](../../reference/torque-ts-sdk/type-aliases/ActionTarget.md)                                                 | An action target for an audience.                                                             |
| [AggreggationCreateInput](../../reference/torque-ts-sdk/type-aliases/AggreggationCreateInput.md)                           | Aggregation create input.                                                                     |
| [AndOperator](../../reference/torque-ts-sdk/type-aliases/AndOperator.md)                                                   | Aggregation and operator.                                                                     |
| [ApiAudience](../../reference/torque-ts-sdk/type-aliases/ApiAudience.md)                                                   | Audience data.                                                                                |
| [ApiAudienceCreateInput](../../reference/torque-ts-sdk/type-aliases/ApiAudienceCreateInput.md)                             | Audience creation input.                                                                      |
| [ApiAudienceMetadata](../../reference/torque-ts-sdk/type-aliases/ApiAudienceMetadata.md)                                   | Audience metadata                                                                             |
| [ApiAudienceResponse](../../reference/torque-ts-sdk/type-aliases/ApiAudienceResponse.md)                                   | Audience creation response.                                                                   |
| [ApiCampaign](../../reference/torque-ts-sdk/type-aliases/ApiCampaign.md)                                                   | Campaign data.                                                                                |
| [ApiCampaignJourney](../../reference/torque-ts-sdk/type-aliases/ApiCampaignJourney.md)                                     | A user's campaign journey data.                                                               |
| [ApiCampaignLeaderboard](../../reference/torque-ts-sdk/type-aliases/ApiCampaignLeaderboard.md)                             | Campaign leaderboard data.                                                                    |
| [ApiIdentifyPayload](../../reference/torque-ts-sdk/type-aliases/ApiIdentifyPayload.md)                                     | Payload returned from the API as a sample payload for sign in.                                |
| [ApiInputLogin](../../reference/torque-ts-sdk/type-aliases/ApiInputLogin.md)                                               | Input login options for the API.                                                              |
| [ApiLinks](../../reference/torque-ts-sdk/type-aliases/ApiLinks.md)                                                         | An array of the user's share links.                                                           |
| [ApiRaffleRewards](../../reference/torque-ts-sdk/type-aliases/ApiRaffleRewards.md)                                         | Raffle rewards data.                                                                          |
| [ApiRequirement](../../reference/torque-ts-sdk/type-aliases/ApiRequirement.md)                                             | Full bounty step requirement type.                                                            |
| [ApiResponse](../../reference/torque-ts-sdk/type-aliases/ApiResponse.md)                                                   | Generic response for an API request.                                                          |
| [ApiResponseError](../../reference/torque-ts-sdk/type-aliases/ApiResponseError.md)                                         | Generic error response for the API.                                                           |
| [ApiResponseSuccess](../../reference/torque-ts-sdk/type-aliases/ApiResponseSuccess.md)                                     | Generic success response for the API.                                                         |
| [ApiShare](../../reference/torque-ts-sdk/type-aliases/ApiShare.md)                                                         | Share link data.                                                                              |
| [ApiTelegramAuth](../../reference/torque-ts-sdk/type-aliases/ApiTelegramAuth.md)                                           | Telegram auth response.                                                                       |
| [ApiUser](../../reference/torque-ts-sdk/type-aliases/ApiUser.md)                                                           | A Torque user.                                                                                |
| [ApiUserJourney](../../reference/torque-ts-sdk/type-aliases/ApiUserJourney.md)                                             | A user's journey data.                                                                        |
| [ApiUserPayout](../../reference/torque-ts-sdk/type-aliases/ApiUserPayout.md)                                               | User Payout data.                                                                             |
| [Audience](../../reference/torque-ts-sdk/type-aliases/Audience.md)                                                         | Audiences are used to define the conditions under which a user can participate in a campaign. |
| [AudienceBuild](../../reference/torque-ts-sdk/type-aliases/AudienceBuild.md)                                               | Build audience request options.                                                               |
| [AudienceBuildResponse](../../reference/torque-ts-sdk/type-aliases/AudienceBuildResponse.md)                               | Build audience response.                                                                      |
| [AudienceFunctionResponse](../../reference/torque-ts-sdk/type-aliases/AudienceFunctionResponse.md)                         | Generic response for an audience request.                                                     |
| [BridgeAction](../../reference/torque-ts-sdk/type-aliases/BridgeAction.md)                                                 | Parameters for a bridge action.                                                               |
| [BridgeActionRequirements](../../reference/torque-ts-sdk/type-aliases/BridgeActionRequirements.md)                         | Bridge action requirements.                                                                   |
| [CampaignAnalytics](../../reference/torque-ts-sdk/type-aliases/CampaignAnalytics.md)                                       | Campaign analytics type retrieved from the API.                                               |
| [CampaignEndInput](../../reference/torque-ts-sdk/type-aliases/CampaignEndInput.md)                                         | Campaign end input.                                                                           |
| [Condition](../../reference/torque-ts-sdk/type-aliases/Condition.md)                                                       | Aggregation query condition.                                                                  |
| [ConversionTime](../../reference/torque-ts-sdk/type-aliases/ConversionTime.md)                                             | Conversion time type for analytics.                                                           |
| [NftMintAction](../../reference/torque-ts-sdk/type-aliases/NftMintAction.md)                                               | Parameters for a NFT mint action.                                                             |
| [NftMintActionRequirements](../../reference/torque-ts-sdk/type-aliases/NftMintActionRequirements.md)                       | Nft mint action requirements.                                                                 |
| [OfferClickAction](../../reference/torque-ts-sdk/type-aliases/OfferClickAction.md)                                         | Click action bounty step requirements.                                                        |
| [OfferCustomEventAction](../../reference/torque-ts-sdk/type-aliases/OfferCustomEventAction.md)                             | Custom event bounty step requirements.                                                        |
| [OfferDriftBetAction](../../reference/torque-ts-sdk/type-aliases/OfferDriftBetAction.md)                                   | Drift bet action bounty step requirements.                                                    |
| [OfferDriftDepositAction](../../reference/torque-ts-sdk/type-aliases/OfferDriftDepositAction.md)                           | Drift bet action bounty step requirements.                                                    |
| [OfferFormSubmissionAction](../../reference/torque-ts-sdk/type-aliases/OfferFormSubmissionAction.md)                       | Form submission action bounty step requirements.                                              |
| [OfferKaminoLendAction](../../reference/torque-ts-sdk/type-aliases/OfferKaminoLendAction.md)                               | Kamino lend action bounty step requirements.                                                  |
| [OfferMarginfiLendAction](../../reference/torque-ts-sdk/type-aliases/OfferMarginfiLendAction.md)                           | Marginfi lend action bounty step requirements.                                                |
| [OfferMemoAction](../../reference/torque-ts-sdk/type-aliases/OfferMemoAction.md)                                           | Sign up action bounty step requirements.                                                      |
| [OfferNftBidBuyAction](../../reference/torque-ts-sdk/type-aliases/OfferNftBidBuyAction.md)                                 | NFT bid buy action bounty step requirements.                                                  |
| [OfferNFTTradeAction](../../reference/torque-ts-sdk/type-aliases/OfferNFTTradeAction.md)                                   | NFT collection trade action bounty step requirements.                                         |
| [OfferRealmsVoteAction](../../reference/torque-ts-sdk/type-aliases/OfferRealmsVoteAction.md)                               | Realms DAO vote action bounty step requirements.                                              |
| [OfferStakeSolanaAction](../../reference/torque-ts-sdk/type-aliases/OfferStakeSolanaAction.md)                             | Stake solana action bounty step requirements.                                                 |
| [OfferSwapAction](../../reference/torque-ts-sdk/type-aliases/OfferSwapAction.md)                                           | Swap action bounty step requirements.                                                         |
| [OfferTensorBidAction](../../reference/torque-ts-sdk/type-aliases/OfferTensorBidAction.md)                                 | Tensor bid action bounty step requirements.                                                   |
| [OfferTensorBuyAction](../../reference/torque-ts-sdk/type-aliases/OfferTensorBuyAction.md)                                 | Tensor buy action bounty step requirements.                                                   |
| [OpenPositionRequirementsInput](../../reference/torque-ts-sdk/type-aliases/OpenPositionRequirementsInput.md)               | Open position requirements input.                                                             |
| [OpenPositionTarget](../../reference/torque-ts-sdk/type-aliases/OpenPositionTarget.md)                                     | An open position target for an audience.                                                      |
| [Operator](../../reference/torque-ts-sdk/type-aliases/Operator.md)                                                         | Aggregation query operator.                                                                   |
| [OrOperator](../../reference/torque-ts-sdk/type-aliases/OrOperator.md)                                                     | Aggregation or operator.                                                                      |
| [ProgramInteractionAction](../../reference/torque-ts-sdk/type-aliases/ProgramInteractionAction.md)                         | Parameters for a program interaction action.                                                  |
| [ProgramInteractionActionRequirements](../../reference/torque-ts-sdk/type-aliases/ProgramInteractionActionRequirements.md) | Program interaction action requirements.                                                      |
| [PublisherCreateInput](../../reference/torque-ts-sdk/type-aliases/PublisherCreateInput.md)                                 | Publisher create input.                                                                       |
| [PublisherPayoutInput](../../reference/torque-ts-sdk/type-aliases/PublisherPayoutInput.md)                                 | Publisher payout input.                                                                       |
| [SafeToken](../../reference/torque-ts-sdk/type-aliases/SafeToken.md)                                                       | -                                                                                             |
| [SignTransaction](../../reference/torque-ts-sdk/type-aliases/SignTransaction.md)                                           | Sign transaction function type                                                                |
| [StakedSolRequirementsInput](../../reference/torque-ts-sdk/type-aliases/StakedSolRequirementsInput.md)                     | Staked sol requirements input.                                                                |
| [StakedSolTarget](../../reference/torque-ts-sdk/type-aliases/StakedSolTarget.md)                                           | A staked sol target for an audience.                                                          |
| [SwapAction](../../reference/torque-ts-sdk/type-aliases/SwapAction.md)                                                     | Parameters for a swap action.                                                                 |
| [SwapActionRequirements](../../reference/torque-ts-sdk/type-aliases/SwapActionRequirements.md)                             | Swap action requirements.                                                                     |
| [Target](../../reference/torque-ts-sdk/type-aliases/Target.md)                                                             | The target of an audience.                                                                    |
| [TokenHoldingRequirementsInput](../../reference/torque-ts-sdk/type-aliases/TokenHoldingRequirementsInput.md)               | Token holding requirements input.                                                             |
| [TokenHoldingTarget](../../reference/torque-ts-sdk/type-aliases/TokenHoldingTarget.md)                                     | A token holding target for an audience.                                                       |
| [TorqueAdminClientOptions](../../reference/torque-ts-sdk/type-aliases/TorqueAdminClientOptions.md)                         | Options for the TorqueAdminClient.                                                            |
| [TorqueAudienceClientOptions](../../reference/torque-ts-sdk/type-aliases/TorqueAudienceClientOptions.md)                   | Options for the TorqueAudienceClient.                                                         |
| [TorqueRequestOptions](../../reference/torque-ts-sdk/type-aliases/TorqueRequestOptions.md)                                 | Options for the TorqueRequestClient.                                                          |
| [TorqueSDKOptions](../../reference/torque-ts-sdk/type-aliases/TorqueSDKOptions.md)                                         | Options for the TorqueSDK.                                                                    |
| [TorqueUserClientOptions](../../reference/torque-ts-sdk/type-aliases/TorqueUserClientOptions.md)                           | Options for the TorqueUserClient.                                                             |
| [TxnExecute](../../reference/torque-ts-sdk/type-aliases/TxnExecute.md)                                                     | On-chain transaction execute input.                                                           |
| [TxnExecuteResponse](../../reference/torque-ts-sdk/type-aliases/TxnExecuteResponse.md)                                     | On-chain transaction execute response.                                                        |
| [TxnInput](../../reference/torque-ts-sdk/type-aliases/TxnInput.md)                                                         | On-chain transaction build input                                                              |
| [VoteAction](../../reference/torque-ts-sdk/type-aliases/VoteAction.md)                                                     | Parameters for a vote action.                                                                 |
| [VoteActionRequirements](../../reference/torque-ts-sdk/type-aliases/VoteActionRequirements.md)                             | Vote action requirements.                                                                     |
| [WithSignature](../../reference/torque-ts-sdk/type-aliases/WithSignature.md)                                               | Generic with signture type                                                                    |
