import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Button } from "@/components/ui/button";
import { useCallback, useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import {
  ApiCampaign,
  ApiCampaignJourney,
  ApiProgressStatus,
  ApiResponse,
  TorqueSDK,
} from "@torque-labs/torque-ts-sdk";
import { Logo } from "@/components/icons";
import { TorqueDrawerRequirement } from "./TorqueDrawerRequirement";
import { TorqueStartButton } from "./TorqueStartButton";
import { ChevronDown, ChevronUp, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";

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
  const [openCampaigns, setOpenCampaigns] = useState<{
    [key: string]: boolean;
  }>({});

  const getCampaigns = useCallback(async () => {
    const request = await fetch(
      `https://api.coolify.torque.so/offers/${wallet.publicKey}`
    );

    if (request.ok) {
      const result = (await request.json()) as ApiResponse<{
        campaigns: ApiCampaign[];
      }>;

      if (result.status === "SUCCESS" && torqueSDK && torqueSDK.user) {
        const torqueUser = torqueSDK.user;

        const journeys = (
          await Promise.all(
            result.data.campaigns.map(async (campaign) => {
              const journey = await torqueUser.getCampaignJourney(campaign.id);

              if (journey) {
                return journey;
              }

              return null;
            })
          )
        ).filter((x) => !!x);

        /**
         * Sort order:
         *
         * 1. Not started
         * 2. Started
         * 3. Done
         * 4. Alphabetical
         */
        const campaignOrder = result.data.campaigns.sort((a, b) => {
          const aCompleted = journeys.find(
            (journey) =>
              journey &&
              journey.campaignId === a.id &&
              journey.status === ApiProgressStatus.DONE
          );

          const bCompleted = journeys.find(
            (journey) =>
              journey &&
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
              journey &&
              journey.campaignId === a.id &&
              journey.status === ApiProgressStatus.STARTED
          );

          const bStarted = journeys.find(
            (journey) =>
              journey &&
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
          !journeys.find(
            (journey) =>
              journey &&
              journey.campaignId === campaignOrder[0].id &&
              journey.status === ApiProgressStatus.DONE
          )
        ) {
          setOpenCampaigns({
            [campaignOrder[0].id]: true,
          });
        }

        setCampaigns(campaignOrder);
        setJourneys(journeys as ApiCampaignJourney[]);
      }
    }
  }, [wallet.publicKey]);

  const claimOffer = useCallback(
    async (campaignId: string) => {
      if (wallet && wallet.publicKey && initialized) {
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
      if (wallet && wallet.wallet && wallet.publicKey && !initialized) {
        try {
          await torqueSDK.initialize(wallet.wallet.adapter);

          setInitialized(true);

          await getCampaigns();
        } catch (error) {
          console.error("Error initializing torque:", error);
        }
      }
    }

    initializeTorque();
  }, [wallet, wallet.wallet, wallet.publicKey, initialized, getCampaigns]);

  return (
    <Drawer direction="right">
      <DrawerTrigger>Open</DrawerTrigger>

      <DrawerContent className="left-auto overflow-auto top-0 mt-0 right-0 bottom-0 flex outline-none w-96 rounded-none bg-card">
        <DrawerHeader className="mb-4 p-5 pt-6 flex items-center gap-2 justify-between">
          <DrawerTitle className="text-sm font-normal flex items-center gap-2 border py-1 px-2.5 rounded-md">
            <Wallet size={16} className="text-muted" />
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
            Offers ({campaigns.length ?? 0})
          </h3>
          {campaigns.map((campaign) => {
            const journey = journeys.find(
              (journey) =>
                journey.campaignId === campaign.id &&
                journey.status === ApiProgressStatus.STARTED
            );

            const isStarted = !!journey;

            const isDone = !!journeys.find(
              (journey) =>
                journey.campaignId === campaign.id &&
                journey.status === ApiProgressStatus.DONE
            );

            const isOpen = !!openCampaigns[campaign.id];

            return (
              <div key={campaign.id} className="rounded border">
                <h3
                  className={cn(
                    "text-semibold py-2 px-3 flex items-center gap-2 justify-between cursor-pointer",
                    { "border-b": isOpen }
                  )}
                  onClick={() => {
                    setOpenCampaigns({
                      ...openCampaigns,
                      [campaign.id]: !isOpen,
                    });
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
                      <ChevronDown size={20} className="text-white size-5" />
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
                        const step = journey?.userBountySteps?.find((step) => {
                          return step.bountyStepId === requirement.id;
                        });

                        return (
                          <li
                            key={requirement.id}
                            className="flex items-center justify-between gap-2 text-xs p-2 border border-dashed rounded border-input"
                          >
                            <TorqueDrawerRequirement
                              index={idx}
                              step={step}
                              campaignId={campaign.id}
                              requirement={requirement}
                              refreshCampaigns={getCampaigns}
                              isStarted={isStarted}
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
                            console.log("clicked");
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
            <Button variant="outline" className="w-full">
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
