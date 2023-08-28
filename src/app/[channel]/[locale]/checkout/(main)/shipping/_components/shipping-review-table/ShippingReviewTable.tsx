import {getLocale} from '@/i18n/context/get-locale';
import {getIntl} from '@/i18n/get-intl';
import {cn} from '@/lib/tools/cn';

import {ShippingReviewRow} from './ShippingReviewRow';

interface Props {
  readonly contact: string;
  readonly shipTo: string;
}

export async function ShippingReviewTable({contact, shipTo}: Props) {
  const intl = await getIntl(getLocale());

  return (
    <div
      role="table"
      aria-label="Review"
      className={cn('rounded-md border border-faded-black px-4 py-1')}>
      <ShippingReviewRow
        name={intl.formatMessage({
          defaultMessage: 'Contact',
          id: 'zFegDD',
        })}
        value={contact}
      />
      <Divider />
      <ShippingReviewRow
        name={intl.formatMessage({
          defaultMessage: 'Ship to',
          id: '+JsDiH',
        })}
        value={shipTo}
      />
    </div>
  );
}

function Divider() {
  return <div className={cn('border-t border-faded-black')} />;
}
