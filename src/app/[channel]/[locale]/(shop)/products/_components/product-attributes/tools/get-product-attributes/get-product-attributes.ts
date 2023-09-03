import 'server-only';

import invariant from 'tiny-invariant';

import {GRAPHQL_ENDPOINT} from '@/env/env-local';
import type {GetProductAttributesVariables} from '@/graphql/generated/documents';
import {GetProductAttributesDocument} from '@/graphql/generated/documents';
import {translateConnection} from '@/i18n/tools/translate-connection';
import {fetchQueryData} from '@/lib/tools/fetch-query';

export async function getProductAttributes(
  variables: GetProductAttributesVariables,
) {
  const {attributes} = await fetchQueryData(GRAPHQL_ENDPOINT, {
    params: {query: GetProductAttributesDocument, variables},
  });
  invariant(attributes);

  return translateConnection(attributes);
}
