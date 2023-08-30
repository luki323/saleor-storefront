import {GRAPHQL_ENDPOINT} from '@/env';
import type {ConfirmEmailChangeVariables} from '@/graphql/generated/documents';
import {ConfirmEmailChangeDocument} from '@/graphql/generated/documents';
import {fetchQueryData} from '@/lib/tools/fetch-query';
import {getAccessToken} from '@/modules/account/tools/cookies';

export async function confirmEmailChange(
  variables: ConfirmEmailChangeVariables,
) {
  const accessToken = getAccessToken();

  return await fetchQueryData(GRAPHQL_ENDPOINT, {
    params: {
      query: ConfirmEmailChangeDocument,
      variables,
    },
    headers: {
      ...(accessToken?.value && {Authorization: `Bearer ${accessToken.value}`}),
    },
  });
}
