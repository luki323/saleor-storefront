import {GRAPHQL_ENDPOINT} from '@/env';
import type {ConfirmAccountVariables} from '@/graphql/generated/documents';
import {ConfirmAccountDocument} from '@/graphql/generated/documents';
import {fetchQueryData} from '@/lib/tools/fetch-query';

export async function confirmAccount(variables: ConfirmAccountVariables) {
  return await fetchQueryData(GRAPHQL_ENDPOINT, {
    params: {
      query: ConfirmAccountDocument,
      variables,
    },
  });
}
