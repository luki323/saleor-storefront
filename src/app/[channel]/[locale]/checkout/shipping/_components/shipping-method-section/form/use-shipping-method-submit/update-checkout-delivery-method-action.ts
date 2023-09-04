'use server';

import {graphql} from '@/graphql/generated';
import type {UpdateCheckoutDeliveryMethodMutationMutationVariables} from '@/graphql/generated/graphql';
import {fetchQueryData} from '@/lib/tools/get-client';
import {raise} from '@/lib/tools/raise';
import {getCheckoutId} from '@/modules/checkout/tools/cookies';

const UpdateCheckoutDeliveryMethodMutation = graphql(/* GraphQL */ `
  mutation UpdateCheckoutDeliveryMethodMutation(
    $id: ID!
    $deliveryMethodId: ID!
  ) {
    checkoutDeliveryMethodUpdate(id: $id, deliveryMethodId: $deliveryMethodId) {
      errors {
        field
        code
      }
    }
  }
`);

export async function updateCheckoutDeliveryMethodAction(
  deliveryMethodId: UpdateCheckoutDeliveryMethodMutationMutationVariables['deliveryMethodId'],
) {
  return (
    await fetchQueryData(UpdateCheckoutDeliveryMethodMutation, {
      deliveryMethodId,
      id: getCheckoutId() ?? raise('Checkout id is not defined'),
    })
  ).checkoutDeliveryMethodUpdate;
}
