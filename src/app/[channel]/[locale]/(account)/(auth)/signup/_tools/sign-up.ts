import {GRAPHQL_ENDPOINT} from '@/env/env';
import type {SignUpVariables} from '@/graphql/generated/documents';
import {SignUpDocument} from '@/graphql/generated/documents';
import {fetchQueryData} from '@/lib/tools/fetch-query';

export async function signUp(variables: SignUpVariables) {
  return await fetchQueryData(GRAPHQL_ENDPOINT, {
    params: {
      query: SignUpDocument,
      variables,
    },
  });
}
