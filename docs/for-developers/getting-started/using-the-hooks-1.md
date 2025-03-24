---
hidden: true
---

# Using the Hooks

The Torque UI library provides a set of React hooks that make it easy to integrate Torque functionality into your Solana application. To use the hooks below, make sure that you've already setup the `TorqueProvider` inside of your app. The hooks can only be used if the Torque context exists.

### useTorque

The main hook for interacting with the Torque SDK. The hook makes it easy to access and interact with the user's offers if you want to implement them directly in your application.

```tsx
import { useTorque } from "@torque-labs/torque-ui";

function MyComponent() {
  const {
    offers,
    journeys,
    publicKey,
    user,
    userClient,
    config,
    initialized,
    isLoading,
    initialize,
    logout,
    claimOffer,
    refreshOffers,
  } = useTorque();

  const handleClaim = async (offerId: string) => {
    await claimOffer(offerId);
  };

  return (
    <div>
      {offers.map((offer) => (
        <div key={offer.id}>
          <h3>{offer.title}</h3>
          <button onClick={() => handleClaim(offer.id)}>Claim Offer</button>
        </div>
      ))}
    </div>
  );
}
```

#### Returns

| Value         | Type                                                                               | Description                             |
| ------------- | ---------------------------------------------------------------------------------- | --------------------------------------- |
| offers        | [ApiCampaign](broken-reference)\[]                                                 | Array of available offers               |
| journeys      | [ApiCampaignJourney](broken-reference)\[]                                          | Array of user's progress through offers |
| publicKey     | PublicKey                                                                          | Connected wallet's public key           |
| user          | [ApiUser](broken-reference)                                                        | The user's data from the Torque API     |
| userClient    | [TorqueUserClient](broken-reference)                                               | The Torque user client instance         |
| config        | [TorqueOptions](using-the-hooks-1.md#torqueoptions)                                | The Torque configuration                |
| initialized   | boolean                                                                            | Whether the user is initialized         |
| isLoading     | boolean                                                                            | Whether it is loading                   |
| initialize    | (options?: [TorqueInitOptions](using-the-hooks-1.md#torqueinitoptions)) => Promise | Function to initialize the user         |
| logout        | () => Promise                                                                      | Function to logout the user             |
| claimOffer    | (offerId: string) => Promise                                                       | Function to claim an offer              |
| refreshOffers | () => Promise                                                                      | Function to refresh the user's offers   |

### useOfferStatus

The useOfferStatus hook provides information about the status of a specific offer for the current user.

```tsx
import { useOfferStatus } from "@torque-labs/torque-ui";

function OfferComponent({ offerId }: { offerId: string }) {
  const { hasStarted, isCompleted } = useOfferStatus(offerId);

  return (
    <div>
      {hasStarted ? "Offer in progress" : "Start offer"}
      {isCompleted && "Offer completed!"}
    </div>
  );
}
```

#### Returns

| Value            | Type                                                                                                                                                                                  | Description                                         |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| isEligible       | boolean                                                                                                                                                                               | Whether the user is eligible to claim the offer     |
| hasStarted       | boolean                                                                                                                                                                               | Whether the user has started the offer              |
| hasCompleted     | boolean                                                                                                                                                                               | Whether the user has completed the offer            |
| isLoading        | boolean                                                                                                                                                                               | Whether the user's status is being loaded           |
| isEnded          | boolean                                                                                                                                                                               | Whether the offer has ended                         |
| isUpcoming       | boolean                                                                                                                                                                               | Whether the offer is upcoming                       |
| isPending        | boolean                                                                                                                                                                               | Whether the user is pending for the offer           |
| updatedAt        | Date                                                                                                                                                                                  | The date the offer was last updated                 |
| startTime        | Date                                                                                                                                                                                  | The date the offer started                          |
| userSteps        | <p>{ </p><p>    id?: string; </p><p>    bountyStepId: string; </p><p>    userJourneyId: string; </p><p>    status: ApiProgressStatus; </p><p>    transaction?: string; </p><p>}[]</p> | The user's progress through the offer               |
| checkOfferStatus | () => Promise                                                                                                                                                                         | Function to refresh the user's status for the offer |

### useAction

The useAction hook provides a utility for handling Torque Solana actions returned from the Torque API. The actions are Solana actions that allow the user to complete a requirement for an offer.

_**NOTE:**_ The hook will automatically prompt the user's wallet for their signature.

```tsx
import { useAction } from "@torque-labs/torque-ui";
import type { ApiRequirement } from "@torque-labs/torque-ts-sdk";

function RequirementComponent({
  index,
  requirement,
  data
}: {
  index: number;
  requirement: ApiRequirement;
  data: Record<string,string>
}) {
  const { isLoading, handleBountyStepAction } = useAction();

  const handleComplete = async () => {
    try {
      await handleBountyStepAction({
        campaignId: requirement.campaignId,
        index,
        data,
        onSuccess: () => {
          // Handle success
        },
        onError: (error) => {
          // Handle error
        },
      });
    } catch (error) {
      // Handle error
    }
  };

  return (
    <div>
      <button onClick={handleComplete}>Complete Requirement</button>
    </div>
  );
}
```

#### Returns

| Value                  | Type                                                                            | Description                                                             |
| ---------------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| isLoading              | boolean                                                                         | Whether the action is loading                                           |
| handleBountyStepAction | (props: [HandleActionProps](using-the-hooks-1.md#handleactionprops)) => Promise | Function to trigger the action for the user to complete the requirement |



## Types

### TorqueOptions

`TorqueOptions` is an interface that defines the configuration options for the Torque SDK:

```typescript
interface TorqueOptions {
  apiUrl?: string;
  appUrl?: string;
  functionsUrl?: string;
  rpc?: string;
  publisherHandle?: string;
}
```

| Value           | Type   | Description                                                                                                                |
| --------------- | ------ | -------------------------------------------------------------------------------------------------------------------------- |
| apiUrl          | string | The URL of the Torque API. Defaults to "https://api.torque.so".                                                            |
| appUrl          | string | The URL of the Torque app/client. Defaults to "https://app.torque.so". This is used for sharing links and link generation. |
| functionsUrl    | string | The URL of the Torque functions.                                                                                           |
| rpc             | string | The RPC URL for the Solana network. Defaults to the default RPC endpoint for the Solana network.                           |
| publisherHandle | string | The publisher handle for the Torque. This is used to identify the publisher and their offers.                              |

### TorqueInitOptions

If you already have a SIWS or basic signature in your app, you can use the `loginInput` property of the `TorqueInitOptions` interface to initialize the user with Torque. This lets Torque validate the user's identity and retrieve their offers without requiring a secondary signature to authenticate with Torque.

```typescript
interface TorqueInitOptions {
  loginInput?: ApiInputLogin;
}
```

| Value      | Type                              | Description                   |
| ---------- | --------------------------------- | ----------------------------- |
| loginInput | [ApiInputLogin](broken-reference) | The login input for the user. |

### HandleActionProps

The `HandleActionProps` interface is used by the `handleBountyStepAction` in the `useAction` hook to handle Torque actions.

```typescript
interface HandleActionProps {
  campaignId: string;
  index: number;
  data?: Record<string, string>;
  onSuccess: OfferActionOnSuccess;
  onError: OfferActionOnError;
}
```

| Value      | Type                    | Description                                                                                                                     |
| ---------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| campaignId | string                  | The ID of the offer/campaign to complete the action for.                                                                        |
| index      | number                  | The index of the action to complete.                                                                                            |
| data       | Record\<string, string> | The data to send with the action. This is specific to each action and can be used to pass additional information to the action. |
| onSuccess  | OfferActionOnSuccess    | The callback to call when the action is successful.                                                                             |
| onError    | OfferActionOnError      | The callback to call when the action fails.                                                                                     |
