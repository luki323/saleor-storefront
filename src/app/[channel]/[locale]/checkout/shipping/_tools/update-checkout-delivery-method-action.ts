'use server';

import {GRAPHQL_ENDPOINT} from '@/env/env-local';
import type {UpdateCheckoutDeliveryMethodVariables} from '@/graphql/generated/documents';
import {UpdateCheckoutDeliveryMethodDocument} from '@/graphql/generated/documents';
import {fetchQueryData} from '@/lib/tools/fetch-query';
import {raise} from '@/lib/tools/raise';
import {getCheckoutId} from '@/modules/checkout/tools/cookies';

export async function updateCheckoutDeliveryMethodAction(
  deliveryMethodId: UpdateCheckoutDeliveryMethodVariables['deliveryMethodId'],
) {
  return (
    await fetchQueryData(GRAPHQL_ENDPOINT, {
      params: {
        query: UpdateCheckoutDeliveryMethodDocument,
        variables: {
          id: getCheckoutId() ?? raise('Checkout id is not defined'),
          deliveryMethodId,
        },
      },
    })
  ).checkoutDeliveryMethodUpdate;
}
