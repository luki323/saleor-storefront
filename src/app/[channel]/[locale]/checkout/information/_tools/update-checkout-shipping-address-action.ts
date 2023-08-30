'use server';

import {GRAPHQL_ENDPOINT} from '@/env';
import type {UpdateCheckoutShippingAddressVariables} from '@/graphql/generated/documents';
import {UpdateCheckoutShippingAddressDocument} from '@/graphql/generated/documents';
import {fetchQueryData} from '@/lib/tools/fetch-query';
import {raise} from '@/lib/tools/raise';
import {getCheckoutId} from '@/modules/checkout/tools/cookies';

export async function updateCheckoutShippingAddressAction(
  shippingAddress: UpdateCheckoutShippingAddressVariables['shippingAddress'],
) {
  const id = getCheckoutId() ?? raise('Checkout id is not defined');

  return (
    await fetchQueryData(GRAPHQL_ENDPOINT, {
      params: {
        query: UpdateCheckoutShippingAddressDocument,
        variables: {
          id,
          shippingAddress,
        },
      },
    })
  ).checkoutShippingAddressUpdate;
}
