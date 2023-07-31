import {Button} from '@/components/Button';
import {Icons} from '@/components/Icons';
import {FormattedMessage} from '@/i18n/components/FormattedMessage';

export function GoogleButton() {
  return (
    <Button variant="outline">
      <Icons.google className="mr-2 h-4 w-4" />
      <FormattedMessage defaultMessage="Sign up with Google" id="wUCGLt" />
    </Button>
  );
}
