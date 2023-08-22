'use server';

import {GRAPHQL_ENDPOINT} from '@/env/env';
import type {UpdateCheckoutShippingAddressVariables} from '@/graphql/generated/documents';
import {UpdateCheckoutShippingAddressDocument} from '@/graphql/generated/documents';
import {fetchQueryData} from '@/lib/tools/fetch-query';
import {raise} from '@/lib/tools/raise';
import {getCheckoutid} from '@/modules/checkout/tools/checkout-id';

export async function updateCheckoutShippingAddress(
  shippingAddress: UpdateCheckoutShippingAddressVariables['shippingAddress'],
) {
  const id = getCheckoutid() ?? raise('Checkout id is not defined');

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
