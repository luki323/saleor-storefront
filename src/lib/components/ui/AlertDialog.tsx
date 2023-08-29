'use client';

import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import type {VariantProps} from 'cva';
import type {ComponentPropsWithoutRef} from 'react';

import {cn} from '@/lib/tools/cn';

import {buttonStyles} from './Button';

export const AlertDialog = AlertDialogPrimitive.Root;

export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

type AlertDialogPortalProps = AlertDialogPrimitive.AlertDialogPortalProps;

function AlertDialogPortal({className, ...restProps}: AlertDialogPortalProps) {
  return (
    <AlertDialogPrimitive.Portal className={cn(className)} {...restProps} />
  );
}

type AlertDialogOverlayProps = ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Overlay
>;

function AlertDialogOverlay({
  className,
  ...restProps
}: AlertDialogOverlayProps) {
  return (
    <AlertDialogPrimitive.Overlay
      className={cn(
        'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        className,
      )}
      {...restProps}
    />
  );
}

type AlertDialogContentProps = ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Content
>;

export function AlertDialogContent({
  className,
  ...restProps
}: AlertDialogContentProps) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        className={cn(
          'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full',
          className,
        )}
        {...restProps}
      />
    </AlertDialogPortal>
  );
}

type AlertDialogHeaderProps = React.HTMLAttributes<HTMLDivElement>;

export function AlertDialogHeader({
  className,
  ...restProps
}: AlertDialogHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col space-y-2 text-center sm:text-left',
        className,
      )}
      {...restProps}
    />
  );
}

type AlertDialogFooter = React.HTMLAttributes<HTMLDivElement>;

export function AlertDialogFooter({
  className,
  ...restProps
}: AlertDialogFooter) {
  return (
    <div
      className={cn(
        'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
        className,
      )}
      {...restProps}
    />
  );
}

type AlertDialogTitleProps = ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Title
>;

export function AlertDialogTitle({
  className,
  ...restProps
}: AlertDialogTitleProps) {
  return (
    <AlertDialogPrimitive.Title
      className={cn('text-lg font-semibold', className)}
      {...restProps}
    />
  );
}

type AlertDialogDescriptionProps = ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Description
>;

export function AlertDialogDescription({
  className,
  ...restProps
}: AlertDialogDescriptionProps) {
  return (
    <AlertDialogPrimitive.Description
      className={cn('text-sm text-muted-foreground', className)}
      {...restProps}
    />
  );
}

type AlertDialogActionProps = ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Action
> &
  VariantProps<typeof buttonStyles>;

export function AlertDialogAction({
  className,
  variant,
  ...restProps
}: AlertDialogActionProps) {
  return (
    <AlertDialogPrimitive.Action
      className={cn(buttonStyles({variant}), className)}
      {...restProps}
    />
  );
}

type AlertDialogCancelProps = ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Cancel
>;

export function AlertDialogCancel({
  className,
  ...restProps
}: AlertDialogCancelProps) {
  return (
    <AlertDialogPrimitive.Cancel
      className={cn(
        buttonStyles({variant: 'outline'}),
        'mt-2 sm:mt-0',
        className,
      )}
      {...restProps}
    />
  );
}
