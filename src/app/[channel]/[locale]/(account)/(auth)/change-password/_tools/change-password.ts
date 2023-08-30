import {GRAPHQL_ENDPOINT} from '@/env';
import type {ChangePasswordVariables} from '@/graphql/generated/documents';
import {ChangePasswordDocument} from '@/graphql/generated/documents';
import {fetchQueryData} from '@/lib/tools/fetch-query';

export async function changePassword(variables: ChangePasswordVariables) {
  return await fetchQueryData(GRAPHQL_ENDPOINT, {
    params: {
      query: ChangePasswordDocument,
      variables,
    },
    cache: 'no-cache',
  });
}
