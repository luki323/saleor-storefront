import {GRAPHQL_ENDPOINT} from '@/env/env-local';
import type {RefreshAccessTokenVariables} from '@/graphql/generated/documents';
import {RefreshAccessTokenDocument} from '@/graphql/generated/documents';
import {fetchQueryData} from '@/lib/tools/fetch-query';

export async function refreshAccessToken(
  variables: RefreshAccessTokenVariables,
) {
  return await fetchQueryData(GRAPHQL_ENDPOINT, {
    params: {
      query: RefreshAccessTokenDocument,
      variables,
    },
  });
}
