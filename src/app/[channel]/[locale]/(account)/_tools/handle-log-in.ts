import 'server-only';

import {cookies} from 'next/headers';

interface Tokens {
  readonly token: string;
  readonly refreshToken: string;
  readonly csrfToken: string;
}

export function handleLogIn(tokens: Tokens) {
  const tokenNames = Object.keys(tokens) as ReadonlyArray<keyof Tokens>;

  const kvTokens = Object.fromEntries(
    tokenNames.map((name) => [name, {name, value: tokens[name]}]),
  ) as Record<keyof Tokens, {readonly name: string; readonly value: string}>;

  cookies()
    .set(kvTokens.token.name, kvTokens.token.value, {
      httpOnly: true,
      secure: true,
    })
    .set(kvTokens.refreshToken.name, kvTokens.refreshToken.value, {
      httpOnly: true,
      secure: true,
    });

  return kvTokens.csrfToken;
}
