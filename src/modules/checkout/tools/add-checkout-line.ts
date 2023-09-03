import 'server-only';

import {GRAPHQL_ENDPOINT} from '@/env/env-local';
import type {
  AddCheckoutLineVariables,
  CreateCheckoutVariables,
} from '@/graphql/generated/documents';
import {AddCheckoutLineDocument} from '@/graphql/generated/documents';
import {fetchQueryData} from '@/lib/tools/fetch-query';

import {getCheckoutId} from './cookies';
import {createCheckout} from './create-checkout';

export async function addCheckoutLine({
  channel,
  languageCode,
  line,
}: Pick<AddCheckoutLineVariables, 'line'> &
  Pick<CreateCheckoutVariables, 'channel' | 'languageCode'>) {
  const id = getCheckoutId();

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
