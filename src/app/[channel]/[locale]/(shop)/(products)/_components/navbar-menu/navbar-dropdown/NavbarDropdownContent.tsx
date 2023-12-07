'use client';

import type {FragmentType} from '@/graphql/generated';
import {getFragment, graphql} from '@/graphql/generated';
import {arrayChunks} from '@/lib/tools/array-chunks';
import {cn} from '@/lib/tools/cn';

import * as DropdownMenu from './DropdownMenu';
import {NavbarDropdownColumn} from './NavbarDropdownColumn';
import {NavbarDropdownItem} from './NavbarDropdownItem';

const NavbarDropdownContent_MenuItemFragment = graphql(`
  fragment NavbarDropdownContent_MenuItemFragment on MenuItem {
    page {
      slug
    }
    children {
      id
      ...NavbarDropdownItem_MenuItemFragment
    }
  }
`);

interface Props {
  readonly menuItem: FragmentType<
    typeof NavbarDropdownContent_MenuItemFragment
  >;
}

const COL_SIZE = 8;

export function NavbarDropdownContent({menuItem}: Props) {
  const item = getFragment(NavbarDropdownContent_MenuItemFragment, menuItem);

  return (
    <DropdownMenu.Content
      className={cn(
        'rounded-md border border-grey bg-black bg-opacity-90 px-7 py-6 text-white shadow-lg backdrop-blur-md',
      )}
      sideOffset={8}
      align="start">
      <DropdownMenu.RadioGroup className={cn('flex gap-8')}>
        {item.children &&
          arrayChunks(item.children, COL_SIZE).map((col, idx) => (
            <NavbarDropdownColumn key={idx}>
              {col.map((item) => (
                <NavbarDropdownItem key={item.id} menuItem={item} />
              ))}
            </NavbarDropdownColumn>
          ))}
      </DropdownMenu.RadioGroup>
      <DropdownMenu.Arrow className={cn('z-50 h-2.5 w-5 fill-black')} />
    </DropdownMenu.Content>
  );
}
