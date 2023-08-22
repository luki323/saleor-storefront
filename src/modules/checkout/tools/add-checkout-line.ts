import 'server-only';

import {GRAPHQL_ENDPOINT} from '@/env/env';
import type {
  AddCheckoutLineVariables,
  CreateCheckoutVariables,
} from '@/graphql/generated/documents';
import {AddCheckoutLineDocument} from '@/graphql/generated/documents';
import {fetchQueryData} from '@/lib/tools/fetch-query';

import {getCheckoutid} from './checkout-id';
import {createCheckout} from './create-checkout';

type Variables = Pick<CreateCheckoutVariables, 'channel' | 'languageCode'> &
  Pick<AddCheckoutLineVariables, 'line'>;

export async function addCheckoutLine({
  channel,
  languageCode,
  line,
}: Variables) {
  const id = getCheckoutid();

  if (id) {
    return (
      await fetchQueryData(GRAPHQL_ENDPOINT, {
        params: {
          query: AddCheckoutLineDocument,
          variables: {
            id,
            line,
          },
        },
      })
    ).checkoutLinesAdd;
  } else {
    return createCheckout({
      channel,
      lines: [line],
      languageCode,
    });
  }
}
