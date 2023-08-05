import {FormattedMessage} from '@/i18n/react-intl';
import {ROUTE} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';

import {Container} from '../_components/ui/Container';
import {Description} from '../_components/ui/Description';
import {Heading} from '../_components/ui/Heading';
import {NavigationLink} from '../_components/ui/NavigationLink';
import {ForgotPasswordForm} from './_components/ForgotPasswordForm';

export default function ForgotPasswordPage() {
  return (
    <>
      <NavigationLink href={formatPathname([ROUTE.LOGIN])}>
        <FormattedMessage defaultMessage="Back" id="cyR7Kh" />
      </NavigationLink>
      <Container>
        <Heading>
          <FormattedMessage defaultMessage="Forgot password?" id="V/JHlm" />
        </Heading>
        <Description>
          <FormattedMessage
            defaultMessage="Enter your email to receive reset link"
            id="9KlUdb"
          />
        </Description>
      </Container>
      <ForgotPasswordForm />
    </>
  );
}
