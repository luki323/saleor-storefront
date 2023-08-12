import {GRAPHQL_ENDPOINT} from '@/env/env';
import type {GetProductsVariables} from '@/graphql/generated/documents';
import {GetProductsDocument} from '@/graphql/generated/documents';
import {fetchQueryData} from '@/lib/tools/fetch-query';

const PRODUCTS_REVALIDATE_TAG = 'products-revalidate-tag';

export async function getProducts(variables: GetProductsVariables) {
  return await fetchQueryData(GRAPHQL_ENDPOINT, {
    params: {
      query: GetProductsDocument,
      variables,
    },
    cache: 'force-cache',
    next: {tags: [PRODUCTS_REVALIDATE_TAG]},
  });
}
