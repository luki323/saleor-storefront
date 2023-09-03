import {useMemo} from 'react';
import * as zod from 'zod';

import {useIntl} from '@/i18n/react-intl';

import {useAddressFieldsSchema} from '../../../../_hooks/use-address-fields-schema';
import type {AddressValidationRules} from '../../../../_tools/get-address-validation-rules';
import {FIELDS} from '../fields';

export type InformationFieldsSchema = Zod.infer<
  Awaited<ReturnType<typeof useInformationFieldsSchema>>
>;

export function useInformationFieldsSchema({
  postalCode,
}: Pick<AddressValidationRules, 'postalCode'>) {
  const intl = useIntl();
  const addressFieldsSchema = useAddressFieldsSchema({
    postalCode,
  });

  return useMemo(
    () =>
      zod
        .object({
          [FIELDS.EMAIL]: zod
            .string({
              invalid_type_error: intl.formatMessage({
                defaultMessage: 'Enter a valid email',
                id: 'PFfzPv',
              }),
              required_error: intl.formatMessage({
                defaultMessage: 'Enter a email',
                id: '+m0IDF',
              }),
            })
            .email({
              message: intl.formatMessage({
                defaultMessage: 'Enter a valid email',
                id: 'PFfzPv',
              }),
            }),
          [FIELDS.USE_SHIPPING_AS_BILLING_ADDRESS]: zod.boolean().optional(),
        })
        .merge(addressFieldsSchema),
    [addressFieldsSchema, intl],
  );
}
