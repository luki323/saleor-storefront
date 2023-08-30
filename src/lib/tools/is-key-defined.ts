import type {RequiredNonNullable} from '../types/utils';
import {isDefined} from './is-defined';

export function isKeyDefined<
  Obj extends Record<PropertyKey, unknown>,
  Key extends keyof Obj,
>(obj: Obj, key: Key): obj is RequiredNonNullable<Pick<Obj, Key>> & Obj {
  return isDefined(obj[key]);
}
