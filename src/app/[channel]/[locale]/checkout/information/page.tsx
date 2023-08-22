import {redirect} from 'next/navigation';

import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';
import {getCheckoutid} from '@/modules/checkout/tools/checkout-id';

import {getCountrySearchParam} from '../_tools/get-country-search-param';
import {ShippingSection} from './_components/ShippingSection';

interface Props {
  readonly searchParams?: {
    readonly country: string;
  };
}

export default async function InformationPage({searchParams}: Props) {
  const id = getCheckoutid() ?? redirect(formatPathname(APP_ROUTES.ROOT));

  return (
    <ShippingSection id={id} country={getCountrySearchParam(searchParams)} />
  );
}
