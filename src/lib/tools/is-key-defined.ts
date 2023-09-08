import type {SetNonNullable, SetRequired, UnknownRecord} from 'type-fest';

import {isDefined} from './is-defined';

export function isKeyDefined<Obj extends UnknownRecord, Key extends keyof Obj>(
  obj: Obj,
  key: Key,
): obj is Obj & SetNonNullable<SetRequired<Obj, Key>, Key> {
  return Object.hasOwn(obj, key) && isDefined(obj[key]);
}
