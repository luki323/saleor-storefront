import {DEFAULT_SEARCH_PARAMS, SEARCH_PARAMS} from '../_consts';
import {fetchProducts} from '../_tools/fetch-products';

import {Navigation} from './Navigation';

import type {AvailableChannel} from '@/i18n/consts';

export type ProductListProps = {
  readonly channel: AvailableChannel;
  readonly searchParams: Partial<{
    readonly [SEARCH_PARAMS.PAGE_NUMBER]: string;
    readonly [SEARCH_PARAMS.PAGE_SIZE]: string;
  }>;
};

export async function ProductList({
  channel,
  searchParams: {
    [SEARCH_PARAMS.PAGE_NUMBER]: pageNumberProp,
    [SEARCH_PARAMS.PAGE_SIZE]: pageSizeProp,
  },
}: ProductListProps) {
  const [pageNumber, pageSize] = [
    Number(pageNumberProp ?? DEFAULT_SEARCH_PARAMS.PAGE_NUMBER),
    Number(pageSizeProp ?? DEFAULT_SEARCH_PARAMS.PAGE_SIZE),
  ];
  const {edges} = await fetchProducts(pageNumber, pageSize, channel);

  return (
    <div>
      <ul>
        {edges.map(({node: {id, name}}) => {
          return <li key={id}>{name}</li>;
        })}
      </ul>
      <Navigation currentPage={pageNumber} currentPageSize={pageSize} />
    </div>
  );
}
