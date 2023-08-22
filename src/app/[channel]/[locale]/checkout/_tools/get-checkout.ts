import {GRAPHQL_ENDPOINT} from '@/env/env';
import type {GetCheckoutVariables} from '@/graphql/generated/documents';
import {GetCheckoutDocument} from '@/graphql/generated/documents';
import {fetchQueryData} from '@/lib/tools/fetch-query';

import {toPartialAddressSchema} from './to-partial-address-schema';

export async function getCheckout(variables: GetCheckoutVariables) {
  const {billingAddress, shippingAddress} =
    (
      await fetchQueryData(GRAPHQL_ENDPOINT, {
        params: {
          query: GetCheckoutDocument,
          variables,
        },
        cache: 'no-cache',
      })
    ).checkout ?? {};

  return {
    ...(billingAddress && {
      billingAddress: toPartialAddressSchema(billingAddress),
    }),
    ...(shippingAddress && {
      shippingAddress: toPartialAddressSchema(shippingAddress),
    }),
  };
}
