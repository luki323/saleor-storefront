import type {GetProductAttributesVariables} from '@/graphql/generated/documents';
import {getBasePath} from '@/i18n/context/get-base-path';
import {localeToLangCode} from '@/i18n/tools/locale-to-lang-code';

import {parseCategorySerchParam} from './parse-category-search-param';
import {parseCollectionSearchParam} from './parse-collection-search-param';

export async function parseSearchParams(
  searchParams: URLSearchParams,
): Promise<GetProductAttributesVariables> {
  const [channel, locale] = getBasePath();

  const [whereCategory, whereCollection] = await Promise.all([
    parseCategorySerchParam(searchParams),
    parseCollectionSearchParam(searchParams),
  ]);
  return {
    channel,
    languageCode: localeToLangCode(locale),
    where: {
      AND: [...whereCategory, ...whereCollection],
    },
  };
}
