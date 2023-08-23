import {fetchQuery} from './fetch-query';
import type {ObjMap} from './types';

export async function fetchQueryData<Query, Variables extends ObjMap>(
  ...params: Parameters<typeof fetchQuery<Query, Variables>>
) {
  const {data, errors} = await fetchQuery(...params);

  if (errors?.length || !data) {
    console.error(errors);
    throw new Error('Something went wrong');
  }
  return data;
}
