import type {GetHeaderMenuVariables} from '@/graphql/generated/documents';
import {fetchQueryData} from '@/lib/tools/fetch-query';

import {createGetHeaderMenuRequest} from './create-get-header-menu-request';

export async function fetchHeaderMenu(variables: GetHeaderMenuVariables) {
  const {menu} = await fetchQueryData(createGetHeaderMenuRequest(variables));

  return (
    menu?.items?.map(({category, name, translation}) => {
      if (!category) {
        throw new Error('Category object is not defined');
      }
      const {slug} = category;

      return {
        name: translation?.name ?? name,
        slug,
      };
    }) ?? []
  );
}
