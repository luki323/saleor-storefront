import type {FragmentType} from '@/graphql/generated';
import {getFragment, graphql} from '@/graphql/generated';
import {applyTranslation} from '@/i18n/tools/apply-translation';

import {FiltersDropdownItem} from '../filters-dropdown/FiltersDropdownItem';

const CollectionDropdownItem_CategoryFragment = graphql(`
  fragment CollectionDropdownItem_CategoryFragment on Collection {
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
  readonly collection: FragmentType<
    typeof CollectionDropdownItem_CategoryFragment
  >;
}

export function CollectionDropdownItem({collection}: Props) {
  const {name, id} = applyTranslation(
    getFragment(CollectionDropdownItem_CategoryFragment, collection),
  );
  return <FiltersDropdownItem key={id}>{name}</FiltersDropdownItem>;
}
