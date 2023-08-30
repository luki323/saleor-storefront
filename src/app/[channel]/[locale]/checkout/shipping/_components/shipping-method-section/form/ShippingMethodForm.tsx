'use client';

import {zodResolver} from '@hookform/resolvers/zod';
import {Controller, useForm} from 'react-hook-form';

import {FormattedMessage} from '@/i18n/react-intl';
import {APP_ROUTES} from '@/lib/consts';
import {cn} from '@/lib/tools/cn';
import {formatPathname} from '@/lib/tools/format-pathname';

import {BackwardLink} from '../../../../_components/BackwardLink';
import {SubmitButton} from '../../../../_components/SubmitButton';
import type {Checkout} from '../../../../_tools/get-checkout';
import {FIELDS} from './consts/fields';
import type {ShippingMethodSchema} from './consts/shipping-method-schema';
import {shippingMethodSchema} from './consts/shipping-method-schema';
import {ShippingMethodRadioItem, ShippingMethodRadioRoot} from './radio';
import {useShippingMethodSubmit} from './use-shipping-method-submit';

interface Props {
  readonly shippingMethod: Checkout['shippingMethod'];
  readonly shippingMethods: Checkout['shippingMethods'];
}
export function ShippingMethodForm({shippingMethod, shippingMethods}: Props) {
  const form = useForm<ShippingMethodSchema>({
    resolver: zodResolver(shippingMethodSchema),
  });

  const {shippingMethodSubmit, routeIsPending} = useShippingMethodSubmit();

  const defaultValue = shippingMethod?.id ?? shippingMethods.at(0)?.id;
  const disabled = form.formState.isSubmitting || routeIsPending;

  return (
    <form
      onSubmit={form.handleSubmit(shippingMethodSubmit)}
      className={cn('flex flex-col gap-7')}>
      <Controller
        name={FIELDS.DELIVERY_METHOD_ID}
        control={form.control}
        {...(defaultValue && {defaultValue})}
        render={({field: {value, onChange}}) => (
          <ShippingMethodRadioRoot
            value={value}
            onValueChange={onChange}
            disabled={disabled}>
            {shippingMethods
              .filter((shippingMethod) => shippingMethod.active)
              .map((shippingMethod) => (
                <ShippingMethodRadioItem
                  key={shippingMethod.id}
                  {...shippingMethod}
                />
              ))}
          </ShippingMethodRadioRoot>
        )}
      />
      <div className={cn('flex items-center justify-between')}>
        <BackwardLink href={formatPathname(...APP_ROUTES.CHECKOUT.INFORMATION)}>
          <FormattedMessage
            defaultMessage="Return to information"
            id="k2CDuD"
          />
        </BackwardLink>
        <div className={cn('w-fit')}>
          <SubmitButton disabled={disabled}>
            <FormattedMessage
              defaultMessage="Continue to billing"
              id="0s5kDf"
            />
          </SubmitButton>
        </div>
      </div>
    </form>
  );
}
