'use client';

import {useTransition} from 'react';

import {FormattedMessage} from '@/i18n/components/FormattedMessage';

import {useInfiniteProductsQuery} from '../_hooks/use-infinite-products-query';

export function LoadMoreButton() {
  const {fetchNextPage, hasNextPage} = useInfiniteProductsQuery();
  const [isPending, startTransition] = useTransition();

  return (
    <button
      disabled={!hasNextPage || isPending}
      onClick={() => {
        startTransition(() => {
          fetchNextPage();
        });
      }}>
      <FormattedMessage defaultMessage="Load more" id="00LcfG" />
    </button>
  );
}
