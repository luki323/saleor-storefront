'use client';

import * as LabelPrimitive from '@radix-ui/react-label';
import type {ComponentPropsWithoutRef} from 'react';

import {cn} from '@/lib/tools/cn';

type Props = ComponentPropsWithoutRef<(typeof LabelPrimitive)['Root']>;

export function Label({children, className, htmlFor, id, ...restProps}: Props) {
  return (
    <LabelPrimitive.Root
      htmlFor={htmlFor ?? id}
      className={cn('text-sm font-medium leading-none', className)}
      {...restProps}>
      {children}
    </LabelPrimitive.Root>
  );
}
