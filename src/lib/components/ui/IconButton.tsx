import type {ReactNode} from 'react';

import {cn} from '@/lib/tools/cn';

import type {ButtonProps} from './Button';
import {Button} from './Button';

interface Props extends Omit<ButtonProps, 'size'> {
  readonly icon: ReactNode;
  readonly label: ReactNode;
}

export function IconButton({icon, label, ...restProps}: Props) {
  return (
    <Button {...restProps} size="icon">
      <span className={cn('sr-only')}>{label}</span>
      {icon}
    </Button>
  );
}
