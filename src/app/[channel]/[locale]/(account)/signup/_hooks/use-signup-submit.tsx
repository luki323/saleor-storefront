import {useCallback} from 'react';
import type {UseFormReturn} from 'react-hook-form';

import {ORIGIN} from '@/env/env';
import {useChannel} from '@/i18n/context/channel-context';
import {useIntl} from '@/i18n/react-intl';
import {toast} from '@/lib/components/ui/toaster/tools/toast';
import {ROUTE} from '@/lib/consts';
import {fetchQueryData} from '@/lib/tools/fetch-query';

import {tokenCreateAction} from '../../_tools/token-create-action';
import {createSignUpRequest} from '../_tools/create-sign-up-request';
import type {SignupFormSchema} from './use-signup-form-schema';

export function useSignupSubmit(form: UseFormReturn<SignupFormSchema>) {
  const channel = useChannel();
  const intl = useIntl();

  return useCallback(
    async ({email, password}: SignupFormSchema) => {
      try {
        const {accountRegister} = await fetchQueryData(
          createSignUpRequest({
            email,
            password,
            channel,
            redirectUrl: new URL(ROUTE.CONFIRM_ACCOUNT, ORIGIN).toString(),
          }),
        );
        const {requiresConfirmation, user} = accountRegister ?? {};

        if (requiresConfirmation && user) {
          toast.default({
            title: intl.formatMessage({
              defaultMessage: 'Success',
              id: 'xrKHS6',
            }),
            description: intl.formatMessage(
              {
                defaultMessage:
                  'Confirmation email was sent to {email} mailbox.',
                id: 'OFXKGv',
              },
              {email: user.email},
            ),
          });
        } else {
          const {type, result} = await tokenCreateAction({email, password});

          if (type === 'error') {
            // TODO: display server error
            return;
          }
          localStorage.setItem(result.name, result.value);
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
