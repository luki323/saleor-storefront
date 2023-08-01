import {useMemo} from 'react';
import {useIntl} from 'react-intl';
import * as zod from 'zod';

export type LoginFormSchema = zod.infer<ReturnType<typeof useLoginFormSchema>>;

export function useLoginFormSchema() {
  const intl = useIntl();

  return useMemo(
    () =>
      zod.object({
        email: zod.string({
          required_error: intl.formatMessage({
            defaultMessage: 'Email is required',
            id: 'cU/aSG',
          }),
        }),
        password: zod.string({
          required_error: intl.formatMessage({
            defaultMessage: 'Password is required',
            id: 'uiFoFm',
          }),
        }),
      }),
    [intl],
  );
}
