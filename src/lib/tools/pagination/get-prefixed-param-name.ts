import type {ForwardSearchParamName} from './types';

export function getPrefixedParamName(
  prefix: string,
  name: ForwardSearchParamName,
) {
  return `${prefix}__${name}`;
}
