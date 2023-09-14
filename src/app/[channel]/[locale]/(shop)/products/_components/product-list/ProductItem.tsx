import type {FragmentType} from '@/graphql/generated';
import {getFragment, graphql} from '@/graphql/generated';
import {applyTranslation} from '@/i18n/tools/apply-translation';
import {cn} from '@/lib/tools/cn';

const ProductItem_ProductFragment = graphql(/* GraphQL */ `
  fragment ProductItem_ProductFragment on Product {
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
  readonly product: FragmentType<typeof ProductItem_ProductFragment>;
}

export function ProductItem({product}: Props) {
  const {name} = applyTranslation(
    getFragment(ProductItem_ProductFragment, product),
  );

  return (
    <li className={cn('flex flex-col-reverse')}>
      <h4>{name}</h4>
    </li>
  );
}
