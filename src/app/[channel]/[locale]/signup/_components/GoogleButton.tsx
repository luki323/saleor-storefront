import {FormattedMessage} from '@/i18n/components/FormattedMessage';
import {Button} from '@/lib/components/ui/Button';
import {Icons} from '@/lib/components/ui/Icons';

export function GoogleButton() {
  return (
    <Button variant="outline">
      <Icons.google className="mr-2 h-4 w-4" />
      <FormattedMessage defaultMessage="Sign up with Google" id="wUCGLt" />
    </Button>
  );
}
