import {Text} from '@/components/Text';

import {useFormField} from './FormField';

import type {ComponentProps} from 'react';

type Props = Pick<ComponentProps<typeof Text>, 'children'>;

export function FormDescription({children}: Props) {
  const {formDescriptionId} = useFormField();

  return (
    <Text size="small" id={formDescriptionId}>
      {children}
    </Text>
  );
}
