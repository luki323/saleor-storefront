import {Fragment} from 'react';

import {IntlLink} from '@/i18n/components/IntlLink';
import {getLocale} from '@/i18n/context/get-locale';
import {getIntl} from '@/i18n/get-intl';
import {APP_ROUTES} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';
import {isEven} from '@/lib/tools/is-even';

import type {getCheckout} from '../../_tools/get-checkout';
import type {getShipTo} from '../_tools/get-ship-to';

interface ShippingReviewProps {
  readonly contact: Awaited<ReturnType<typeof getCheckout>>['email'];
  readonly shipTo: ReturnType<typeof getShipTo>;
}

export async function ShippingReview({contact, shipTo}: ShippingReviewProps) {
  const intl = await getIntl(getLocale());

  const rows = [
    {
      name: intl.formatMessage({
        defaultMessage: 'Contact',
        id: 'zFegDD',
      }),
      value: contact,
    },
    {
      name: intl.formatMessage({
        defaultMessage: 'Ship to',
        id: '+JsDiH',
      }),
      value: shipTo,
    },
  ].filter((row): row is {readonly name: string; readonly value: string} =>
    Boolean(row.value),
  );

  if (!rows.length) {
    return null;
  }

  return (
    <div
      role="table"
      aria-label="Review"
      className={cn('rounded-md border border-faded-black px-4 py-1')}>
      {rows.map(({name, value}, index) => (
        <Fragment key={name}>
          <Row name={name} value={value} />
          {isEven(index) && <Divider />}
        </Fragment>
      ))}
    </div>
  );
}

interface RowProps {
  readonly name: string;
  readonly value: string;
}

async function Row({name, value}: RowProps) {
  const intl = await getIntl(getLocale());

  return (
    <div role="row" className={cn('flex py-2')}>
      <div role="cell" className={cn('flex flex-1')}>
        <div className={cn('min-w-[6rem]')}>
          <span className={cn('text-sm text-grey-light')}>{name}</span>
        </div>
        <div>
          <bdo dir="ltr" className={cn('text-sm text-white')}>
            {value}
          </bdo>
        </div>
      </div>
      <div role="cell" className={cn('flex items-center')}>
        <IntlLink
          href={formatPathname(...APP_ROUTES.CHECKOUT.INFORMATION)}
          className={cn(
            'text-xs text-blue underline transition-colors hover:text-blue-hovered',
          )}>
          {intl.formatMessage({
            defaultMessage: 'Change',
            id: 'BY343C',
          })}
        </IntlLink>
      </div>
    </div>
  );
}

function Divider() {
  return <div className={cn('border-t border-faded-black')} />;
}
