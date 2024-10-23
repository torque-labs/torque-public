"use client";

import type { Wallet } from "@solana/wallet-adapter-react";
import type { ApiInputLogin, ApiUser } from "@torque-labs/torque-ts-sdk";
import { TorqueSDK } from "@torque-labs/torque-ts-sdk";
import type { ReactNode } from "react";
import { createContext, useContext, useState, useCallback } from "react";

import { API_URL, APP_URL, FUNCTIONS_URL } from "#/constants";

interface TorqueProviderProps {
  children: ReactNode;
  wallet?: Wallet;
  options?: {
    apiUrl?: string;
    appUrl?: string;
    functionsUrl?: string;
    rpc?: string;
  };
}

interface TorqueInitOptions {
  loginInput?: ApiInputLogin;
}

type TorqueContextState = {
  torque?: TorqueSDK;
  user?: ApiUser;
  isLoading: boolean;
  publicKey?: string;
  wallet?: Wallet;
  initialize: (options: TorqueInitOptions) => Promise<void>;
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

export function TorqueProvider({
  children,
  options,
  wallet,
}: TorqueProviderProps) {
  const [torque, setTorque] = useState<TorqueSDK>();
  const [user, setUser] = useState<ApiUser>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  /**
   * Login to torque with the provided wallet.
   */
  const initialize = useCallback(
    async ({ loginInput }: TorqueInitOptions) => {
      if (wallet) {
        setIsLoading(true);

        const torqueSDK = new TorqueSDK({
          apiUrl: options?.apiUrl ?? API_URL,
          appUrl: options?.appUrl ?? APP_URL,
          functionsUrl: options?.functionsUrl ?? FUNCTIONS_URL,
          rpc: options?.rpc,
        });

        try {
          await torqueSDK.initialize(wallet.adapter, undefined, loginInput);

          setTorque(torqueSDK);
          setUser(torqueSDK.user?.user);
        } catch (e) {
          console.error("Error initializing torque:", e);
        } finally {
          setIsLoading(false);
        }
      } else {
        console.error(
          "No wallet found. Please provide a wallet as a property to the TorqueProvider before initializing."
        );
      }
    },
    [
      options?.apiUrl,
      options?.appUrl,
      options?.functionsUrl,
      options?.rpc,
      wallet,
    ]
  );

  /**
   * Logout the user and clear the torque instance.
   */
  const logout = useCallback(async () => {
    setIsLoading(true);

    await torque?.logout();

    setUser(undefined);
    setIsLoading(false);
  }, [torque]);

  const value: TorqueContextState = {
    torque,
    isLoading,
    initialize,
    logout,
    ...(user
      ? { user, initialized: true }
      : { user: undefined, initialized: false }),
  };

  return (
    <TorqueContext.Provider value={value}>{children}</TorqueContext.Provider>
  );
}

export const useTorque = () => {
  const context = useContext(TorqueContext);

  if (context === undefined) {
    throw new Error("useTorque must be used within an TorqueProvider");
  }

  return context;
};
