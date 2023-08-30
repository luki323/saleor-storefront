import type {AttributeWhereInput} from '@/graphql/generated/types';
import {getChannel} from '@/i18n/context/get-channel';
import {isDefined} from '@/lib/tools/is-defined';
import {toArray} from '@/lib/tools/to-array';

import {getCollectionIds} from '../../../../tools/get-collection-ids';
import type {ProductsPageSearchParams} from '../../../../types';

export async function parseCollectionSearchParam({
  collection,
}: Pick<ProductsPageSearchParams, 'collection'>) {
  if (!isDefined(collection)) {
    return [];
  }
  const collectionIds = await getCollectionIds({
    slugs: toArray(collection),
    channel: getChannel(),
  });
  return collectionIds.map((id) => ({
    inCollection: id,
  })) satisfies AttributeWhereInput['AND'];
}
