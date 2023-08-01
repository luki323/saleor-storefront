import type {ReactNode} from 'react';

import {cn} from '@/lib/tools/cn';

type Props = {
  readonly children: ReactNode;
};

export default function AccountLayout({children}: Props) {
  return (
    <div className={cn('absolute inset-0 bg-zinc-900')}>
      <div
        className={cn(
          'ml-auto flex h-full flex-col items-center justify-center gap-4 bg-white lg:w-1/2',
        )}>
        <div className={cn('flex w-full flex-col gap-4 px-2 lg:w-[350px]')}>
          {children}
        </div>
      </div>
    </div>
  );
}
