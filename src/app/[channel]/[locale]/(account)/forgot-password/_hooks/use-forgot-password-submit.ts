import {useCallback} from 'react';
import type {UseFormReturn} from 'react-hook-form';
import {toast} from 'sonner';

import {ORIGIN} from '@/env/env';
import {ForgotPasswordDocument} from '@/graphql/generated/documents';
import {useChannel} from '@/i18n/context/channel-context';
import {useIntl} from '@/i18n/react-intl';
import {ROUTE} from '@/lib/consts';
import {fetchGraphQL} from '@/lib/tools/fetch-graphql/fetch-graphql';

import type {ForgotPasswordSchema} from './use-forgot-password-schema';

export function useForgotPasswordSubmit(
  form: UseFormReturn<ForgotPasswordSchema>,
) {
  const intl = useIntl();
  const channel = useChannel();

  return useCallback(
    async ({email}: ForgotPasswordSchema) => {
      try {
        const {errors} =
          (
            await fetchGraphQL(ForgotPasswordDocument, {
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
          toast.success(
            intl.formatMessage(
              {
                defaultMessage: 'Reset link was sent to {email} mailbox',
                id: '06/qxx',
              },
              {email},
            ),
          );
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
