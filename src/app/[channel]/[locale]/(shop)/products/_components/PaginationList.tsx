import {getChannel} from '@/i18n/tools/get-channel';

import {cursorsStore} from '../_tools/cursors-store';
import {fetchProducts} from '../_tools/fetch-products';
import type {ParsedSearchParams} from '../_types/types';
import {ProductList} from './ui/ProductList';

type Props = Pick<ParsedSearchParams, 'pageNumber' | 'pageSize'>;

export async function PaginationList({pageNumber, pageSize}: Props) {
  const channel = getChannel();
  const after = cursorsStore.pageNumberPageSizeToCursor(pageNumber, pageSize);
  const {edges} = await fetchProducts({first: pageSize, after, channel});

  const products = edges.map(({node}) => node);

  return <ProductList products={products} />;
}
