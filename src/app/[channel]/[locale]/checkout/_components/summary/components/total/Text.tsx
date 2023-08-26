import type {VariantProps} from 'cva';
import {cva} from 'cva';

import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

interface Props extends VariantProps<typeof styles> {
  readonly large?: boolean;
}

const styles = cva('text-sm text-white', {
  variants: {
    large: {
      true: 'text-base font-semibold',
    },
  },
});

export function Text({children, large}: PropsWithChildren<Props>) {
  return <p className={cn(styles({large}))}>{children}</p>;
}
