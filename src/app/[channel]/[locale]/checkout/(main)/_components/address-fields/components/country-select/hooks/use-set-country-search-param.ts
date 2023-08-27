import {usePathname, useSearchParams} from 'next/navigation';
import {useCallback, useTransition} from 'react';

import {useIntlRouter} from '@/i18n/hooks/use-intl-router';
import {formatPathname} from '@/lib/tools/format-pathname';
import {splitPathname} from '@/lib/tools/split-pathname';

export const COUNTRY_SEARCH_PARAM_NAME = 'country';

export function useSetCountrySearchParam() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const intlRouter = useIntlRouter();
  const [routeIsPending, startTransition] = useTransition();

  return {
    routeIsPending,
    setCountrySearchParam: useCallback(
      (value: string) => {
        const newSearchParams = new URLSearchParams(searchParams.toString());

        newSearchParams.set(COUNTRY_SEARCH_PARAM_NAME, value);

        startTransition(() => {
          intlRouter.push(
            formatPathname(...splitPathname(pathname).slice(2)) +
              '?' +
              newSearchParams.toString(),
          );
          intlRouter.refresh();
        });
      },
      [intlRouter, pathname, searchParams],
    ),
  };
}
