import type {ReactNode} from 'react';

import {cn} from '@/lib/tools/cn';

interface Props {
  readonly title: ReactNode;
}

export function NavLinksTitle({title}: Props) {
  return <h4 className={cn('text-xs text-grey')}>{title}</h4>;
}
