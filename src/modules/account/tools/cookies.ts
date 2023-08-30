import 'server-only';

import type {serialize} from 'cookie';
import * as jose from 'jose';
import {cookies} from 'next/headers';

import {CLOUD_ORIGIN} from '@/env';
import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';

import {COOKIE_NAMES} from '../consts';

export function getAccessToken() {
  return cookies().get(COOKIE_NAMES.ACCESS_TOKEN);
}

export function hasAccessToken() {
  return cookies().has(COOKIE_NAMES.ACCESS_TOKEN);
}

export async function createAccessToken(value: string) {
  const JWKS = jose.createRemoteJWKSet(
    new URL(`${CLOUD_ORIGIN}/.well-known/jwks.json`),
  );

  try {
    const {
      payload: {exp, iat},
    } = await jose.jwtVerify(value, JWKS);

    return [
      COOKIE_NAMES.ACCESS_TOKEN,
      value,
      {
        secure: true,
        path: formatPathname(APP_ROUTES.ROOT),
        httpOnly: true,
        sameSite: 'lax',
        ...(typeof exp === 'number' &&
          typeof iat === 'number' && {maxAge: exp - iat}),
      },
    ] satisfies Parameters<typeof serialize>;
  } catch (error) {
    return null;
  }
}

export async function setAccessToken(value: string) {
  const accessToken = await createAccessToken(value);

  if (accessToken) {
    cookies().set(...accessToken);
  }
}

export function createRefreshToken(value: string) {
  return [
    COOKIE_NAMES.REFRESH_TOKEN,
    value,
    {
      secure: true,
      httpOnly: true,
      sameSite: 'strict',
      path: formatPathname(...APP_ROUTES.API.REFRESH),
    },
  ] satisfies Parameters<typeof serialize>;
}

export function setRefreshToken(value: string) {
  cookies().set(...createRefreshToken(value));
}

export function deleteAllCookies() {
  Object.values(COOKIE_NAMES).forEach((name) => cookies().delete(name));
}
