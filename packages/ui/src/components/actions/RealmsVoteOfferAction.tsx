import { zodResolver } from "@hookform/resolvers/zod";
import { LinkedAction } from "@solana/actions";
import {
  realmsVoteGet,
  RealmsVoteAction,
  EventType,
} from "@torque-labs/torque-utils";
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
import { OfferActionProps, useAction } from "@/lib/hooks/use-action";

type RealmsVoteOfferActionProps = OfferActionProps & {
  eventConfig: RealmsVoteAction;
};

export function RealmsVoteOfferAction({
  campaignId,
  isLoading,
  eventConfig,
  onSubmit,
}: RealmsVoteOfferActionProps) {
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [options, setOptions] = useState<LinkedAction[]>([]);
  const [description, setDescription] = useState<string>();

  const actionSchema = z.object({
    optionIndex: z.string().min(1),
  });

  const actionForm = useForm<z.infer<typeof actionSchema>>({
    resolver: zodResolver(actionSchema),
    defaultValues: {
      optionIndex: "0",
    },
  });

  const handleSubmit = async ({
    optionIndex,
  }: z.infer<typeof actionSchema>) => {
    try {
      if (onSubmit) {
        await onSubmit({ voteIndex: optionIndex });
      }
    } catch (error) {
      console.error(error);

      throw new Error("Failed to submit click.");
    }
  };

  useEffect(() => {
    async function getRealmsData() {
      try {
        setIsDataLoading(true);
        const blink = await realmsVoteGet(
          {
            daoPubKey: eventConfig.daoPubKey,
            proposalPubKey: eventConfig.proposalPubKey,
          },
          campaignId,
          "TorqueProtocol",
        );

        setOptions(blink.links?.actions ?? []);
        setDescription(blink.description ?? "");

        setIsDataLoading(false);
      } catch (e) {
        console.error(e);
        setIsDataLoading(false);
        setOptions([]);
      }
    }

    getRealmsData();
  }, [campaignId, eventConfig.daoPubKey, eventConfig.proposalPubKey]);

  return (
    <Form {...actionForm}>
      {isDataLoading ? (
        <Skeleton className="h-16 w-full" />
      ) : options?.length === 0 ? (
        <p className="rounded-md border border-yellow-500 bg-yellow-800/40 p-4 text-center text-yellow-400">
          Voting not available.
        </p>
      ) : (
        <form onSubmit={actionForm.handleSubmit(handleSubmit)}>
          {description ? (
            <p className="mb-4 text-muted">{description}</p>
          ) : null}
          <FormField
            control={actionForm.control}
            name="optionIndex"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Option">
                        {field.value || "Select Option"}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {options.map((option, idx) => (
                        <SelectItem key={option.label} value={idx.toString()}>
                          {option.label}
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
            Submit
          </Button>
        </form>
      )}
    </Form>
  );
}
