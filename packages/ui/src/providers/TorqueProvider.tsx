"use client";

import type { WalletAdapter } from "@solana/wallet-adapter-base";
import type { Wallet } from "@solana/wallet-adapter-react";
import type {
  ApiCampaign,
  ApiCampaignJourney,
  ApiInputLogin,
  ApiUser,
  ApiUserJourney,
  TorqueUserClient,
} from "@torque-labs/torque-ts-sdk";
import { TorqueSDK } from "@torque-labs/torque-ts-sdk";
import { createContext, useState, useCallback, useEffect } from "react";
import type { Dispatch, PropsWithChildren, SetStateAction } from "react";

import { TorqueConnectDialog } from "#/components";
import { API_URL, APP_URL, FUNCTIONS_URL } from "#/constants";

/**
 * Torque provider options
 */
export interface TorqueOptions {
  /**
   * The API URL for the Torque server (default: "https://api.torque.so")
   *
   * Note: This is mostly used for development and testing purposes.
   */
  apiUrl?: string;

  /**
   * The URL for the Torque app/client (default: "https://app.torque.so")
   *
   * This is used for sharing links and link generation.
   * If you are using the Torque SDK to show and share offers within your app,
   * you can set this to your app's URL, however, the Torque SDK will still
   * use the same paths as used by the Torque app.
   */
  appUrl?: string;

  /**
   * The URL for Torque functions
   *
   * Note: This is mostly used for development and testing purposes.
   */
  functionsUrl?: string;

  /**
   * The RPC URL for the Solana network
   *
   * Custom RPC endpoint, will otherwise default to built in RPC endpoints for the Solana network.
   */
  rpc?: string;

  /**
   * The publisher handle for the Torque
   */
  publisherHandle?: string;
}

/**
 * TorqueInitOptions
 *
 * Interface for initializing the user
 */
export interface TorqueInitOptions {
  /**
   * (optional) SIWS or basic input and output payloads if user has already signed
   */
  loginInput?: ApiInputLogin;
}

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
   * Whether to automatically initialize the user with Torque using Sign-in-with-Solana (SIWS) when a wallet is detected
   */
  autoInit?: boolean;

  /**
   * Torque SDK options
   */
  options?: TorqueOptions;
}

/**
 * TorqueContextState
 *
 * Torque SDK instance and loading state
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
   * The Torque SDK options that were used by the provider
   */
  config?: TorqueOptions;

  /**
   * The state of the connect modal
   */
  connectModalOpen: boolean;

  /**
   * Flag to set if the user should use transactions for authentication (eg. Ledger)
   */
  useTransactionForAuth: boolean;

  /**
   * Claim an offer
   *
   * @param offerId - The ID of the offer to start/claim
   *
   * @returns The user's journey for the offer
   */
  claimOffer: (offerId: string) => Promise<ApiUserJourney | undefined>;

  /**
   * Refresh the uesr's offers and journeys
   */
  refreshOffers: () => Promise<void>;

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

  /**
   * Set the visibility of the wallet connect modal
   */
  setConnectModalOpen: Dispatch<SetStateAction<boolean>>;

  /**
   * Set the flag whether to use transactions for authentication
   */
  setUseTransactionForAuth: Dispatch<SetStateAction<boolean>>;
} & (
  | {
      /**
       * The user object containing the user's public key and other details.
       */
      user: ApiUser;

      /**
       * The Torque user client instance.
       */
      userClient: TorqueUserClient;

      /**
       * Flag indicating if the user is initialized.
       */
      initialized: true;

      /**
       * Flag indicating if the user is authenticated. (same as initialized)
       */
      isAuthenticated: true;
    }
  | {
      user: undefined;
      userClient: undefined;
      initialized: false;
      isAuthenticated: false;
    }
);

/**
 * The TorqueContext is a React context that provides the Torque SDK instance and loading state.
 */
export const TorqueContext = createContext<TorqueContextState | undefined>(
  undefined,
);

