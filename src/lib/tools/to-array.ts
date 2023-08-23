import {isArray} from './type-guards/is-array';

export function toArray<T>(item: T | readonly T[]): readonly T[] {
  if (isArray(item)) {
    return item;
  }
  return [item];
}
