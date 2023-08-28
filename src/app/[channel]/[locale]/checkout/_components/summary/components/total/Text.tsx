import type {VariantProps} from 'cva';
import {cva} from 'cva';

import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

type Props = VariantProps<typeof styles>;

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
