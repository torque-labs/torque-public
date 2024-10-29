import { ActionGetResponse } from "@solana/actions";
import { EventType, NftBidBuy } from "@torque-labs/torque-utils";
import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { OfferActionProps, useAction } from "@/lib/hooks/use-action";

type NftBuyOfferActionProps = OfferActionProps & {
  eventConfig: NftBidBuy;
};

export function NftBuyOfferAction({
  eventConfig,
  onSubmit,
  isLoading,
}: NftBuyOfferActionProps) {
  const [imageUrl, setImageUrl] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();

  useEffect(() => {
    async function getNftData() {
      try {
        const response = await fetch(
          `https://tensor.dial.to/bid/${eventConfig.mint}`,
        );

        const result = (await response.json()) as unknown as ActionGetResponse;

        setImageUrl(result.icon);
        setTitle(result.title);
        setDescription(result.description);
      } catch (e) {
        console.error(e);
      }
    }

    getNftData();
  }, [eventConfig.mint]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 rounded border p-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageUrl} alt={title} className="max-w-20" />

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">{title}</h3>
          {description ? (
            <p className="text-sm text-muted">{description}</p>
          ) : null}
        </div>
      </div>

      <Button onClick={onSubmit} disabled={isLoading}>
        {isLoading ? (
          <LoaderCircle className="mr-2 size-4 animate-spin" />
        ) : null}
        Buy NFT
      </Button>
    </div>
  );
}
