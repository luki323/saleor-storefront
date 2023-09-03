import {GRAPHQL_ENDPOINT} from '@/env/env-local';
import type {RequestPasswordResetVariables} from '@/graphql/generated/documents';
import {RequestPasswordResetDocument} from '@/graphql/generated/documents';
import {fetchQueryData} from '@/lib/tools/fetch-query';

export async function requestPasswordReset(
  variables: RequestPasswordResetVariables,
) {
  return await fetchQueryData(GRAPHQL_ENDPOINT, {
    params: {
      query: RequestPasswordResetDocument,
      variables,
    },
  });
}
