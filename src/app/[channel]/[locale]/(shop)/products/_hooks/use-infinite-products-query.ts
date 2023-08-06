import {useSuspenseInfiniteQuery} from '@tanstack/react-query';
import {useSearchParams} from 'next/navigation';

import {useChannel} from '@/i18n/context/channel-context';
import {useLocale} from '@/i18n/context/locale-context';
import {localeToLangCode} from '@/i18n/tools/locale-to-lang-code';

import {DEFAULT_PAGE_SIZE} from '../_consts';
import {PRODUCTS_QUERY_KEY} from '../_consts';
import {fetchProducts} from '../_tools/fetch-products';

export function useInfiniteProductsQuery() {
  const channel = useChannel();
  const locale = useLocale();

  const searchParams = useSearchParams();
  const searchValue = searchParams.get('search') ?? '';

  return useSuspenseInfiniteQuery({
    defaultPageParam: null,
    queryKey: [searchValue, PRODUCTS_QUERY_KEY],
    async queryFn({pageParam}: {readonly pageParam: string | null}) {
      const languageCode = localeToLangCode(locale);

      return await fetchProducts({
        first: DEFAULT_PAGE_SIZE,
        after: pageParam,
        filter: {search: searchValue},
        channel,
        languageCode,
      });
    },
    getNextPageParam({pageInfo}) {
      if (!pageInfo.hasNextPage) {
        return undefined;
      }
      return pageInfo.endCursor ?? undefined;
    },
  });
}
