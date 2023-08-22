import type {FieldValues} from 'react-hook-form';

import type {FormProps} from '@/lib/components/form/Form';
import {Form as FormImpl} from '@/lib/components/form/Form';
import {FormItem as FormItemImpl} from '@/lib/components/form/FormField/FormField';
import {cn} from '@/lib/tools/cn';
import type {PropsWithChildren} from '@/lib/types/react';

interface Props<FormSchema extends FieldValues>
  extends Omit<FormProps<FormSchema>, 'className'> {}

export function Form<FormSchema extends FieldValues>({
  children,
  ...restProps
}: Props<FormSchema>) {
  return (
    <FormImpl className={cn('flex flex-col gap-3')} {...restProps}>
      {children}
    </FormImpl>
  );
}

export function FormItem({children}: PropsWithChildren) {
  return (
    <FormItemImpl className={cn('flex flex-col space-y-1')}>
      {children}
    </FormItemImpl>
  );
}

export function FormFieldDescriptionText({children}: PropsWithChildren) {
  return <p className={cn('text-sm')}>{children}</p>;
}
