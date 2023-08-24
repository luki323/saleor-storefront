import type {FieldValues} from 'react-hook-form';

import type {FormProps} from '@/lib/components/form/Form';
import {Form as FormImpl} from '@/lib/components/form/Form';
import {cn} from '@/lib/tools/cn';

interface Props<FormSchema extends FieldValues>
  extends Omit<FormProps<FormSchema>, 'className'> {}

export function Form<FormSchema extends FieldValues>({
  children,
  ...props
}: Props<FormSchema>) {
  return (
    <FormImpl className={cn('flex flex-col gap-7')} {...props}>
      {children}
    </FormImpl>
  );
}
