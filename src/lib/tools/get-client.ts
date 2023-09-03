import {createClient, fetchExchange} from '@urql/core';
import {registerUrql} from '@urql/next/rsc';

import {GRAPHQL_ENDPOINT} from '@/env/env-local';

function makeClient() {
  return createClient({
    url: GRAPHQL_ENDPOINT,
    exchanges: [fetchExchange],
  });
}

export const {getClient} = registerUrql(makeClient);
