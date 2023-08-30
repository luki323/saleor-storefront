import 'server-only';

import type {GetProductsVariables} from '@/graphql/generated/documents';
import {getBasePath} from '@/i18n/context/get-base-path';
import {localeToLangCode} from '@/i18n/tools/locale-to-lang-code';
import {parsePaginationSearchParams} from '@/lib/tools/pagination/parse-pagination-search-params';

import {getCategoryIds} from '../../../../tools/get-category-ids';
import {getCollectionIds} from '../../../../tools/get-collection-ids';
import type {ProductsPageSearchParams} from '../../../../types';
import {DEFAULT_PAGE_SIZE} from '../../consts';
import {parseAttributeSearchParams} from './parse-attribute-searach-params';
import {parseSearchSarchParam} from './parse-search-search-param';

export async function parseSearchParams(
  searchParams: ProductsPageSearchParams,
): Promise<GetProductsVariables> {
  const [channel, locale] = getBasePath();

  const [categories, collections] = await Promise.all([
    getCategoryIds(searchParams),
    getCollectionIds(searchParams, channel),
  ]);
  return {
    ...parsePaginationSearchParams(searchParams, DEFAULT_PAGE_SIZE),
    ...parseSearchSarchParam(searchParams),
    channel,
    languageCode: localeToLangCode(locale),
    filter: {
      categories,
      collections,
      attributes: parseAttributeSearchParams(searchParams),
    },
  };
}
