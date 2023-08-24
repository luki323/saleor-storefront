'use client';

import * as CheckboxImpl from '@radix-ui/react-checkbox';
import {CheckIcon} from 'lucide-react';
import type {ComponentPropsWithoutRef} from 'react';

import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

interface Props
  extends Required<
    Pick<
      ComponentPropsWithoutRef<typeof CheckboxImpl.Root>,
      'checked' | 'onCheckedChange'
    >
  > {}

export function Checkbox({
  children,
  checked,
  onCheckedChange,
}: PropsWithChildren<Props>) {
  return (
    <label
      className={cn(
        'flex w-max cursor-pointer select-none items-center gap-2 text-sm text-white',
      )}>
      <CheckboxImpl.Root
        className={cn(
          'flex h-[18px] w-[18px] items-center justify-center rounded border border-faded-black transition-shadow duration-300 ease-out focus:border-blue focus-visible:outline-none focus-visible:ring-2',
          checked &&
            'border-blue shadow-[0_0_0_.7142857142857143em_inset] shadow-blue',
        )}
        checked={checked}
        onCheckedChange={onCheckedChange}>
        <CheckIcon
          size={15}
          className={cn(
            'opacity-0',
            checked && 'opacity-100 transition-opacity',
          )}
        />
      </CheckboxImpl.Root>
      {children}
    </label>
  );
}
