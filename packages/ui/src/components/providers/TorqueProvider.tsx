"use client";

import { useConnection, type Wallet } from "@solana/wallet-adapter-react";
import type { Transaction } from "@solana/web3.js";
import { VersionedTransaction } from "@solana/web3.js";
import type {
  ApiCampaign,
  ApiCampaignJourney,
  ApiInputLogin,
  ApiUser,
  ApiUserJourney,
  TorqueUserClient,
} from "@torque-labs/torque-ts-sdk";
import { TorqueSDK } from "@torque-labs/torque-ts-sdk";
import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import type { PropsWithChildren } from "react";

import { API_URL, APP_URL, FUNCTIONS_URL } from "#/constants";

import { base64ToUint8Array } from "#lib/conversion.ts";

/**
 * TorqueProviderProps
 *
 * Interface for the TorqueProvider component
 */
interface TorqueProviderProps extends PropsWithChildren {
  /**
   * Wallet from Solana wallet adapter to use for Torque
   */
  wallet?: Wallet | null;

  /**
   * Torque SDK options
   */
  options?: {
    apiUrl?: string;
    appUrl?: string;
    functionsUrl?: string;
    rpc?: string;
  };
}

/**
 * TorqueInitOptions
 *
 * Interface for initializing the user
 */
interface TorqueInitOptions {
  /**
   * (optional) SIWS or basic input and output payloads if user has already signed
   */
  loginInput?: ApiInputLogin;
}

/**
 * TorqueContextState
 */
type TorqueContextState = {
  /**
   * Torque SDK instance
   */
  torque?: TorqueSDK;

  /**
   * Loading state of the Torque SDK
   */
  isLoading: boolean;

  /**
   * User's public key if logged in
   */
  publicKey?: string;

  /**
   * User's wallet if logged in
   */
  wallet?: Wallet;

  /**
   * A list of the user's eligible offers
   */
  offers: ApiCampaign[];

  /**
   * A list of the user's journeys
   */
  journeys: ApiCampaignJourney[];

  /**
   * Claim an offer
   *
   * @param offerId - The ID of the offer to start/claim
   *
   * @returns The user's journey for the offer
   */
  claimOffer: (offerId: string) => Promise<ApiUserJourney | undefined>;

  /**
   * Get the Solana transaction for the bounty step requirement for a given offer
   *
   * @param offerId - The ID of the offer to get the transaction for
   * @param index  - The index of the bounty step requirement to get the transaction for
   *
   * @returns - The transaction for the bounty step requirement
   */
  getRequirementTransaction: (
    offerId: string,
    index?: number
  ) => Promise<string | undefined>;

  /**
   * Execute the given transaction and call the onComplete callback with the transaction signature
   *
   * @param props - The offer ID, action index, and onComplete callback
   */
  executeOfferStep: ({
    offerId,
    actionIndex,
    onComplete,
  }: {
    offerId: string;
    actionIndex: number;
    onComplete: (signature: string) => void;
  }) => Promise<void>;

  /**
   * Initialize the user and Torque SDK
   *
   * @param options - The options for initializing the user
   */
  initialize: (options?: TorqueInitOptions) => Promise<void>;

  /**
   * Logout the user and clear the Torque SDK instance
   */
  logout: () => Promise<void>;
} & (
  | {
      user: ApiUser;
      initialized: true;
    }
  | {
      user: undefined;
      initialized: false;
    }
);

const TorqueContext = createContext<TorqueContextState | undefined>(undefined);

/**
 * TorqueProvider component
 *
 * This component serves as a context provider for the Torque SDK functionality.
 * It manages the state of the Torque SDK, user authentication, and offer-related operations.
 *
 * @returns JSX.Element - The rendered TorqueProvider component.
 *
 * @remarks
 * Key features:
 * - Initializes and manages the Torque SDK instance.
 * - Handles user authentication (login and logout).
 * - Manages user offers and journeys.
 * - Provides methods for claiming offers and getting requirement transactions.
 *
 * The component uses React's useState and useCallback hooks for state management
 * and memoized function creation. It exposes its functionality through the TorqueContext.
 */
