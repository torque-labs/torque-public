import { EventType } from "@torque-labs/torque-utils";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const contentMap = {
  [EventType.MARGINFI_LEND]: {
    title: "MarginFi",
    targetUrl: "https://app.marginfi.com/",
  },
  [EventType.KAMINO_LEND]: {
    title: "Kamino",
    targetUrl: "https://app.kamino.finance/",
  },
};

interface LendOfferActionProps {
  lendType: keyof typeof contentMap;
}

export function LendOfferAction({ lendType }: LendOfferActionProps) {
  const { title, targetUrl } = contentMap[lendType];
  const hostname = new URL(targetUrl).hostname;

  return (
    <div className="flex flex-col gap-4">
      <p className="flex flex-wrap items-center gap-1">
        You can complete this requirement by lending directly on
        <Link href={targetUrl} target="_blank" className="text-highlight">
          {title} ({hostname})
        </Link>
      </p>

      <Button asChild>
        <Link
          href={targetUrl}
          className="flex items-center gap-2"
          target="_blank"
        >
          Go to {title}
          <SquareArrowOutUpRight size={14} />
        </Link>
      </Button>
    </div>
  );
}
