import {GRAPHQL_ENDPOINT} from '@/env/env';
import type {RequestPasswordResetVariables} from '@/graphql/generated/documents';
import {RequestPasswordResetDocument} from '@/graphql/generated/documents';
import {Request} from '@/lib/tools/fetch-query';

export function createRequestPasswordResetRequest(
  variables: RequestPasswordResetVariables,
) {
  return new Request(GRAPHQL_ENDPOINT, {
    params: {
      query: RequestPasswordResetDocument,
      variables,
    },
  });
}
