import {GRAPHQL_ENDPOINT} from '@/env/env';
import type {TokenCreateVariables} from '@/graphql/generated/documents';
import {TokenCreateDocument} from '@/graphql/generated/documents';
import {Request} from '@/lib/tools/fetch-query';

export function createTokenCreateRequest(variables: TokenCreateVariables) {
  return new Request(GRAPHQL_ENDPOINT, {
    params: {
      query: TokenCreateDocument,
      variables,
    },
    cache: 'no-cache',
  });
}
