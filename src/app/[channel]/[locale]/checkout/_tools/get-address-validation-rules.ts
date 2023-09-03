import {GRAPHQL_ENDPOINT} from '@/env/env-local';
import type {GetAddressValidationRulesVariables} from '@/graphql/generated/documents';
import {GetAddressValidationRulesDocument} from '@/graphql/generated/documents';
import {fetchQueryData} from '@/lib/tools/fetch-query';

export type AddressValidationRules = Awaited<
  ReturnType<typeof getAddressValidationRules>
>;

export async function getAddressValidationRules(
  variables: GetAddressValidationRulesVariables,
) {
  const {
    countryAreaChoices = [],
    postalCodeMatchers = [],
    postalCodeExamples = [],
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
  };
}
