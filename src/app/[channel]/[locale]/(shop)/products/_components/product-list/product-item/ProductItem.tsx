import type {FragmentType} from '@/graphql/generated';
import {getFragment, graphql} from '@/graphql/generated';
import {applyTranslation} from '@/i18n/tools/apply-translation';

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
  const productData = applyTranslation(
    getFragment(ProductItem_ProductFragment, product),
  );
  return (
    <li>
      <h4>{productData.name}</h4>
    </li>
  );
}
