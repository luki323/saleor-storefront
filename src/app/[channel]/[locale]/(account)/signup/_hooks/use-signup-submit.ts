import {useCallback} from 'react';
import type {UseFormReturn} from 'react-hook-form';
import {useIntl} from 'react-intl';
import {toast} from 'sonner';

import {ORIGIN} from '@/env/env';
import {useChannel} from '@/i18n/channel-context';
import {ROUTE} from '@/lib/consts/consts';

import {handleLoginResult} from '../../_tools/handle-login-result';
import {logInAction} from '../../_tools/log-in-action';
import {signUpAction} from '../_tools/sign-up-action';
import type {SignupFormSchema} from './use-signup-form-schema';

export function useSignupSubmit(form: UseFormReturn<SignupFormSchema>) {
  const channel = useChannel();

  const intl = useIntl();

  return useCallback(
    async ({email, password}: SignupFormSchema) => {
      try {
        const {requiresConfirmation, user} =
          (
            await signUpAction({
              email,
              password,
              channel,
              redirectUrl: `${ORIGIN}/${ROUTE.CONFIRM_ACCOUNT}`,
            })
          ).accountRegister ?? {};

        if (requiresConfirmation && user) {
          toast.success(
            intl.formatMessage(
              {
                defaultMessage:
                  'Confirmation email was sent to {email} mailbox.',
                id: 'OFXKGv',
              },
              {email: user.email},
            ),
          );
        } else {
          const loginResult = await logInAction({email, password});

          handleLoginResult(loginResult);
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
