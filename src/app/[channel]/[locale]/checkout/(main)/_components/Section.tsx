import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

export function Section({children}: PropsWithChildren) {
  return <section className={cn('flex flex-col gap-3')}>{children}</section>;
}
