# Sending a Custom Event

Sending a custom event is as simple as sending a `POST` request to the events endpoint of the Torque API. For an event to be accepted by the Torque API, you must first [create the custom event](creating-offchain-actions.md) and structure.&#x20;

**Custom event endpoint**: `https://server.torque.so/event/custom`

#### Request structure

{% code title="Request:" %}
```typescript
await fetch("https://server.torque.so/event/custom", {
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
  "timestamp": 1731596206795, // In ms or valid date string
  "userPubkey": "<PUB_KEY>", // User's pubkey
  "eventName": "<event_name>", // The name of the event as configured in Settings
  "data": { 
    "<string_param_name>": "<value>",
    "<number_param_name>": 0,
    "<boolean_param_name>": true || false,
  }
}
```
{% endcode %}

**NOTE:** Replace the event name, and parameters with the ones you configured when creating the custom event.

### Example request

Let's say that you wanted to create a campaign that requires a user to play a specific video game (**"game123"**) from a minimum of 10 hours. First, you would create a custom event named `GAME_PLAYED` with the following parameters: `gameId`, and `hoursPlayed` . Now, when creating a campaign and adding requirements, you can select your **"GAME\_PLAYED"** event. For our example, we would set the `gameId`  requirement to be and **"exact match"** with a value of **"game123"**, and set the minimum value for `hoursPlayed` to be **"10"**.&#x20;

&#x20;In the custom event configuration, you will be shown the parameters you created for the event and be able to set the validation rules for each parameter. Since the original requirement was for a specific product purchase, you only need to set the **"exact match"** validation rule for the `itemId` parameter to match **"item\_123"**.



**Here is a full example of a custom event request of the event**:

```typescript
// Create event payload
const payload = {
  // Current timestamp in milliseconds
  timestamp: 1731596206795,

  userPubkey: "<PUB_KEY>",

  // Event name
  eventName: "GAME_PLAYED",

  // Event data
  data: {
    itemId: "game123",
    hoursPlayed: 14,
  },
};

// Send request
await fetch("https://server.torque.so/event/custom", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-torque-api-key": "<YOUR_API_KEY>",
  },
  body: JSON.stringify(payload),
});
```

Our system will validate the event data, and will complete the action for the user if they have satisfied the requirement for any offer that you have created.&#x20;
