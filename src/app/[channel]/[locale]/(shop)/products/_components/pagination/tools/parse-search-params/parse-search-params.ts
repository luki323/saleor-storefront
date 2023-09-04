import 'server-only';

import type {Pagination_ProductsQueryQueryVariables} from '@/graphql/generated/graphql';
import {getBasePath} from '@/i18n/context/get-base-path';
import {localeToLangCode} from '@/i18n/tools/locale-to-lang-code';
import {parsePaginationParams} from '@/lib/tools/pagination';

import {PRODUCTS_PAGE_SEARCH_PARAM_NAMES} from '../../../../_consts';
import {PRODUCTS_PREFIX} from '../../consts';
import {DEFAULT_PAGE_SIZE} from '../../consts';
import {getCategoryIds} from '../get-category-ids';
import {getCollectionIds} from '../get-collection-ids';
import {parseAttributeSearchParams} from './parse-attribute-searach-params';

export async function parseSearchParams(
  searchParams: URLSearchParams,
): Promise<Pagination_ProductsQueryQueryVariables> {
  const [channel, locale] = getBasePath();

  const [categoryIds, collectionIds] = await Promise.all([
    getCategoryIds(searchParams),
    getCollectionIds(channel, searchParams),
  ]);
  return {
    ...parsePaginationParams(searchParams, PRODUCTS_PREFIX, DEFAULT_PAGE_SIZE),
    channel,
    languageCode: localeToLangCode(locale),
    filter: {
      // @ts-expect-error https://github.com/dotansimha/graphql-code-generator/issues/8296#issuecomment-1287010974
      categories: categoryIds,
      // @ts-expect-error https://github.com/dotansimha/graphql-code-generator/issues/8296#issuecomment-1287010974
      collections: collectionIds,
      // @ts-expect-error https://github.com/dotansimha/graphql-code-generator/issues/8296#issuecomment-1287010974
      attributes: parseAttributeSearchParams(searchParams),
    },
    search: searchParams.get(PRODUCTS_PAGE_SEARCH_PARAM_NAMES.SEARCH),
  };
}
