import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

export function Container({children}: PropsWithChildren) {
  return (
    <div className={cn('flex flex-col items-center text-center')}>
      {children}
    </div>
  );
}
