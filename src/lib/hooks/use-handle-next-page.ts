import {experimental_useEffectEvent as useEffectEvent, useEffect} from 'react';
import type {UnionToIntersection} from 'type-fest';

import type {PageInfo} from '@/graphql/generated/graphql';

import type {usePaginationActions} from './use-pagination-actions';

export function useHandleNextPage({
  pageInfo,
  ...actions
}: {
  readonly pageInfo?: PageInfo;
} & Pick<
  UnionToIntersection<ReturnType<typeof usePaginationActions>[number]>,
  'onNextPage'
>) {
  const onNextPage = useEffectEvent(actions.onNextPage);

  useEffect(() => {
    if (pageInfo) {
      onNextPage(pageInfo);
    }
  }, [onNextPage, pageInfo]);
}
