import {redirect} from 'next/navigation';

import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';
import {getCheckoutid} from '@/modules/checkout/tools/checkout-id';

import {getCountrySearchParam} from '../_tools/get-country-search-param';
import {BillingSection} from './_components/billing-section';

interface Props {
  readonly searchParams?: {
    readonly country: string;
  };
}

export default function BillingPage({searchParams}: Props) {
  const id = getCheckoutid() ?? redirect(formatPathname(APP_ROUTES.ROOT));

  return (
    <BillingSection id={id} country={getCountrySearchParam(searchParams)} />
  );
}
