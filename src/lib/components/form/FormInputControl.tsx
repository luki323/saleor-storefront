import {Slot} from '@radix-ui/react-slot';

import type {PropsWithChildren} from '@/lib/types/react';

import {useFormField} from './hooks/use-form-field';

export function FormInputControl({children}: PropsWithChildren) {
  const {formItemId, formDescriptionId, formErrorMessageId, invalid} =
    useFormField();

  return (
    <Slot
      id={formItemId}
      aria-describedby={formDescriptionId}
      aria-errormessage={formErrorMessageId}
      aria-invalid={invalid}>
      {children}
    </Slot>
  );
}
