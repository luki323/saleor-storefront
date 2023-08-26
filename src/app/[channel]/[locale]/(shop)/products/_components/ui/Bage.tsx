import type {VariantProps} from 'cva';
import {cva} from 'cva';

import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

type Props = VariantProps<typeof styles>;

const styles = cva(
  'rounded-md bg-primary-foreground/80 w-fit box-decoration-clone backdrop-blur-md px-2 py-1',
  {
    variants: {
      variant: {
        outline: 'border border-input',
      },
    },
  },
);

export function Badge({variant, children}: PropsWithChildren<Props>) {
  return <span className={cn(styles({variant}))}>{children}</span>;
}
