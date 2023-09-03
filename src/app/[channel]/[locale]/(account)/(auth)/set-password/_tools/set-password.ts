import {GRAPHQL_ENDPOINT} from '@/env/env-local';
import type {SetPasswordVariables} from '@/graphql/generated/documents';
import {SetPasswordDocument} from '@/graphql/generated/documents';
import {fetchQueryData} from '@/lib/tools/fetch-query';

export async function setPassword(variables: SetPasswordVariables) {
  return (
    await fetchQueryData(GRAPHQL_ENDPOINT, {
      params: {
        query: SetPasswordDocument,
        variables,
      },
      cache: 'no-cache',
    })
  ).setPassword;
}
