import {GRAPHQL_ENDPOINT} from '@/env/env';
import type {LogInVariables} from '@/graphql/generated/documents';
import {LogInDocument} from '@/graphql/generated/documents';
import {fetchQueryData} from '@/lib/tools/fetch-query';

export async function logIn(variables: LogInVariables) {
  return await fetchQueryData(GRAPHQL_ENDPOINT, {
    params: {
      query: LogInDocument,
      variables,
    },
    cache: 'no-cache',
  });
}
