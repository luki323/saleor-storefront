import type {ReactNode} from 'react';

import {Text} from '@/lib/components/ui/Text';
import {cn} from '@/lib/tools/cn';

type Props = {
  readonly children: ReactNode;
};

export function Divider({children}: Props) {
  return (
    <div className={cn('relative flex justify-center')}>
      <div className={cn('z-10 bg-white px-2 uppercase')}>
        <Text as="span" color="muted-foreground" size="small">
          {children}
        </Text>
      </div>
      <div className={cn('absolute inset-0 flex items-center')}>
        <span className={cn('w-full border-t')} />
      </div>
    </div>
  );
}
