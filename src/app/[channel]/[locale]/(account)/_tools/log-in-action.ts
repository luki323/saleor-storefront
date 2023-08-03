'use server';

import {cookies} from 'next/headers';

import {
  TokenCreateDocument,
  type TokenCreateVariables,
} from '@/graphql/generated/documents';
import {fetchGraphQL} from '@/lib/tools/fetch-graphql/fetch-graphql';
import {isDefined} from '@/lib/tools/is-defined';

export async function logInAction(variables: TokenCreateVariables) {
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

  const tokens = {
    token,
    refreshToken,
    csrfToken,
  };

  const tokenNames = Object.keys(tokens) as ReadonlyArray<keyof typeof tokens>;

  const kvTokens = Object.fromEntries(
    tokenNames.map((name) => [name, {name, value: tokens[name]}]),
  ) as Record<
    (typeof tokenNames)[number],
    {readonly name: string; readonly value: string}
  >;

  cookies()
    .set(kvTokens.token.name, kvTokens.token.value, {
      httpOnly: true,
      secure: true,
    })
    .set(kvTokens.refreshToken.name, kvTokens.refreshToken.value, {
      httpOnly: true,
      secure: true,
    });

  return {
    type: 'csrfToken' as const,
    value: kvTokens.csrfToken,
  };
}
