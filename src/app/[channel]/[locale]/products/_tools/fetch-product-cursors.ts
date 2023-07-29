import {GetProductCursorsDocument} from '@/graphql/generated/documents';
import {fetchGraphQL} from '@/tools/fetch-graphql';
import {raise} from '@/tools/raise';

import type {AvailableChannel} from '@/i18n/consts';
import type {FetchCursors} from '@/tools/pagination/types';

export const PRODUCT_CURSORS_TAG = 'product-cursors-tag';

export const fetchProductCursors =
  (channel: AvailableChannel): FetchCursors =>
  async (forward) => {
    const response = await fetchGraphQL(
      GetProductCursorsDocument,
      {variables: {...forward, channel}},
      {cache: 'force-cache', next: {tags: [PRODUCT_CURSORS_TAG]}},
    );
    const products = response.products ?? raise('Products are not defined');
    const cursors = products.edges.map((edge) => edge.cursor);

    return {
      cursors,
      ...products.pageInfo,
    };
  };
