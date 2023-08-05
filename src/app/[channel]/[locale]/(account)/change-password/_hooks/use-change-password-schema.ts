import {useMemo} from 'react';
import * as zod from 'zod';

import {useIntl} from '@/i18n/react-intl';

import {MIN_PASSWORD_LENGTH} from '../../_consts';

export type ChangePasswordFormSchema = zod.infer<
  ReturnType<typeof useChangePasswordSchema>
>;

export function useChangePasswordSchema() {
  const intl = useIntl();

  return useMemo(
    () =>
      zod
        .object({
          password: zod
            .string({
              required_error: intl.formatMessage({
                defaultMessage: 'Password is required',
                id: 'uiFoFm',
              }),
            })
            .min(MIN_PASSWORD_LENGTH, {
              message: intl.formatMessage({
                defaultMessage: 'Passwords must be at least 8 characters',
                id: 'OSAM2w',
              }),
            }),
          confirmPassword: zod.string({
            required_error: intl.formatMessage({
              defaultMessage: 'Confirm password is required',
              id: '2uRGzp',
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
