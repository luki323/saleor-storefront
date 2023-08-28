'use client';

import * as RadioGroup from '@radix-ui/react-radio-group';

import {FormattedMessage} from '@/i18n/react-intl';
import {cn} from '@/lib/tools/cn';

import {Money} from '../../../../../../_components/Money';
import type {Checkout} from '../../../../../_tools/get-checkout';

type Props = Checkout['shippingMethods'][number];

export function ShippingMethodRadioItem({
  id,
  name,
  minimumDeliveryDays,
  maximumDeliveryDays,
  price,
}: Props) {
  return (
    <label
      className={cn(
        'relative flex cursor-pointer gap-2 border-b border-b-faded-black p-4 last:border-b-0 group-data-[disabled=""]:cursor-not-allowed',
      )}>
      <div className={cn('flex')}>
        <RadioGroup.Item
          value={id}
          className={cn(
            'flex h-[18px] w-[18px] items-center justify-center rounded-full border border-faded-black transition-colors before:absolute before:inset-[-1px] before:border before:border-transparent data-[state=checked]:border-blue data-[state=checked]:bg-blue data-[state="checked"]:before:border-blue',
          )}>
          <RadioGroup.Indicator
            className={cn('block h-[6px] w-[6px] rounded-full bg-white')}
          />
        </RadioGroup.Item>
      </div>
      <div className={cn('flex w-full justify-between')}>
        <div className={cn('flex flex-col')}>
          <span className={cn('text-sm text-white')}>{name}</span>
          <span className={cn('text-sm text-grey-light')}>
            <FormattedMessage
              defaultMessage="{minimumDeliveryDays} to {maximumDeliveryDays} business days"
              values={{
                minimumDeliveryDays: minimumDeliveryDays ?? 0,
                maximumDeliveryDays: maximumDeliveryDays ?? 0,
              }}
              id="bHEjjM"
            />
          </span>
        </div>
        <div>
          <Money value={price.amount} currency={price.currency} bold />
        </div>
      </div>
    </label>
  );
}
