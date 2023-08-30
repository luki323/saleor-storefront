'use server';

import {GRAPHQL_ENDPOINT} from '@/env';
import type {RequestEmailChangeVariables} from '@/graphql/generated/documents';
import {RequestEmailChangeDocument} from '@/graphql/generated/documents';
import {fetchQueryData} from '@/lib/tools/fetch-query';
import {getAccessToken} from '@/modules/account/tools/cookies';

export async function requestEmailChangeAction(
  variables: RequestEmailChangeVariables,
) {
  const accessToken = getAccessToken();

  return (
    await fetchQueryData(GRAPHQL_ENDPOINT, {
      params: {
        query: RequestEmailChangeDocument,
        variables,
      },
      headers: {
        ...(accessToken?.value && {
          Authorization: `Bearer ${accessToken.value}`,
        }),
      },
      cache: 'no-cache',
    })
  ).requestEmailChange;
}
