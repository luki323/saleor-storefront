'use server';

import type {SignUpVariables} from '@/graphql/generated/documents';
import {SignUpDocument} from '@/graphql/generated/documents';
import {fetchGraphQL} from '@/lib/tools/fetch-graphql/fetch-graphql';

export async function signUpAction(variables: SignUpVariables) {
  return fetchGraphQL(
    SignUpDocument,
    {
      variables,
    },
    {cache: 'no-cache'},
  );
}
