import {GRAPHQL_ENDPOINT} from '@/env/env-local';
import type {GetCountryCodesVariables} from '@/graphql/generated/documents';
import {GetCountryCodesDocument} from '@/graphql/generated/documents';
import {fetchQueryData} from '@/lib/tools/fetch-query';

export async function getCountryCodes(variables: GetCountryCodesVariables) {
  return (
    (
      await fetchQueryData(GRAPHQL_ENDPOINT, {
        params: {
          query: GetCountryCodesDocument,
          variables,
        },
      })
    ).channel?.countries?.map((country) => country.code) ?? []
  );
}
