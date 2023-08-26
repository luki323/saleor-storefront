import {useMemo} from 'react';
import * as zod from 'zod';

import {useIntl} from '@/i18n/react-intl';

import {MIN_PASSWORD_LENGTH} from '../../_consts';

export function useChangePasswordSchema() {
  const intl = useIntl();

  return useMemo(
    () =>
      zod
        .object({
          password: zod
            .string({
              invalid_type_error: intl.formatMessage({
                defaultMessage: 'Enter a valid password',
                id: 'TZm4bq',
              }),
              required_error: intl.formatMessage({
                defaultMessage: 'Enter a password',
                id: '9pBa/R',
              }),
            })
            .min(MIN_PASSWORD_LENGTH, {
              message: intl.formatMessage({
                defaultMessage: 'Passwords must be at least 8 characters',
                id: 'OSAM2w',
              }),
            }),
          confirmPassword: zod.string({
            invalid_type_error: intl.formatMessage({
              defaultMessage: 'Enter a valid confirm password',
              id: '8QOEAp',
            }),
            required_error: intl.formatMessage({
              defaultMessage: 'Enter confirm password',
              id: 'VmFv3C',
            }),
          }),
        })
        .refine(({password, confirmPassword}) => password === confirmPassword, {
          message: 'Passwords do not match',
          path: ['confirmPassword'],
        }),
    [intl],
  );
}
