import { WalletReadyState, type WalletName } from "@solana/wallet-adapter-base";
import { useWallet } from "@solana/wallet-adapter-react";
import { useCallback, useMemo } from "react";

import { Button } from "#/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "#/components/ui/dialog";
import { Switch } from "#/components/ui/switch";
import { APP_URL } from "#/constants";
import { useTorque } from "#/hooks";

const walletLinkMap = {
  solflare: "https://solflare.com/ul/v1/browse/",
  phantom: "https://phantom.app/ul/browse/",
} as const;

const getWalletLink = (walletName: WalletName) => {
  const name = walletName.toLowerCase();

  if (name.includes("phantom")) {
    return walletLinkMap.phantom;
  }

  if (name.includes("solflare")) {
    return walletLinkMap.solflare;
  }
};

export function TorqueConnectDialog() {
  const {
    initialize,
    connectModalOpen,
    setConnectModalOpen,
    isAuthenticated,
    useTransactionForAuth,
    setUseTransactionForAuth,
  } = useTorque();

  const {
    wallets,
    // eslint-disable-next-line -- Unbound method from wallet adapter lib
    select,
  } = useWallet();

  const walletsList = useMemo(() => {
    return wallets.map((wal) => {
      const linkPrefix = getWalletLink(wal.adapter.name);
      const url = encodeURIComponent(APP_URL);
      const ref = encodeURIComponent(window.location.origin);

      const link = linkPrefix
        ? `${linkPrefix}${url}?ref=${ref}`
        : "https://torque.so";

      return {
        name: wal.adapter.name,
        icon: wal.adapter.icon,
        link,
        enabled: wal.readyState === WalletReadyState.Installed,
      };
    });
  }, [wallets]);

  const connectToWallet = useCallback(
    async (walletName: WalletName) => {
      try {
        setConnectModalOpen(false);
        select(walletName);

        await initialize();
      } catch (error) {
        console.error(error);
      }
    },
    [select, setConnectModalOpen, initialize],
  );

  const showLedgerSwitch = useMemo(() => {
    return (
      walletsList.filter(
        (wal) => wal.enabled && !wal.name.toLowerCase().includes("tiplink"),
      ).length > 0
    );
  }, [walletsList]);

  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) {
          // Reset the useTransactionForAuth state when closing the dialog
          setUseTransactionForAuth(false);
        }

        setConnectModalOpen(open);
      }}
      open={connectModalOpen ? !isAuthenticated : false}
    >
      <DialogContent>
        <DialogHeader className="mb-4">
          <DialogTitle>Connect your Wallet</DialogTitle>
          <DialogDescription>
            Select your wallet bellow to connect and login to Torque.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          {showLedgerSwitch ? (
            <div className="flex items-center gap-2">
              <Switch
                checked={useTransactionForAuth}
                onCheckedChange={setUseTransactionForAuth}
              />

              <span>Use Ledger?</span>
            </div>
          ) : null}

          {walletsList.map((wal) =>
            wal.enabled ? (
              <Button
                className="w-full gap-2"
                key={`wallet-picker-${wal.name}`}
                onClick={async () => {
                  await connectToWallet(wal.name);
                }}
                size="lg"
                variant="outline"
              >
                {wal.icon ? (
                  <img alt={wal.name} className="size-4" src={wal.icon} />
                ) : null}

                <div className="flex items-center gap-2">
                  <span>Connect with {wal.name}</span>

                  <span className="text-[10px] text-muted">(detected)</span>
                </div>
              </Button>
            ) : (
              <Button
                asChild
                className="w-full gap-2"
                key={`wallet-picker-${wal.name}`}
                size="lg"
                variant="outline"
              >
                <a
                  href={wal.link}
                  key={`wallet-link-${wal.name}`}
                  rel="noopener"
                  target="_blank"
                >
                  {wal.icon ? (
                    <img alt={wal.name} className="size-4" src={wal.icon} />
                  ) : null}

                  <div className="flex items-center gap-2">
                    <span>Connect with {wal.name}</span>
                  </div>
                </a>
              </Button>
            ),
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
