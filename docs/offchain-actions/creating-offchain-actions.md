# Creating Off-chain Actions

<div data-full-width="false"><figure><img src="../.gitbook/assets/Screenshot 2025-03-27 at 2.57.46 PM.png" alt=""><figcaption><p>Custom Events in Project Settings</p></figcaption></figure></div>

### Creating a custom off-chain action

Once you have an API key, you are able to create off-chain actions from the **"Settings"** page from your project's dashboard. To create an off-chain action, select the **"Custom Events"** tab and then click the **"Create Event"** button. This will open a form where you can enter the name of your custom event (this will be used to identify your custom events in the Torque platform), and the parameters that you want to include in your event.&#x20;

For example, if you want to reward a user on the amount of time they have played a specific video game, you can create a `GAME_PLAYED`  custom event action that has two properties: `gameId (string)`  and `hoursPlayed (number)` .

<figure><img src="../.gitbook/assets/Screenshot 2025-03-27 at 2.50.54 PM.png" alt=""><figcaption><p>Create Event Form</p></figcaption></figure>

<figure><img src="../.gitbook/assets/Screenshot 2025-03-27 at 3.15.03 PM.png" alt=""><figcaption><p>Custom Events with the new event added</p></figcaption></figure>

**NOTE:** It is important to note that that a custom event can be used across multiple offers/incentives, with different validation rules for each one. With our example above, during offer creation, you can create a requirement for minimum hours played of a specific video game by setting an exact match requirement on the game ID and a minimum value for the hours played.

### Using an off-chain action for an incentive requirement

After adding a custom action to your project, the new action will appear under **"Custom Events"** when you are creating a new campaign.&#x20;

<figure><img src="../.gitbook/assets/Screenshot 2025-03-27 at 3.21.20 PM.png" alt=""><figcaption><p>Adding a custom action as a requirement</p></figcaption></figure>

Adding a custom action as a requirement for your campaign will display a configuration form based on the fields that you defined when you created the action.

<figure><img src="../.gitbook/assets/Screenshot 2025-03-27 at 2.52.45 PM.png" alt=""><figcaption><p>Custom action requirement configuration </p></figcaption></figure>

Once you have configured your campaign, you can send custom events to the Torque API so that user's who have accepted the campaign are able to be rewarded if they met the requirements within your own application or platform.
