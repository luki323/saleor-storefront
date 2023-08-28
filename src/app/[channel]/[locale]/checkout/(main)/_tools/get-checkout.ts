import {GRAPHQL_ENDPOINT} from '@/env/env';
import type {GetCheckoutVariables} from '@/graphql/generated/documents';
import {GetCheckoutDocument} from '@/graphql/generated/documents';
import {fetchQueryData} from '@/lib/tools/fetch-query';

import {toAddressFieldsSchema} from './to-address-fields-schema';

export type Checkout = Awaited<ReturnType<typeof getCheckout>>;

export async function getCheckout(variables: GetCheckoutVariables) {
  const {
    email,
    shippingAddress,
    billingAddress,
    shippingMethod,
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
    ...(shippingMethod && 'id' in shippingMethod && {shippingMethod}),
    ...(billingAddress && {
      billingAddress: toAddressFieldsSchema(billingAddress),
    }),
    ...(shippingAddress && {
      shippingAddress: toAddressFieldsSchema(shippingAddress),
    }),
  };
}
