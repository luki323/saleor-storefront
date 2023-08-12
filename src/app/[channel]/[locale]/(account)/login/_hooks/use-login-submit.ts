import {useCallback} from 'react';
import type {UseFormReturn} from 'react-hook-form';

import {logInAction} from '../../_tools/log-in-action';
import type {LoginFormSchema} from './use-login-form-schema';

export function useLoginSubmit(form: UseFormReturn<LoginFormSchema>) {
  return useCallback(
    async ({email, password}: LoginFormSchema) => {
      try {
        const {type, result} = await logInAction({email, password});

        if (type === 'error') {
          // TODO: display server error
          return;
        }

        localStorage.setItem(result.name, result.value);

        form.reset();
      } catch (error) {
        // TODO: display server error
        console.error(error);
      }
    },
    [form],
  );
}
