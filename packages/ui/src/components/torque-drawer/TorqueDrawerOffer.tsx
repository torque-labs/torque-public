import { ApiProgressStatus } from "@torque-labs/torque-ts-sdk";
import type {
  ApiCampaign,
  ApiCampaignJourney,
} from "@torque-labs/torque-ts-sdk";

import { useOfferStatus } from "#/hooks";

import { TorqueDrawerRequirement } from "./TorqueDrawerRequirement";

interface TorqueDrawerOfferProps {
  campaign: ApiCampaign;
  journey?: ApiCampaignJourney;
}

export function TorqueDrawerOffer({
  campaign,
  journey,
}: TorqueDrawerOfferProps) {
  const { hasStarted } = useOfferStatus(campaign.id);

  return (
    <div className="flex w-full flex-col gap-4">
      {campaign.imageUrl ? (
        <div className="w-full">
          <img
            alt={campaign.title}
            className="aspect-square w-full object-cover"
            src={campaign.imageUrl}
          />
        </div>
      ) : null}

      <div>
        <h3 className="text-lg font-semibold">{campaign.title}</h3>
        <p className="text-xs text-muted">{campaign.description}</p>
      </div>

      <div>
        <h4>Requirements</h4>
        <ul className="flex flex-col gap-2">
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
                  isStarted={hasStarted}
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
      </div>
    </div>
  );
}
