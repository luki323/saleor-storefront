import type {GetHeaderMenuVariables} from '@/graphql/generated/documents';

import {getHeaderMenu} from './get-header-menu';

export async function fetchHeaderMenu(variables: GetHeaderMenuVariables) {
  const {menu} = await getHeaderMenu(variables);

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
