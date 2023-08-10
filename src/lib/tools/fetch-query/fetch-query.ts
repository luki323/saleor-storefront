import type {FormattedExecutionResult} from 'graphql';

import {isValidResponse} from './is-valid-response';
import {Request} from './request';
import type {ObjMap} from './types';

export async function fetchQuery<Query, Variables extends ObjMap>(
  ...params: ConstructorParameters<typeof Request<Query, Variables>>
) {
  const response = await fetch(new Request(...params));

  if (!isValidResponse(response)) {
    throw new Error('Something went wrong');
  }
  const result: FormattedExecutionResult<Query, Variables> =
    await response.json();

  return result;
}
