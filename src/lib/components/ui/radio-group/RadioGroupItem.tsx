'use client';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import {Circle} from 'lucide-react';
import type {ComponentPropsWithoutRef} from 'react';

import {cn} from '@/lib/tools/cn';

export function RadioGroupItem({
  className,
  ...restProps
}: ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      className={cn(
        'aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...restProps}>
      <RadioGroupPrimitive.Indicator
        className={cn('flex items-center justify-center')}>
        <Circle className={cn('h-2.5 w-2.5 fill-current text-current')} />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
}
