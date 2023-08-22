import {useSuspenseInfiniteQuery} from '@tanstack/react-query';
import {useSearchParams} from 'next/navigation';

import {useBasePath} from '@/i18n/hooks/use-base-path';
import {localeToLangCode} from '@/i18n/tools/locale-to-lang-code';
import {getKeyByHookName} from '@/lib/tools/get-key-by-hook-name';

import {DEFAULT_PAGE_SIZE} from '../_consts';
import {fetchProducts} from '../_tools/fetch-products';

export function useInfiniteProductsQuery() {
  const [channel, locale] = useBasePath();

  const searchParams = useSearchParams();
  const searchValue = searchParams.get('search') ?? '';

  return useSuspenseInfiniteQuery({
    defaultPageParam: null,
    queryKey: [getKeyByHookName(useInfiniteProductsQuery.name), searchValue],
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
