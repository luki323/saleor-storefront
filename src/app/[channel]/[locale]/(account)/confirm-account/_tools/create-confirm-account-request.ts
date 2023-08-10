import {GRAPHQL_ENDPOINT} from '@/env/env';
import type {ConfirmAccountVariables} from '@/graphql/generated/documents';
import {ConfirmAccountDocument} from '@/graphql/generated/documents';
import {Request} from '@/lib/tools/fetch-query';

export function createConfirmAccountRequest(
  variables: ConfirmAccountVariables,
) {
  return new Request(GRAPHQL_ENDPOINT, {
    params: {
      query: ConfirmAccountDocument,
      variables,
    },
  });
}
