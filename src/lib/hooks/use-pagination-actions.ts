import type {AnyVariables} from '@urql/core';
import {startTransition, useCallback, useState} from 'react';

import type {PageInfo} from '@/graphql/generated/graphql';
import {isDefined} from '@/lib/tools/is-defined';

import {usePaginationVariables} from './use-pagination-variables';

export function usePaginationActions<QueryVariables extends AnyVariables>(
  ...params: Parameters<typeof usePaginationVariables<QueryVariables>>
) {
  const [data, dispatch] = usePaginationVariables(...params);

  const [pageInfo, setPageInfo] = useState<PageInfo>();

  const handlePrevPage = useCallback(() => {
    if (!pageInfo) {
      return;
    }
    const {hasPreviousPage, startCursor} = pageInfo;

    if (hasPreviousPage && isDefined(startCursor)) {
      startTransition(() => {
        dispatch({type: 'prev', before: startCursor});
      });
    }
  }, [dispatch, pageInfo]);

  const handleNextPage = useCallback(() => {
    if (!pageInfo) {
      return;
    }
    const {hasNextPage, endCursor} = pageInfo;

    if (hasNextPage && isDefined(endCursor)) {
      startTransition(() => {
        dispatch({type: 'next', after: endCursor});
      });
    }
  }, [dispatch, pageInfo]);

  const onNextPage = useCallback((pageInfo: PageInfo) => {
    setPageInfo(pageInfo);
  }, []);

  return [
    {...data, pageInfo},
    {handlePrevPage, handleNextPage, onNextPage},
  ] as const;
}
