import 'server-only';

import invariant from 'tiny-invariant';

import {GRAPHQL_ENDPOINT} from '@/env/env';
import type {GetNavCategoriesVariables} from '@/graphql/generated/documents';
import {GetNavCategoriesDocument} from '@/graphql/generated/documents';
import {withTranslation} from '@/i18n/tools/with-translation';
import {fetchQueryData} from '@/lib/tools/fetch-query';

export async function getNavCategories(variables: GetNavCategoriesVariables) {
  const {categories} = await fetchQueryData(GRAPHQL_ENDPOINT, {
    params: {query: GetNavCategoriesDocument, variables},
  });
  invariant(categories);

  return categories.edges.map(({node}) => {
    const {children, ...restProps} = withTranslation(node);
    invariant(children);

    return {
      children: children.edges.map(({node}) => withTranslation(node)),
      ...restProps,
    };
  });
}
