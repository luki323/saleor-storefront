import type {LanguageCodeEnum} from '@/graphql/generated/types';

import type {AvailableLocale} from '../consts';

export function localeToLangCode(locale: AvailableLocale) {
  return locale.replaceAll('-', '_').toUpperCase() as LanguageCodeEnum;
}
