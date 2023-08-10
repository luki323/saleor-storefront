'use server';

import type {ChangePasswordVariables} from '@/graphql/generated/documents';
import {fetchQueryData} from '@/lib/tools/fetch-query';
import {isDefined} from '@/lib/tools/is-defined';

import {handleLogIn} from '../../_tools/handle-log-in';
import {createChangePasswordRequest} from './create-change-password-request';

export async function changePasswordAction(variables: ChangePasswordVariables) {
  const {setPassword} = await fetchQueryData(
    createChangePasswordRequest(variables),
  );
  const {token, refreshToken, csrfToken, errors} = setPassword ?? {};

  if (errors?.length) {
    return {
      type: 'error' as const,
      result: errors,
    };
  }
  if (!isDefined(token) || !isDefined(refreshToken) || !isDefined(csrfToken)) {
    throw new Error('Missing token');
  }
  return {
    type: 'success' as const,
    result: handleLogIn({token, refreshToken, csrfToken}),
  };
}
