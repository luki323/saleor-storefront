import 'server-only';

import invariant from 'tiny-invariant';

import {GRAPHQL_ENDPOINT} from '@/env';
import type {GetProductsVariables} from '@/graphql/generated/documents';
import {GetProductsDocument} from '@/graphql/generated/documents';
import {translateConnection} from '@/i18n/tools/translate-connection';
import {fetchQueryData} from '@/lib/tools/fetch-query';

export async function getProducts(variables: GetProductsVariables) {
  const {products} = await fetchQueryData(GRAPHQL_ENDPOINT, {
    params: {query: GetProductsDocument, variables},
  });
  invariant(products);

  return {
    products: translateConnection(products),
    pageInfo: products.pageInfo,
  };
}
