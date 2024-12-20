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

| Type alias                                                                                   | Description                                                                                   |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [ActionRequirementsInput](type-aliases/actionrequirementsinput.md)                           | Action requirements input.                                                                    |
| [ActionTarget](type-aliases/ActionTarget.md)                                                 | An action target for an audience.                                                             |
| [AggreggationCreateInput](type-aliases/AggreggationCreateInput.md)                           | Aggregation create input.                                                                     |
| [AndOperator](type-aliases/AndOperator.md)                                                   | Aggregation and operator.                                                                     |
| [ApiAudience](type-aliases/ApiAudience.md)                                                   | Audience data.                                                                                |
| [ApiAudienceCreateInput](type-aliases/ApiAudienceCreateInput.md)                             | Audience creation input.                                                                      |
| [ApiAudienceMetadata](type-aliases/ApiAudienceMetadata.md)                                   | Audience metadata                                                                             |
| [ApiAudienceResponse](type-aliases/ApiAudienceResponse.md)                                   | Audience creation response.                                                                   |
| [ApiCampaign](type-aliases/ApiCampaign.md)                                                   | Campaign data.                                                                                |
| [ApiCampaignJourney](type-aliases/ApiCampaignJourney.md)                                     | A user's campaign journey data.                                                               |
| [ApiCampaignLeaderboard](type-aliases/ApiCampaignLeaderboard.md)                             | Campaign leaderboard data.                                                                    |
| [ApiIdentifyPayload](type-aliases/ApiIdentifyPayload.md)                                     | Payload returned from the API as a sample payload for sign in.                                |
| [ApiInputLogin](type-aliases/ApiInputLogin.md)                                               | Input login options for the API.                                                              |
| [ApiLinks](type-aliases/ApiLinks.md)                                                         | An array of the user's share links.                                                           |
| [ApiRaffleRewards](type-aliases/ApiRaffleRewards.md)                                         | Raffle rewards data.                                                                          |
| [ApiRequirement](type-aliases/ApiRequirement.md)                                             | Full bounty step requirement type.                                                            |
| [ApiResponse](type-aliases/ApiResponse.md)                                                   | Generic response for an API request.                                                          |
| [ApiResponseError](type-aliases/ApiResponseError.md)                                         | Generic error response for the API.                                                           |
| [ApiResponseSuccess](type-aliases/ApiResponseSuccess.md)                                     | Generic success response for the API.                                                         |
| [ApiShare](type-aliases/ApiShare.md)                                                         | Share link data.                                                                              |
| [ApiTelegramAuth](type-aliases/ApiTelegramAuth.md)                                           | Telegram auth response.                                                                       |
| [ApiUser](type-aliases/ApiUser.md)                                                           | A Torque user.                                                                                |
| [ApiUserJourney](type-aliases/ApiUserJourney.md)                                             | A user's journey data.                                                                        |
| [ApiUserPayout](type-aliases/ApiUserPayout.md)                                               | User Payout data.                                                                             |
| [Audience](type-aliases/Audience.md)                                                         | Audiences are used to define the conditions under which a user can participate in a campaign. |
| [AudienceBuild](type-aliases/AudienceBuild.md)                                               | Build audience request options.                                                               |
| [AudienceBuildResponse](type-aliases/AudienceBuildResponse.md)                               | Build audience response.                                                                      |
| [AudienceFunctionResponse](type-aliases/AudienceFunctionResponse.md)                         | Generic response for an audience request.                                                     |
| [BridgeAction](type-aliases/BridgeAction.md)                                                 | Parameters for a bridge action.                                                               |
| [BridgeActionRequirements](type-aliases/BridgeActionRequirements.md)                         | Bridge action requirements.                                                                   |
| [CampaignAnalytics](type-aliases/CampaignAnalytics.md)                                       | Campaign analytics type retrieved from the API.                                               |
| [CampaignEndInput](type-aliases/CampaignEndInput.md)                                         | Campaign end input.                                                                           |
| [Condition](type-aliases/Condition.md)                                                       | Aggregation query condition.                                                                  |
| [ConversionTime](type-aliases/ConversionTime.md)                                             | Conversion time type for analytics.                                                           |
| [NftMintAction](type-aliases/NftMintAction.md)                                               | Parameters for a NFT mint action.                                                             |
| [NftMintActionRequirements](type-aliases/NftMintActionRequirements.md)                       | Nft mint action requirements.                                                                 |
| [OfferClickAction](type-aliases/OfferClickAction.md)                                         | Click action bounty step requirements.                                                        |
| [OfferCustomEventAction](type-aliases/OfferCustomEventAction.md)                             | Custom event bounty step requirements.                                                        |
| [OfferDriftBetAction](type-aliases/OfferDriftBetAction.md)                                   | Drift bet action bounty step requirements.                                                    |
| [OfferDriftDepositAction](type-aliases/OfferDriftDepositAction.md)                           | Drift bet action bounty step requirements.                                                    |
| [OfferFormSubmissionAction](type-aliases/OfferFormSubmissionAction.md)                       | Form submission action bounty step requirements.                                              |
| [OfferKaminoLendAction](type-aliases/OfferKaminoLendAction.md)                               | Kamino lend action bounty step requirements.                                                  |
| [OfferMarginfiLendAction](type-aliases/OfferMarginfiLendAction.md)                           | Marginfi lend action bounty step requirements.                                                |
| [OfferMemoAction](type-aliases/OfferMemoAction.md)                                           | Sign up action bounty step requirements.                                                      |
| [OfferNftBidBuyAction](type-aliases/OfferNftBidBuyAction.md)                                 | NFT bid buy action bounty step requirements.                                                  |
| [OfferNFTTradeAction](type-aliases/OfferNFTTradeAction.md)                                   | NFT collection trade action bounty step requirements.                                         |
| [OfferRealmsVoteAction](type-aliases/OfferRealmsVoteAction.md)                               | Realms DAO vote action bounty step requirements.                                              |
| [OfferStakeSolanaAction](type-aliases/OfferStakeSolanaAction.md)                             | Stake solana action bounty step requirements.                                                 |
| [OfferSwapAction](type-aliases/OfferSwapAction.md)                                           | Swap action bounty step requirements.                                                         |
| [OfferTensorBidAction](type-aliases/OfferTensorBidAction.md)                                 | Tensor bid action bounty step requirements.                                                   |
| [OfferTensorBuyAction](type-aliases/OfferTensorBuyAction.md)                                 | Tensor buy action bounty step requirements.                                                   |
| [OpenPositionRequirementsInput](type-aliases/OpenPositionRequirementsInput.md)               | Open position requirements input.                                                             |
| [OpenPositionTarget](type-aliases/OpenPositionTarget.md)                                     | An open position target for an audience.                                                      |
| [Operator](type-aliases/Operator.md)                                                         | Aggregation query operator.                                                                   |
| [OrOperator](type-aliases/OrOperator.md)                                                     | Aggregation or operator.                                                                      |
| [ProgramInteractionAction](type-aliases/ProgramInteractionAction.md)                         | Parameters for a program interaction action.                                                  |
| [ProgramInteractionActionRequirements](type-aliases/ProgramInteractionActionRequirements.md) | Program interaction action requirements.                                                      |
| [PublisherCreateInput](type-aliases/PublisherCreateInput.md)                                 | Publisher create input.                                                                       |
| [PublisherPayoutInput](type-aliases/PublisherPayoutInput.md)                                 | Publisher payout input.                                                                       |
| [SafeToken](type-aliases/SafeToken.md)                                                       | -                                                                                             |
| [SignTransaction](type-aliases/SignTransaction.md)                                           | Sign transaction function type                                                                |
| [StakedSolRequirementsInput](type-aliases/StakedSolRequirementsInput.md)                     | Staked sol requirements input.                                                                |
| [StakedSolTarget](type-aliases/StakedSolTarget.md)                                           | A staked sol target for an audience.                                                          |
| [SwapAction](type-aliases/SwapAction.md)                                                     | Parameters for a swap action.                                                                 |
| [SwapActionRequirements](type-aliases/SwapActionRequirements.md)                             | Swap action requirements.                                                                     |
| [Target](type-aliases/Target.md)                                                             | The target of an audience.                                                                    |
| [TokenHoldingRequirementsInput](type-aliases/TokenHoldingRequirementsInput.md)               | Token holding requirements input.                                                             |
| [TokenHoldingTarget](type-aliases/TokenHoldingTarget.md)                                     | A token holding target for an audience.                                                       |
| [TorqueAdminClientOptions](type-aliases/TorqueAdminClientOptions.md)                         | Options for the TorqueAdminClient.                                                            |
| [TorqueAudienceClientOptions](type-aliases/TorqueAudienceClientOptions.md)                   | Options for the TorqueAudienceClient.                                                         |
| [TorqueRequestOptions](type-aliases/TorqueRequestOptions.md)                                 | Options for the TorqueRequestClient.                                                          |
| [TorqueSDKOptions](type-aliases/TorqueSDKOptions.md)                                         | Options for the TorqueSDK.                                                                    |
| [TorqueUserClientOptions](type-aliases/TorqueUserClientOptions.md)                           | Options for the TorqueUserClient.                                                             |
| [TxnExecute](type-aliases/TxnExecute.md)                                                     | On-chain transaction execute input.                                                           |
| [TxnExecuteResponse](type-aliases/TxnExecuteResponse.md)                                     | On-chain transaction execute response.                                                        |
| [TxnInput](type-aliases/TxnInput.md)                                                         | On-chain transaction build input                                                              |
| [VoteAction](type-aliases/VoteAction.md)                                                     | Parameters for a vote action.                                                                 |
| [VoteActionRequirements](type-aliases/VoteActionRequirements.md)                             | Vote action requirements.                                                                     |
| [WithSignature](type-aliases/WithSignature.md)                                               | Generic with signture type                                                                    |
