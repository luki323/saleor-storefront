'use client';

import {Fragment} from 'react';

import type {FragmentType} from '@/graphql/generated';
import {getFragment, graphql} from '@/graphql/generated';
import {DropdownMenuSeparator} from '@/lib/components/ui/DropdownMenu';

import {DropdownItem} from './components/DropdownItem';
import {DropdownItemWithChildren} from './components/DropdownItemWithChildren';

const CategoryDropdownItem_MenuItemFragment = graphql(`
  fragment CategoryDropdownItem_MenuItemFragment on MenuItem {
    ...DropdownItem_MenuItemFragment
    ...DropdownItemWithChildren_MenuItemFragment
    children {
      id
      ...DropdownItem_MenuItemFragment
      ...DropdownItemWithChildren_MenuItemFragment
      children {
        id
        ...DropdownItem_MenuItemFragment
        ...DropdownItemWithChildren_MenuItemFragment
      }
    }
  }
`);

interface Props {
  readonly item: FragmentType<typeof CategoryDropdownItem_MenuItemFragment>;
}

export function CategoryDropdownItem(props: Props) {
  const item = getFragment(CategoryDropdownItem_MenuItemFragment, props.item);

  return !item.children?.length ? (
    <DropdownItem item={item} />
  ) : (
    <DropdownItemWithChildren item={item}>
      {item.children.map((item, idx) => (
        <Fragment key={item.id}>
          {Boolean(idx) && <DropdownMenuSeparator />}
          {/* @ts-expect-error https://github.com/graphql/graphql-spec/issues/91#issuecomment-254895093 */}
          <CategoryDropdownItem item={item} />
        </Fragment>
      ))}
    </DropdownItemWithChildren>
  );
}
