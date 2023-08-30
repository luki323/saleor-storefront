'use client';

import {Fragment} from 'react';
import invariant from 'tiny-invariant';

import type {HeaderDropdownMenuFragment} from '@/graphql/generated/documents';
import {DropdownMenuSeparator} from '@/lib/components/ui/DropdownMenu';
import {isKeyDefined} from '@/lib/tools/is-key-defined';
import type {RequiredNonNullable} from '@/lib/types/utils';

import {DropdownItem} from './components/DropdownItem';
import {DropdownItemWithChildren} from './components/DropdownItemWithChildren';

export interface CategoryDropdownItemProps {
  readonly item: HeaderDropdownMenuFragment &
    RequiredNonNullable<Pick<HeaderDropdownMenuFragment, 'category'>>;
}

export function CategoryDropdownItem({item}: CategoryDropdownItemProps) {
  return !item.children?.length ? (
    <DropdownItem item={item} />
  ) : (
    <DropdownItemWithChildren item={item}>
      {item.children.map((item, i) => {
        invariant(isKeyDefined(item, 'category'));

        return (
          <Fragment key={item.id}>
            {Boolean(i) && <DropdownMenuSeparator />}
            <CategoryDropdownItem item={item} />
          </Fragment>
        );
      })}
    </DropdownItemWithChildren>
  );
}
