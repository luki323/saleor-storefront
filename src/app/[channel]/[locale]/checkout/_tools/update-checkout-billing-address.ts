'use server';

import {GRAPHQL_ENDPOINT} from '@/env/env';
import type {UpdateCheckoutBillingAddressVariables} from '@/graphql/generated/documents';
import {UpdateCheckoutBillingAddressDocument} from '@/graphql/generated/documents';
import {fetchQueryData} from '@/lib/tools/fetch-query';
import {raise} from '@/lib/tools/raise';
import {getCheckoutid} from '@/modules/checkout/tools/checkout-id';

export async function updateCheckoutBillingAddress(
  billingAddress: UpdateCheckoutBillingAddressVariables['billingAddress'],
) {
  const id = getCheckoutid() ?? raise('Checkout id is not defined');

  return (
    await fetchQueryData(GRAPHQL_ENDPOINT, {
      params: {
        query: UpdateCheckoutBillingAddressDocument,
        variables: {
          id,
          billingAddress,
        },
      },
    })
  ).checkoutBillingAddressUpdate;
}
