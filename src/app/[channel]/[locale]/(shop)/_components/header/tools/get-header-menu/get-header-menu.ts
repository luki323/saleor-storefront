import invariant from 'tiny-invariant';

import {GRAPHQL_ENDPOINT} from '@/env/env-local';
import type {GetHeaderMenuVariables} from '@/graphql/generated/documents';
import {GetHeaderMenuDocument} from '@/graphql/generated/documents';
import {translateNested} from '@/i18n/tools/translate-nested';
import {fetchQueryData} from '@/lib/tools/fetch-query';

export async function getHeaderMenu(variables: GetHeaderMenuVariables) {
  const {menu} = await fetchQueryData(GRAPHQL_ENDPOINT, {
    params: {query: GetHeaderMenuDocument, variables},
  });
  // 'menu' only seems to not be defined when the requested menu name doesn't exist,
  // so there's no need to handle this
  invariant(menu && menu.items);

  return menu.items.map(translateNested);
}
