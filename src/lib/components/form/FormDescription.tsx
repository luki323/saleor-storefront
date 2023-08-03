import type {ReactNode} from 'react';

import {Text} from '@/lib/components/ui/Text';

import {useFormField} from './FormField';

interface Props {
  readonly children: ReactNode;
}

export function FormDescription({children}: Props) {
  const {formDescriptionId} = useFormField();

  return (
    <Text size="small" id={formDescriptionId}>
      {children}
    </Text>
  );
}
