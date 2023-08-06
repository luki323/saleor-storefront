'use server';

import type {TokenCreateVariables} from '@/graphql/generated/documents';
import {TokenCreateDocument} from '@/graphql/generated/documents';
import {fetchGraphQL} from '@/lib/tools/fetch-graphql';
import {isDefined} from '@/lib/tools/is-defined';

import {handleLogIn} from './handle-log-in';

export async function tokenCreateAction(variables: TokenCreateVariables) {
  const {token, refreshToken, csrfToken, errors} =
    (await fetchGraphQL(TokenCreateDocument, {variables}, {cache: 'no-cache'}))
      .tokenCreate ?? {};

  if (errors?.length) {
    return {
      type: 'error' as const,
      result: errors,
    };
  }

  if (!isDefined(token) || !isDefined(refreshToken) || !isDefined(csrfToken)) {
    throw new Error(
      `Missing token. Received: ${{token, refreshToken, csrfToken}}`,
    );
  }

  return {
    type: 'success' as const,
    result: handleLogIn({token, refreshToken, csrfToken}),
  };
}
