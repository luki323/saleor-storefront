import {useMemo} from 'react';
import {Controller, useFormContext} from 'react-hook-form';

import {createBoundaryContext} from '@/lib/tools/create-boundary-context';

import {useFormItemId} from './FormItem';

import type {ObjectValues} from '@/lib/types';
import type {ControllerProps} from 'react-hook-form';

type Fields = typeof FIELDS;

type FieldNames = ObjectValues<Fields>;

export const FIELDS = {
  EMAIL: 'email',
  PASSWORD: 'password',
} as const;

const [FormFieldNameContext, useFormFieldName] =
  createBoundaryContext<FieldNames>('formFieldName');

type Props<FieldName extends FieldNames> = ControllerProps<
  Readonly<Record<FieldNames, string>>,
  FieldName
>;

export function FormField<FieldName extends FieldNames>(
  props: Props<FieldName>,
) {
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
    const fieldState = getFieldState(formFieldName, formState);

    return {
      formItemId: `${formItemId}-form-item`,
      formDescriptionId: `${formItemId}-form-item-description`,
      formErrorMessageId: `${formItemId}-form-item-error-message`,
      ...fieldState,
    };
  }, [formFieldName, formItemId, formState, getFieldState]);
}
