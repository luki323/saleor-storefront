import {Slot} from '@radix-ui/react-slot';
import type {ReactNode} from 'react';

import {useFormField} from './FormField';

type Props = {
  readonly children: ReactNode;
};

export function FormControl({children}: Props) {
  const {error, formItemId, formDescriptionId, formErrorMessageId} =
    useFormField();

  return (
    <Slot
      id={formItemId}
      aria-describedby={formDescriptionId}
      aria-errormessage={formErrorMessageId}
      aria-invalid={Boolean(error)}>
      {children}
    </Slot>
  );
}
