import {useMemo} from 'react';
import * as zod from 'zod';

import {useIntl} from '@/i18n/react-intl';

import {MIN_PASSWORD_LENGTH} from '../../_consts';

export type SignupFormSchema = zod.infer<
  ReturnType<typeof useSignupFormSchema>
>;

export function useSignupFormSchema() {
  const intl = useIntl();

  return useMemo(
    () =>
      zod.object({
        email: zod
          .string({
            required_error: intl.formatMessage({
              defaultMessage: 'Email is required',
              id: 'cU/aSG',
            }),
          })
          .email({
            message: intl.formatMessage({
              defaultMessage: 'Please enter valid email',
              id: 'Ydq9bW',
            }),
          }),
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
      }),
    [intl],
  );
}
