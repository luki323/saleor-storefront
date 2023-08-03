import {FormattedMessage} from '@/i18n/components/FormattedMessage';
import {Divider} from '@/lib/components/ui/Divider';
import {Text} from '@/lib/components/ui/Text';
import {ROUTE} from '@/lib/consts/consts';

import {Container} from '../_components/Container';
import {GoogleButton} from '../_components/GoogleButton';
import {Heading} from '../_components/Heading';
import {NavigationLink} from '../_components/NavigationLink';
import {SignupForm} from './_components/SignupForm';

function SignupPage() {
  return (
    <>
      <NavigationLink href={ROUTE.LOGIN}>
        <FormattedMessage defaultMessage="Login" id="AyGauy" />
      </NavigationLink>
      <Container>
        <Heading>
          <FormattedMessage defaultMessage="Create an account" id="0vL5u1" />
        </Heading>
        <Text size="small" color="muted-foreground">
          <FormattedMessage
            defaultMessage="Enter email and password to create account"
            id="Omjm4o"
          />
        </Text>
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

export default SignupPage;
