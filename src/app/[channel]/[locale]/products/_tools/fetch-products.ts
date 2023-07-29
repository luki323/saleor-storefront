import {GetPoductListDocument} from '@/graphql/generated/documents';
import {fetchGraphQL} from '@/tools/fetch-graphql';
import {raise} from '@/tools/raise';

import {fetchProductCursors} from '../_tools/fetch-product-cursors';

import {productCursorsStore} from './product-cursors-store';

import type {AvailableChannel} from '@/i18n/consts';

export async function fetchProducts(
  pageNumber: number,
  pageSize: number,
  channel: AvailableChannel,
) {
  void (await productCursorsStore.loadCursors(fetchProductCursors(channel)));

  const startCursor = productCursorsStore.pageNumberPageSizeToCursor(
    pageNumber,
    pageSize,
  );
  const {products} = await fetchGraphQL(GetPoductListDocument, {
    variables: {
      first: pageSize,
      after: startCursor,
      channel,
    },
  });
  return products ?? raise('Products are not defined');
}
