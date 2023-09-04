import 'server-only';

import {graphql} from '@/graphql/generated';
import type {GetNavCategoriesQueryQueryVariables} from '@/graphql/generated/graphql';
import {translateConnection} from '@/i18n/tools/translate-connection';
import {fetchQueryData} from '@/lib/tools/get-client';

const GetNavCategoriesQuery = graphql(`
  query GetNavCategoriesQuery($languageCode: LanguageCodeEnum!) {
    categories(level: 0, first: 12) {
      edges {
        node {
          id
          name
          translation(languageCode: $languageCode) {
            name
          }
          slug
          level
          children(first: 12) {
            edges {
              node {
                id
                name
                translation(languageCode: $languageCode) {
                  name
                }
                slug
                level
                children(first: 12) {
                  edges {
                    node {
                      id
                      name
                      translation(languageCode: $languageCode) {
                        name
                      }
                      slug
                      level
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`);

export async function getNavCategories(
  variables: GetNavCategoriesQueryQueryVariables,
) {
  const {categories} = await fetchQueryData(GetNavCategoriesQuery, variables);

  return categories && translateConnection(categories);
}
