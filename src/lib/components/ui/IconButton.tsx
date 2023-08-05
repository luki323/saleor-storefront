import type {ReactNode} from 'react';
import type {PropsWithChildren} from 'react';

import {cn} from '@/lib/tools/cn';

import type {ButtonProps} from './Button';
import {Button} from './Button';

export interface IconButtonProps extends Omit<ButtonProps, 'size'> {
  readonly label: ReactNode;
}

export function IconButton({
  children,
  label,
  ...restProps
}: PropsWithChildren<IconButtonProps>) {
  return (
    <Button {...restProps} size="icon">
      <span className={cn('sr-only')}>{label}</span>
      {children}
    </Button>
  );
}
