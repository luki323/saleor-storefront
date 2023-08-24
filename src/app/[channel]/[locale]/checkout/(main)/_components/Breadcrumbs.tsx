import {ChevronRightIcon} from 'lucide-react';

import {IntlLink} from '@/i18n/components/IntlLink';
import {getLocale} from '@/i18n/context/get-locale';
import {getIntl} from '@/i18n/get-intl';
import {APP_ROUTES} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';

import type {getCheckout} from '../_tools/get-checkout';

interface BreadcrumbsProps {
  readonly currentPathname: string;
  readonly checkout: Awaited<ReturnType<typeof getCheckout>>;
}

export async function Breadcrumbs({
  currentPathname,
  checkout: {shippingAddress, billingAddress},
}: BreadcrumbsProps) {
  const intl = await getIntl(getLocale());

  return (
    <nav aria-label="Breadcrumb">
      <ol className={cn('flex gap-2')}>
        <Breadcrumb
          pathname={formatPathname(...APP_ROUTES.CHECKOUT.INFORMATION)}
          currentPathname={currentPathname}
          disabled={!shippingAddress}>
          {intl.formatMessage({
            defaultMessage: 'Information',
            id: 'E80WrK',
          })}
        </Breadcrumb>
        <Breadcrumb
          pathname={formatPathname(...APP_ROUTES.CHECKOUT.BILLING)}
          currentPathname={currentPathname}
          disabled={!billingAddress}
          last>
          {intl.formatMessage({
            defaultMessage: 'Billing',
            id: 'Tbo377',
          })}
        </Breadcrumb>
      </ol>
    </nav>
  );
}

interface BreadcrumbProps {
  readonly children: string;
  readonly pathname: string;
  readonly currentPathname: string;
  readonly disabled: boolean;
  readonly last?: boolean;
}

function Breadcrumb({
  children,
  pathname,
  currentPathname,
  disabled,
  last,
}: BreadcrumbProps) {
  return (
    <li className={cn('flex items-center gap-2')}>
      <IntlLink
        href={pathname}
        className={cn(
          'flex flex-col text-center text-sm text-blue transition-colors after:pointer-events-none after:invisible after:h-0 after:select-none after:overflow-hidden after:font-bold after:content-[attr(data-text)] hover:text-blue-hovered',
          currentPathname === pathname && 'font-bold !text-white',
          disabled && 'pointer-events-none cursor-text text-grey',
        )}
        data-text={children}>
        {children}
      </IntlLink>
      {!last && <ChevronRightIcon size={15} className={cn('text-grey')} />}
    </li>
  );
}
