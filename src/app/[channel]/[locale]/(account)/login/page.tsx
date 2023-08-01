import {FormattedMessage} from '@/i18n/components/FormattedMessage';
import {Divider} from '@/lib/components/ui/Divider';
import {Text} from '@/lib/components/ui/Text';
import {ROUTE} from '@/lib/consts';

import {Container} from '../_components/Container';
import {GoogleButton} from '../_components/GoogleButton';
import {Heading} from '../_components/Heading';
import {NavigationLink} from '../_components/NavigationLink';
import {LoginForm} from './_components/LoginForm';

function LoginPage() {
  return (
    <>
      <NavigationLink href={ROUTE.SIGNUP}>
        <FormattedMessage defaultMessage="Sign up" id="8HJxXG" />
      </NavigationLink>
      <Container>
        <Heading>
          <FormattedMessage defaultMessage="Log in" id="odXlk8" />
        </Heading>
        <Text size="small" color="muted-foreground">
          <FormattedMessage
            defaultMessage="Enter email and password to log in"
            id="VxQzFj"
          />
        </Text>
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

export default LoginPage;
