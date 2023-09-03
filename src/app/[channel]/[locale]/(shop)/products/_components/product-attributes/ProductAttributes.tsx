import {cn} from '@/lib/tools/cn';

import {PRODUCTS_PAGE_SEARCH_PARAM_NAMES} from '../../_consts';
import {ProductAttributesDropdown} from './components/product-attributes-dropdown';
import {getProductAttributes} from './tools/get-product-attributes';
import {parseSearchParams} from './tools/parse-search-params';

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
  const productAttributes = await getProductAttributes(
    await parseSearchParams(searchParams),
  );

  if (productAttributes.edges.length === 0) {
    return null;
  }
  return (
    <ul className={cn('flex gap-6 pb-4 text-sm')}>
      {productAttributes.edges.map(({node}) => (
        <li key={node.id}>
          <ProductAttributesDropdown attribute={node} />
        </li>
      ))}
    </ul>
  );
}
