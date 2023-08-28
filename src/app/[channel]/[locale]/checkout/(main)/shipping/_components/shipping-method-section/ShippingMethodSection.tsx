import {getLocale} from '@/i18n/context/get-locale';
import {getIntl} from '@/i18n/get-intl';

import {Heading} from '../../../_components/Heading';
import {Section} from '../../../_components/Section';
import type {Checkout} from '../../../_tools/get-checkout';
import {ShippingMethodForm} from './form';

interface Props {
  readonly shippingMethod: Checkout['shippingMethod'];
  readonly shippingMethods: Checkout['shippingMethods'];
}

export async function ShippingMethodSection({
  shippingMethod,
  shippingMethods,
}: Props) {
  const intl = await getIntl(getLocale());

  return (
    <Section>
      <Heading>
        {intl.formatMessage({
          defaultMessage: 'Shipping method',
          id: '4RD+CZ',
        })}
      </Heading>
      <ShippingMethodForm
        shippingMethod={shippingMethod}
        shippingMethods={shippingMethods}
      />
    </Section>
  );
}
