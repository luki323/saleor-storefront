import type {FormHTMLAttributes} from 'react';
import type {UseFormReturn} from 'react-hook-form';
import {FormProvider} from 'react-hook-form';

type Props<FormSchema extends Record<string, unknown>> = {
  readonly form: UseFormReturn<FormSchema>;
} & FormHTMLAttributes<HTMLFormElement>;

export function Form<FormSchema extends Record<string, unknown>>({
  form,
  ...restProps
}: Props<FormSchema>) {
  return (
    <FormProvider {...form}>
      <form {...restProps} />
    </FormProvider>
  );
}
