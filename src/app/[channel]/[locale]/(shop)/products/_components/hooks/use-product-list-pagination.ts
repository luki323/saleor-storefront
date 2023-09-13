import {startTransition, useCallback, useRef} from 'react';

import type {PageInfo} from '@/graphql/generated/graphql';
import {isDefined} from '@/lib/tools/is-defined';

import type {KeyVariables} from './use-product-list-variables';
import {useProductListVariables} from './use-product-list-variables';

export function useProductListPagination(keyVariables: KeyVariables) {
  const [data, dispatch] = useProductListVariables(keyVariables);

  const pageInfoRef = useRef<PageInfo>();

  const handlePrevPage = useCallback(() => {
    if (!pageInfoRef.current) {
      return;
    }
    const {hasPreviousPage, startCursor} = pageInfoRef.current;

    if (hasPreviousPage && isDefined(startCursor)) {
      startTransition(() => {
        dispatch({type: 'prev', before: startCursor});
      });
    }
  }, [dispatch]);

  const handleNextPage = useCallback(() => {
    if (!pageInfoRef.current) {
      return;
    }
    const {hasNextPage, endCursor} = pageInfoRef.current;

    if (hasNextPage && isDefined(endCursor)) {
      startTransition(() => {
        dispatch({type: 'next', after: endCursor});
      });
    }
  }, [dispatch]);

  const onNextPage = useCallback((pageInfo: PageInfo) => {
    pageInfoRef.current = pageInfo;
  }, []);

  return [data, {handlePrevPage, handleNextPage, onNextPage}] as const;
}
