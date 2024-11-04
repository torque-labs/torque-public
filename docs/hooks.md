# Hooks Reference

## useTorque

The main hook for interacting with the Torque SDK. The hook makes it easy to access and interact with the user's offers if you want to implement them directly in your application.

```tsx
import { useTorque } from "@torque-labs/torque-ui";

function MyComponent() {
  const { offers, journeys, publicKey, claimOffer } = useTorque();

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

### Returns

| Value      | Type                               | Description                             |
| ---------- | ---------------------------------- | --------------------------------------- |
| offers     | ApiCampaign[]                      | Array of available offers               |
| journeys   | ApiCampaignJourney[]               | Array of user's progress through offers |
| publicKey  | PublicKey                          | Connected wallet's public key           |
| claimOffer | (offerId: string) => Promise<void> | Function to claim an offer              |

## useOfferStatus

The useOfferStatus hook provides information about the status of an offer for the current user.

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

### Returns

| Value       | Type    | Description                              |
| ----------- | ------- | ---------------------------------------- |
| hasStarted  | boolean | Whether the user has started the offer   |
| isCompleted | boolean | Whether the user has completed the offer |

## useAction

The useAction hook provides a utility for handling Torque Solana actions returned from the Torque API. The actions are Solana actions that allow the user to complete a requirement for an offer. The hook handle signing and sending transactions as well as signatures for verification. The actions returned by the API are automatically handled and confirmed by the hook.

```tsx
import { useAction } from "@torque-labs/torque-ui";

function RequirementComponent({
  requirement,
}: {
  requirement: ApiRequirement;
}) {
  const { isLoading, handleBountyStepAction } = useAction();

  const handleComplete = async () => {
    try {
      await handleBountyStepAction({
        campaignId: requirement.campaignId,
        index: requirement.index,
        data: requirement.eventConfig.data,
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

### Returns

| Value                  | Type                                        | Description                                       |
| ---------------------- | ------------------------------------------- | ------------------------------------------------- |
| isLoading              | boolean                                     | Whether the action is loading                     |
| handleBountyStepAction | (props: HandleActionProps) => Promise<void> | Function to handle the action returned by the API |
