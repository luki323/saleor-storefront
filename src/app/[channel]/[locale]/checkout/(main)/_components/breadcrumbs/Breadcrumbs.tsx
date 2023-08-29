import {ChevronRightIcon} from 'lucide-react';

import {getLocale} from '@/i18n/context/get-locale';
import {getIntl} from '@/i18n/get-intl';
import {APP_ROUTES} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';

import type {Checkout} from '../../_tools/get-checkout';
import {BreadcrumbLink} from './BreadcrumbLink';

interface Props {
  readonly checkout: Checkout;
}

export async function Breadcrumbs({
  checkout: {shippingAddress, shippingMethod, billingAddress},
}: Props) {
  const intl = await getIntl(getLocale());

  const liStyles = cn('flex items-center gap-2');

  return (
    <nav aria-label="Breadcrumb">
      <ol className={cn('flex gap-2')}>
        <li className={liStyles}>
          <BreadcrumbLink
            href={formatPathname(...APP_ROUTES.CHECKOUT.INFORMATION)}>
            {intl.formatMessage({
              defaultMessage: 'Information',
              id: 'E80WrK',
            })}
          </BreadcrumbLink>
          <BreadcrumbSeparator />
        </li>
        <li className={liStyles}>
          <BreadcrumbLink
            href={formatPathname(...APP_ROUTES.CHECKOUT.SHIPPING)}
            disabled={!shippingAddress}>
            {intl.formatMessage({
              defaultMessage: 'Shipping',
              id: 'PRlD0A',
            })}
          </BreadcrumbLink>
          <BreadcrumbSeparator />
        </li>
        <li className={liStyles}>
          <BreadcrumbLink
            href={formatPathname(...APP_ROUTES.CHECKOUT.BILLING)}
            disabled={!shippingAddress || !shippingMethod}>
            {intl.formatMessage({
              defaultMessage: 'Billing',
              id: 'Tbo377',
            })}
          </BreadcrumbLink>
          <BreadcrumbSeparator />
        </li>
        <li className={liStyles}>
          <BreadcrumbLink
            href={formatPathname(...APP_ROUTES.CHECKOUT.PAYMENT)}
            disabled={!shippingAddress || !shippingMethod || !billingAddress}>
            {intl.formatMessage({
              defaultMessage: 'Payment',
              id: 'NmK6zy',
            })}
          </BreadcrumbLink>
        </li>
      </ol>
    </nav>
  );
}

function BreadcrumbSeparator() {
  return <ChevronRightIcon size={15} className={cn('text-grey')} />;
}
