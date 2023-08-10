import {useCallback} from 'react';
import type {UseFormReturn} from 'react-hook-form';

import {ORIGIN} from '@/env/env';
import {useChannel} from '@/i18n/context/channel-context';
import {useIntl} from '@/i18n/react-intl';
import {toast} from '@/lib/components/ui/toaster/tools/toast';
import {ROUTE} from '@/lib/consts';
import {fetchQueryData} from '@/lib/tools/fetch-query';

import {createRequestPasswordResetRequest} from '../_tools/create-request-password-reset-request';
import type {RequestPasswordResetSchema} from './use-request-password-reset-schema';

export function useRequestPasswordResetSubmit(
  form: UseFormReturn<RequestPasswordResetSchema>,
) {
  const intl = useIntl();
  const channel = useChannel();

  return useCallback(
    async ({email}: RequestPasswordResetSchema) => {
      try {
        const {requestPasswordReset} = await fetchQueryData(
          createRequestPasswordResetRequest({
            email,
            channel,
            redirectUrl: new URL(ROUTE.CHANGE_PASSWORD, ORIGIN).toString(),
          }),
        );
        const {errors} = requestPasswordReset ?? {};

        if (errors?.length) {
          // TODO: Display server error
        } else {
          toast.default({
            title: intl.formatMessage({
              defaultMessage: 'Success',
              id: 'xrKHS6',
            }),
            description: intl.formatMessage(
              {
                defaultMessage: 'Reset link was sent to {email} mailbox',
                id: '06/qxx',
              },
              {email},
            ),
          });
        }

        form.reset();
      } catch (error) {
        // TODO: display server error
        console.error(error);
      }
    },
    [channel, form, intl],
  );
}
