import {GetProductCursorsDocument} from '@/graphql/generated/documents';
import {fetchGraphQL} from '@/tools/fetch-graphql';

import {PRODUCT_CURSORS_TAG} from '../_consts';

import type {AvailableChannel} from '@/i18n/consts';
import type {FetchCursors} from '@/pagination/types';

export const fetchProductCursors =
  (channel: AvailableChannel): FetchCursors =>
  async (forward) => {
    const {products} = await fetchGraphQL(
      GetProductCursorsDocument,
      {variables: {...forward, channel}},
      {cache: 'force-cache', next: {tags: [PRODUCT_CURSORS_TAG]}},
    );
    if (!products) {
      throw new Error('Products object is missing in the response');
    }
    const {edges} = products;

    return {
      cursors: edges.map(({cursor}) => cursor),
      ...products.pageInfo,
    };
  };
