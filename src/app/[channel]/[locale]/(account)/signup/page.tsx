import {FormattedMessage} from '@/i18n/react-intl';
import {Divider} from '@/lib/components/ui/Divider';
import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';

import {Container} from '../_components/Container';
import {Description} from '../_components/Description';
import {GoogleButton} from '../_components/GoogleButton';
import {Heading} from '../_components/Heading';
import {NavigationLink} from '../_components/NavigationLink';
import {SignupForm} from './_components/SignupForm';

export default function SignupPage() {
  return (
    <>
      <NavigationLink href={formatPathname(APP_ROUTES.LOGIN)}>
        <FormattedMessage defaultMessage="Login" id="AyGauy" />
      </NavigationLink>
      <Container>
        <Heading>
          <FormattedMessage defaultMessage="Create an account" id="0vL5u1" />
        </Heading>
        <Description>
          <FormattedMessage
            defaultMessage="Enter email and password to create account"
            id="Omjm4o"
          />
        </Description>
      </Container>
      <SignupForm />
      <Divider>
        <FormattedMessage defaultMessage="Or continue with" id="4cSA+G" />
      </Divider>
      <GoogleButton>
        <FormattedMessage defaultMessage="Sign up with Google" id="wUCGLt" />
      </GoogleButton>
    </>
  );
}
