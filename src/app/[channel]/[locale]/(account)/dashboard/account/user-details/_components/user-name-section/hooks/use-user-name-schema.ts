import {useMemo} from 'react';
import * as zod from 'zod';

import {useIntl} from '@/i18n/react-intl';

import {FIELDS} from '../fields';

export function useUserNameSchema() {
  const intl = useIntl();

  return useMemo(
    () =>
      zod.object({
        [FIELDS.FIRST_NAME]: zod.string({
          invalid_type_error: intl.formatMessage({
            defaultMessage: 'Enter a valid first name',
            id: '/H0TuY',
          }),
          required_error: intl.formatMessage({
            defaultMessage: 'Enter first name',
            id: 'HavxIp',
          }),
        }),
        [FIELDS.LAST_NAME]: zod.string({
          invalid_type_error: intl.formatMessage({
            defaultMessage: 'Enter a valid last name',
            id: '3Gc+Ab',
          }),
          required_error: intl.formatMessage({
            defaultMessage: 'Enter a last name',
            id: 'Nau+P4',
          }),
        }),
      }),
    [intl],
  );
}
