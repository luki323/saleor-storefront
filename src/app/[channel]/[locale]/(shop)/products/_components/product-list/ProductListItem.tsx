import type {FragmentType} from '@/graphql/generated';
import {getFragment, graphql} from '@/graphql/generated';
import {applyTranslation} from '@/i18n/tools/apply-translation';
import {cn} from '@/lib/tools/cn';

const ProductListItem_ProductFragment = graphql(/* GraphQL */ `
  fragment ProductListItem_ProductFragment on Product {
    __typename
    id
    name
    translation(languageCode: $languageCode) {
      __typename
      id
      name
    }
  }
`);

interface Props {
  readonly product: FragmentType<typeof ProductListItem_ProductFragment>;
}

export function ProductListItem({product}: Props) {
  const {name} = applyTranslation(
    getFragment(ProductListItem_ProductFragment, product),
  );

  return (
    <li className={cn('flex flex-col-reverse')}>
      <h4>{name}</h4>
    </li>
  );
}
