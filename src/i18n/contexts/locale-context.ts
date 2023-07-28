import {createServerContext, useContext} from 'react';

import {DEFAULT_LOCALE} from '../consts';

import type {AvailableLocale} from '../consts';

export const LocaleContext = createServerContext<AvailableLocale>(
  'LocaleContext',
  DEFAULT_LOCALE,
);

export function useLocale() {
  return useContext(LocaleContext);
}
