import { PerpMarkets } from "@drift-labs/sdk";
import { DriftBetAction } from "@torque-labs/torque-utils";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { PropsWithChildren } from "react";

import { Button } from "@/components/ui/button";
import { OfferActionProps } from "@/lib/hooks/use-action";

type DriftBetOfferActionProps = OfferActionProps &
  PropsWithChildren & {
    eventConfig: DriftBetAction;
  };

export function DriftBetOfferAction({
  eventConfig,
  children,
}: DriftBetOfferActionProps) {
  const market = PerpMarkets["mainnet-beta"].find(
    (market) => market.marketIndex === eventConfig.marketIndex,
  );

  const formatter = new Intl.NumberFormat("en-US");

  return (
    <div className="flex flex-col gap-4">
      <div className="mb-4 flex flex-col gap-2 rounded border p-4">
        <div>
          <span>Minimum bet amount in USDC:</span>{" "}
          {formatter.format(eventConfig.shares)}
        </div>
      </div>

      {children}

      <p className="text-xs text-muted">
        NOTE: If you don&apos;t have a Drift account, you will be prompted to
        create an account. Then, you&apos;ll be able to place a BET.
      </p>
    </div>
  );
}

export function DriftDepositOfferAction() {
  const targetUrl = "https://www.drift.trade/";
  const hostname = new URL(targetUrl).hostname;

  return (
    <div className="flex flex-col gap-4">
      <p className="flex flex-wrap items-center">
        You can complete this requirement by making a deposit directly on{" "}
        <Link href={targetUrl} target="_blank">
          Drift ({hostname})
        </Link>
      </p>

      <Button asChild>
        <Link
          href={targetUrl}
          className="flex items-center gap-2"
          target="_blank"
        >
          Go to Drift
          <SquareArrowOutUpRight size={14} />
        </Link>
      </Button>
    </div>
  );
}
