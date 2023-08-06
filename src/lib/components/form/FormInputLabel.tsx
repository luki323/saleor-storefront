import * as Label from '@radix-ui/react-label';
import type {ComponentPropsWithoutRef} from 'react';

import {useFormField} from './hooks/use-form-field';

type Props = Pick<
  ComponentPropsWithoutRef<(typeof Label)['Root']>,
  'className' | 'children'
>;

export function FormInputLabel({children, ...restProps}: Props) {
  const {formItemId} = useFormField();

  return (
    <Label.Root htmlFor={formItemId} {...restProps}>
      {children}
    </Label.Root>
  );
}
