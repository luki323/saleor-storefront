import 'server-only';

import {GRAPHQL_ENDPOINT} from '@/env/env';
import type {CreateCheckoutVariables} from '@/graphql/generated/documents';
import {CreateCheckoutDocument} from '@/graphql/generated/documents';
import {fetchQueryData} from '@/lib/tools/fetch-query';
import {raise} from '@/lib/tools/raise';

import {setCheckoutId} from './checkout-id';

export async function createCheckout(variables: CreateCheckoutVariables) {
  const {checkout, errors} =
    (
      await fetchQueryData(GRAPHQL_ENDPOINT, {
        params: {
          query: CreateCheckoutDocument,
          variables,
        },
      })
    ).checkoutCreate ?? {};

  if (errors?.length) {
    return {
      errors,
    };
  }

  setCheckoutId(checkout?.id ?? raise('Checkout id is not defined'));

  return null;
}
