"use client";

import * as React from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "lucide-react";

import { cn } from "#/lib/utils";

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "torque-fixed torque-top-0 torque-z-[100] torque-flex torque-max-h-screen torque-w-full torque-flex-col-reverse torque-p-4 sm:torque-bottom-0 sm:torque-right-0 sm:torque-top-auto sm:torque-flex-col md:torque-max-w-[420px]",
      className,
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  "torque-group torque-pointer-events-auto torque-relative torque-flex torque-w-full torque-items-center torque-justify-between torque-space-x-4 torque-overflow-hidden torque-rounded-md torque-border torque-p-6 torque-pr-8 torque-shadow-lg torque-transition-all data-[swipe=cancel]:torque-translate-x-0 data-[swipe=end]:torque-translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:torque-translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:torque-transition-none data-[state=open]:torque-animate-in data-[state=closed]:torque-animate-out data-[swipe=end]:torque-animate-out data-[state=closed]:torque-fade-out-80 data-[state=closed]:torque-slide-out-to-right-full data-[state=open]:torque-slide-in-from-top-full data-[state=open]:sm:torque-slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "torque-border torque-bg-background torque-text-foreground",
        destructive:
          "torque-destructive torque-group torque-border-destructive torque-bg-destructive torque-text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "torque-inline-flex torque-h-8 torque-shrink-0 torque-items-center torque-justify-center torque-rounded-md torque-border torque-bg-transparent torque-px-3 torque-text-sm torque-font-medium torque-ring-offset-background torque-transition-colors hover:torque-bg-secondary focus:torque-outline-none focus:torque-ring-2 focus:torque-ring-ring focus:torque-ring-offset-2 disabled:torque-pointer-events-none disabled:torque-opacity-50 group-[.destructive]:torque-border-muted/40 group-[.destructive]:hover:torque-border-destructive/30 group-[.destructive]:hover:torque-bg-destructive group-[.destructive]:hover:torque-text-destructive-foreground group-[.destructive]:focus:torque-ring-destructive",
      className,
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "torque-absolute torque-right-2 torque-top-2 torque-rounded-md torque-p-1 torque-text-foreground/50 torque-opacity-0 torque-transition-opacity hover:torque-text-foreground focus:torque-opacity-100 focus:torque-outline-none focus:torque-ring-2 group-hover:torque-opacity-100 group-[.destructive]:torque-text-red-300 group-[.destructive]:hover:torque-text-red-50 group-[.destructive]:focus:torque-ring-red-400 group-[.destructive]:focus:torque-ring-offset-red-600",
      className,
    )}
    toast-close=""
    {...props}
  >
    <X className="torque-h-4 torque-w-4" />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("torque-text-sm torque-font-semibold", className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("torque-text-sm torque-opacity-90", className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
