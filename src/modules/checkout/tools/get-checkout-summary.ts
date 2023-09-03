import 'server-only';

import {GRAPHQL_ENDPOINT} from '@/env/env-local';
import {GetCheckoutSummaryDocument} from '@/graphql/generated/documents';
import type {LanguageCodeEnum} from '@/graphql/generated/types';
import {fetchQueryData} from '@/lib/tools/fetch-query';

import {getCheckoutId} from './cookies';

export type CheckoutSummary = NonNullable<
  Awaited<ReturnType<typeof getCheckoutSummary>>
>;

export async function getCheckoutSummary(languageCode: LanguageCodeEnum) {
  const id = getCheckoutId();

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
