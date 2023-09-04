import {redirect} from 'next/navigation';

import {graphql} from '@/graphql/generated';
import {APP_ROUTES} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';
import {fetchQueryData} from '@/lib/tools/get-client';
import {raise} from '@/lib/tools/raise';
import {getCheckoutId} from '@/modules/checkout/tools/cookies';

import {Breadcrumbs} from '../_components/breadcrumbs';
import {getCountrySearchParam} from '../_tools/get-country-search-param';
import {getRedirectUrl} from '../_tools/get-redirect-url';
import {BillingSection} from './_components/billing-section';

const BillingPage_CheckoutQuery = graphql(/* GraphQL */ `
  query BillingPage_CheckoutQuery($id: ID!) {
    checkout(id: $id) {
      shippingAddress {
        __typename
      }
      deliveryMethod {
        __typename
      }
      billingAddress {
        __typename
      }
      ...Breadcrumbs_CheckoutFragment
      ...BillingSection_CheckoutFragment
    }
  }
`);

interface Props {
  readonly searchParams?: {
    readonly country: string;
  };
}

export default async function BillingPage({searchParams}: Props) {
  const id = getCheckoutId() ?? redirect(formatPathname(APP_ROUTES.ROOT));
  const checkout =
    (
      await fetchQueryData(
        BillingPage_CheckoutQuery,
        {
          id,
        },
        {
          fetchOptions: {
            cache: 'no-cache',
          },
        },
      )
    ).checkout ?? raise('`checkout` is not defined');

  const redirectUrl = getRedirectUrl(
    checkout,
    formatPathname(...APP_ROUTES.CHECKOUT.BILLING),
  );

  if (redirectUrl) {
    redirect(redirectUrl);
  }
  return (
    <div className={cn('space-y-7')}>
      <Breadcrumbs checkout={checkout} />
      <BillingSection
        checkout={checkout}
        country={getCountrySearchParam(searchParams)}
      />
    </div>
  );
}
