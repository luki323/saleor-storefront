'use client';

import {useTransition} from 'react';

import {FormattedMessage} from '@/i18n/components/FormattedMessage';
import {Button} from '@/lib/components/ui/Button';

import {useInfiniteProductsQuery} from '../_hooks/use-infinite-products-query';

export function LoadMoreButton() {
  const {fetchNextPage, hasNextPage} = useInfiniteProductsQuery();
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      variant="ghost"
      disabled={!hasNextPage || isPending}
      onClick={() => startTransition(async () => void (await fetchNextPage()))}>
      <FormattedMessage defaultMessage="Load more" id="00LcfG" />
    </Button>
  );
}
