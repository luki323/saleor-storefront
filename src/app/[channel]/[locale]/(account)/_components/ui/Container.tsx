import type {PropsWithChildren} from 'react';

import {cn} from '@/lib/tools/cn';

export function Container({children}: PropsWithChildren) {
  return (
    <div className={cn('flex flex-col items-center text-center')}>
      {children}
    </div>
  );
}
