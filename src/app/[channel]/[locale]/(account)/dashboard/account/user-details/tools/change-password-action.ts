'use server';

import {GRAPHQL_ENDPOINT} from '@/env/env-local';
import type {ChangePasswordVariables} from '@/graphql/generated/documents';
import {ChangePasswordDocument} from '@/graphql/generated/documents';
import {fetchQueryData} from '@/lib/tools/fetch-query';
import {getAccessToken} from '@/modules/account/tools/cookies';

export async function changePasswordAction(variables: ChangePasswordVariables) {
  const accessToken = getAccessToken();

  return (
    await fetchQueryData(GRAPHQL_ENDPOINT, {
      params: {
        query: ChangePasswordDocument,
        variables,
      },
      headers: {
        ...(accessToken?.value && {
          Authorization: `Bearer ${accessToken.value}`,
        }),
      },
      cache: 'no-cache',
    })
  ).passwordChange;
}
