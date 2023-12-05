import type {DropdownMenuTriggerProps} from '@radix-ui/react-dropdown-menu';
import {ChevronDown} from 'lucide-react';

import {cn} from '@/lib/tools/cn';

import * as DropdownMenu from './DropdownMenu';

export function FiltersDropdownTrigger({
  children,
  className,
}: DropdownMenuTriggerProps) {
  return (
    <DropdownMenu.Trigger
      className={cn(
        'flex items-center gap-0.5 rounded-md bg-grey px-2 py-1 text-sm text-white shadow-inner',
        className,
      )}>
      <span>{children}</span>
      <ChevronDown className={cn('h-4 w-4 text-white')} />
    </DropdownMenu.Trigger>
  );
}
