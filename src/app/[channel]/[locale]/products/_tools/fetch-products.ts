import {GetProductsDocument} from '@/graphql/generated/documents';
import {fetchGraphQL} from '@/tools/fetch-graphql';

import type {GetProductsVariables} from '@/graphql/generated/documents';

export async function fetchProducts(
  variables: GetProductsVariables,
  init?: Omit<RequestInit, 'method'>,
) {
  const {products} = await fetchGraphQL(GetProductsDocument, {variables}, init);
  if (!products) {
    throw new Error('Products object is missing in the response');
  }
  return products;
}

export type FetchProductsResult = Awaited<ReturnType<typeof fetchProducts>>;
