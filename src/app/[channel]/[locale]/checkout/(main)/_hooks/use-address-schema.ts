import {useMemo} from 'react';
import * as zod from 'zod';

import {useIntl} from '@/i18n/react-intl';
import {isCountryCode} from '@/i18n/tools/is-country-code';
import {random} from '@/lib/tools/random';

import {ADDRESS_FIELDS} from '../_consts';
import type {getAddressValidationRules} from '../_tools/get-address-validation-rules';

export function useAddressSchema({
  postalCode,
}: Pick<
  Awaited<ReturnType<typeof getAddressValidationRules>>,
  'postalCode' | 'addressFormat'
>) {
  const intl = useIntl();

  return useMemo(() => {
    const INPUT_MIN_LENGTH = 1;

    return zod.object({
      [ADDRESS_FIELDS.COUNTRY]: zod.string().refine(isCountryCode),
      [ADDRESS_FIELDS.FIRST_NAME]: zod
        .string({
          invalid_type_error: intl.formatMessage({
            defaultMessage: 'Enter a valid first name',
            id: '/H0TuY',
          }),
          required_error: intl.formatMessage({
            defaultMessage: 'Enter a first name',
            id: 'y6WUKS',
          }),
        })
        .min(INPUT_MIN_LENGTH, {
          message: intl.formatMessage({
            defaultMessage: 'Enter a first name',
            id: 'y6WUKS',
          }),
        }),
      [ADDRESS_FIELDS.LAST_NAME]: zod
        .string({
          invalid_type_error: intl.formatMessage({
            defaultMessage: 'Enter a valid last name',
            id: '3Gc+Ab',
          }),
          required_error: intl.formatMessage({
            defaultMessage: 'Enter a last name',
            id: 'Nau+P4',
          }),
        })
        .min(INPUT_MIN_LENGTH, {
          message: intl.formatMessage({
            defaultMessage: 'Enter a last name',
            id: 'Nau+P4',
          }),
        }),
      [ADDRESS_FIELDS.STREET_ADDRESS1]: zod
        .string({
          invalid_type_error: intl.formatMessage({
            defaultMessage: 'Enter an valid address',
            id: 'qF/pIW',
          }),
          required_error: intl.formatMessage({
            defaultMessage: 'Enter an address',
            id: 'BKdjS1',
          }),
        })
        .min(INPUT_MIN_LENGTH, {
          message: intl.formatMessage({
            defaultMessage: 'Enter an address',
            id: 'BKdjS1',
          }),
        }),
      [ADDRESS_FIELDS.STREET_ADDRESS2]: zod.string().optional(),
      [ADDRESS_FIELDS.CITY]: zod
        .string({
          invalid_type_error: intl.formatMessage({
            defaultMessage: 'Enter a valid city',
            id: '5mvFDZ',
          }),
          required_error: intl.formatMessage({
            defaultMessage: 'Enter a city',
            id: 'u1JzBg',
          }),
        })
        .min(INPUT_MIN_LENGTH, {
          message: intl.formatMessage({
            defaultMessage: 'Enter a city',
            id: 'u1JzBg',
          }),
        }),
      [ADDRESS_FIELDS.COUNTRY_AREA]: zod.string(),
      [ADDRESS_FIELDS.POSTAL_CODE]: zod
        .string({
          invalid_type_error: intl.formatMessage({
            defaultMessage: 'Enter a valid ZIP / postal code',
            id: 'x9hzVm',
          }),
          required_error: intl.formatMessage({
            defaultMessage: 'Enter a ZIP / postal code',
            id: 'pJi/8z',
          }),
        })
        .refine(
          (value) =>
            postalCode.matchers.some((postalCodeMatcher) =>
              new RegExp(postalCodeMatcher).test(value),
            ),
          {
            message: intl.formatMessage(
              {
                defaultMessage:
                  'Enter a valid ZIP code. Did you mean {postalCodeExample}?',
                id: 'WAgSwa',
              },
              {
                postalCodeExample: random(postalCode.examples),
              },
            ),
          },
        ),
    });
  }, [intl, postalCode.examples, postalCode.matchers]);
}
