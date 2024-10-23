import { useWallet } from "@solana/wallet-adapter-react";
import type {
  ApiCampaign,
  ApiCampaignJourney,
  ApiResponse,
} from "@torque-labs/torque-ts-sdk";
import {
  ApiProgressStatus,
  ApiStatus,
  TorqueSDK,
} from "@torque-labs/torque-ts-sdk";
import { ChevronDown, ChevronUp, Wallet } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

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
import { cn } from "#lib/utils.ts";

import { TorqueDrawerRequirement } from "./TorqueDrawerRequirement";
import { TorqueStartButton } from "./TorqueStartButton";

const torqueSDK = new TorqueSDK({
  apiKey: "test",
  apiUrl: "https://api.coolify.torque.so",
  appUrl: "http://localhost:3000",
  functionsUrl: "https://0tvum434ha.execute-api.us-east-1.amazonaws.com/Prod",
  rpc: "https://mainnet.helius-rpc.com/?api-key=c494140b-df3a-46f8-b293-eb1988458351",
});

export function TorqueDrawer() {
  const [initialized, setInitialized] = useState(false);
  const wallet = useWallet();

  const [campaigns, setCampaigns] = useState<ApiCampaign[]>([]);
  const [journeys, setJourneys] = useState<ApiCampaignJourney[]>([]);
  const [openCampaigns, setOpenCampaigns] = useState<Record<string, boolean>>(
    {}
  );

  const getCampaigns = useCallback(async () => {
    const request = await fetch(
      `https://api.coolify.torque.so/offers/${wallet.publicKey?.toString()}`
    );

    if (request.ok) {
      const result = (await request.json()) as ApiResponse<{
        campaigns: ApiCampaign[];
      }>;

      if (result.status === ApiStatus.SUCCESS && torqueSDK.user) {
        const torqueUser = torqueSDK.user;

        const allJourneys = (
          await Promise.all(
            result.data.campaigns.map(async (campaign) => {
              const journey = await torqueUser.getCampaignJourney(campaign.id);

              if (journey) {
                return journey;
              }

              return null;
            })
          )
        ).filter((x): x is ApiCampaignJourney => Boolean(x));

        /**
         * Sort order:
         *
         * 1. Not started
         * 2. Started
         * 3. Done
         * 4. Alphabetical
         */
        const campaignOrder = result.data.campaigns.sort((a, b) => {
          const aCompleted = allJourneys.find(
            (journey) =>
              journey.campaignId === a.id &&
              journey.status === ApiProgressStatus.DONE
          );

          const bCompleted = allJourneys.find(
            (journey) =>
              journey.campaignId === b.id &&
              journey.status === ApiProgressStatus.DONE
          );

          if (aCompleted && !bCompleted) {
            return 1;
          } else if (!aCompleted && bCompleted) {
            return -1;
          }

          const aStarted = allJourneys.find(
            (journey) =>
              journey.campaignId === a.id &&
              journey.status === ApiProgressStatus.STARTED
          );

          const bStarted = allJourneys.find(
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
          campaignOrder.length > 0 &&
          !allJourneys.find(
            (journey) =>
              journey.campaignId === campaignOrder[0].id &&
              journey.status === ApiProgressStatus.DONE
          )
        ) {
          setOpenCampaigns({
            [campaignOrder[0].id]: true,
          });
        }

        setCampaigns(campaignOrder);
        setJourneys(allJourneys);
      }
    }
  }, [wallet.publicKey]);

  const claimOffer = useCallback(
    async (campaignId: string) => {
      if (wallet.publicKey && initialized) {
        if (torqueSDK.user) {
          await torqueSDK.user.acceptCampaign(campaignId);

          await getCampaigns();
        }
      }
    },
    [wallet, initialized, getCampaigns]
  );

  useEffect(() => {
    async function initializeTorque() {
      if (wallet.wallet && wallet.publicKey && !initialized) {
        try {
          await torqueSDK.initialize(wallet.wallet.adapter);

          setInitialized(true);

          await getCampaigns();
        } catch (error) {
          console.error("Error initializing torque:", error);
        }
      }
    }

    void initializeTorque();
  }, [wallet, wallet.wallet, wallet.publicKey, initialized, getCampaigns]);

  return (
    <Drawer direction="right">
      <DrawerTrigger>Open</DrawerTrigger>

      <DrawerContent className="left-auto overflow-auto top-0 mt-0 right-0 bottom-0 flex outline-none w-96 rounded-none bg-card">
        <DrawerHeader className="mb-4 p-5 pt-6 flex items-center gap-2 justify-between">
          <DrawerTitle className="text-sm font-normal flex items-center gap-2 border py-1 px-2.5 rounded-md">
            <Wallet className="text-muted" size={16} />
            {wallet.publicKey ? (
              <div>
                {`${wallet.publicKey
                  .toString()
                  .slice(0, 5)}....${wallet.publicKey.toString().slice(-5)}`}
              </div>
            ) : null}
          </DrawerTitle>
          <DrawerDescription className="flex items-center gap-2 text-[10px]">
            Powered by <Logo className="w-16" />
          </DrawerDescription>
        </DrawerHeader>

        <div className="flex flex-col gap-4 px-5 w-full">
          <h3 className="text-lg font-medium">
            Offers ({campaigns.length ? campaigns.length : 0})
          </h3>
          {campaigns.map((campaign) => {
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

            const isOpen = Boolean(openCampaigns[campaign.id]);

            return (
              <div className="rounded border" key={campaign.id}>
                <h3
                  className={cn(
                    "font-semibold py-2 px-3 flex items-center gap-2 justify-between cursor-pointer",
                    { "border-b": Boolean(isOpen) }
                  )}
                  onClick={() => {
                    setOpenCampaigns((prevOpenCampaigns) => ({
                      ...prevOpenCampaigns,
                      [campaign.id]: !prevOpenCampaigns[campaign.id],
                    }));
                  }}
                >
                  {campaign.title}

                  <div className="flex items-center gap-2">
                    {isStarted ? (
                      <div className="rounded-full text-[10px] bg-foreground text-background px-2 uppercase">
                        Started
                      </div>
                    ) : null}

                    {isDone ? (
                      <div className="rounded-full text-[10px] bg-green-800 px-2 uppercase">
                        Completed
                      </div>
                    ) : null}

                    {isOpen ? (
                      <ChevronDown className="text-white size-5" size={20} />
                    ) : (
                      <ChevronUp size={20} />
                    )}
                  </div>
                </h3>

                {isOpen ? (
                  <div className="p-3">
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
                              refreshCampaigns={getCampaigns}
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
                ) : null}
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
