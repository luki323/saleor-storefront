import {GRAPHQL_ENDPOINT} from '@/env/env';
import type {GetHeaderMenuVariables} from '@/graphql/generated/documents';
import {GetHeaderMenuDocument} from '@/graphql/generated/documents';
import {fetchQueryData} from '@/lib/tools/fetch-query';

export async function getHeaderMenu(variables: GetHeaderMenuVariables) {
  return await fetchQueryData(GRAPHQL_ENDPOINT, {
    params: {
      query: GetHeaderMenuDocument,
      variables,
    },
  });
}
