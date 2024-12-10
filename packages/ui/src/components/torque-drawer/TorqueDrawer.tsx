import type { ApiCampaign } from "@torque-labs/torque-ts-sdk";
import { ApiProgressStatus } from "@torque-labs/torque-ts-sdk";
import { Wallet } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { Logo, OfferListItem, TorqueDrawerOffer } from "#/components";
import { Button } from "#/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "#/components/ui/drawer";
import { useTorque } from "#/hooks";
import { cn } from "#/lib";

interface TorqueDrawerProps {
  /**
   * Additional class names to apply to the button which opens the drawer
   */
  buttonClassName?: string;

  /**
   * The label of the button which opens the drawer
   */
  buttonLabel?: string;

  /**
   * Whether the drawer is open
   */
  open?: boolean;

  /**
   * Whether to show the button to open the drawer (default: false)
   */
  showButton?: boolean;

  /**
   * On open change callback
   */
  onOpenChange?: (open: boolean) => void;
}

/**
 * Display the offers and journeys for the current user in a drawer.
 */
export function TorqueDrawer({
  buttonClassName,
  buttonLabel,
  open,
  showButton = false,
  onOpenChange,
}: TorqueDrawerProps) {
  const [isOpen, setIsOpen] = useState(open);
  const { offers, journeys, publicKey } = useTorque();

  const [openOffer, setOpenOffer] = useState<ApiCampaign>();

  /**
   * Sort the offers by status
   *
   * Sort order:
   *
   * 1. Not started
   * 2. Started
   * 3. Done
   * 4. Alphabetical
   */
  const sortedOffers = useMemo(() => {
    const sorted = offers.sort((a, b) => {
      const aCompleted = journeys.find(
        (journey) =>
          journey.campaignId === a.id &&
          journey.status === ApiProgressStatus.DONE,
      );

      const bCompleted = journeys.find(
        (journey) =>
          journey.campaignId === b.id &&
          journey.status === ApiProgressStatus.DONE,
      );

      if (aCompleted && !bCompleted) {
        return 1;
      } else if (!aCompleted && bCompleted) {
        return -1;
      }

      const aStarted = journeys.find(
        (journey) =>
          journey.campaignId === a.id &&
          journey.status === ApiProgressStatus.STARTED,
      );

      const bStarted = journeys.find(
        (journey) =>
          journey.campaignId === b.id &&
          journey.status === ApiProgressStatus.STARTED,
      );

      if (aStarted && !bStarted) {
        return -1;
      } else if (!aStarted && bStarted) {
        return 1;
      }

      return a.title < b.title ? -1 : 1;
    });

    return sorted;
  }, [journeys, offers]);

  /**
   * Set isOpen state when open prop changes
   */
  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <Drawer
      direction="right"
      onClose={() => {
        setOpenOffer(undefined);
      }}
      onOpenChange={(val) => {
        setIsOpen(val);

        if (onOpenChange) {
          onOpenChange(val);
        }
      }}
      open={isOpen}
    >
      {showButton ? (
        <DrawerTrigger asChild>
          <Button className={cn(buttonClassName)} variant="torque">
            {buttonLabel ?? "Open"}
          </Button>
        </DrawerTrigger>
      ) : null}

      <DrawerContent className="torque-bottom-0 torque-left-auto torque-right-0 torque-top-0 torque-mt-0 torque-flex torque-w-96 torque-overflow-auto torque-rounded-none torque-bg-card torque-text-white torque-outline-none">
        <DrawerHeader className="torque-flex torque-items-center torque-justify-between torque-gap-2 torque-p-4 torque-pt-6">
          <DrawerTitle className="torque-flex torque-items-center torque-gap-2 torque-rounded-md torque-border torque-px-2.5 torque-py-1 torque-text-sm torque-font-normal">
            <Wallet className="torque-text-muted" size={16} />
            {publicKey ? (
              <div>
                {`${publicKey
                  .toString()
                  .slice(0, 5)}....${publicKey.toString().slice(-5)}`}
              </div>
            ) : null}
          </DrawerTitle>
          <DrawerDescription className="torque-flex torque-items-center torque-gap-2 torque-text-[10px]">
            Powered by <Logo className="torque-w-16" />
          </DrawerDescription>
        </DrawerHeader>

        {!openOffer ? (
          <div className="torque-flex torque-w-full torque-flex-col torque-gap-4 torque-p-4">
            <h3 className="torque-text-lg torque-font-medium">
              Offers ({offers.length ? offers.length : 0})
            </h3>
            {sortedOffers.map((campaign) => {
              const journey = journeys.find(
                (j) => j.campaignId === campaign.id,
              );

              return (
                <OfferListItem
                  journey={journey}
                  key={`offer-list-item-${campaign.id}`}
                  offer={campaign}
                  onClick={() => {
                    setOpenOffer(campaign);
                  }}
                />
              );
            })}
          </div>
        ) : (
          <TorqueDrawerOffer
            campaign={openOffer}
            journey={journeys.find((j) => j.campaignId === openOffer.id)}
            onClose={() => {
              setOpenOffer(undefined);
            }}
          />
        )}

        <DrawerFooter className="torque-sticky torque-bottom-0 torque-left-0 torque-flex torque-w-full torque-items-center torque-justify-center torque-bg-gradient-to-t torque-from-card torque-from-50% torque-to-100% torque-pt-10">
          <DrawerClose asChild>
            <Button className="torque-w-full" variant="outline">
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
