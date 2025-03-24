---
description: Breakdown of hooks from the Torque React library
---

# Using the Hooks

## Available Hooks

The Torque React SDK provides several hooks for interacting with the Torque platform:

* `useCurrentUser`: Get the current authenticated user
* `useProjects`: Get a list of projects
* `useProject`: Get a specific project
* `useCreateProject`: Create a new project
* `useOffers`: Get offers for a project
* `useOffer`: Get a specific offer
* `useCreateOffer`: Create a new offer
* `useUpdateOffer`: Update an existing offer
* `useStartOffer`: Start an offer for the current user
* `useOfferJourney`: Get the user's journey for the current offer
* `useOfferAction`: Perform an action on an offer
* `useDeployDistributor`: Deploy a distributor
* `useAddDistributor`: Add a distributor to a project
* `useUpdateDistributor`: Update a distributor
* `useCloseDistributor`: Close a distributor

### Example: Using the useOffer Hook

```tsx
import { useOffer } from '@torque-labs/react';

export function Offers() {
  const { data: offers, isLoading, error } = useOffers({
    status: "ACTIVE"
  });

  return (
    <div>
      {offers.map(offer => (
        <div key={offer.id}>
          <h3>{offer.metadata.title}</h3>
        </div>
      ))}
    </div>
  );
}
```
