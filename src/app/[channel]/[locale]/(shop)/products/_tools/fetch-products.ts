import type {GetProductsVariables} from '@/graphql/generated/documents';
import {GetProductsDocument} from '@/graphql/generated/documents';
import {fetchGraphQL} from '@/lib/tools/fetch-graphql/fetch-graphql';

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
