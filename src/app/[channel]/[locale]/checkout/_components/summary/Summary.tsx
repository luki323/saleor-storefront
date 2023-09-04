import {graphql} from '@/graphql/generated/gql';
import {getLocale} from '@/i18n/context/get-locale';
import {localeToLangCode} from '@/i18n/tools/locale-to-lang-code';
import {getClient} from '@/lib/tools/get-client';
import {raise} from '@/lib/tools/raise';
import {getCheckoutId} from '@/modules/checkout/tools/cookies';

import {Lines} from './components/lines';
import {Total} from './components/total';

const Summary_Query = graphql(/* GraphQL */ `
  query Summary_Query($id: ID!, $languageCode: LanguageCodeEnum!) {
    checkout(id: $id) {
      ...Lines_CheckoutFragment
      ...Total_CheckoutFragment
    }
  }
`);

export async function Summary() {
  const {data} = await getClient().query(
    Summary_Query,
    {
      id: getCheckoutId() ?? raise('Checkout id is not defined'),
      languageCode: localeToLangCode(getLocale()),
    },
    {
      fetchOptions: {
        cache: 'no-cache',
      },
    },
  );

  if (!data?.checkout) {
    return null;
  }
  return (
    <>
      <Lines checkout={data.checkout} />
      <Total checkout={data.checkout} />
    </>
  );
}
