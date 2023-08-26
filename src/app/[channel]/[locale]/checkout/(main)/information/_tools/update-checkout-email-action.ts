'use server';

import {GRAPHQL_ENDPOINT} from '@/env/env';
import type {UpdateCheckoutEmailVariables} from '@/graphql/generated/documents';
import {UpdateCheckoutEmailDocument} from '@/graphql/generated/documents';
import {fetchQueryData} from '@/lib/tools/fetch-query';
import {raise} from '@/lib/tools/raise';
import {getCheckoutId} from '@/modules/checkout/tools/cookies';

export async function updateCheckoutEmailAction(
  email: UpdateCheckoutEmailVariables['email'],
) {
  const id = getCheckoutId() ?? raise('Checkout id is not defined');

  return (
    await fetchQueryData(GRAPHQL_ENDPOINT, {
      params: {
        query: UpdateCheckoutEmailDocument,
        variables: {
          id,
          email,
        },
      },
    })
  ).checkoutEmailUpdate;
}
