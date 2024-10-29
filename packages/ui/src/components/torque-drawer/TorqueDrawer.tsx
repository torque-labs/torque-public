import { ApiProgressStatus } from "@torque-labs/torque-ts-sdk";
import { Wallet } from "lucide-react";
import { useMemo, useState } from "react";

import { Logo, OfferListItem, MovingBorderButton } from "#/components";
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

import { TorqueDrawerRequirement } from "./TorqueDrawerRequirement";

export function TorqueDrawer() {
  const { offers, journeys, claimOffer, publicKey } = useTorque();

  const [openOffers, setOpenOffers] = useState<Record<string, boolean>>({});

  console.log(publicKey);

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

    if (
      sorted.length > 0 &&
      !journeys.find(
        (journey) =>
          journey.campaignId === sorted[0].id &&
          journey.status === ApiProgressStatus.DONE,
      )
    ) {
      setOpenOffers({
        [sorted[0].id]: true,
      });
    }

    return sorted;
  }, [journeys, offers]);

  return (
    <Drawer direction="right">
      <DrawerTrigger>Open</DrawerTrigger>

      <DrawerContent className="bottom-0 left-auto right-0 top-0 mt-0 flex w-96 overflow-auto rounded-none bg-card text-white outline-none">
        <DrawerHeader className="mb-4 flex items-center justify-between gap-2 p-5 pt-6">
          <DrawerTitle className="flex items-center gap-2 rounded-md border px-2.5 py-1 text-sm font-normal">
            <Wallet className="text-muted" size={16} />
            {publicKey ? (
              <div>
                {`${publicKey
                  .toString()
                  .slice(0, 5)}....${publicKey.toString().slice(-5)}`}
              </div>
            ) : null}
          </DrawerTitle>
          <DrawerDescription className="flex items-center gap-2 text-[10px]">
            Powered by <Logo className="w-16" />
          </DrawerDescription>
        </DrawerHeader>

        <div className="flex w-full flex-col gap-4 px-5">
          <h3 className="text-lg font-medium">
            Offers ({offers.length ? offers.length : 0})
          </h3>
          {sortedOffers.map((campaign) => {
            const journey = journeys.find(
              (j) =>
                j.campaignId === campaign.id &&
                j.status === ApiProgressStatus.STARTED,
            );

            const isStarted = Boolean(journey);

            const isDone = Boolean(
              journeys.find(
                (j) =>
                  j.campaignId === campaign.id &&
                  j.status === ApiProgressStatus.DONE,
              ),
            );

            const isOpen = Boolean(openOffers[campaign.id]);

            const image = campaign.imageUrl ? campaign.imageUrl : undefined;
            const description = campaign.description
              ? campaign.description
              : undefined;
            const title = campaign.title;

            return (
              <div className="rounded border" key={campaign.id}>
                <OfferListItem
                  campaignId={campaign.id}
                  description={description}
                  imageSrc={image}
                  isOpen={isOpen}
                  onClick={() => {
                    setOpenOffers((prevOpenCampaigns) => ({
                      ...prevOpenCampaigns,
                      [campaign.id]: !prevOpenCampaigns[campaign.id],
                    }));
                  }}
                  title={title}
                >
                  <div>
                    <h4 className="mb-2 text-xs font-semibold uppercase">
                      Requirements
                    </h4>

                    <ul className="flex flex-col gap-1">
                      {campaign.requirements.map((requirement, idx) => {
                        const step = journey?.userBountySteps?.find((s) => {
                          return s.bountyStepId === requirement.id;
                        });

                        return (
                          <li
                            className="flex items-center justify-between gap-2 rounded border border-dashed border-input p-2 text-xs"
                            key={requirement.id}
                          >
                            <TorqueDrawerRequirement
                              campaignId={campaign.id}
                              index={idx}
                              isStarted={isStarted}
                              requirement={requirement}
                              step={step}
                            />

                            {step?.status === ApiProgressStatus.DONE ? (
                              <div className="rounded-full bg-green-800 px-2 text-[10px] uppercase">
                                Completed
                              </div>
                            ) : null}
                          </li>
                        );
                      })}
                    </ul>

                    {!isStarted && !isDone ? (
                      <div className="mt-5">
                        <MovingBorderButton
                          borderRadius=".5rem"
                          className="text-sm"
                          onClick={async () => {
                            await claimOffer(campaign.id);
                          }}
                        >
                          Claim Offer
                        </MovingBorderButton>
                      </div>
                    ) : null}
                  </div>
                </OfferListItem>
              </div>
            );
          })}
        </div>

        <DrawerFooter className="sticky bottom-0 left-0 flex w-full items-center justify-center bg-gradient-to-t from-card from-50% to-100% pt-10">
          <DrawerClose asChild>
            <Button className="w-full" variant="outline">
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
