'use server';

import invariant from 'tiny-invariant';

import type {ChangePasswordVariables} from '@/graphql/generated/documents';
import {CSRF_TOKEN_NAME} from '@/lib/consts';
import {setAccessToken, setRefreshToken} from '@/lib/tools/cookies';

import {changePassword} from './change-password';

export async function changePasswordAction(variables: ChangePasswordVariables) {
  const {setPassword} = await changePassword(variables);
  const {token, refreshToken, csrfToken, errors} = setPassword ?? {};

  if (errors?.length) {
    return {
      type: 'error' as const,
      result: errors,
    };
  }
  invariant(token && refreshToken && csrfToken, 'Missing token');

  setAccessToken(token);
  setRefreshToken(refreshToken);

  return {
    type: 'success' as const,
    result: {
      name: CSRF_TOKEN_NAME,
      value: csrfToken,
    },
  };
}
