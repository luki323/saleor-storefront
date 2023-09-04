import type {FragmentType} from '@/graphql/generated';
import {getFragment, graphql} from '@/graphql/generated';
import {isKeyDefined} from '@/lib/tools/is-key-defined';

import {CategoryDropdown} from './category-dropdown';
import {HeaderMenuLink} from './HeaderMenuLink';

const HeaderMenuItem_MenuItemFragment = graphql(`
  fragment HeaderMenuItem_MenuItemFragment on MenuItem {
    page {
      id
    }
    ...HeaderMenuLink_MenuItemFragment
    ...CategoryDropdown_MenuItemFragment
  }
`);

interface Props {
  readonly item: FragmentType<typeof HeaderMenuItem_MenuItemFragment>;
}

export function HeaderMenuItem(props: Props) {
  const item = getFragment(HeaderMenuItem_MenuItemFragment, props.item);

  return isKeyDefined(item, 'page') ? (
    <HeaderMenuLink item={item} />
  ) : (
    <CategoryDropdown item={item} />
  );
}
