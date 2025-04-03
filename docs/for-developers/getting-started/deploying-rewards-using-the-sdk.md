---
description: >-
  This page provides an example of setting up and deploying the incentives for
  an offer.
---

# Deploying rewards using the SDK

This guide walks through the complete process of launching an offer with a constant reward. \
A new offer consist of 3 main steps:

1. Creating the offer with the requirements and metadata
2. Adding a distributor to the offer with the rewards
3. Deploying the distributor to activate the offer and allow users to start claiming the rewards

## Prerequisites

Before you begin, make sure you have:

* Access to a Solana wallet with private key
* An RPC URL for Solana network connections
* The Torque SDK installed in your project

## Setting Up the SDK Connection

First, initialize the SDK with your private key and RPC URL. Then call the authenticate function to authorize your SDK instance.

```typescript
const signer = Keypair.fromSecretKey(<WALLET PRIVATE KEY>);

const sdk = new TorqueSDK({
    apiUrl: "https://server.torque.so",
    rpcUrl: "<RPC URL>",
});

const token = await sdk.authenticate(signer);
```

In this setup:

* `<WALLET PRIVATE KEY>`: Your Solana wallet's private key
* `<RPC URL>`: Your Solana RPC endpoint URL
* `signer`: Your Keypair for authenticating with Torque

## Creating an Offer

An offer defines the conditions users must meet to receive rewards.\
The example below creates an offer with a `BUY` requirement, which requires users to purchase a specific token. In this step, you also define the metadata and the time frame for the offer.

```typescript
const offer = await sdk.offers.createOffer({
    startTime: new Date(),
    endTime: new Date(new Date().setMonth(new Date().getMonth() + 1)),
    metadata: {
        title: "<REQUIRED TITLE>",
        image: "<REQUIRED IMAGE URL>",
        description: "<DESCRIPTION HERE>"
    },    
    requirements: [
        {
            type: "BUY",
            config: {
            tokenAddress: {
                type: "string",
                validation: "exactMatch",
                value: "<REQUIRED TOKEN ADDRESS>",
            },
            amount: {
                type: "number",
                min: "<REQUIRED MINIMUM AMOUNT>",
            },
            },
            oracle: "SOLANA_TX",
        },
    ],
});
```

### Key Components:

1. **Requirements**: Conditions users must meet to qualify
   * `type: "BUY"`: Requires users to purchase a specific token
   * `tokenAddress`: The Solana address of the required token
   * `amount`: Minimum token amount users must purchase
   * `oracle: "SOLANA_TX"`: Uses Solana transactions to verify requirements
2. **Time Frame**:
   * `startTime`: When the offer becomes active (set to now in this example)
   * `endTime`: When the offer expires (set to one month from now)
3. **Metadata**:
   * `title`: Display title for your offer
   * `image`: URL to an image representing your offer
   * `description` : Description of your offer

After successful creation, `offerResult` will contain the offer's unique ID and other details you'll need for subsequent steps.

## Adding a Distributor

Distributors determine how rewards are allocated to users. The following example creates a distributor with a constant reward of 0.01 SOL for each user that meets the offer requirements. The total amount is the amount of SOL that will be allocated for the offer.

```typescript
const distributor = await sdk.offers.addDistributo(offer.id, {
    {
        type: "CONVERSION",
        crankGuard: {
            recipient: "USER",
            activation: {
                type: "OFFER_START",
            },
            distributionFunctionInput: {
                type: "CONVERSION_INDEX",
            },
        },
        distributionFunction: {
            type: "CONSTANT",
            yIntercept: 0.01,
        },
        emissionType: "SOL",
        totalFundAmount: 1,
    }
})
```

### Distributor Configuration Explained:

1. **Type**: `"CONVERSION"` - Rewards users when they complete the requirement
2. **Crank Guard**:
   * `recipient: "USER"`: Rewards go directly to users
   * `activation: { type: "OFFER_START" }`: Begins distribution when offer starts
   * `distributionFunctionInput: { type: "CONVERSION_INDEX" }`: Uses conversion order index to determine reward amount. Since this is a constant reward, every user will receive the same amount. In case of a dynamic reward, the index would be used to calculate the reward amount for each user.
3. **Distribution Function**:
   * `type: "CONSTANT"`: Uses a constant reward amount
   * `yIntercept: 0.01`: Sets the reward at 0.01 units
4. **Reward Details**:
   * `emissionType: "SOL"`: Rewards are in SOL
   * `totalFundAmount: 1`: Total of 1 SOL allocated for rewards

This configuration creates a distributor that rewards users with 0.01 SOL each time they meet the offer requirements, up to a total of 1 SOL across all users. In this example, there will be a total of 100 users that will be able to receive the reward _(1 SOL / 0.01 SOL = 100)_

## Deploying the Distributor

To activate a distributor, it first needs to be deployed. This createst an escrow account with the total funding amount to distribute rewards according to your specifications.

```typescript
const deploy = await torque.offers.deployDistributor(offer.id, distributor.id)
```

## Viewing Your Offer

Once deployed, users can view your offer at:

```
https://platform.torque.so/offer/{{offerId}}
```

Replace `{{offerId}}` with the offer ID received from `offer.id`.

## Best Practices

* **Test First**: Consider testing with small reward amounts
* **Monitor**: Keep an eye on your offer's performance through the Torque dashboard
* **Fund Adequately**: Ensure your wallet has sufficient funds for the total reward amount
* **Set Clear Conditions**: Make offer requirements clear to users
