import 'server-only';

import {getChannel} from '@/i18n/context/get-channel';
import {toArray} from '@/lib/tools/to-array';
import {isDefined} from '@/lib/tools/type-guards/is-defined';

import type {SearchParams} from '../../_types';
import {getCollectionIds} from '../get-collection-ids';

export async function parseCollectionSearchParam({
  collection,
}: Pick<SearchParams, 'collection'>) {
  const channel = getChannel();

  if (!isDefined(collection)) {
    return [];
  }
  return await getCollectionIds({slugs: toArray(collection), channel});
}
