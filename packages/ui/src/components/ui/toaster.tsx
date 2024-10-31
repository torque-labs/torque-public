"use client";

import { useMemo } from "react";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "#/components/ui/toast";
import { useToast, useTorque } from "#/hooks";

export function Toaster() {
  const { toasts } = useToast();
  const { options } = useTorque();

  const isDevnet = useMemo(() => {
    return options?.rpc?.includes("devnet");
  }, [options?.rpc]);

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, signature, ...props }) => {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title ? <ToastTitle>{title}</ToastTitle> : null}
              {description ? (
                <ToastDescription>{description}</ToastDescription>
              ) : null}
              {signature ? (
                <ToastDescription>
                  <u>
                    <a
                      href={`https://solscan.io/tx/${signature}${
                        isDevnet ? "?cluster=devnet" : ""
                      }`}
                      rel="noopener"
                      target="_blank"
                    >
                      View TX on Solscan
                    </a>
                  </u>
                </ToastDescription>
              ) : null}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
