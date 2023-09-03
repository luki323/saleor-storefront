import type {AttributeWhereInput} from '@/graphql/generated/types';
import {getChannel} from '@/i18n/context/get-channel';

import {getCollectionIds} from '../../../pagination/tools/get-collection-ids';

export async function parseCollectionSearchParam(
  searchParams: URLSearchParams,
) {
  const collectionIds = await getCollectionIds(getChannel(), searchParams);

  return collectionIds.map((id) => ({
    inCollection: id,
  })) satisfies AttributeWhereInput['AND'];
}
