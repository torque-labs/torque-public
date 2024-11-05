# Torque TS SDK

The official Torque Client TypeScript SDK.

## API Index

### Enumerations

| Enumeration                                                 | Description                                                                |
| ----------------------------------------------------------- | -------------------------------------------------------------------------- |
| [ActionType](enums/enumeration-actiontype.md)               | The type of action that will be used to filter the addresses for a target. |
| [ApiProgressStatus](enums/enumeration-apiprogressstatus.md) | Campaign journey progress status.                                          |
| [ApiRewardType](enums/enumeration-apirewardtype.md)         | The rewards type of a campaign.                                            |
| [ApiStatus](enums/enumeration-apistatus.md)                 | The API response success type.                                             |
| [ApiTxnTypes](enums/enumeration-apitxntypes.md)             | Torque functions that require a wallet signature.                          |
| [AudienceType](enums/enumeration-audiencetype.md)           | -                                                                          |
| [Operation](enums/enumeration-operation.md)                 | The operation type of an audience.                                         |
| [TargetType](enums/enumeration-targettype.md)               | The target type of an audience.                                            |

### Classes

| Class                                                         | Description                                                                                                                                                                              |
| ------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [TorqueAdminClient](classes/class-torqueadminclient.md)       | The TorqueAdminClient class is used to manage admin actions in the Torque API.                                                                                                           |
| [TorqueAudienceClient](classes/class-torqueaudienceclient.md) | The TorqueAudienceClient class is used to manage and verify audiencess for the Torque API.                                                                                               |
| [TorqueRequestClient](classes/class-torquerequestclient.md)   | The TorqueRequestClient class is used to make requests to the Torque API. It provides methods for performing API requests and handling responses.                                        |
| [TorqueSDK](classes/class-torquesdk.md)                       | The official Torque Typescript SDK.                                                                                                                                                      |
| [TorqueUserClient](classes/class-torqueuserclient.md)         | The TorqueUserClient class is used to authenticate a user with the Torque API. The user client allows publishers to fetch campaigns and offers that are savailable for the current user. |

### Type Aliases

| Type alias                           | Description                                                                                   |
| ------------------------------------ | --------------------------------------------------------------------------------------------- |
| ActionRequirementsInput              | Action requirements input.                                                                    |
| ActionTarget                         | An action target for an audience.                                                             |
| AggreggationCreateInput              | Aggregation create input.                                                                     |
| AndOperator                          | Aggregation and operator.                                                                     |
| ApiAudience                          | Audience data.                                                                                |
| ApiAudienceCreateInput               | Audience creation input.                                                                      |
| ApiAudienceMetadata                  | Audience metadata                                                                             |
| ApiAudienceResponse                  | Audience creation response.                                                                   |
| ApiCampaign                          | Campaign data.                                                                                |
| ApiCampaignJourney                   | A user's campaign journey data.                                                               |
| ApiCampaignLeaderboard               | Campaign leaderboard data.                                                                    |
| ApiIdentifyPayload                   | Payload returned from the API as a sample payload for sign in.                                |
| ApiInputLogin                        | Input login options for the API.                                                              |
| ApiLinks                             | An array of the user's share links.                                                           |
| ApiRaffleRewards                     | Raffle rewards data.                                                                          |
| ApiRequirement                       | Full bounty step requirement type.                                                            |
| ApiResponse                          | Generic response for an API request.                                                          |
| ApiResponseError                     | Generic error response for the API.                                                           |
| ApiResponseSuccess                   | Generic success response for the API.                                                         |
| ApiShare                             | Share link data.                                                                              |
| ApiTelegramAuth                      | Telegram auth response.                                                                       |
| ApiUser                              | A Torque user.                                                                                |
| ApiUserJourney                       | A user's journey data.                                                                        |
| ApiUserPayout                        | User Payout data.                                                                             |
| Audience                             | Audiences are used to define the conditions under which a user can participate in a campaign. |
| AudienceBuild                        | Build audience request options.                                                               |
| AudienceBuildResponse                | Build audience response.                                                                      |
| AudienceFunctionResponse             | Generic response for an audience request.                                                     |
| BridgeAction                         | Parameters for a bridge action.                                                               |
| BridgeActionRequirements             | Bridge action requirements.                                                                   |
| CampaignAnalytics                    | Campaign analytics type retrieved from the API.                                               |
| CampaignEndInput                     | Campaign end input.                                                                           |
| Condition                            | Aggregation query condition.                                                                  |
| ConversionTime                       | Conversion time type for analytics.                                                           |
| NftMintAction                        | Parameters for a NFT mint action.                                                             |
| NftMintActionRequirements            | Nft mint action requirements.                                                                 |
| OpenPositionRequirementsInput        | Open position requirements input.                                                             |
| OpenPositionTarget                   | An open position target for an audience.                                                      |
| Operator                             | Aggregation query operator.                                                                   |
| OrOperator                           | Aggregation or operator.                                                                      |
| ProgramInteractionAction             | Parameters for a program interaction action.                                                  |
| ProgramInteractionActionRequirements | Program interaction action requirements.                                                      |
| PublisherCreateInput                 | Publisher create input.                                                                       |
| PublisherPayoutInput                 | Publisher payout input.                                                                       |
| SafeToken                            | -                                                                                             |
| SignTransaction                      | Sign transaction function type                                                                |
| StakedSolRequirementsInput           | Staked sol requirements input.                                                                |
| StakedSolTarget                      | A staked sol target for an audience.                                                          |
| SwapAction                           | Parameters for a swap action.                                                                 |
| SwapActionRequirements               | Swap action requirements.                                                                     |
| Target                               | The target of an audience.                                                                    |
| TokenHoldingRequirementsInput        | Token holding requirements input.                                                             |
| TokenHoldingTarget                   | A token holding target for an audience.                                                       |
| TorqueAdminClientOptions             | Options for the TorqueAdminClient.                                                            |
| TorqueAudienceClientOptions          | Options for the TorqueAudienceClient.                                                         |
| TorqueRequestOptions                 | Options for the TorqueRequestClient.                                                          |
| TorqueSDKOptions                     | Options for the TorqueSDK.                                                                    |
| TorqueUserClientOptions              | Options for the TorqueUserClient.                                                             |
| TxnExecute                           | On-chain transaction execute input.                                                           |
| TxnExecuteResponse                   | On-chain transaction execute response.                                                        |
| TxnInput                             | On-chain transaction build input                                                              |
| VoteAction                           | Parameters for a vote action.                                                                 |
| VoteActionRequirements               | Vote action requirements.                                                                     |
| WithSignature                        | Generic with signture type                                                                    |



