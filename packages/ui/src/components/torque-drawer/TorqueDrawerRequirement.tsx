import type { ActionGetResponse } from "@solana/actions";
import type { TransactionResponse } from "@solana/actions-spec";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { VersionedTransaction } from "@solana/web3.js";
import type { Transaction } from "@solana/web3.js";
import { TorqueAdminClient } from "@torque-labs/torque-ts-sdk";
import type {
  ApiRequirement,
  SafeToken,
  ApiProgressStatus,
} from "@torque-labs/torque-ts-sdk";
import { EventType } from "@torque-labs/torque-utils";
import { useCallback, useEffect, useState } from "react";

interface TokenDetails {
  name: string;
  logo: string;
  decimals: number;
  symbol: string;
}

function getTokenDetails(
  token: string,
  tokens: SafeToken[]
): TokenDetails | undefined {
  if (token === "11111111111111111111111111111111") {
    const specialToken = tokens.find(
      (t) => t.address === "So11111111111111111111111111111111111111112"
    );
    if (specialToken) {
      return {
        name: "SOL",
        logo: specialToken.logoURI,
        decimals: 9,
        symbol: "SOL",
      };
    }
    return {
      name: "SOL",
      logo: "",
      decimals: 9,
      symbol: "SOL",
    };
  } else if (token === "CAvc2Mr9WcH6HiYQeLYcXG3H9G2rg1sV2EEksMd6gyGS") {
    return {
      name: "Clicky",
      logo: "https://torque-assets.s3.us-east-1.amazonaws.com/clicky.png",
      decimals: 0,
      symbol: "CLICKY",
    };
  }

  const tokenData = tokens.find((t: SafeToken) => t.address === token);

  if (tokenData) {
    return {
      name: tokenData.name,
      logo: tokenData.logoURI,
      decimals: tokenData.decimals,
      symbol: tokenData.symbol,
    };
  }
}

