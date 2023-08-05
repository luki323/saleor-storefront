'use client';

import {useCallback, useTransition} from 'react';

import {FormattedMessage} from '@/i18n/react-intl';
import {Button} from '@/lib/components/ui/Button';

import {useInfiniteProductsQuery} from '../_hooks/use-infinite-products-query';

function useLoadMore() {
  const {fetchNextPage, hasNextPage} = useInfiniteProductsQuery();
  const [isPending, startTransition] = useTransition();

  const loadMore = useCallback(
    () => startTransition(async () => void (await fetchNextPage())),
    [fetchNextPage],
  );
  return {
    disabled: !hasNextPage || isPending,
    loadMore,
  };
}

export function LoadMoreButton() {
  const {disabled, loadMore} = useLoadMore();

  return (
    <Button onClick={loadMore} disabled={disabled} variant="ghost">
      <FormattedMessage defaultMessage="Load more" id="00LcfG" />
    </Button>
  );
}
