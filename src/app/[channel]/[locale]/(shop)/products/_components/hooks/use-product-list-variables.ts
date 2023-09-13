import {useSearchParams} from 'next/navigation';
import {useEffect, useMemo} from 'react';

import type {ProductListItems_ProductsQueryQueryVariables} from '@/graphql/generated/graphql';
import {useIntlRouter} from '@/i18n/hooks/use-intl-router';
import {APP_ROUTES} from '@/lib/consts';
import type {PageVariablesKey} from '@/lib/hooks/use-pagination';
import {usePagination} from '@/lib/hooks/use-pagination';
import {getPaginationSearchParams} from '@/lib/tools/get-pagination-search-params';
import {updatePaginationSearchParam} from '@/lib/tools/update-pagination-search-params';

import {DEFAULT_PAGE_SIZE} from '../../_consts';

export type KeyVariables = Omit<
  ProductListItems_ProductsQueryQueryVariables,
  PageVariablesKey
>;

export function useProductListVariables(keyVariables: KeyVariables) {
  const searchParams = useSearchParams();

  const [data, dispatch] = usePagination(() =>
    getPaginationSearchParams(searchParams, DEFAULT_PAGE_SIZE),
  );
  const urlSearchParams = useMemo(
    () => updatePaginationSearchParam(searchParams, data.currentVariables),
    [data.currentVariables, searchParams],
  );
  useUpdateSearchParmsOnMount(urlSearchParams);

  const currentVariables = useMemo(
    () => ({...data.currentVariables, ...keyVariables}),
    [data.currentVariables, keyVariables],
  );
  const variablesArray = useMemo(
    () =>
      data.variablesArray.map((variables) => ({...variables, ...keyVariables})),
    [data.variablesArray, keyVariables],
  );
  return [{currentVariables, variablesArray}, dispatch] as const;
}

function useUpdateSearchParmsOnMount(urlSearchParams: URLSearchParams) {
  const router = useIntlRouter();

  useEffect(() => {
    router.push(`/${APP_ROUTES.PRODUCTS}/?${urlSearchParams}`);
  }, [router, urlSearchParams]);
}
