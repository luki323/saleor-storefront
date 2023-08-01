import {useCallback} from 'react';
import type {UseFormReturn} from 'react-hook-form';

import {ORIGIN} from '@/env/env';
import {SignUpDocument} from '@/graphql/generated/documents';
import {useChannel} from '@/i18n/channel-context';
import {ROUTE} from '@/lib/consts';
import {fetchGraphQL} from '@/lib/tools/fetch-graphql';

import type {SignupFormSchema} from './use-signup-form-schema';

export function useSignupSubmit(form: UseFormReturn<SignupFormSchema>) {
  const channel = useChannel();

  return useCallback(
    async ({email, password}: SignupFormSchema) => {
      try {
        await fetchGraphQL(SignUpDocument, {
          variables: {
            accountRegisterInput: {
              email,
              password,
              channel,
              redirectUrl: `${ORIGIN}/${ROUTE.CONFIRM_ACCOUNT}`,
            },
          },
        });

        form.reset();
      } catch (error) {
        // TODO: display server error
        console.error(error);
      }
    },
    [channel, form],
  );
}
