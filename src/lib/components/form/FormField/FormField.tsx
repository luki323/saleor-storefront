import {useId} from 'react';
import type {ControllerProps, FieldPath, FieldValues} from 'react-hook-form';
import {Controller} from 'react-hook-form';

import {cn} from '@/lib/tools/cn';
import {createBoundaryContext} from '@/lib/tools/create-boundary-context';
import type {PropsWithChildren} from '@/lib/types/react';

const [FormFieldNameContext, useFormFieldName] =
  createBoundaryContext<string>('formFieldName');

interface FormFieldProps<
  FormSchema extends FieldValues,
  FieldName extends FieldPath<FormSchema>,
> extends ControllerProps<FormSchema, FieldName> {}

function FormField<
  FormSchema extends FieldValues,
  FieldName extends FieldPath<FormSchema>,
>(props: FormFieldProps<FormSchema, FieldName>) {
  return (
    <FormFieldNameContext.Provider value={props.name}>
      <Controller {...props} />
    </FormFieldNameContext.Provider>
  );
}

const [FormItemIdContext, useFormItemId] =
  createBoundaryContext<ReturnType<typeof useId>>('formItemId');

interface FormItemProps {
  readonly className?: string;
}

function FormItem({children, className}: PropsWithChildren<FormItemProps>) {
  return (
    <FormItemIdContext.Provider value={useId()}>
      <div className={cn(className)}>{children}</div>
    </FormItemIdContext.Provider>
  );
}

export {FormField, FormItem, useFormFieldName, useFormItemId};
