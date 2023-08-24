import {useSearchParams} from 'next/navigation';
import {useCallback, useTransition} from 'react';

import {useIntlRouter} from '@/i18n/hooks/use-intl-router';
import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';

export const COUNTRY_SEARCH_PARAM_NAME = 'country';

export function useSetCountrySearchParam() {
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
            formatPathname(...APP_ROUTES.CHECKOUT.INFORMATION) +
              '?' +
              newSearchParams.toString(),
          );
          intlRouter.refresh();
        });
      },
      [intlRouter, searchParams],
    ),
  };
}
