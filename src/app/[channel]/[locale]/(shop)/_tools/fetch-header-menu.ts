import type {GetHeaderMenuVariables} from '@/graphql/generated/documents';
import {GetHeaderMenuDocument} from '@/graphql/generated/documents';
import {fetchGraphQL} from '@/lib/tools/fetch-graphql';

export async function fetchHeaderMenu(variables: GetHeaderMenuVariables) {
  const {menu} = await fetchGraphQL(GetHeaderMenuDocument, {
    variables,
  });

  return (
    menu?.items
      ?.flatMap(({category}) => category ?? [])
      .map(({name, slug, translation}) => ({
        name: translation?.name ?? name,
        slug,
      })) ?? []
  );
}
