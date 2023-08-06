import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

export function ToastTitle({children}: PropsWithChildren) {
  return (
    <span
      className={cn('text-sm font-semibold group-[.destructive]:text-white')}
      role="alert">
      {children}
    </span>
  );
}
