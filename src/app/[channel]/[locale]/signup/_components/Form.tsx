import type {FormHTMLAttributes} from 'react';
import type {UseFormReturn} from 'react-hook-form';
import {FormProvider} from 'react-hook-form';

import type {SignupFormSchema} from '../_hooks/use-signup-form-schema';

type Props = {
  readonly form: UseFormReturn<SignupFormSchema>;
} & FormHTMLAttributes<HTMLFormElement>;

export function Form({form, ...restProps}: Props) {
  return (
    <FormProvider {...form}>
      <form {...restProps} />
    </FormProvider>
  );
}
