import {useMemo} from 'react';
import type {ControllerProps, FieldPath, FieldValues} from 'react-hook-form';
import {Controller, useFormContext} from 'react-hook-form';

import {createBoundaryContext} from '@/lib/tools/create-boundary-context';

import {useFormItemId} from './FormItem';

const [FormFieldNameContext, useFormFieldName] =
  createBoundaryContext<string>('formFieldName');

interface Props<
  FormSchema extends FieldValues,
  FieldName extends FieldPath<FormSchema>,
> extends ControllerProps<FormSchema, FieldName> {}

export function FormField<
  FormSchema extends FieldValues,
  FieldName extends FieldPath<FormSchema>,
>(props: Props<FormSchema, FieldName>) {
  return (
    <FormFieldNameContext.Provider value={props.name}>
      <Controller {...props} />
    </FormFieldNameContext.Provider>
  );
}

export function useFormField() {
  const {getFieldState, formState} = useFormContext();
  const formFieldName = useFormFieldName();
  const formItemId = useFormItemId();

  return useMemo(() => {
    return {
      formItemId: `${formItemId}-form-item`,
      formDescriptionId: `${formItemId}-form-item-description`,
      formErrorMessageId: `${formItemId}-form-item-error-message`,
      ...getFieldState(formFieldName, formState),
    };
  }, [formFieldName, formItemId, formState, getFieldState]);
}
