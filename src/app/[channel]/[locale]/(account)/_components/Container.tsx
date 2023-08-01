import type {ReactNode} from 'react';

import {cn} from '@/lib/tools/cn';

type Props = {
  readonly children: ReactNode;
};

export function Container({children}: Props) {
  return (
    <div className={cn('flex flex-col items-center text-center')}>
      {children}
    </div>
  );
}
