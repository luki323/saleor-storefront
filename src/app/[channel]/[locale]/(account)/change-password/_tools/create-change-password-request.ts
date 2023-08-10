import {GRAPHQL_ENDPOINT} from '@/env/env';
import type {ChangePasswordVariables} from '@/graphql/generated/documents';
import {ChangePasswordDocument} from '@/graphql/generated/documents';
import {Request} from '@/lib/tools/fetch-query';

export function createChangePasswordRequest(
  variables: ChangePasswordVariables,
) {
  return new Request(GRAPHQL_ENDPOINT, {
    params: {
      query: ChangePasswordDocument,
      variables,
    },
    cache: 'no-cache',
  });
}
