import {getLocale} from '@/i18n/context/get-locale';
import {localeToLangCode} from '@/i18n/tools/locale-to-lang-code';
import {cn} from '@/lib/tools/cn';
import {getCheckoutSummary} from '@/modules/checkout/tools/get-checkout-summary';

import {Lines} from './components/Lines';
import {Total} from './components/Total';

export async function Summary() {
  const languageCode = localeToLangCode(getLocale());

  const {
    displayGrossPrices = false,
    lines = [],
    ...total
  } = (await getCheckoutSummary(languageCode)) ?? {};

  return (
    <div className={cn('w-[420px]')}>
      <Lines lines={lines} displayGrossPrices={displayGrossPrices} />
      <Total {...total} displayGrossPrices={displayGrossPrices} />
    </div>
  );
}
