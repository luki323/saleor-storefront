import type {ControllerProps, FieldPath, FieldValues} from 'react-hook-form';
import {Controller} from 'react-hook-form';

import {createBoundaryContext} from '@/lib/tools/create-boundary-context';

const [FormFieldNameContext, useFormFieldName] =
  createBoundaryContext<string>('formFieldName');

export {useFormFieldName};

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
