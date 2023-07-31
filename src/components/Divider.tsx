import {Text} from '@/components/Text';

import type {ReactNode} from 'react';

type Props = {
  readonly children: ReactNode;
};

export function Divider({children}: Props) {
  return (
    <div className="relative flex justify-center">
      <div className="z-10 bg-white px-2 uppercase">
        <Text as="span" color="muted-foreground" size="small">
          {children}
        </Text>
      </div>
      <div className="absolute inset-0 flex items-center">
        <span className="w-full border-t" />
      </div>
    </div>
  );
}
