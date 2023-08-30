import type {AttributeWhereInput} from '@/graphql/generated/types';
import {getChannel} from '@/i18n/context/get-channel';

import {getCollectionIds} from '../../../../tools/get-collection-ids';
import type {ProductsPageSearchParams} from '../../../../types';

export async function parseCollectionSearchParam(
  searchParams: Pick<ProductsPageSearchParams, 'collection'>,
) {
  const collectionIds = await getCollectionIds(searchParams, getChannel());

  return collectionIds.map((id) => ({
    inCollection: id,
  })) satisfies AttributeWhereInput['AND'];
}
