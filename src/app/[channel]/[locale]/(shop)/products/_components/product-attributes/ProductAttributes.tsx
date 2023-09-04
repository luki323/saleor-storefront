import {graphql} from '@/graphql/generated';
import {cn} from '@/lib/tools/cn';
import {fetchQueryData} from '@/lib/tools/get-client';

import {PRODUCTS_PAGE_SEARCH_PARAM_NAMES} from '../../_consts';
import {ProductAttributesDropdown} from './components/product-attributes-dropdown';
import {parseSearchParams} from './tools/parse-search-params';

const ProductAttributes_AttributesQuery = graphql(`
  query ProductAttributes_AttributesQuery(
    $where: AttributeWhereInput
    $channel: String
    $languageCode: LanguageCodeEnum!
  ) {
    attributes(first: 16, where: $where, channel: $channel) {
      edges {
        node {
          id
          ...ProductAttributesDropdown_AttributeFragment
        }
      }
    }
  }
`);

interface Props {
  readonly searchParams: URLSearchParams;
}

export async function ProductAttributes({searchParams}: Props) {
  if (
    !searchParams.has(PRODUCTS_PAGE_SEARCH_PARAM_NAMES.CATEGORY) &&
    !searchParams.has(PRODUCTS_PAGE_SEARCH_PARAM_NAMES.COLLECTION)
  ) {
    return null;
  }
  const {attributes} = await fetchQueryData(
    ProductAttributes_AttributesQuery,
    await parseSearchParams(searchParams),
  );

  if (!attributes || attributes.edges.length === 0) {
    return null;
  }
  return (
    <ul className={cn('flex gap-6 pb-4 text-sm')}>
      {attributes.edges.map(({node}) => (
        <li key={node.id}>
          <ProductAttributesDropdown attribute={node} />
        </li>
      ))}
    </ul>
  );
}
