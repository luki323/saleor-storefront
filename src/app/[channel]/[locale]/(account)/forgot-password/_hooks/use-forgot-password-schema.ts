import {useMemo} from 'react';
import {useIntl} from 'react-intl';
import * as zod from 'zod';

export type ForgotPasswordSchema = zod.infer<
  ReturnType<typeof useForgotPasswordSchema>
>;

export function useForgotPasswordSchema() {
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
      }),
    [intl],
  );
}
