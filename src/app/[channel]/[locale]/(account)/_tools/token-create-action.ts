'use server';

import type {TokenCreateVariables} from '@/graphql/generated/documents';
import {fetchQueryData} from '@/lib/tools/fetch-query';
import {isDefined} from '@/lib/tools/is-defined';

import {createTokenCreateRequest} from './create-token-create-request';
import {handleLogIn} from './handle-log-in';

export async function tokenCreateAction(variables: TokenCreateVariables) {
  const {tokenCreate} = await fetchQueryData(
    createTokenCreateRequest(variables),
  );
  const {token, refreshToken, csrfToken, errors} = tokenCreate ?? {};

  if (errors?.length) {
    return {
      type: 'error' as const,
      result: errors,
    };
  }
  if (!isDefined(token) || !isDefined(refreshToken) || !isDefined(csrfToken)) {
    throw new Error('Missing token');
  }
  const result = {
    type: 'success' as const,
    result: handleLogIn({token, refreshToken, csrfToken}),
  };
  return result;
}
