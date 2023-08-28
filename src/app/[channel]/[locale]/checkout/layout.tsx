import './styles/globals.css';

import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

import {Summary} from './_components/summary';

export default function CheckoutLayout({children}: PropsWithChildren) {
  return (
    <div className={cn('grid h-full grid-cols-[56%_44%]')}>
      <main className={cn('flex justify-end pb-5 pl-24 pr-16 pt-14')}>
        <div className={cn('w-[570px]')}>{children}</div>
      </main>
      <aside
        className={cn(
          'flex border-l border-faded-black pb-5 pl-11 pr-24 pt-14',
        )}>
        <div className={cn('w-[420px]')}>
          <Summary />
        </div>
      </aside>
    </div>
  );
}
