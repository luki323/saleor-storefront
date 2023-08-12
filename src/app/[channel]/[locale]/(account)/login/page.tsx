import {FormattedMessage} from '@/i18n/react-intl';
import {Divider} from '@/lib/components/ui/Divider';
import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';

import {Container} from '../_components/ui/Container';
import {Description} from '../_components/ui/Description';
import {GoogleButton} from '../_components/ui/GoogleButton';
import {Heading} from '../_components/ui/Heading';
import {NavigationLink} from '../_components/ui/NavigationLink';
import {LoginForm} from './_components/LoginForm';

export default function LoginPage() {
  return (
    <>
      <NavigationLink href={formatPathname(APP_ROUTES.SIGNUP)}>
        <FormattedMessage defaultMessage="Sign up" id="8HJxXG" />
      </NavigationLink>
      <Container>
        <Heading>
          <FormattedMessage defaultMessage="Welcome back" id="UKxoV8" />
        </Heading>
        <Description>
          <FormattedMessage
            defaultMessage="Enter email and password to log in"
            id="VxQzFj"
          />
        </Description>
      </Container>
      <LoginForm />
      <Divider>
        <FormattedMessage defaultMessage="Or continue with" id="4cSA+G" />
      </Divider>
      <GoogleButton>
        <FormattedMessage defaultMessage="Login with Google" id="hfuuOe" />
      </GoogleButton>
    </>
  );
}
