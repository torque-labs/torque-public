# Example DEX Campaign

## Show me an example!

**What it does:** A two‑part example campaign that (1) gets more liquidity on day one and (2) keeps traders active every week—using **Real‑Time** and **Precision** incentives together.

***

### Example DEX Campaign (2 Incentives in 10 minutes)

#### Incentive 1 — **Instant LP Boost** (Real‑Time)

**Goal:** Increase LP Deposits.

* **Action:** User **deposits Min LP**
* **Type:** **Real‑Time**
* **Distributor:** **Linear** 10% bonus on the qualifying deposit, **streamed over 30 days**, delivered via **Claim** (14‑day claim window; re‑check eligibility at claim).
* **Why it works:** Users see immediate value but must stick around to earn the full stream.

**Suggested filters (simple):**\
Caps per wallet, total campaign cap, anti‑wash on.

***

#### Incentive 2 — **Weekly Top Traders** (Precision)

**Goal:** Drive trader volume.

* **Action:** User **trades** (e.g., meets a 7‑day volume threshold across ≥3 token pairs).
* **Incentive:** **Precision → Leaderboard** (rank by weekly qualified volume).
* **Distributor:** **Step** tiers for Top‑1/5/10/50, paid via **Claim** at the end of each week.
* **Why it works:** Clear, recurring competition with predictable rewards.

**Optional add‑on (1 line):** A **0.5% fee rebate** for first‑time traders (with caps) to smooth the first week. (Precision → **Rebate**, **PreDefined Allocation** , daily claim.)

***

### Quick setup checklist

1. **Audiences**
   * New LP Depositors (first deposit in 7d, min size, anti‑wash on).
   * Active Traders (7d volume ≥ threshold, markets ≥ 3, approved venues).
2. **Incentives**
   * Real‑Time for LP deposits (instant eligibility).
   * Precision Leaderboard for weekly trading.
   * Precision Rebate for 1st week reward.
3. **Distributors**
   * LP Boost: **Linear** bonus, **Streaming**, **Claim** (14‑day window, eligibility re‑check).
   * Leaderboard: **PreDefined Allocation** , **Claim** weekly.
     * Rebate: **PreDefined Allocation**, **Claim** daily.
4. **Safety rails**
   * Caps (per wallet + total), denylist, anti‑wash filters on. 【23†Torque: Solana’s Incentive Protocol】
5. **Measure**
   * LP added, weekly active traders, claim rate, cost per engaged wallet. Optimize thresholds/tiers weekly.

***

### How this helps you?

Stay focused on building your product so you don't need to build indexing, ranking, claim surfaces, reward measurement, analytics, and targeting. You ship the strategy, not the plumbing.&#x20;

***

#### Want to expand later?

Add a **Participation Raffle** for any qualified action (keeps the long‑tail engaged) or a **Community Milestone** payout (many actions → one celebration). These are one‑click additions once the two core incentives are running.
