import type {FormHTMLAttributes} from 'react';
import type {FieldValues, UseFormReturn} from 'react-hook-form';
import {FormProvider} from 'react-hook-form';

import {cn} from '@/lib/tools/cn';

export interface FormProps<FormSchema extends FieldValues>
  extends FormHTMLAttributes<HTMLFormElement> {
  readonly form: UseFormReturn<FormSchema>;
}

export function Form<FormSchema extends FieldValues>({
  form,
  ...restProps
}: FormProps<FormSchema>) {
  return (
    <FormProvider {...form}>
      <form className={cn('flex flex-col gap-3')} noValidate {...restProps} />
    </FormProvider>
  );
}
