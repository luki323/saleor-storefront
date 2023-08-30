import {Fragment} from 'react';
import invariant from 'tiny-invariant';

import type {HeaderDropdownMenuFragment} from '@/graphql/generated/documents';
import {Button} from '@/lib/components/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/lib/components/ui/DropdownMenu';
import {cn} from '@/lib/tools/cn';
import {isKeyDefined} from '@/lib/tools/is-key-defined';

import {CategoryDropdownItem} from './CategoryDropdownItem';

interface Props {
  readonly item: HeaderDropdownMenuFragment;
}

export function CategoryDropdown({item}: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={cn('hover:bg-input')}>
        <Button variant="ghost">{item.name}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {item.children?.map((item, i) => {
          invariant(isKeyDefined(item, 'category'));

          return (
            <Fragment key={item.id}>
              {Boolean(i) && <DropdownMenuSeparator />}
              <CategoryDropdownItem item={item} />
            </Fragment>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
