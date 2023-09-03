import 'server-only';

import {CATEGORY_BOUND, MAX_PAGE_SIZE} from '@/env/env';
import {GRAPHQL_ENDPOINT} from '@/env/env-local';
import {GetCategoryIdsDocument} from '@/graphql/generated/documents';
import {fetchQueryData} from '@/lib/tools/fetch-query';
import {isDefined} from '@/lib/tools/is-defined';
import {uniq} from '@/lib/tools/uniq';

import {PRODUCTS_PAGE_SEARCH_PARAM_NAMES} from '../../../../_consts';

export async function getCategoryIds(searchParams: URLSearchParams) {
  const categories = uniq(
    searchParams
      .getAll(PRODUCTS_PAGE_SEARCH_PARAM_NAMES.CATEGORY)
      .slice(0, CATEGORY_BOUND),
  );
  return await getCategoryIdsAux(categories);
}

async function getCategoryIdsAux(
  categorySlugs: readonly string[],
  after?: string,
  categoryIdsAcc: readonly string[] = [],
): Promise<readonly string[]> {
  if (categorySlugs.length === 0) {
    return categoryIdsAcc;
  }

  const {categories} = await fetchQueryData(GRAPHQL_ENDPOINT, {
    params: {
      query: GetCategoryIdsDocument,
      variables: {
        first: categorySlugs.length,
        ...(isDefined(after) && {after}),
        filter: {
          slugs: categorySlugs.slice(0, MAX_PAGE_SIZE),
        },
      },
    },
  });
  return await getCategoryIdsAux(
    categorySlugs.slice(MAX_PAGE_SIZE),
    categories?.pageInfo.endCursor ?? undefined,
    categoryIdsAcc.concat(categories?.edges.map(({node: {id}}) => id) ?? []),
  );
}
