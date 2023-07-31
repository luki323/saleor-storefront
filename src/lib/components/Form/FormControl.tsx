import {Slot} from '@radix-ui/react-slot';
import type {ComponentPropsWithoutRef} from 'react';

import {useFormField} from './FormField';

type Props = Pick<ComponentPropsWithoutRef<typeof Slot>, 'children'>;

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
