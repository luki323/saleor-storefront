import {FormattedMessage} from '@/i18n/components/FormattedMessage';
import {Text} from '@/lib/components/ui/Text';
import {ROUTE} from '@/lib/consts/consts';
import {formatPathname} from '@/lib/tools/format-pathname';

import {Container} from '../_components/Container';
import {Heading} from '../_components/Heading';
import {NavigationLink} from '../_components/NavigationLink';
import {ForgotPasswordForm} from './_components/ForgotPasswordForm';

function ForgotPasswordPage() {
  return (
    <>
      <NavigationLink href={formatPathname([ROUTE.LOGIN])}>
        <FormattedMessage defaultMessage="Back" id="cyR7Kh" />
      </NavigationLink>
      <Container>
        <Heading>
          <FormattedMessage defaultMessage="Forgot password?" id="V/JHlm" />
        </Heading>
        <Text size="small" color="muted-foreground">
          <FormattedMessage
            defaultMessage="Enter your email to receive reset link"
            id="9KlUdb"
          />
        </Text>
      </Container>
      <ForgotPasswordForm />
    </>
  );
}

export default ForgotPasswordPage;
