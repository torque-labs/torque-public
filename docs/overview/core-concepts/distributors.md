# Distributors

The onchain program which stores and rewards users. The distributor has been designed for maximum flexibility based on a variety of use cases. Distributors are broken down based on the following criteria:

**Predefined -** simple 1:1 distribution, where logic is defined ahead of time from the audience and incentive. Requires a _predfinedAllocation_ audience.

**Real-Time -** Flexible distribution functions which enable you to allocate rewards to a user based on how quickly they complete the incentive or a data point from the user’s action.

The following functions are available:

<table><thead><tr><th width="122.64453125">Type</th><th>Definition</th><th>Usecase</th></tr></thead><tbody><tr><td><strong>Linear</strong></td><td>Rewards scale proportionally with performance.</td><td>Percentage bonus, ie you want to provide a user a 10% increase for a specific action (deposit and get 10% after 30 days).</td></tr><tr><td><strong>Exponential</strong></td><td>Token distribution scales exponentially.</td><td>Create momentum with a first come first serve type of experience, eg (buy and hold and receive more because you’re first)</td></tr><tr><td><strong>Step</strong></td><td>Tokens are distributed based on set tiers</td><td>Useful for loyalty programs. Push users to Gold, Silver, Bronze levels based on trading volume.</td></tr><tr><td><strong>Constant</strong></td><td>A fixed amount of tokens are distributed every time</td><td>Give a bonus to all your holders, reward new users.</td></tr><tr><td><strong>Streaming</strong></td><td>A fixed amount of tokens streamed at a specific time period with a defined end date</td><td>DeFi, provide additional streams to your users for continuous actions (buy and hold), deposit LP, etc.</td></tr></tbody></table>

### Distribution Methods

When incentives are distributed they go through either a **claim** or an **airdrop**.

### Claim&#x20;

After winning a leaderboard, rebate, raffle, or completing an offer—users visit your claim surface (via an embedded widget) to collect rewards.

Benefits:

* Drives **retention** via return visits and habit loops.
* Reduces waste from abandoned/invalid addresses.
* Enables on‑page cross‑sell moments when users claim.

Key settings:

* **Claim Window:** e.g., 14 days from epoch end.
* **Frequency:** Immediate, per‑epoch, or batched.
* **Eligibility Re‑check:** Validate on claim to prevent edge‑case abuse.

### Airdrop

Send assets directly to wallets.

* Originator is responsible for ATA fees and gas.
