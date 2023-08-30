import 'server-only';

import type {GetProductsVariables} from '@/graphql/generated/documents';
import {getBasePath} from '@/i18n/context/get-base-path';
import {localeToLangCode} from '@/i18n/tools/locale-to-lang-code';
import {parsePaginationSearchParams} from '@/lib/tools/pagination/parse-pagination-search-params';

import type {ProductsPageSearchParams} from '../../../../types';
import {DEFAULT_PAGE_SIZE} from '../../consts';
import {parseAttributeSearchParams} from './parse-attribute-search-params';
import {parseCategorySearchParam} from './parse-category-search-param';
import {parseCollectionSearchParam} from './parse-collection-search-param';
import {parseSearchParam} from './parse-search-param';

export async function parseSearchParams(
  searchParams: ProductsPageSearchParams,
): Promise<GetProductsVariables> {
  const [channel, locale] = getBasePath();

  const [categories, collections] = await Promise.all([
    parseCategorySearchParam(searchParams),
    parseCollectionSearchParam(searchParams),
  ]);
  return {
    ...parsePaginationSearchParams(searchParams, DEFAULT_PAGE_SIZE),
    ...parseSearchParam(searchParams),
    channel,
    languageCode: localeToLangCode(locale),
    filter: {
      categories,
      collections,
      attributes: parseAttributeSearchParams(searchParams),
    },
  };
}
