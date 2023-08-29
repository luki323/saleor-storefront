import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

interface Props {
  readonly name: string;
}

export function Section({children, name}: PropsWithChildren<Props>) {
  return (
    <section className={cn('space-y-2')}>
      <h3 className={cn('font-medium')}>{name}</h3>
      {children}
    </section>
  );
}
