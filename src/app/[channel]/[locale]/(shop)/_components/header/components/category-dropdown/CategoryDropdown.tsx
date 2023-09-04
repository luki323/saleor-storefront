import {Fragment} from 'react';

import type {FragmentType} from '@/graphql/generated';
import {getFragment, graphql} from '@/graphql/generated';
import {applyTranslation} from '@/i18n/tools/apply-translation';
import {Button} from '@/lib/components/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/lib/components/ui/DropdownMenu';
import {cn} from '@/lib/tools/cn';

import {CategoryDropdownItem} from './CategoryDropdownItem';

const CategoryDropdown_MenuItemFragment = graphql(`
  fragment CategoryDropdown_MenuItemFragment on MenuItem {
    name
    translation(languageCode: $languageCode) {
      name
    }
    children {
      id
      ...CategoryDropdownItem_MenuItemFragment
    }
  }
`);

interface Props {
  readonly item: FragmentType<typeof CategoryDropdown_MenuItemFragment>;
}

export function CategoryDropdown(props: Props) {
  const {name, children} = applyTranslation(
    getFragment(CategoryDropdown_MenuItemFragment, props.item),
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={cn('hover:bg-input')}>
        <Button variant="ghost">{name}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {children?.map((item, idx) => (
          <Fragment key={item.id}>
            {idx !== 0 && <DropdownMenuSeparator />}
            <CategoryDropdownItem item={item} />
          </Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
