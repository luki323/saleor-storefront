import {useMemo} from 'react';
import * as zod from 'zod';

import {useIntl} from '@/i18n/react-intl';
import {isCountryCode} from '@/i18n/tools/is-country-code';
import {random} from '@/lib/tools/random';

import {FIELDS} from './fields';
import type {AddressValidationRules} from './types';

const INPUT_MIN_LENGTH = 1;

type Options = Pick<AddressValidationRules, 'postalCode' | 'addressFormat'> & {
  readonly schema: zod.AnyZodObject | undefined;
};

export function useAddressSchema({
  postalCode,
  schema = zod.object({}),
}: Options) {
  const intl = useIntl();

  return useMemo(() => {
    const initialAddressSchema = zod.object({
      [FIELDS.COUNTRY]: zod
        .string({
          invalid_type_error: intl.formatMessage({
            defaultMessage: 'Enter a valid country',
            id: 'dTZ0NV',
          }),
          required_error: intl.formatMessage({
            defaultMessage: 'Enter a country',
            id: 'N0KmXz',
          }),
        })
        .refine(isCountryCode, {
          message: intl.formatMessage({
            defaultMessage: 'Enter a valid country',
            id: 'dTZ0NV',
          }),
        }),
      [FIELDS.FIRST_NAME]: zod
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
      [FIELDS.LAST_NAME]: zod
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
      [FIELDS.STREET_ADDRESS1]: zod
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
      [FIELDS.STREET_ADDRESS2]: zod.string().optional(),
      [FIELDS.CITY]: zod
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
      [FIELDS.COUNTRY_AREA]: zod.string({
        invalid_type_error: intl.formatMessage({
          defaultMessage: 'Enter a valid country code',
          id: 'EyqsQj',
        }),
        required_error: intl.formatMessage({
          defaultMessage: 'Enter a country code',
          id: '4jBGA6',
        }),
      }),
      [FIELDS.POSTAL_CODE]: zod
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

    return initialAddressSchema.merge(schema) as typeof initialAddressSchema;
  }, [intl, postalCode.examples, postalCode.matchers, schema]);
}
