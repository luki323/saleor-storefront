import type {AnyVariables} from '@urql/core';
import {startTransition, useCallback, useRef} from 'react';

import type {PageInfo} from '@/graphql/generated/graphql';
import {isDefined} from '@/lib/tools/is-defined';

import {usePaginationVariables} from './use-pagination-variables';

export function usePaginationActions<QueryVariables extends AnyVariables>(
  ...params: Parameters<typeof usePaginationVariables<QueryVariables>>
) {
  const [data, dispatch] = usePaginationVariables(...params);

  const pageInfoRef = useRef<PageInfo>();

  const currentPageSize =
    'first' in data.currentVariables
      ? data.currentVariables.first
      : data.currentVariables.last;

  const handlePrevPage = useCallback(
    (pageSize: number) => {
      if (pageSize !== currentPageSize) {
        startTransition(() => {
          dispatch({type: 'changePageSize', pageSize});
        });
        return;
      }
      if (!pageInfoRef.current) {
        return;
      }
      const {hasPreviousPage, startCursor} = pageInfoRef.current;

      if (hasPreviousPage && isDefined(startCursor)) {
        startTransition(() => {
          dispatch({type: 'prev', before: startCursor, pageSize});
        });
      }
    },
    [currentPageSize, dispatch],
  );
  const handleNextPage = useCallback(
    (pageSize: number) => {
      if (pageSize !== currentPageSize) {
        startTransition(() => {
          dispatch({type: 'changePageSize', pageSize});
        });
        return;
      }
      if (!pageInfoRef.current) {
        return;
      }
      const {hasNextPage, endCursor} = pageInfoRef.current;

      if (hasNextPage && isDefined(endCursor)) {
        startTransition(() => {
          dispatch({type: 'next', after: endCursor, pageSize});
        });
      }
    },
    [currentPageSize, dispatch],
  );
  const onNextPage = useCallback((pageInfo: PageInfo) => {
    pageInfoRef.current = pageInfo;
  }, []);

  return [data, {handlePrevPage, handleNextPage, onNextPage}] as const;
}
