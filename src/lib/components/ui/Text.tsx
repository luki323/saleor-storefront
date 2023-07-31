import {cva} from 'cva';

import {cn} from '@/lib/tools/cn';

import type {VariantProps} from 'cva';

const styles = cva('', {
  variants: {
    size: {
      small: 'text-sm',
      base: 'text-base',
      large: 'text-lg',
    },
    color: {
      'muted-foreground': 'text-muted-foreground',
    },
    error: {
      true: 'text-red-600',
    },
  },
  defaultVariants: {
    size: 'base',
    error: false,
  },
});

type As = keyof Pick<JSX.IntrinsicElements, 'p' | 'span'>;

type Props = {
  readonly as?: As;
} & VariantProps<typeof styles> &
  Pick<JSX.IntrinsicElements[As], 'id' | 'children'>;

export function Text({
  as: As = 'p',
  children,
  size,
  error,
  color,
  ...restProps
}: Props) {
  return (
    <As
      role={error ? 'alert' : undefined}
      className={cn(
        styles({
          size,
          error,
          color,
        }),
      )}
      {...restProps}>
      {children}
    </As>
  );
}
