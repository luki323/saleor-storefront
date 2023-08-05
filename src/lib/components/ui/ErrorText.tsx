import type {HTMLAttributes} from 'react';

import {cn} from '@/lib/tools/cn';

type Props = HTMLAttributes<HTMLSpanElement>;

export function ErrorText({children, ...restProps}: Props) {
  return (
    <span
      role="alert"
      className={cn('text-sm text-destructive')}
      {...restProps}>
      {children}
    </span>
  );
}
