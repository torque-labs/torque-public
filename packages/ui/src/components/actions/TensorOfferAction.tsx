import { zodResolver } from "@hookform/resolvers/zod";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { EventType, TensorAction } from "@torque-labs/torque-utils";
import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  FormField,
  Form,
  FormItem,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import {
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { getTensorCollections } from "@/lib/actions/tensor";
import { OfferActionProps, useAction } from "@/lib/hooks/use-action";

interface TensorOfferSelectItemProps {
  collection?: {
    collId: string;
    name: string;
    slugdisplay: string;
    imageUri: string;
    symbol: string;
    stats: {
      buyNowPriceNetFees: number;
    };
  };
}

function TensorOfferSelectItem({ collection }: TensorOfferSelectItemProps) {
  if (!collection) return null;

  return (
    <div className="flex max-w-sm items-center gap-2 text-left md:max-w-none">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={collection.imageUri}
        alt={collection.name}
        className="size-12 overflow-hidden rounded-md object-cover lg:size-16"
      />
      <div>
        <h4 className="text-base font-semibold">{collection.name}</h4>
        <h2>
          {(collection.stats.buyNowPriceNetFees / LAMPORTS_PER_SOL).toFixed(3)}{" "}
          SOL
        </h2>
      </div>
    </div>
  );
}

type TensorOfferActionProps = OfferActionProps & {
  eventConfig: TensorAction;
  actionType: EventType.TENSOR_BID | EventType.TENSOR_BUY;
};

export function TensorOfferAction({
  eventConfig,
  actionType,
  onSubmit,
}: TensorOfferActionProps) {
  const { handleAction, isLoading } = useAction();
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [collections, setCollections] = useState<
    {
      collId: string;
      name: string;
      slugdisplay: string;
      imageUri: string;
      symbol: string;
      stats: {
        buyNowPriceNetFees: number;
      };
    }[]
  >([]);

  /** Handle sign up action */
  const tensorOfferActionSchema = z.object({
    collectionId: z.string().min(1),
  });

  const tensorActionForm = useForm<z.infer<typeof tensorOfferActionSchema>>({
    resolver: zodResolver(tensorOfferActionSchema),
    defaultValues: {
      collectionId: "",
    },
  });

  const handleSubmit = tensorActionForm.handleSubmit(async (data) => {
    const { collectionId } = data;

    // TODO: Fix tensor actions

    // await handleAction({
    //   action: { type: actionType, eventConfig },
    //   campaignId,
    //   data: { collectionId },
    //   onComplete,
    //   onError,
    // });
  });

  useEffect(() => {
    async function getCollections() {
      try {
        setIsDataLoading(true);
        const collections = await getTensorCollections(
          eventConfig.collectionIds,
        );

        setCollections(collections ? collections : []);
        tensorActionForm.reset({
          collectionId:
            collections && collections?.length > 0
              ? collections[0]?.collId
              : "",
        });

        setIsDataLoading(false);
      } catch (e) {
        console.error(e);
        setIsDataLoading(false);
        setCollections([]);
      }
    }

    getCollections();
  }, [eventConfig.collectionIds, tensorActionForm]);

  return (
    <Form {...tensorActionForm}>
      {isDataLoading ? (
        <Skeleton className="h-16 w-full" />
      ) : (
        <form onSubmit={handleSubmit}>
          <FormField
            control={tensorActionForm.control}
            name="collectionId"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="h-auto p-4">
                      <SelectValue placeholder="Select Collection">
                        <TensorOfferSelectItem
                          collection={collections.find(
                            (c) => c.collId === field.value,
                          )}
                        />
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {collections.map((collection) => (
                        <SelectItem
                          key={`tensor-offer-select-item-${collection.collId}`}
                          value={collection.collId}
                        >
                          <TensorOfferSelectItem collection={collection} />
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <LoaderCircle className="mr-2 size-4 animate-spin" />
            ) : null}

            {actionType === EventType.TENSOR_BUY ? "Buy" : "Bid"}
          </Button>
        </form>
      )}
    </Form>
  );
}