export function TorqueProvider({
  children,
  options,
  wallet,
}: TorqueProviderProps) {
  const { connection } = useConnection();

  // SDK state
  const [torque, setTorque] = useState<TorqueSDK>();
  const [torqueUserClient, setTorqueUserClient] = useState<TorqueUserClient>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // User state
  const [user, setUser] = useState<ApiUser>();

  // Data state
  const [userOffers, setUserOffers] = useState<ApiCampaign[]>([]);
  const [userJourneys, setUserJourneys] = useState<ApiCampaignJourney[]>([]);

  /**
   * Logout the user and clear the torque instance.
   */
  const logout = useCallback(async () => {
    setIsLoading(true);

    await torque?.logout();

    setUser(undefined);
    setIsLoading(false);
  }, [torque]);

  /**
   * Offer functions
   */

  const refreshOffers = useCallback(async () => {
    try {
      if (torqueUserClient) {
        const result = await torqueUserClient.getOffers();

        const campaigns = result.campaigns;

        const allJourneys = (
          await Promise.all(
            campaigns.map(async (campaign) => {
              const journey = await torqueUserClient.getCampaignJourney(
                campaign.id
              );

              if (journey) {
                return journey;
              }

              return null;
            })
          )
        ).filter((x): x is ApiCampaignJourney => Boolean(x));

        setUserOffers(campaigns);
        setUserJourneys(allJourneys);
      }
    } catch (e) {
      console.error("Error refreshing offers:", e);

      throw new Error("There was an error loading your offers.");
    }
  }, [torqueUserClient]);

  const claimOffer = useCallback(
    async (offerId: string) => {
      try {
        if (wallet && torqueUserClient) {
          const result = await torqueUserClient.acceptCampaign(offerId);

          await refreshOffers();

          return result;
        }
      } catch (e) {
        console.error("Error claiming offer:", e);

        throw new Error("There was an error claiming your offer.");
      }
    },
    [wallet, torqueUserClient, refreshOffers]
  );

  const getRequirementTransaction = useCallback(
    async (offerId: string, index = 0) => {
      if (torqueUserClient) {
        const result = await torqueUserClient.getBountyStepTransaction(
          offerId,
          index
        );

        if (result && result.type === "transaction") {
          return result.transaction;
        }
      }
    },
    [torqueUserClient]
  );

  const sendActionTransaction = useCallback(
    async (encodedTransaction: string) => {
      if (wallet?.adapter.publicKey) {
        try {
          const transaction = VersionedTransaction.deserialize(
            base64ToUint8Array(encodedTransaction)
          ) as unknown as Transaction;

          const {
            context: { slot: minContextSlot },
            value: { blockhash, lastValidBlockHeight },
          } = await connection.getLatestBlockhashAndContext();

          transaction.recentBlockhash = blockhash;
          transaction.feePayer = wallet.adapter.publicKey;

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
    [connection, wallet]
  );

  const executeOfferStep = useCallback(
    async ({
      offerId,
      actionIndex = 0,
      onComplete,
    }: {
      offerId: string;
      actionIndex: number;
      onComplete: (signature: string) => void;
    }) => {
      try {
        const transaction = await getRequirementTransaction(
          offerId,
          actionIndex
        );

        if (transaction) {
          const signature = await sendActionTransaction(transaction);

          if (signature) {
            onComplete(signature);
          } else {
            throw new Error("Failed to send transaction.");
          }
        } else {
          throw new Error(
            "No transaction found for the given offer and action."
          );
        }
      } catch (e) {
        console.error("Error executing action:", e);

        throw new Error("There was an error executing your transaction.");
      }
    },
    [getRequirementTransaction, sendActionTransaction]
  );

  /**
   * Initialize Torque UI function
   */
  useEffect(() => {
    refreshOffers()
      .then()
      .catch((e) => {
        console.error(e);
      });
  }, [refreshOffers]);

  /**
   * Login to torque with the provided wallet.
   */
  const initialize = useCallback(
    async (initOptions?: TorqueInitOptions) => {
      try {
        setIsLoading(true);

        if (wallet && !torqueUserClient) {
          const torqueSDK = new TorqueSDK({
            apiUrl: options?.apiUrl ?? API_URL,
            appUrl: options?.appUrl ?? APP_URL,
            functionsUrl: options?.functionsUrl ?? FUNCTIONS_URL,
            rpc: options?.rpc,
            publisherHandle: "torqueprotocol",
          });

          await torqueSDK.initialize(
            wallet.adapter,
            undefined,
            initOptions?.loginInput
          );

          setTorque(torqueSDK);

          if (torqueSDK.user) {
            setTorqueUserClient(torqueSDK.user);
            setUser(torqueSDK.user.user);
          } else {
            throw new Error("Unable to login and initialize Torque.");
          }

          setTimeout(async () => {
            await refreshOffers();
          }, 2000);
        } else {
          throw new Error(
            "No wallet found. Please provide a wallet before initializing."
          );
        }
      } catch (e) {
        console.error("Error initializing torque:", e);

        setIsLoading(false);

        // Forward error to UI
        if (e instanceof Error) {
          throw e;
        }
      }
    },
    [
      options?.apiUrl,
      options?.appUrl,
      options?.functionsUrl,
      options?.rpc,
      refreshOffers,
      torqueUserClient,
      wallet,
    ]
  );

  const value: TorqueContextState = {
    torque,
    isLoading,
    publicKey: user?.pubKey,

    // Auth functions
    initialize,
    logout,

    // Offer functions
    claimOffer,
    getRequirementTransaction,
    executeOfferStep,

    // User
    offers: userOffers,
    journeys: userJourneys,
    ...(user
      ? { user, initialized: true }
      : { user: undefined, initialized: false }),
  };

  return (
    <TorqueContext.Provider value={value}>{children}</TorqueContext.Provider>
  );
}

/**
 * The useTorque hook returns the Torque context.
 *
 * @returns The Torque context
 */
export const useTorque = () => {
  const context = useContext(TorqueContext);

  if (context === undefined) {
    throw new Error("useTorque must be used within an TorqueProvider");
  }

  return context;
};
