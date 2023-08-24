import {GRAPHQL_ENDPOINT} from '@/env/env';
import type {GetAddressValidationRulesVariables} from '@/graphql/generated/documents';
import {GetAddressValidationRulesDocument} from '@/graphql/generated/documents';
import {fetchQueryData} from '@/lib/tools/fetch-query';

export async function getAddressValidationRules(
  variables: GetAddressValidationRulesVariables,
) {
  const {
    countryAreaChoices = [],
    postalCodeMatchers = [],
    postalCodeExamples = [],
    addressFormat,
  } = (
    await fetchQueryData(GRAPHQL_ENDPOINT, {
      params: {
        query: GetAddressValidationRulesDocument,
        variables,
      },
    })
  ).addressValidationRules ?? {};

  return {
    countryAreaChoices: countryAreaChoices.flatMap(({raw, verbose}) => {
      if (!raw || !verbose) {
        return [];
      }

      return [{raw, verbose}];
    }),
    postalCode: {
      matchers: postalCodeMatchers,
      examples: postalCodeExamples,
    },
    addressFormat,
  };
}
