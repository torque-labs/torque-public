# Audiences

An **Audience** is a group of targeted users. Audiences can be used for both filtering incentive participation and rewarding post-incentive completion.

Audiences are:

* **Metric‑driven:** Built from onchain data (e.g., buys, sells, deposits, listings, stakes) any onchain program can be easily added if we don’t support it.
* **Filterable:** Thresholds, venues/platforms, anti‑wash flags, asset lists, regions, etc.
* **Time‑scoped:** Lookback windows (e.g., 24h, 7d, 30d) with rolling updates.
* **Right‑sized:** You can estimate size before launch and tune for coverage vs. cost.

Audiences have three output types:

* **Allowlist** - list of wallets who can access
* **DenyList** - list of wallets who cannot access
* **Predefined Allocation** (Precision Incentives Only) - list of wallets and set of fixed amounts of rewards they can claim

#### **Audience Parameters**

Below is an example of how an audience can be defined. For Enterprise customers, your Torque associate will assist you with setup during onboarding.

| Field          | Description                                 | Use Case                                                         | Example                                                          |
| -------------- | ------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| **Name**       | Display name for the segment                | Matching client's internal terminology and campaign branding     | `Card Whales` → `VIP Traders`, `Loyal Holders` → `Diamond Hands` |
| **Definition** | Plain English description of who's included | Ensuring all stakeholders understand exactly who we're targeting | `Users who traded the most card volume in dollars`               |
| **Metric**     | The primary variable users are ranked on    | Determining which behavior matters most for this audience        | `volume_native`, `active_days`, `hold_days`                      |
| **Filters**    | Parameters which can easily be tweaked      | Excluding bots, wash traders, and low-value users                | `markets ≥ 3`, `volume ≥ $1000`, `active_days ≥ 10`              |
| **Lookback**   | The time frame for inclusion                | Balancing recent behavior vs. historical patterns                | `7d`, `30d`, `90d, 1h`                                           |
| **Sizing**     | How we determine the target count           | Ensuring campaigns get right number of recipients                | `~100 (Top 10%)`, `~500 (Top 20%)` ,`Top 250` (fixed), q80, q90  |



#### **Common Templates**

* **High‑Value Buyers:** `buy_volume` ≥ threshold, anti‑wash on, 24h/7d lookback.
* **Active Traders:** `trades_count` or `volume` ≥ threshold across approved venues.
* **Loyal Holders:** Holding duration ≥ X days, balance ≥ Y; exclude smart contracts.
* **New Depositors:** First deposit within lookback; min size ≥ threshold.
* **Stakers:** Stake balance ≥ threshold; optional duration bonus.
