import type {GetHeaderMenuVariables} from '@/graphql/generated/documents';
import {GetHeaderMenuDocument} from '@/graphql/generated/documents';
import {fetchGraphQL} from '@/lib/tools/fetch-graphql';

export async function fetchHeaderMenu(variables: GetHeaderMenuVariables) {
  const {menu} = await fetchGraphQL(GetHeaderMenuDocument, {
    variables,
  });

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
