import {isArray} from './is-array';

export function toArray<Type>(value: Type | readonly Type[]): readonly Type[] {
  return isArray(value) ? value : [value];
}
