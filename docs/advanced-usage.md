# Advanced Usage Guide

## Working with Solana Actions

The library integrates with Solana actions for transaction handling.
Here's an example of implementing a custom swap action:

## Error Handling

The library provides built-in error handling, but you can also implement your own:

```typescript
typescript
import { useTorque } from '@torque-labs/torque-ui';
function ErrorHandlingExample() {
const { claimOffer } = useTorque();
const handleClaim = async (offerId: string) => {
try {
await claimOffer(offerId);
} catch (error) {
console.error('Failed to claim offer:', error);
// Handle error appropriately
}
};
return (
// Your component JSX
);
}
```
