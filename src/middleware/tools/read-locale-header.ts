import 'server-only';

import {headers} from 'next/headers';
import invariant from 'tiny-invariant';

import {isAvailableCiLocale} from '@/i18n/tools/is-available-ci-locale';
import {isDefined} from '@/lib/tools/type-guards/is-defined';

import {CUSTOM_REQUEST_HEADERS} from '../consts';

export function readLocaleHeader() {
  const locale = headers().get(CUSTOM_REQUEST_HEADERS.LOCALE);
  invariant(isDefined(locale) && isAvailableCiLocale(locale), 'Invalid locale');
  return locale;
}
