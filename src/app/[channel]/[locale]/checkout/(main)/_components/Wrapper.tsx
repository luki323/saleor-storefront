import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

export function Wrapper({children}: PropsWithChildren) {
  return <div className={cn('flex flex-col gap-7')}>{children}</div>;
}
