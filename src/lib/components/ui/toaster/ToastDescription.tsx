import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

export function ToastDescription({children}: PropsWithChildren) {
  return (
    <span
      className={cn('text-sm opacity-90 group-[.destructive]:text-white')}
      role="alert">
      {children}
    </span>
  );
}
