'use client';

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import type {ComponentPropsWithoutRef} from 'react';

import {cn} from '@/lib/tools/cn';

export function RadioGroup({
  className,
  ...restProps
}: ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      className={cn('grid gap-2', className)}
      {...restProps}
    />
  );
}
