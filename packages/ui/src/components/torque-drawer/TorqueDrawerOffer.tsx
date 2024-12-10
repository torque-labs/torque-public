import { ApiProgressStatus } from "@torque-labs/torque-ts-sdk";
import type {
  ApiCampaign,
  ApiCampaignJourney,
} from "@torque-labs/torque-ts-sdk";
import { ChevronLeft } from "lucide-react";

import {
  MovingBorderButton,
  OfferRequirementItem,
  Rewards,
} from "#/components";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";
import { useTorque } from "#/hooks";

interface TorqueDrawerOfferProps {
  /**
   * The offer to display
   */
  campaign: ApiCampaign;

  /**
   * The user's journey for the offer if available
   */
  journey?: ApiCampaignJourney;

  /**
   * Callback function when the offer details are closed
   */
  onClose: () => void;
}

/**
 * Shows the details of an offer inside of a drawer.
 */
export function TorqueDrawerOffer({
  campaign,
  journey,
  onClose,
}: TorqueDrawerOfferProps) {
  const { claimOffer } = useTorque();

  const hasStarted = Boolean(journey?.status === ApiProgressStatus.STARTED);
  const hasCompleted = Boolean(journey?.status === ApiProgressStatus.DONE);

  return (
    <div className="torque-flex torque-w-full torque-flex-col torque-p-4 torque-pt-2">
      <Button
        className="torque-mb-3 torque-flex torque-items-center torque-self-start torque-py-1 torque-pl-0 torque-text-sm torque-font-normal hover:torque-bg-transparent"
        onClick={onClose}
        variant="ghost"
      >
        <ChevronLeft className="torque-size-4" size={16} />
        <span>Back</span>
      </Button>

      {campaign.imageUrl ? (
        <div className="torque-mb-4 torque-w-full">
          <img
            alt={campaign.title}
            className="torque-aspect-square torque-w-full torque-overflow-hidden torque-rounded-md torque-object-cover"
            src={campaign.imageUrl}
          />
        </div>
      ) : null}

      <div className="torque-mb-3 torque-flex torque-flex-col torque-gap-2">
        <div>
          {hasCompleted ? <Badge variant="green">Completed</Badge> : null}

          {hasStarted ? <Badge variant="default">Started</Badge> : null}
        </div>

        <h3 className="torque-text-base torque-font-semibold torque-leading-snug">
          {campaign.title}
        </h3>

        <p className="torque-text-xs torque-text-muted">
          {campaign.description}
        </p>
      </div>

      {!journey ? (
        <MovingBorderButton
          borderRadius=".5rem"
          className="torque-text-sm"
          onClick={async () => {
            await claimOffer(campaign.id);
          }}
        >
          Claim Offer
        </MovingBorderButton>
      ) : null}

      <div className="torque-mt-6">
        <h4 className="torque-mb-2">Rewards</h4>
        <Rewards campaign={campaign} />
      </div>

      <div className="torque-mt-6">
        <h4 className="torque-mb-2">Requirements</h4>
        <ul className="torque-flex torque-flex-col torque-gap-2">
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
