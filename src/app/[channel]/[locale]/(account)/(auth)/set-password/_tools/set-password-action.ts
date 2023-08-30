'use server';

import invariant from 'tiny-invariant';

import type {SetPasswordVariables} from '@/graphql/generated/documents';
import {CSRF_TOKEN_NAME} from '@/modules/account/consts';
import {setAccessToken, setRefreshToken} from '@/modules/account/tools/cookies';

import {setPassword} from './set-password';

export async function setPasswordAction(variables: SetPasswordVariables) {
  const {token, refreshToken, csrfToken, errors} =
    (await setPassword(variables)) ?? {};

  if (errors?.length) {
    return {
      type: 'error' as const,
      result: errors,
    };
  }
  invariant(token && refreshToken && csrfToken, 'Missing token');

  await setAccessToken(token);
  setRefreshToken(refreshToken);

  return {
    type: 'success' as const,
    result: {
      name: CSRF_TOKEN_NAME,
      value: csrfToken,
    },
  };
}
