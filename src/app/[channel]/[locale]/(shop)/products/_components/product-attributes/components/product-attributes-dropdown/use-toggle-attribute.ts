import {useRouter} from 'next/navigation';

import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';
import {deleteCursorsParam} from '@/lib/tools/pagination/delete-cursors-param';
import {toggleSearchParam} from '@/lib/tools/toggle-search-param';

import {PRODUCTS_PREFIX} from '../../../pagination/consts';

export function useToggleAttribute(searchParamName: string) {
  const router = useRouter();

  return function toggleAttribute(slug: string) {
    const searchParams = new URLSearchParams(document.location.search);
    deleteCursorsParam(searchParams, PRODUCTS_PREFIX);
    toggleSearchParam(searchParams, searchParamName, slug);

    router.push(`${formatPathname(APP_ROUTES.PRODUCTS)}?${searchParams}`);
  };
}
