import type {AnyVariables} from '@urql/core';
import {useSearchParams} from 'next/navigation';
import {useEffect, useMemo} from 'react';

import {useIntlRouter} from '@/i18n/hooks/use-intl-router';
import {APP_ROUTES} from '@/lib/consts';
import {usePagination} from '@/lib/hooks/use-pagination';
import {getPaginationSearchParams} from '@/lib/tools/get-pagination-search-params';
import {updatePaginationSearchParam} from '@/lib/tools/update-pagination-search-params';

export function usePaginationVariables<QueryVariables extends AnyVariables>({
  queryVariables,
  defaultPageSize,
  updateSearchParams,
}: {
  readonly queryVariables: QueryVariables;
  readonly defaultPageSize: number;
  readonly updateSearchParams: boolean;
}) {
  const searchParams = useSearchParams();

  const [data, dispatch] = usePagination(() =>
    getPaginationSearchParams(searchParams, defaultPageSize),
  );
  const newSearchParams = useMemo(
    () => updatePaginationSearchParam(searchParams, data.currentVariables),
    [data.currentVariables, searchParams],
  );
  useUpdateSearchParmsOnMount({
    newSearchParams,
    shouldUpdate: updateSearchParams,
  });

  const currentVariables = useMemo(
    () => ({...data.currentVariables, ...queryVariables}),
    [data.currentVariables, queryVariables],
  );
  const variablesArray = useMemo(
    () =>
      data.variablesArray.map((variables) => ({
        ...variables,
        ...queryVariables,
      })),
    [data.variablesArray, queryVariables],
  );

  return [{currentVariables, variablesArray}, dispatch] as const;
}

function useUpdateSearchParmsOnMount({
  newSearchParams,
  shouldUpdate,
}: {
  readonly newSearchParams: URLSearchParams;
  readonly shouldUpdate: boolean;
}) {
  const router = useIntlRouter();

  useEffect(() => {
    if (shouldUpdate) {
      router.push(`/${APP_ROUTES.PRODUCTS}/?${newSearchParams}`);
    }
  }, [router, newSearchParams, shouldUpdate]);
}
