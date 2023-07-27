import {GRAPHQL_ENDPOINT} from '@/env/env';

import {isValidResponse} from './is-valid-response';
import {MIME_TYPES, formatMimeTypes} from './mime-types';

import type {TypedDocumentString} from '@/graphql/generated/documents';
import type {FormattedExecutionResult} from 'graphql';

type OptionalParams<Variables> = {
  readonly operationName?: string | null;
  readonly variables?: Variables | null;
};

export async function fetchGraphQL<Result, Variables>(
  query: TypedDocumentString<Result, Variables>,
  {operationName = null, variables = null}: OptionalParams<Variables> = {},
  init?: Omit<RequestInit, 'method'>,
) {
  try {
    const response = await fetch(GRAPHQL_ENDPOINT, {
      ...init,
      method: 'POST',
      headers: {
        ...init?.headers,
        'Content-Type': formatMimeTypes([MIME_TYPES.JSON, 'charset=utf-8']),
        Accept: formatMimeTypes(
          [MIME_TYPES.GRAPHQL_RESPONSE_JSON, 'charset=utf-8'],
          [MIME_TYPES.JSON, 'charset=utf-8'],
        ),
      },
      body: JSON.stringify({
        query,
        operationName,
        variables,
      }),
    });

    if (isValidResponse(response)) {
      const {data, errors}: FormattedExecutionResult<Result> =
        await response.json();

      if (data && !errors?.length) {
        return data;
      }
      throw new Error('Something went wrong', {
        cause: errors,
      });
    }
    throw new Error('Invalid response', {
      cause: response,
    });
  } catch (error) {
    console.error(error);

    if (error instanceof Error) {
      console.error(error.cause);
    }

    throw error;
  }
}
