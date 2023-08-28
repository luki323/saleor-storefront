import {useCallback} from 'react';
import type {UseFormReturn} from 'react-hook-form';

import {changePasswordAction} from '../_tools/change-password-action';
import type {useChangePasswordSchema} from './use-change-password-schema';

type ChangePasswordFormSchema = Zod.infer<
  ReturnType<typeof useChangePasswordSchema>
>;

export function useChangePasswordSubmit(
  form: UseFormReturn<ChangePasswordFormSchema>,
  {email, token}: {readonly email: string; readonly token: string},
) {
  return useCallback(
    async ({password}: ChangePasswordFormSchema) => {
      try {
        const {type, result} = await changePasswordAction({
          email,
          token,
          password,
        });

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
    [email, form, token],
  );
}
