import { ApiProgressStatus } from "@torque-labs/torque-ts-sdk";
import type {
  ApiCampaign,
  ApiCampaignJourney,
} from "@torque-labs/torque-ts-sdk";
import { ChevronLeft } from "lucide-react";

import { MovingBorderButton, OfferRequirementItem } from "#/components";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";
import { useTorque } from "#/hooks";

interface TorqueDrawerOfferProps {
  campaign: ApiCampaign;
  journey?: ApiCampaignJourney;
  onClose: () => void;
}

export function TorqueDrawerOffer({
  campaign,
  journey,
  onClose,
}: TorqueDrawerOfferProps) {
  const { claimOffer } = useTorque();

  const hasStarted = Boolean(journey?.status === ApiProgressStatus.STARTED);
  const hasCompleted = Boolean(journey?.status === ApiProgressStatus.DONE);

  return (
    <div className="flex w-full flex-col p-4 pt-2">
      <Button
        className="mb-3 flex items-center self-start py-1 pl-0 text-sm font-normal hover:bg-transparent"
        onClick={onClose}
        variant="ghost"
      >
        <ChevronLeft className="size-4" size={16} />
        <span>Back</span>
      </Button>

      {campaign.imageUrl ? (
        <div className="mb-4 w-full">
          <img
            alt={campaign.title}
            className="aspect-square w-full overflow-hidden rounded-md object-cover"
            src={campaign.imageUrl}
          />
        </div>
      ) : null}

      <div className="flex flex-col gap-2">
        <div>
          {hasCompleted ? <Badge variant="green">Completed</Badge> : null}

          {hasStarted ? <Badge variant="default">Started</Badge> : null}
        </div>

        <h3 className="mb-3 text-base font-semibold leading-snug">
          {campaign.title}
        </h3>
        <p className="text-xs text-muted">{campaign.description}</p>
      </div>

      {!journey ? (
        <MovingBorderButton
          borderRadius=".5rem"
          className="text-sm"
          onClick={async () => {
            await claimOffer(campaign.id);
          }}
        >
          Claim Offer
        </MovingBorderButton>
      ) : null}

      <div className="mt-6">
        <h4 className="mb-2">Requirements</h4>
        <ul className="flex flex-col gap-2">
          {campaign.requirements.map((requirement, idx) => {
            const step = journey?.userBountySteps?.find((s) => {
              return s.bountyStepId === requirement.id;
            });

            return (
              <OfferRequirementItem
                campaignId={campaign.id}
                index={idx}
                key={requirement.id}
                requirement={requirement}
                showAction={Boolean(journey)}
                status={step?.status}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
