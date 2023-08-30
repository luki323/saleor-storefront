import {useRouter} from 'next/navigation';

import {APP_ROUTES} from '@/lib/consts';
import {createSearchParams} from '@/lib/tools/create-search-params';
import {formatPathname} from '@/lib/tools/format-pathname';
import {isDefined} from '@/lib/tools/is-defined';
import {PAGINATION_KEYS} from '@/lib/tools/pagination/consts';
import {deletePaginationSearchParams} from '@/lib/tools/pagination/delete-pagination-search-params';
import {toggleSearchParam} from '@/lib/tools/toggle-search-param';

export function useToggleAttribute(attributeName: string) {
  const router = useRouter();

  return function toggleAttribute(value: string) {
    const searchParams = createSearchParams(document.location.search);

    toggleSearchParam(searchParams, attributeName, value);

    const pageSize =
      searchParams.get(PAGINATION_KEYS.FIRST) ??
      searchParams.get(PAGINATION_KEYS.LAST);

    deletePaginationSearchParams(searchParams);

    if (isDefined(pageSize)) {
      searchParams.append(PAGINATION_KEYS.FIRST, pageSize);
    }
    router.push(`${formatPathname(APP_ROUTES.PRODUCTS)}?${searchParams}`);
  };
}
