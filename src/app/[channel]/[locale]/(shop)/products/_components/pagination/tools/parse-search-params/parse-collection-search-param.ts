import 'server-only';

import {getChannel} from '@/i18n/context/get-channel';
import {isDefined} from '@/lib/tools/is-defined';
import {toArray} from '@/lib/tools/to-array';

import {getCollectionIds} from '../../../../tools/get-collection-ids';
import type {ProductsPageSearchParams} from '../../../../types';

export async function parseCollectionSearchParam({
  collection,
}: Pick<ProductsPageSearchParams, 'collection'>) {
  const channel = getChannel();

  if (!isDefined(collection)) {
    return [];
  }
  return await getCollectionIds({slugs: toArray(collection), channel});
}
