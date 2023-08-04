'use server';

import type {TokenCreateVariables} from '@/graphql/generated/documents';
import {TokenCreateDocument} from '@/graphql/generated/documents';
import {fetchGraphQL} from '@/lib/tools/fetch-graphql/fetch-graphql';
import {isDefined} from '@/lib/tools/is-defined';

import {logInAction} from './log-in-action';

export async function tokenCreate(variables: TokenCreateVariables) {
  const {token, refreshToken, csrfToken, errors} =
    (
      await fetchGraphQL(
        TokenCreateDocument,
        {
          variables,
        },
        {cache: 'no-cache'},
      )
    ).tokenCreate ?? {};

  if (errors?.length) {
    return {
      type: 'error' as const,
      value: errors,
    };
  }

  if (!isDefined(token) || !isDefined(refreshToken) || !isDefined(csrfToken)) {
    throw new Error(
      `Missing token. Received: ${{token, refreshToken, csrfToken}}`,
    );
  }

  return {
    type: 'success' as const,
    value: await logInAction({token, refreshToken, csrfToken}),
  };
}
