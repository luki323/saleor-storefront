import {useCallback} from 'react';
import type {UseFormReturn} from 'react-hook-form';

import {ORIGIN} from '@/env/env';
import {useChannel} from '@/i18n/context/channel-context';
import {useIntl} from '@/i18n/react-intl';
import {toast} from '@/lib/components/ui/toaster/tools/toast';
import {APP_ROUTES} from '@/lib/consts';

import {logInAction} from '../../_tools/log-in-action';
import {signUp} from '../_tools/sign-up';
import type {useSignupFormSchema} from './use-signup-form-schema';

type SignupFormSchema = Zod.infer<ReturnType<typeof useSignupFormSchema>>;

export function useSignupSubmit(form: UseFormReturn<SignupFormSchema>) {
  const channel = useChannel();
  const intl = useIntl();

  return useCallback(
    async ({email, password}: SignupFormSchema) => {
      try {
        const {requiresConfirmation, user} =
          (
            await signUp({
              email,
              password,
              channel,
              redirectUrl: new URL(
                APP_ROUTES.CONFIRM_ACCOUNT,
                ORIGIN,
              ).toString(),
            })
          ).accountRegister ?? {};

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
          const {type, result} = await logInAction({email, password});

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
