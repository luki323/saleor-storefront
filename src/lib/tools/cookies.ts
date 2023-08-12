import 'server-only';

import type {serialize} from 'cookie';
import {cookies} from 'next/headers';

import {APP_ROUTES} from '@/lib/consts';
import {COOKIE_NAMES} from '@/lib/consts';

import {formatPathname} from './format-pathname';

export function createAccessToken(value: string) {
  return [
    COOKIE_NAMES.ACCESS_TOKEN,
    value,
    {secure: true, path: '/', httpOnly: true, sameSite: 'lax'},
  ] satisfies Parameters<typeof serialize>;
}

export function setAccessToken(value: string) {
  cookies().set(...createAccessToken(value));
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
