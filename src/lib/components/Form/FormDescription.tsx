import type {ReactNode} from 'react';

import {Text} from '@/lib/components/ui/Text';

import {useFormField} from './FormField';

type Props = {
  readonly children: ReactNode;
};

export function FormDescription({children}: Props) {
  const {formDescriptionId} = useFormField();

  return (
    <Text size="small" id={formDescriptionId}>
      {children}
    </Text>
  );
}
