import type {ReactNode} from 'react';

import {cn} from '@/lib/tools/cn';

interface Props {
  readonly children: ReactNode;
}

export default function AccountLayout({children}: Props) {
  return (
    <div className={cn('absolute inset-0 flex items-center justify-center')}>
      <div className={cn('flex w-full flex-col gap-4 px-2 sm:w-[350px]')}>
        {children}
      </div>
    </div>
  );
}
