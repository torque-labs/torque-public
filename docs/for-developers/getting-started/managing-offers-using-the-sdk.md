---
description: >-
  This page provides a few examples of how to manage offers using the Torque
  SDK.
---

# Managing Offers using the SDK

### Initialize the SDK

In order to manage offers, you must create an instance of the `TorqueSDK` . If you want to serve offers using the SDK and be attributed for conversions, you must add your publisher handle. If you do not have one, navigate to [app.torque.so](https://app.torque.so/account) to create a publisher account.

```typescript
const signer = Keypair.fromSecretKey(new Uint8Array(JSON.parse(process.env.ADMIN_KEY as string)));
const sdk = new TorqueSDK({
    network: 'mainnet-beta',
    publisherHandle: "<your-publisher-handle>", // optional
});
await sdk.initialize(signer);
```

### Prepare the conversion event(s) for the offer

Each offer has one or more conversion events. The list of supported conversion events can be found here **TODO**.&#x20;

In the following code snippet we will prepare two conversion events: `SWAP` and `NFT_COLLECTON_TRADE`. If an offer has more than one conversion event, the user must complete ALL conversion events in order to complete the offer.&#x20;

```typescript
const buy1MilBonk = {
    type: EventType.SWAP,
    requirement: {
        outAmount: 1000000,
        outToken: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
    }
};
const buyGen2SMB = {
    type: EventType.NFT_COLLECTION_TRADE,
    requirement: {
        tradeType: NftCollectionTradeType.BUY,
        collectionAddress: "SMBtHCCC6RYRutFEPb4gZqeBLUZbMNhRKaMKZZLHi7W",
    }
};
```

### Prepare the rewards for the offer

Each offer can have all or none of the following reward types: publisher, user, asymmetric, loot box.&#x20;

**IMPORTANT:** When adding any reward to an offer, remember to multiply the desired amount by 10 raised to the power of the token's number of decimals (10^decimals).

In this offer, we will be adding 3 asymmetric rewards: 1M $BONK, 3M $BONK, 5M $BONK.&#x20;

```typescript
const oneMilBonk = {
    participants: RaffleParticipants.USER,
    tokenAddress: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
    amount: 1000000 * (10 ** 5) // where 5 is the number of decimals for BONK
}
const threeMilBonk = {
    participants: RaffleParticipants.USER,
    tokenAddress: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
    amount: 3000000 * (10 ** 5) // where 5 is the number of decimals for BONK
}
const fiveMilBonk = {
    participants: RaffleParticipants.USER,
    tokenAddress: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
    amount: 5000000 * (10 ** 5) // where 5 is the number of decimals for BONK
}
```

You can also add Loot Boxes to your offer so that when a user converts they can open a loot box containing a variable amount of tokens. In this example, we set up a 10 loot boxes: 6 contain 1K, 3 containing 3K, 1 containing 5K. All loot boxes must hold the same token.

```typescript
const lootBoxRewards: LootBoxRewardInput = {
    tokenAddress: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
    // 10 total boxs, 6 of 100, 3 of 300, 1 of 500
    rewards: [
        {
            amount: 100 * 10 ** 5, // where 5 is the number of decimals for BONK
            users: 6,
        },
        {
            amount: 300 * 10 ** 5, // where 5 is the number of decimals for BONK
            users: 3,
        },
        {
            amount: 500 * 10 ** 5, // where 5 is the number of decimals for BONK
            users: 1,
        },
    ],
    enabled: true,
};
```



### Creating the Offer

Now that we have prepared what users must do to complete the offer and what the rewards of the offer are, we can create add the additional parameters to create the offer.&#x20;

```typescript
const result = await sdk.api.createCampaign({
    campaignName: "Buy Bonk + SMB, Win Bonk?",
    campaignType: "BOUNTY",
    campaignDescription: "Buy 1M bonk to enter to win more millions of Bonk.",
    landingPage: "https://torque.so",
    conversionCount: 10, // totoal number of conversions available 
    startTime: new Date().getTime(), // start offer now
    endTime: new Date().getTime() + 1000 * 60 * 60 * 24 * 7, // end offer in a week
    eventConfig: [buy1MilBonk, buyGen2SMB],
    asymmetricRewards: [oneMilBonk, threeMilBonk, fiveMilBonk],
    lootBoxRewards
});
```

Boom! Just like that you created your first offer! If you want to end the offer you can easily do this in either our console or via the api.&#x20;

### Closing the Offer

With the offer created, we can now close it using the offer unique identifier.&#x20;

```typescript
const result = await sdk.api.endCampaign({
     campaignId: "<offer-id>",
});
```





