import {cn} from '@/lib/tools/cn';

import type {ProductsPageSearchParams} from '../../types';
import {ProductAttributesDropdown} from './components/product-attributes-dropdown';
import {getProductAttributes} from './tools/get-product-attributes';
import {parseSearchParams} from './tools/parse-search-params';

interface Props {
  readonly searchParams: ProductsPageSearchParams;
}

export async function ProductAttributes({searchParams}: Props) {
  if (!searchParams.category && !searchParams.collection) {
    return null;
  }
  const productAttributes = await getProductAttributes(
    await parseSearchParams(searchParams),
  );

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
