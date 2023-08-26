import {GRAPHQL_ENDPOINT} from '@/env/env';
import type {GetCheckoutVariables} from '@/graphql/generated/documents';
import {GetCheckoutDocument} from '@/graphql/generated/documents';
import {fetchQueryData} from '@/lib/tools/fetch-query';

import {toAddressSchema} from './to-address-schema';

export async function getCheckout(variables: GetCheckoutVariables) {
  const {
    email,
    billingAddress,
    shippingAddress,
    shippingMethods = [],
  } = (
    await fetchQueryData(GRAPHQL_ENDPOINT, {
      params: {
        query: GetCheckoutDocument,
        variables,
      },
      cache: 'no-cache',
    })
  ).checkout ?? {};

  return {
    email,
    shippingMethods,
    ...(billingAddress && {
      billingAddress: toAddressSchema(billingAddress),
    }),
    ...(shippingAddress && {
      shippingAddress: toAddressSchema(shippingAddress),
    }),
  };
}
