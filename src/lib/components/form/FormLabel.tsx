import * as Label from '@radix-ui/react-label';
import type {ComponentPropsWithoutRef} from 'react';

import {useFormField} from './FormField';

type Props = Pick<
  ComponentPropsWithoutRef<(typeof Label)['Root']>,
  'className' | 'children'
>;

export function FormLabel({children, ...restProps}: Props) {
  const {formItemId} = useFormField();

  return (
    <Label.Root htmlFor={formItemId} {...restProps}>
      {children}
    </Label.Root>
  );
}
