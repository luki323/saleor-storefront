import {FormattedMessage} from 'react-intl';

import type {HeaderDropdownMenuFragment} from '@/graphql/generated/documents';
import {
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from '@/lib/components/ui/DropdownMenu';
import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';
import type {RequiredNonNullable} from '@/lib/types/utils';

import {DropdownItem} from './DropdownItem';

interface Props {
  readonly item: HeaderDropdownMenuFragment &
    RequiredNonNullable<Pick<HeaderDropdownMenuFragment, 'category'>>;
}

export function DropdownItemWithChildren({
  children,
  item,
}: PropsWithChildren<Props>) {
  return (
    <div
      className={cn(
        'flex rounded-sm transition-colors hover:bg-accent hover:text-accent-foreground',
      )}>
      <DropdownItem item={item} />
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>
          <span className={cn('sr-only')}>
            <FormattedMessage
              defaultMessage="Subcategories of {category}"
              id="MOC4lx"
              values={{category: item.category.name}}
            />
          </span>
        </DropdownMenuSubTrigger>
        <DropdownMenuSubContent>{children}</DropdownMenuSubContent>
      </DropdownMenuSub>
    </div>
  );
}
