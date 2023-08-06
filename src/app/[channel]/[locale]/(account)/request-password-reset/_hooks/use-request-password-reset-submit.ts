import {useCallback} from 'react';
import type {UseFormReturn} from 'react-hook-form';

import {ORIGIN} from '@/env/env';
import {RequestPasswordResetDocument} from '@/graphql/generated/documents';
import {useChannel} from '@/i18n/context/channel-context';
import {useIntl} from '@/i18n/react-intl';
import {toast} from '@/lib/components/ui/toaster/tools/toast';
import {ROUTE} from '@/lib/consts';
import {fetchGraphQL} from '@/lib/tools/fetch-graphql';

import type {RequestPasswordResetSchema} from './use-request-password-reset-schema';

export function useRequestPasswordResetSubmit(
  form: UseFormReturn<RequestPasswordResetSchema>,
) {
  const intl = useIntl();
  const channel = useChannel();

  return useCallback(
    async ({email}: RequestPasswordResetSchema) => {
      try {
        const {errors} =
          (
            await fetchGraphQL(RequestPasswordResetDocument, {
              variables: {
                email,
                channel,
                redirectUrl: new URL(ROUTE.CHANGE_PASSWORD, ORIGIN).toString(),
              },
            })
          ).requestPasswordReset ?? {};

        if (errors?.length) {
          // TODO: Display server error
        } else {
          toast.default({
            title: 'Success',
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
