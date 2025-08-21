# Core Concepts

### **Torque Supports Two Types of Incentives:**

* **Precision Incentives:** Highly configurable, highly accurate, merit based reward allocation. These are **Leaderboards, Rebates, Raffles, and Airdrops.** Anyone who meets the criteria participates automatically; ranking updates based on the incentive settings.
* **Real-Time Incentives:** Discrete, conditional rewards. A user performs a specific action and immediately becomes eligible for a defined payout provided the conditions are met, eg (Deposit X LP Value and get 10% bonus OR LP balance > $X)

### Torque is built around three protocol components:

1. [**Audience**](audiences.md) — The set of users eligible for an Incentive, defined by metrics, filters, and lookbacks. Built from on‑chain data in real time. Can be an **allowlist**, **denylist** or **predefined allocation**.
2. [**Incentive**](incentives.md) — The system that ranks participants and allocates rewards (Leaderboard, Rebate, Raffle, Direct Reward, or Real‑Time Offer).
3. [**Distributor**](distributors.md) — The onchain program which stores and distributes the rewards via a Claim (default) or Airdrop. Optional off‑chain rewards via webhook.

### Campaign Lifecycle

1. Define the Incentive (type, success metric, frequency).
2. Build the Audience (metric, filters, lookback, sizing)..
3. Distribute Rewards (claim or airdrop).&#x20;
4. Measure and iterate (through Torque’s Platform).

