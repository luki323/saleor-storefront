import type {ReactNode} from 'react';

import {cn} from '@/lib/tools/cn';

interface Props {
  readonly children: ReactNode;
}

export function Heading({children}: Props) {
  return <h1 className={cn('text-2xl font-bold')}>{children}</h1>;
}
