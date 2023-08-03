import type {DefaultError, InfiniteData} from '@tanstack/react-query';
import {useSuspenseInfiniteQuery} from '@tanstack/react-query';

import {useChannel} from '@/i18n/channel-context';

import {DEFAULT_SEARCH_PARAMS} from '../_consts/consts';
import {PRODUCTS_QUERY_KEY} from '../_consts/consts';
import type {FetchProductsResult} from '../_tools/fetch-products';
import {fetchProducts} from '../_tools/fetch-products';

export function useInfiniteProductsQuery() {
  const channel = useChannel();

  return useSuspenseInfiniteQuery<
    FetchProductsResult,
    DefaultError,
    InfiniteData<FetchProductsResult>,
    readonly [typeof PRODUCTS_QUERY_KEY],
    string | null
  >({
    defaultPageParam: null,
    queryKey: [PRODUCTS_QUERY_KEY],
    async queryFn({pageParam}) {
      return await fetchProducts(
        {first: DEFAULT_SEARCH_PARAMS.PAGE_SIZE, after: pageParam, channel},
        {cache: 'force-cache'},
      );
    },
    getNextPageParam({pageInfo}) {
      if (!pageInfo.hasNextPage) {
        return undefined;
      }
      return pageInfo.endCursor ?? undefined;
    },
  });
}
