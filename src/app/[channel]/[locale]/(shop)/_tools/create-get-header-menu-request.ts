import {GRAPHQL_ENDPOINT} from '@/env/env';
import type {GetHeaderMenuVariables} from '@/graphql/generated/documents';
import {GetHeaderMenuDocument} from '@/graphql/generated/documents';
import {Request} from '@/lib/tools/fetch-query';

export function createGetHeaderMenuRequest(variables: GetHeaderMenuVariables) {
  return new Request(GRAPHQL_ENDPOINT, {
    params: {
      query: GetHeaderMenuDocument,
      variables,
    },
  });
}
