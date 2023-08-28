import {getLocale} from '@/i18n/context/get-locale';
import {localeToLangCode} from '@/i18n/tools/locale-to-lang-code';
import {getCheckoutSummary} from '@/modules/checkout/tools/get-checkout-summary';

import {Lines} from './components/lines';
import {Total} from './components/total';

export async function Summary() {
  const {
    lines = [],
    displayGrossPrices = false,
    ...total
  } = (await getCheckoutSummary(localeToLangCode(getLocale()))) ?? {};

  return (
    <>
      <Lines lines={lines} displayGrossPrices={displayGrossPrices} />
      <Total displayGrossPrices={displayGrossPrices} {...total} />
    </>
  );
}
