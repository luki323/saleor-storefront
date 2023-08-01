import type {VariantProps} from 'cva';
import {cva} from 'cva';
import type {ButtonHTMLAttributes} from 'react';

import {cn} from '@/lib/tools/cn';

export const buttonStyles = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:select-none',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        default: 'h-10 px-4 py-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

type Props = VariantProps<typeof buttonStyles> &
  ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({variant, size, children, ...restProps}: Props) {
  return (
    <button className={cn(buttonStyles({variant, size}))} {...restProps}>
      {children}
    </button>
  );
}
