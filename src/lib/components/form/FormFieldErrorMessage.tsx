import {ErrorText} from '../ui/ErrorText';
import {useFormField} from './hooks/use-form-field';

export function FormFieldErrorMessage() {
  const {error, formErrorMessageId} = useFormField();

  if (!error?.message) {
    return null;
  }
  return <ErrorText id={formErrorMessageId}>{error.message}</ErrorText>;
}
