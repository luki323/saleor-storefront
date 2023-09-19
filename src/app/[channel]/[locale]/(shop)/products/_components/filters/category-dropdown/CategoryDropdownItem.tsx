import type {FragmentType} from '@/graphql/generated';
import {getFragment, graphql} from '@/graphql/generated';
import {applyTranslation} from '@/i18n/tools/apply-translation';

import {FiltersDropdownItem} from '../filters-dropdown/FiltersDropdownItem';

const CategoryDropdownItem_CategoryFragment = graphql(`
  fragment CategoryDropdownItem_CategoryFragment on Category {
    __typename
    id
    name
    translation(languageCode: $languageCode) {
      name
    }
    slug
  }
`);

interface Props {
  readonly category: FragmentType<typeof CategoryDropdownItem_CategoryFragment>;
}

export function CategoryDropdownItem({category}: Props) {
  const {name, id} = applyTranslation(
    getFragment(CategoryDropdownItem_CategoryFragment, category),
  );
  return <FiltersDropdownItem key={id}>{name}</FiltersDropdownItem>;
}
