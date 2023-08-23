import 'server-only';

import invariant from 'tiny-invariant';

import {GRAPHQL_ENDPOINT} from '@/env/env';
import type {GetProductsVariables} from '@/graphql/generated/documents';
import {GetProductsDocument} from '@/graphql/generated/documents';
import {withTranslation} from '@/i18n/tools/with-translation';
import {fetchQueryData} from '@/lib/tools/fetch-query';

export async function getProducts(variables: GetProductsVariables) {
  const {products} = await fetchQueryData(GRAPHQL_ENDPOINT, {
    params: {query: GetProductsDocument, variables},
  });
  invariant(products);

  const {edges, pageInfo} = products;

  return {
    products: edges.map(({node}) => {
      const {collections, ...restProps} = withTranslation(node);
      invariant(collections);

      return {
        collections: collections.map(withTranslation),
        ...restProps,
      };
    }),
    pageInfo,
  };
}
