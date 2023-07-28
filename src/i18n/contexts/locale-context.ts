import {createServerContext, useContext} from 'react';

import {DEFAULT_LOCALE} from '../consts';

import type {AvailableLocle} from '../consts';

export const LocaleContext = createServerContext<AvailableLocle>(
  'LocaleContext',
  DEFAULT_LOCALE,
);

export function useLocale() {
  return useContext(LocaleContext);
}
