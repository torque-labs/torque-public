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
  /**
   * The ID of the offer/campaign to fetch the action for
   */
  campaignId: string;

  /**
   * The index of the action to fetch within the offer
   */
  index: number;

  /**
   * The data to send with the action
   */
  data?: Record<string, string>;

  /**
   * The callback to call on successful action
   */
  onSuccess: OfferActionOnSuccess;

  /**
   * The callback to call on error
   */
  onError: OfferActionOnError;
}

/**
 * Utility hook to handle Torque Solana actions returned from the Torque API.
 * The actions are Solana actions that allow the user to complete a requirement for an offer.
 * The hook will automatically prompt the user's wallet for their signature.
 *
 * @returns The handleBountyStepAction function for handling the actions returned by the API.
 */
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
          console.log(
            "Sending encoded transaction",
            base64ToUint8Array(encodedTransaction),
          );

          const transaction = VersionedTransaction.deserialize(
            base64ToUint8Array(encodedTransaction),
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
    [connection, publicKey, sendTransaction],
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
            encodedMessage,
          );

          return result;
        } catch (error) {
          console.error(error);

          throw new Error("Failed to sign and confirm the data.");
        }
      }
    },
    [publicKey, signMessage, userClient],
  );

  /**
   * Fetch and handle the offer action
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
            data,
          );

          console.log(solanaAction);

          // Handle generic click
          if (solanaAction.type === "external-link") {
            // Can redirect to external link
          } else if (solanaAction.type === "message") {
            await sendActionSignature(
              campaignId,
              index,
              solanaAction.data as string,
            );

            onSuccess({
              message: "Your signature has been verified.",
            });
            // Sign message and send to actions callback endpoint
          } else if (solanaAction.type === "transaction") {
            // Sign transaction and send to actions callback endpoint
            const signature = await sendActionTransaction(
              solanaAction.transaction,
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
        onError({
          message: "Wallet is not connected or user is not logged in.",
        });

        setIsLoading(false);
      }
    },
    [publicKey, sendActionSignature, sendActionTransaction, userClient],
  );

  return { isLoading, handleBountyStepAction };
}
