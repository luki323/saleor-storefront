import 'server-only';

import {GRAPHQL_ENDPOINT} from '@/env/env';
import type {GetCheckoutSummaryVariables} from '@/graphql/generated/documents';
import {GetCheckoutSummaryDocument} from '@/graphql/generated/documents';
import {fetchQueryData} from '@/lib/tools/fetch-query';

import {getCheckoutid} from './checkout-id';

export async function getCheckoutSummary(
  languageCode: GetCheckoutSummaryVariables['languageCode'],
) {
  const id = getCheckoutid();

  if (!id) {
    return null;
  }

  return (
    await fetchQueryData(GRAPHQL_ENDPOINT, {
      params: {
        query: GetCheckoutSummaryDocument,
        variables: {
          id,
          languageCode,
        },
      },
    })
  ).checkout;
}
