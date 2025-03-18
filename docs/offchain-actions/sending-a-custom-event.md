# Sending a Custom Event

Sending a custom event is as simple as sending a `POST` request to the events endpoint of the Torque API. For an event to be accepted by the Torque API, you must first [create the custom event](creating-offchain-actions.md) and structure.&#x20;

**Custom event endpoint**: `https://api.torque.so/events`

#### Request structure

{% code title="Request:" %}
```typescript
await fetch("https://api.torque.so/events", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-torque-api-key": "<YOUR_API_KEY>",
  },
  body: JSON.stringify(payload),
});
```
{% endcode %}

{% code title="Request body:" %}
```json
{
  "timestamp": 1731596206795, // in ms
  "user": {
    "pubKey": "<PUB_KEY>"
  },
  "event_name": "<event_name>",
  "event_data": {
    "<string_param_name>": "<value>",
    "<number_param_name>": 0,
    "<boolean_param_name>": true || false,
  }
}
```
{% endcode %}

**NOTE:** Replace the event name, and parameters with the ones you configured when creating the custom event.

### Example request

Let's say that you wanted to create a campaign/offer that requires a user to purchase a specific product (**"item\_123"**) from a store. First, you would create a custom event named `STORE_ORDER` with the following parameters: `itemId`, `orderAmount`, and `isPremiumUser`. Now, when creating a campaign/offer and adding requirements, you can select **"Custom Event"** and then select the `STORE_ORDER` custom event you created. In the custom event configuration, you will be shown the parameters you created for the event and be able to set the validation rules for each parameter. Since the original requirement was for a specific product purchase, you only need to set the **"exact match"** validation rule for the `itemId` parameter to match **"item\_123"**.



**Here is a full example of a custom event request of a store order**:

```typescript
// Create event payload
const payload = {
  // Current timestamp in milliseconds
  timestamp: 1731596206795,

  user: {
    // User's public key
    pubKey: "<PUB_KEY>",
  },

  // Event name
  event_name: "STORE_ORDER",

  // Event data
  event_data: {
    itemId: "item_123",
    orderAmount: 100,
    isPremiumUser: true,
  },
};

// Send request
await fetch("https://api.torque.so/events", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-torque-api-key": "<YOUR_API_KEY>",
  },
  body: JSON.stringify(payload),
});
```

Our system will validate the event data, and if it is valid, it will be accepted by the Torque API if the user accepted the offer and met the requirements.
