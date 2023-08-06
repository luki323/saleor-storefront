import type {ComponentProps} from 'react';

import {Label} from '../ui/Label';
import {useFormField} from './hooks/use-form-field';

type Props = Omit<ComponentProps<typeof Label>, 'htmlFor'>;

export function FormInputLabel({children, ...restProps}: Props) {
  const {formItemId} = useFormField();

  return (
    <Label htmlFor={formItemId} {...restProps}>
      {children}
    </Label>
  );
}
