import {GRAPHQL_ENDPOINT} from '@/env/env';
import type {GetProductsVariables} from '@/graphql/generated/documents';
import {GetProductsDocument} from '@/graphql/generated/documents';
import {Request} from '@/lib/tools/fetch-query';

const PRODUCTS_REVALIDATE_TAG = 'products-revalidate-tag';

export function createGetProductsRequest(variables: GetProductsVariables) {
  return new Request(GRAPHQL_ENDPOINT, {
    params: {
      query: GetProductsDocument,
      variables,
    },
    cache: 'force-cache',
    next: {tags: [PRODUCTS_REVALIDATE_TAG]},
  });
}
