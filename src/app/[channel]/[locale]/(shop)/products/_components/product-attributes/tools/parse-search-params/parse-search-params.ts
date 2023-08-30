import invariant from 'tiny-invariant';

import type {GetProductAttributesVariables} from '@/graphql/generated/documents';
import {getBasePath} from '@/i18n/context/get-base-path';
import {localeToLangCode} from '@/i18n/tools/locale-to-lang-code';
import {isDefined} from '@/lib/tools/is-defined';

import type {ProductsPageSearchParams} from '../../../../types';
import {parseCategorySerchParam} from './parse-category-search-param';
import {parseCollectionSearchParam} from './parse-collection-search-param';

export async function parseSearchParams(
  searchParams: ProductsPageSearchParams,
): Promise<GetProductAttributesVariables> {
  invariant(
    isDefined(searchParams.category) || isDefined(searchParams.collection),
  );
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
