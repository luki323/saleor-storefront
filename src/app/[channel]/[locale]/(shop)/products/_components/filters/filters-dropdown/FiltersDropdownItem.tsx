import type {MenuCheckboxItemProps} from '@radix-ui/react-dropdown-menu';

import {cn} from '@/lib/tools/cn';

import * as DropdownMenu from './DropdownMenu';

export function FiltersDropdownItem({
  children,
  className,
  ...restProps
}: MenuCheckboxItemProps) {
  return (
    <DropdownMenu.CheckboxItem
      {...restProps}
      className={cn(
        'cursor-pointer rounded-sm px-3 py-2 text-sm hover:bg-grey hover:outline-none',
        className,
      )}>
      {children}
      <DropdownMenu.ItemIndicator />
    </DropdownMenu.CheckboxItem>
  );
}
