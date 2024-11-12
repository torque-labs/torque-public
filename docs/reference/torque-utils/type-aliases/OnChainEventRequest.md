[**@torque-labs/torque-utils**](../README.md) • **Docs**

***

[@torque-labs/torque-utils](../README.md) / OnChainEventRequest

# Type Alias: OnChainEventRequest

```ts
type OnChainEventRequest: 
  | {
  campaignId: string;
  eventType: CLICK;
  publisherHandle: string;
 }
  | {
  eventType: SWAP;
  inAmount: number;
  inToken: string;
  outAmount: number;
  outToken: string;
 }
  | {
  buyer: string;
  collectionAddress: string;
  eventType: NFT_COLLECTION_TRADE;
  mint: string;
  price: number;
  seller: string;
 }
  | {
  eventType: MEMO;
  message: string;
 }
  | {
  amount: number;
  eventType: TENSOR_BID;
  owner: string;
  whitelist: string;
 }
  | {
  amount: number;
  bidder: string;
  eventType: NFT_BUY_BID;
  nftMint: string;
 }
  | {
  customProgramId: string;
  daoPubKey: string;
  eventType: REALMS_VOTE;
  proposalPubKey: string;
 }
  | {
  amount: number;
  bankAddress: string;
  eventType: MARGINFI_LEND;
 }
  | {
  amount: number;
  eventType: KAMINO_LEND;
  tokenAddress: string;
 }
  | {
  better: string;
  depositAmount: number;
  eventType: DRIFT_BET;
  marketIndex: number;
  shares: number;
 }
  | {
  amount: number;
  eventType: STAKE_SOL;
  stakeAccount: string;
  stakeAuthority: string;
  validator: string;
};
```

On-chain event request type

## Defined in

[types/events.ts:92](https://github.com/torque-labs/torque-utils/blob/3bd29ca22f900f1cf2686f7f240bf82e15337207/types/events.ts#L92)