/**
 * TorqueProvider component
 *
 * This component serves as a context provider for the Torque UI Kit.
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
  autoInit = true,
}: TorqueProviderProps) {
  // SDK state
  const [torque, setTorque] = useState<TorqueSDK>();
  const [torqueUserClient, setTorqueUserClient] = useState<TorqueUserClient>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [torqueConfig, setTorqueConfig] = useState<TorqueOptions>();
  const [initError, setInitError] = useState<boolean>(false);
  const [connectModalOpen, setConnectModalOpen] = useState(false);
  const [useTransactionForAuth, setUseTransactionForAuth] = useState(false);
  const [autoLogin, setAutoLogin] = useState(autoInit);

  // User state
  const [user, setUser] = useState<ApiUser>();

  // Data state
  const [userOffers, setUserOffers] = useState<ApiCampaign[]>([]);
  const [userJourneys, setUserJourneys] = useState<ApiCampaignJourney[]>([]);

  // Adapter state
  const [adapter, setAdapter] = useState<WalletAdapter | undefined>();

  useEffect(() => {
    if (wallet?.adapter.publicKey) {
      setAdapter(wallet.adapter);
    }
  }, [wallet?.adapter, wallet?.adapter.publicKey]);

  useEffect(() => {
    setAutoLogin(autoInit);
  }, [autoInit]);

  /**
   * Logout the user and clear the torque instance.
   */
  const logout = useCallback(async () => {
    setIsLoading(true);

    if (adapter) {
      await adapter.disconnect();
      setAdapter(undefined);
    }

    await torque?.logout();

    setUser(undefined);
    setIsLoading(false);
    setInitError(false);
    setTorqueUserClient(undefined);
  }, [torque, adapter]);

  /**
   * Event handler when the wallet adapter disconnects or changes accounts
   */
  const handleDisconnect = useCallback(async () => {
    setAutoLogin(false);

    try {
      await logout();
    } catch (e) {
      console.error(e);
    }
  }, [logout]);

  /**
   * Monitor if account changes or disconnects using the wallet adapter
   */
  useEffect(() => {
    if (wallet?.adapter) {
      wallet.adapter.on("disconnect", handleDisconnect);
    }

    return () => {
      wallet?.adapter.off("disconnect", handleDisconnect);
    };
  }, [handleDisconnect, wallet?.adapter]);

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
                campaign.id,
              );

              if (journey) {
                return journey;
              }

              return null;
            }),
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

  /**
   * Claim an offer
   */
  const claimOffer = useCallback(
    async (offerId: string) => {
      try {
        if (adapter && torqueUserClient) {
          const result = await torqueUserClient.acceptCampaign(offerId);

          await refreshOffers();

          return result;
        }
      } catch (e) {
        console.error("Error claiming offer:", e);

        throw new Error("There was an error claiming your offer.");
      }
    },
    [adapter, torqueUserClient, refreshOffers],
  );

  /**
   * Initialize Torque UI function
   */

  /**
   * Login to torque with the provided wallet.
   */
  const initialize = useCallback(
    async (initOptions?: TorqueInitOptions) => {
      try {
        setIsLoading(true);
        setAutoLogin(autoInit);

        if (adapter && !torqueUserClient) {
          const config = {
            apiUrl: options?.apiUrl ?? API_URL,
            appUrl: options?.appUrl ?? APP_URL,
            functionsUrl: options?.functionsUrl ?? FUNCTIONS_URL,
            rpc: options?.rpc,
            publisherHandle: options?.publisherHandle ?? "torqueprotocol",
          };

          const torqueSDK = new TorqueSDK(config);

          setTorqueConfig(config);

          await torqueSDK.initialize(
            adapter,
            undefined,
            initOptions?.loginInput,
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
            "No wallet found. Please provide a wallet before initializing.",
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
      options?.publisherHandle,
      options?.rpc,
      refreshOffers,
      torqueUserClient,
      adapter,
      autoInit,
    ],
  );

  /**
   * Detect wallet and initialize user if autoInit is enabled
   */
  useEffect(() => {
    if (autoLogin && adapter && !initError && !isLoading && !torqueUserClient) {
      initialize().catch((e) => {
        console.error(e);
        setInitError(true);
      });
    }
  }, [autoLogin, adapter, initialize, isLoading, torqueUserClient, initError]);

  /**
   * Refresh offers every 10 seconds
   */
  useEffect(() => {
    refreshOffers().catch((e) => {
      console.error(e);
    });

    const interval = setInterval(() => {
      refreshOffers().catch((e) => {
        console.error(e);
      });
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [refreshOffers]);

  const value: TorqueContextState = {
    torque,
    isLoading,
    publicKey: user?.pubKey,
    config: torqueConfig,
    connectModalOpen,
    useTransactionForAuth,

    // Auth functions
    initialize,
    logout,
    setConnectModalOpen,
    setUseTransactionForAuth,

    // Offer functions
    claimOffer,
    refreshOffers,

    // User
    offers: userOffers,
    journeys: userJourneys,
    ...(user && torqueUserClient
      ? {
          user,
          userClient: torqueUserClient,
          initialized: true,
          isAuthenticated: true,
        }
      : {
          user: undefined,
          userClient: undefined,
          initialized: false,
          isAuthenticated: false,
        }),
  };

  return (
    <TorqueContext.Provider value={value}>
      {children}

      <TorqueConnectDialog />
    </TorqueContext.Provider>
  );
}
