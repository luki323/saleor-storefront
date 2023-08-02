import {useCallback} from 'react';
import type {UseFormReturn} from 'react-hook-form';

import {handleLoginResult} from '../../_tools/handle-login-result';
import {logInAction} from '../../_tools/log-in-action';
import type {LoginFormSchema} from './use-login-form-schema';

export function useLoginSubmit(form: UseFormReturn<LoginFormSchema>) {
  return useCallback(
    async ({email, password}: LoginFormSchema) => {
      try {
        const loginResult = await logInAction({email, password});

        handleLoginResult(loginResult);

        form.reset();
      } catch (error) {
        // TODO: display server error
        console.error(error);
      }
    },
    [form],
  );
}
