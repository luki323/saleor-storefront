import 'server-only';

import invariant from 'tiny-invariant';

import {GRAPHQL_ENDPOINT} from '@/env/env';
import type {GetProductAttributesVariables} from '@/graphql/generated/documents';
import {GetProductAttributesDocument} from '@/graphql/generated/documents';
import {withTranslation} from '@/i18n/tools/with-translation';
import {fetchQueryData} from '@/lib/tools/fetch-query';

export async function getProductAttributes(
  variables: GetProductAttributesVariables,
) {
  const {attributes} = await fetchQueryData(GRAPHQL_ENDPOINT, {
    params: {query: GetProductAttributesDocument, variables},
  });
  invariant(attributes);

  return attributes.edges.map(({node}) => {
    const {choices, type, ...restProps} = withTranslation(node);
    invariant(choices && type === 'PRODUCT_TYPE');

    return {
      choices: choices.edges.map(({node}) => withTranslation(node)),
      type,
      ...restProps,
    };
  });
}
