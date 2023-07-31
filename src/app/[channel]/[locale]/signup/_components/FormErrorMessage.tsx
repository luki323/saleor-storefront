import {Text} from '@/components/Text';

import {useFormField} from './FormField';

export function FormErrorMessage() {
  const {error, formErrorMessageId} = useFormField();

  if (!error?.message) {
    return null;
  }

  return (
    <Text size="small" error id={formErrorMessageId}>
      {error.message}
    </Text>
  );
}
