import {useCallback} from 'react';
import type {UseFormReturn} from 'react-hook-form';
import {useIntl} from 'react-intl';
import {toast} from 'sonner';

import {ORIGIN} from '@/env/env';
import {SignUpDocument} from '@/graphql/generated/documents';
import {useChannel} from '@/i18n/channel-context';
import {ROUTE} from '@/lib/consts/consts';
import {fetchGraphQL} from '@/lib/tools/fetch-graphql/fetch-graphql';

import {tokenCreate} from '../../_tools/token-create-action';
import type {SignupFormSchema} from './use-signup-form-schema';

export function useSignupSubmit(form: UseFormReturn<SignupFormSchema>) {
  const channel = useChannel();

  const intl = useIntl();

  return useCallback(
    async ({email, password}: SignupFormSchema) => {
      try {
        const {requiresConfirmation, user} =
          (
            await fetchGraphQL(
              SignUpDocument,
              {
                variables: {
                  email,
                  password,
                  channel,
                  redirectUrl: new URL(
                    ROUTE.CONFIRM_ACCOUNT,
                    ORIGIN,
                  ).toString(),
                },
              },
              {cache: 'no-cache'},
            )
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
          const {type, value} = await tokenCreate({email, password});

          if (type === 'error') {
            // TODO: display server error
            return;
          }

          localStorage.setItem(value.name, value.value);
        }

        form.reset();
      } catch (error) {}
    },
    [channel, form, intl],
  );
}
