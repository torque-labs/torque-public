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
  const { config } = useTorque();

  const isDevnet = useMemo(() => {
    return config?.rpc?.includes("devnet");
  }, [config?.rpc]);

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, signature, ...props }) => {
        return (
          <Toast key={id} {...props}>
            <div className="torque-grid torque-gap-1">
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
