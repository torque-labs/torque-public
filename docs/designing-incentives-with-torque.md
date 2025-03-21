# Torque Building Blocks

Building on the basics of Torque, this section explains the advanced concepts of how actions and distributors work together as flexible building blocks. By understanding how to combine and structure these components, you can create sophisticated, customized incentive strategies tailored precisely to your goals.

### How to Think About Actions and Distributors

In Torque, **actions** are user behaviors you want to incentivize, and **distributors** manage how and when rewards are delivered. These components can be combined flexibly:

* **One-to-many:** A single action can trigger multiple distributors, each with distinct rewards or conditions.
* **Many-to-one:** Multiple actions can collectively contribute towards a single distributor that triggers rewards once overall conditions are met.
* **Many-to-many:** Multiple actions can contribute to multiple distributors which trigger multiple rewards once the conditions are met.

Understanding this flexibility is key to unlocking advanced and highly effective incentive structures.

### Use Cases and Examples

#### Scenario 1: Single Action, Multiple Distributors

**Use Case: Early Adoption & Long-term Engagement**

* **Action:** Stake tokens.
* **Distributors:**
  * Immediate reward distributor: Users earn instant tokens for staking.
  * Bonding curve distributor: Early stakers earn higher rewards, later stakers progressively fewer rewards.
  * Raffle distributor: Every staker earns a raffle entry for special NFTs.
* **Why This Works:** Encourages immediate action, sustained participation, and adds excitement through raffles.

#### Scenario 2: Multiple Actions, Single Distributor

**Use Case: Community Milestone Achievement**

* **Actions:** Token purchases, liquidity deposits, and social media engagement.
* **Distributor:** Token distribution triggered once a community goal (e.g., total actions or specific milestone) is reached.
* **Why This Works:** Aligns diverse community activities towards achieving a shared growth target.

#### Scenario 3: Complex Combinations

**Use Case: Multi-layered Engagement Campaign**

* **Actions:** Purchase tokens, stake tokens, engage in governance votes.
* **Distributors:**
  * Immediate token rewards for each action individually.
  * Tiered distributor rewarding cumulative actions, incentivizing deeper engagement.
  * Special rewards distributor activated only after specific community milestones are met.
* **Why This Works:** Creates sustained, layered incentives driving comprehensive, long-term user engagement.

### Best Practices for Combining Actions and Distributors

* Clearly define **goals first**, then design your action and distributor structures to directly support those goals.
* Use multiple distributors strategically to keep user incentives fresh and engaging.
* Monitor analytics closely, and be prepared to adjust and optimize your configurations for maximum effectiveness.

By strategically leveraging Torque’s flexible action-distributor model, you can craft highly targeted, dynamic incentive programs that grow and evolve with your community.