function base64ToUint8Array(base64: string) {
  const binaryString = Buffer.from(base64, "base64").toString("binary");
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

export function TorqueDrawerRequirement({
  requirement,
  step,
  campaignId,
  index,
  isStarted,
}: {
  requirement: ApiRequirement;
  step?: {
    id?: string;
    bountyStepId: string;
    userJourneyId: string;
    status: ApiProgressStatus;
    transaction?: string;
  };
  isStarted: boolean;
  campaignId: string;
  index: number;
}) {
  const { wallet, publicKey } = useWallet();
  const { connection } = useConnection();

  const [_inTokenDetails, setInTokenDetails] = useState<TokenDetails>();
  const [_outTokenDetails, setOutTokenDetails] = useState<TokenDetails>();
  const [title, setTitle] = useState<string>();

  /**
   * Send and confirm transaction
   */
  const sendActionTransaction = useCallback(
    async (encodedTransaction: string) => {
      if (wallet && publicKey) {
        try {
          const transaction = VersionedTransaction.deserialize(
            base64ToUint8Array(encodedTransaction)
          ) as unknown as Transaction;

          const {
            context: { slot: minContextSlot },
            value: { blockhash, lastValidBlockHeight },
          } = await connection.getLatestBlockhashAndContext();

          transaction.recentBlockhash = blockhash;
          transaction.feePayer = publicKey;

          const signature = await wallet.adapter.sendTransaction(
            transaction,
            connection,
            {
              minContextSlot,
            }
          );

          await connection.confirmTransaction({
            blockhash,
            lastValidBlockHeight,
            signature,
          });

          return signature;
        } catch (error) {
          console.error(error);

          throw new Error("Failed to send transaction.");
        }
      }
    },
    [connection, publicKey, wallet]
  );

  const executeAction = useCallback(
    async (actionTransaction: TransactionResponse) => {
      const signature = await sendActionTransaction(
        actionTransaction.transaction
      );

      if (signature) {
        setTimeout(async () => {
          // await refreshCampaigns();
        }, 5000);
      }

      return signature;
    },
    [sendActionTransaction]
  );

  const getSwapTransaction = useCallback(async () => {
    if (publicKey) {
      const postUrl = `https://api.coolify.torque.so/actions/swap/${campaignId}?index=${index}`;

      const response = await fetch(postUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({
          account: publicKey.toString(),
        }),
      });

      if (response.ok) {
        const result = (await response.json()) as TransactionResponse;

        return result;
      }
    } else {
      console.error("No wallet detected");
    }
  }, [campaignId, index, publicKey]);

  useEffect(() => {
    async function getTokenData() {
      if (
        ("inToken" in requirement.eventConfig &&
          requirement.eventConfig.inToken) ||
        ("outToken" in requirement.eventConfig &&
          requirement.eventConfig.outToken) ||
        ("tokenAddress" in requirement.eventConfig &&
          requirement.eventConfig.tokenAddress)
      ) {
        const fetchedTokens = await TorqueAdminClient.getSafeTokenList();

        if (
          "inToken" in requirement.eventConfig &&
          requirement.eventConfig.inToken
        ) {
          const tokenInDetails = getTokenDetails(
            requirement.eventConfig.inToken,
            fetchedTokens
          );

          setInTokenDetails(tokenInDetails);
        }

        if (
          "outToken" in requirement.eventConfig &&
          requirement.eventConfig.outToken
        ) {
          const tokenOutDetails = getTokenDetails(
            requirement.eventConfig.outToken,
            fetchedTokens
          );

          setOutTokenDetails(tokenOutDetails);
        }

        if (
          "tokenAddress" in requirement.eventConfig &&
          requirement.eventConfig.tokenAddress
        ) {
          const tokenInDetails = getTokenDetails(
            requirement.eventConfig.tokenAddress,
            fetchedTokens
          );

          setInTokenDetails(tokenInDetails);
        }
      }
    }

    async function getNftData() {
      if (requirement.type === EventType.NFT_BUY_BID) {
        const nftRequest = await fetch(
          `https://tensor.dial.to/bid/${requirement.eventConfig.mint}`
        );

        const nftData =
          (await nftRequest.json()) as unknown as ActionGetResponse;

        setTitle(nftData.title);
      }
    }

    async function getRealmsData() {
      if (requirement.type === EventType.REALMS_VOTE) {
        const { daoPubKey, proposalPubKey } = requirement.eventConfig;

        const realmsRequest = await fetch(
          `https://realms.dial.to/vote/dao/${daoPubKey}/proposal/${proposalPubKey}`
        );

        const realmsData =
          (await realmsRequest.json()) as unknown as ActionGetResponse;

        setTitle(realmsData.title);
      }
    }

    void getTokenData();
    void getNftData();
    void getRealmsData();
  }, [requirement]);

  if (requirement.type === EventType.CLICK) {
    return <p>Visit a link</p>;
  }

  if (requirement.type === EventType.CUSTOM_EVENT) {
    return <p>Complete a custom event: {requirement.eventConfig.eventName}</p>;
  }

  if (requirement.type === EventType.DRIFT_BET) {
    return <p>Place a bet on Drift</p>;
  }

  if (requirement.type === EventType.DRIFT_DEPOSIT) {
    return <p>Deposit on Drift</p>;
  }

  if (requirement.type === EventType.KAMINO_LEND) {
    return <p>Lend on Kamino</p>;
  }

  if (requirement.type === EventType.MARGINFI_LEND) {
    return <p>Lend on MarginFi</p>;
  }

  if (requirement.type === EventType.MEMO) {
    return <p>Submit a form using a memo</p>;
  }

  if (requirement.type === EventType.NFT_BUY_BID) {
    return <p>Buy an NFT: {title}</p>;
  }

  if (requirement.type === EventType.NFT_COLLECTION_TRADE) {
    return <p>Buy or Sell NFT Collection</p>;
  }

  if (requirement.type === EventType.REALMS_VOTE) {
    return <p>Vote on Realms for: {title}</p>;
  }

  if (requirement.type === EventType.SWAP) {
    if (requirement.eventConfig.inToken && requirement.eventConfig.outToken) {
      return <p>Swap Token</p>;
    } else if (
      requirement.eventConfig.inToken &&
      !requirement.eventConfig.outToken
    ) {
      return (
        <>
          <p className="truncate w-full">
            Sell Token: {requirement.eventConfig.inToken}
          </p>

          {!step && isStarted ? (
            <div>
              <button
                className="btn btn-xs btn-primary"
                onClick={async () => {
                  const result = await getSwapTransaction();

                  if (result) {
                    await executeAction(result);
                  }
                }}
                type="button"
              >
                Execute
              </button>
            </div>
          ) : null}
        </>
      );
    } else if (
      !requirement.eventConfig.inToken &&
      requirement.eventConfig.outToken
    ) {
      return (
        <>
          <p className="truncate w-full">
            Buy Token: {requirement.eventConfig.outToken}
          </p>

          {!step && isStarted ? (
            <div>
              <button
                className="btn btn-xs btn-primary"
                onClick={async () => {
                  const result = await getSwapTransaction();

                  if (result) {
                    await executeAction(result);
                  }
                }}
                type="button"
              >
                Execute
              </button>
            </div>
          ) : null}
        </>
      );
    }
  }

  if (requirement.type === EventType.TENSOR_BID) {
    return <p>Bid on NFT collection</p>;
  }

  if (requirement.type === EventType.TENSOR_BUY) {
    return <p>Buy from NFT collection</p>;
  }
}
