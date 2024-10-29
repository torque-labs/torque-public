import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import type { Transaction } from "@solana/web3.js";
import { VersionedTransaction } from "@solana/web3.js";
import bs58 from "bs58";
import { useCallback, useState } from "react";

import { useTorque } from "#/hooks";
import { base64ToUint8Array } from "#/lib";

export type OfferActionOnSuccess = (data: {
  message: string;
  signature?: string;
}) => void;

export type OfferActionOnError = (data: { message: string }) => void;

interface HandleActionProps {
  campaignId: string;
  index: number;
  data?: Record<string, string>;
  onSuccess: OfferActionOnSuccess;
  onError: OfferActionOnError;
}

export function useAction() {
  const { sendTransaction, signMessage, publicKey } = useWallet();
  const { userClient } = useTorque();
  const { connection } = useConnection();
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Send and confirm transaction
   */
  const sendActionTransaction = useCallback(
    async (encodedTransaction: string) => {
      if (publicKey) {
        try {
          const transaction = VersionedTransaction.deserialize(
            base64ToUint8Array(encodedTransaction)
          ) as unknown as Transaction;

          console.log("Sending transaction", transaction);

          const {
            context: { slot: minContextSlot },
            value: { blockhash, lastValidBlockHeight },
          } = await connection.getLatestBlockhashAndContext();

          transaction.recentBlockhash = blockhash;
          transaction.feePayer = publicKey;

          const signature = await sendTransaction(transaction, connection, {
            minContextSlot,
          });

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
    [connection, publicKey, sendTransaction]
  );

  /**
   * Sign a message and send to the callback endpoint
   */
  const sendActionSignature = useCallback(
    async (campaignId: string, index: number, message: string) => {
      if (signMessage && publicKey && userClient) {
        try {
          console.log("Signing message", message);

          const signedMessage = await signMessage(Buffer.from(message, "utf8"));
          const encodedMessage = bs58.encode(signedMessage);

          const result = await userClient.confirmActionSignature(
            campaignId,
            index,
            encodedMessage
          );

          return result;
        } catch (error) {
          console.error(error);

          throw new Error("Failed to sign and confirm the data.");
        }
      }
    },
    [publicKey, signMessage, userClient]
  );

  /**
   * Handle offer action
   */
  const handleBountyStepAction = useCallback(
    async ({
      campaignId,
      data,
      index,
      onSuccess,
      onError,
    }: HandleActionProps) => {
      // Only attempt action if wallet is connected
      if (publicKey && userClient) {
        try {
          setIsLoading(true);

          const solanaAction = await userClient.getBountyStepAction(
            campaignId,
            index,
            data
          );

          // Handle generic click
          if (solanaAction.type === "external-link") {
            // Can redirect to external link
          } else if (solanaAction.type === "message") {
            await sendActionSignature(
              campaignId,
              index,
              solanaAction.data as string
            );

            onSuccess({
              message: "Your signature has been verified.",
            });
            // Sign message and send to actions callback endpoint
          } else if (solanaAction.type === "transaction") {
            // Sign transaction and send to actions callback endpoint
            const signature = await sendActionTransaction(
              solanaAction.transaction
            );

            onSuccess({
              message: "Your transaction has been confirmed.",
              signature,
            });
          }
        } catch (error) {
          onError({
            message: "There was an error processing your transaction.",
          });
        } finally {
          setIsLoading(false);
        }
      } else {
        onError({ message: "Wallet is not connected." });

        setIsLoading(false);
      }
    },
    [publicKey, sendActionSignature, sendActionTransaction, userClient]
  );

  return { isLoading, handleBountyStepAction };
}
