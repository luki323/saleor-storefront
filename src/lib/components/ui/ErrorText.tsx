import type {HTMLAttributes} from 'react';

import {cn} from '@/lib/tools/cn';

type Props = HTMLAttributes<HTMLSpanElement>;

export function ErrorText({
  children,
  ['aria-errormessage']: fallbackChildren,
  ...props
}: Props) {
  return (
    <span
      role="alert"
      className={cn('text-sm leading-none text-destructive')}
      {...props}>
      {children ?? fallbackChildren}
    </span>
  );
}
