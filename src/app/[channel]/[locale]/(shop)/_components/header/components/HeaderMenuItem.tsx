import type {HeaderMenuItemFragment} from '@/graphql/generated/documents';
import {isKeyDefined} from '@/lib/tools/is-key-defined';

import {CategoryDropdown} from './category-dropdown';
import {HeaderMenuLink} from './HeaderMenuLink';

interface Props {
  readonly item: HeaderMenuItemFragment;
}

export function HeaderMenuItem({item}: Props) {
  return isKeyDefined(item, 'page') ? (
    <HeaderMenuLink item={item} />
  ) : (
    <CategoryDropdown item={item} />
  );
}
