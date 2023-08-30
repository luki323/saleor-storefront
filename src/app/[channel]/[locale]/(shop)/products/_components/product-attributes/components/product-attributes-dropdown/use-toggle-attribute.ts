import {useRouter} from 'next/navigation';

import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';
import {deletePaginationSearchParams} from '@/lib/tools/pagination/delete-pagination-search-params';
import {toggleSearchParam} from '@/lib/tools/toggle-search-param';

export function useToggleAttribute(attributeName: string) {
  const router = useRouter();

  return function toggleAttribute(value: string) {
    const urlSearchParams = deletePaginationSearchParams(
      document.location.search,
    );
    toggleSearchParam(urlSearchParams, attributeName, value);

    router.push(`${formatPathname(APP_ROUTES.PRODUCTS)}?${urlSearchParams}`);
  };
}
