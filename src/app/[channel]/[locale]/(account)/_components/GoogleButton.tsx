import type {ReactNode} from 'react';

import {Button} from '@/lib/components/ui/Button';
import {Icons} from '@/lib/components/ui/Icons';
import {cn} from '@/lib/tools/cn';

type Props = {
  readonly children: ReactNode;
};

export function GoogleButton({children}: Props) {
  return (
    <Button variant="outline">
      <Icons.google className={cn('mr-2 h-4 w-4')} />
      {children}
    </Button>
  );
}
