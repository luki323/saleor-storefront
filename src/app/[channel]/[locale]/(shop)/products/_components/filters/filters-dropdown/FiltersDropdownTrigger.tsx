import type {DropdownMenuTriggerProps} from '@radix-ui/react-dropdown-menu';
import {ChevronDown} from 'lucide-react';

import {buttonStyles} from '@/lib/components/ui/Button';
import {cn} from '@/lib/tools/cn';

import * as DropdownMenu from './DropdownMenu';

export function FiltersDropdownTrigger({
  children,
  className,
}: DropdownMenuTriggerProps) {
  return (
    <DropdownMenu.Trigger
      className={cn(
        buttonStyles({variant: 'ghost'}),
        'flex items-center gap-0.5',
        className,
      )}>
      <span>{children}</span>
      <ChevronDown className={cn('h-4 w-4 text-grey')} />
    </DropdownMenu.Trigger>
  );
}
