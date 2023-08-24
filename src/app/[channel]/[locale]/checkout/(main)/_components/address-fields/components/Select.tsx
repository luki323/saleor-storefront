'use client';

import * as SelectPrimitive from '@radix-ui/react-select';
import {CheckIcon, ChevronDownIcon} from 'lucide-react';
import type {ComponentPropsWithoutRef} from 'react';
import * as React from 'react';

import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

export const Select = SelectPrimitive.Root;

export const SelectValue = SelectPrimitive.Value;

export function SelectTrigger({children}: PropsWithChildren) {
  return (
    <SelectPrimitive.Trigger
      className={cn(
        'flex h-fit w-full flex-col items-start justify-start rounded-md border border-faded-black px-2.5 py-2 text-sm leading-tight text-white outline-none transition-all focus-within:border-blue focus-within:shadow-[0_0_0_1px] focus-within:shadow-blue',
      )}>
      <div className={cn('flex w-full items-center justify-between')}>
        <div className={cn('flex flex-col items-start')}>{children}</div>
        <div>
          <ChevronDownIcon size={15} />
        </div>
      </div>
    </SelectPrimitive.Trigger>
  );
}

export function SelectPlaceholder({children}: PropsWithChildren) {
  return (
    <span className={cn('text-xs leading-tight text-grey-foreground')}>
      {children}
    </span>
  );
}

export function SelectContent({children}: PropsWithChildren) {
  return (
    <SelectPrimitive.Content
      className={cn(
        'z-50 min-w-[var(--radix-select-trigger-width)] rounded-md border border-faded-black bg-black p-1 text-white shadow-md data-[side=bottom]:translate-y-1 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      )}
      position="popper">
      {children}
    </SelectPrimitive.Content>
  );
}

type SelectItemProps = Pick<
  ComponentPropsWithoutRef<typeof SelectPrimitive.Item>,
  'value' | 'children'
>;

export function SelectItem({children, value}: SelectItemProps) {
  return (
    <SelectPrimitive.Item
      value={value}
      className={cn(
        'flex cursor-default select-none items-center rounded-sm py-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground',
      )}>
      <SelectPrimitive.ItemIndicator>
        <CheckIcon size={15} />
      </SelectPrimitive.ItemIndicator>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}
