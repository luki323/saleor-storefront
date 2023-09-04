import 'server-only';

import {CATEGORY_BOUND, MAX_PAGE_SIZE} from '@/env/env';
import {graphql} from '@/graphql/generated';
import {fetchQueryData} from '@/lib/tools/get-client';
import {isDefined} from '@/lib/tools/is-defined';
import {uniq} from '@/lib/tools/uniq';

import {PRODUCTS_PAGE_SEARCH_PARAM_NAMES} from '../../../_consts';

const GetCategoryIdsQuery = graphql(`
  query GetCategoryIdsQuery(
    $first: Int
    $after: String
    $filter: CategoryFilterInput
  ) {
    categories(first: $first, after: $after, filter: $filter) {
      edges {
        node {
          id
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`);

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

  const {categories} = await fetchQueryData(GetCategoryIdsQuery, {
    first: categorySlugs.length,
    ...(isDefined(after) && {after}),
    filter: {
      slugs: categorySlugs.slice(0, MAX_PAGE_SIZE),
    },
  });
  return await getCategoryIdsAux(
    categorySlugs.slice(MAX_PAGE_SIZE),
    categories?.pageInfo.endCursor ?? undefined,
    categoryIdsAcc.concat(categories?.edges.map(({node: {id}}) => id) ?? []),
  );
}
