import {redirect} from 'next/navigation';

import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';
import {getCheckoutId} from '@/modules/checkout/tools/cookies';

import {Breadcrumbs} from '../_components/breadcrumbs';
import {Wrapper} from '../_components/Wrapper';
import {getCheckout} from '../_tools/get-checkout';
import {getCountrySearchParam} from '../_tools/get-country-search-param';
import {getRedirectUrl} from '../_tools/get-redirect-url';
import {BillingSection} from './_components/billing-section';

interface Props {
  readonly searchParams?: {
    readonly country: string;
  };
}

export default async function BillingPage({searchParams}: Props) {
  const id = getCheckoutId() ?? redirect(formatPathname(APP_ROUTES.ROOT));

  const checkout = await getCheckout({id});

  const redirectUrl = getRedirectUrl(
    checkout,
    formatPathname(...APP_ROUTES.CHECKOUT.BILLING),
  );

  if (redirectUrl) {
    redirect(redirectUrl);
  }
  return (
    <Wrapper>
      <Breadcrumbs checkout={checkout} />
      <BillingSection
        billingAddress={checkout.billingAddress}
        country={getCountrySearchParam(searchParams)}
      />
    </Wrapper>
  );
}
