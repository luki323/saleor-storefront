import {Slot} from '@radix-ui/react-slot';

import {useFormField} from './FormField';

import type {ComponentPropsWithoutRef} from 'react';

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
