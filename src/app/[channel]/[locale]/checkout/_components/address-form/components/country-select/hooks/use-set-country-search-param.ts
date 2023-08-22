import {usePathname, useRouter, useSearchParams} from 'next/navigation';
import {useCallback} from 'react';

export const COUNTRY_SEARCH_PARAM_NAME = 'country';

export function useSetCountrySearchParam() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return useCallback(
    (value: string) => {
      const newSearchParams = new URLSearchParams(searchParams.toString());

      newSearchParams.set(COUNTRY_SEARCH_PARAM_NAME, value);

      router.push(pathname + '?' + newSearchParams.toString());
      router.refresh();
    },
    [pathname, router, searchParams],
  );
}
