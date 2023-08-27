'use client';

import * as RadioGroup from '@radix-ui/react-radio-group';
import type {VariantProps} from 'cva';
import {cva} from 'cva';

import {FormattedMessage} from '@/i18n/react-intl';
import {cn} from '@/lib/tools/cn';

import {Money} from '../../../../../../_components/Money';
import type {getCheckout} from '../../../../../_tools/get-checkout';

type Props = Awaited<
  ReturnType<typeof getCheckout>
>['shippingMethods'][number] &
  VariantProps<typeof shippingMethodRadioItemStyles>;

const shippingMethodRadioItemStyles = cva(
  'relative p-4 flex gap-2 cursor-pointer border-b border-b-faded-black before:absolute before:inset-[-1px] before:border before:border-transparent',
  {
    variants: {
      selected: {
        true: 'before:border-blue',
      },
      roundedTop: {
        true: 'before:rounded-t-md',
      },
      roundedBottom: {
        true: 'before:rounded-b-md border-b-0',
      },
    },
  },
);

export function ShippingMethodRadioItem({
  id,
  name,
  minimumDeliveryDays,
  maximumDeliveryDays,
  price,
  selected,
  roundedTop,
  roundedBottom,
}: Props) {
  return (
    <label
      className={cn(
        shippingMethodRadioItemStyles({
          selected,
          roundedTop,
          roundedBottom,
        }),
      )}>
      <div className={cn('flex')}>
        <RadioGroup.Item
          value={id}
          className={cn(
            'flex h-[18px] w-[18px] items-center justify-center rounded-full border border-faded-black transition-colors',
            selected && 'border-blue bg-blue',
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
