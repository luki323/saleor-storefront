import 'server-only';

import invariant from 'tiny-invariant';

import {GRAPHQL_ENDPOINT} from '@/env';
import type {GetNavCategoriesVariables} from '@/graphql/generated/documents';
import {GetNavCategoriesDocument} from '@/graphql/generated/documents';
import {translateConnection} from '@/i18n/tools/translate-connection';
import {fetchQueryData} from '@/lib/tools/fetch-query';

export async function getNavCategories(variables: GetNavCategoriesVariables) {
  const {categories} = await fetchQueryData(GRAPHQL_ENDPOINT, {
    params: {query: GetNavCategoriesDocument, variables},
  });
  invariant(categories);

  return translateConnection(categories);
}
