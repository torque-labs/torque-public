import { ApiProgressStatus } from "@torque-labs/torque-ts-sdk";
import { Wallet } from "lucide-react";
import { useMemo, useState } from "react";

import { Logo } from "#/components/icons";
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

import { OfferListItem } from "#components/OfferListItem.tsx";
import { useTorque } from "#components/providers/TorqueProvider.tsx";

import { TorqueDrawerRequirement } from "./TorqueDrawerRequirement";
import { TorqueStartButton } from "./TorqueStartButton";

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
          journey.status === ApiProgressStatus.DONE
      );

      const bCompleted = journeys.find(
        (journey) =>
          journey.campaignId === b.id &&
          journey.status === ApiProgressStatus.DONE
      );

      if (aCompleted && !bCompleted) {
        return 1;
      } else if (!aCompleted && bCompleted) {
        return -1;
      }

      const aStarted = journeys.find(
        (journey) =>
          journey.campaignId === a.id &&
          journey.status === ApiProgressStatus.STARTED
      );

      const bStarted = journeys.find(
        (journey) =>
          journey.campaignId === b.id &&
          journey.status === ApiProgressStatus.STARTED
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
          journey.status === ApiProgressStatus.DONE
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

      <DrawerContent className="left-auto overflow-auto top-0 mt-0 right-0 bottom-0 flex outline-none w-96 rounded-none bg-card text-white">
        <DrawerHeader className="mb-4 p-5 pt-6 flex items-center gap-2 justify-between">
          <DrawerTitle className="text-sm font-normal flex items-center gap-2 border py-1 px-2.5 rounded-md">
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

        <div className="flex flex-col gap-4 px-5 w-full">
          <h3 className="text-lg font-medium">
            Offers ({offers.length ? offers.length : 0})
          </h3>
          {sortedOffers.map((campaign) => {
            const journey = journeys.find(
              (j) =>
                j.campaignId === campaign.id &&
                j.status === ApiProgressStatus.STARTED
            );

            const isStarted = Boolean(journey);

            const isDone = Boolean(
              journeys.find(
                (j) =>
                  j.campaignId === campaign.id &&
                  j.status === ApiProgressStatus.DONE
              )
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
                  description={description}
                  imageSrc={image}
                  isDone={isDone}
                  isOpen={isOpen}
                  isStarted={isStarted}
                  onClick={() => {
                    setOpenOffers((prevOpenCampaigns) => ({
                      ...prevOpenCampaigns,
                      [campaign.id]: !prevOpenCampaigns[campaign.id],
                    }));
                  }}
                  title={title}
                >
                  <div>
                    <h4 className="text-xs font-semibold mb-2 uppercase">
                      Requirements
                    </h4>

                    <ul className="flex flex-col gap-1">
                      {campaign.requirements.map((requirement, idx) => {
                        const step = journey?.userBountySteps?.find((s) => {
                          return s.bountyStepId === requirement.id;
                        });

                        return (
                          <li
                            className="flex items-center justify-between gap-2 text-xs p-2 border border-dashed rounded border-input"
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
                              <div className="rounded-full text-[10px] bg-green-800 px-2 uppercase">
                                Completed
                              </div>
                            ) : null}
                          </li>
                        );
                      })}
                    </ul>

                    {!isStarted && !isDone ? (
                      <div className="mt-5">
                        <TorqueStartButton
                          borderRadius=".5rem"
                          className="text-sm text-highlight"
                          duration={3000}
                          onClick={async () => {
                            await claimOffer(campaign.id);
                          }}
                        >
                          Claim Offer
                        </TorqueStartButton>
                      </div>
                    ) : null}
                  </div>
                </OfferListItem>
              </div>
            );
          })}
        </div>

        <DrawerFooter className="sticky bottom-0 left-0 pt-10 to-100% from-50% flex items-center justify-center bg-gradient-to-t from-card w-full">
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
