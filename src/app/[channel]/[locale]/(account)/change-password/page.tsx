import {redirect} from 'next/navigation';

import {FormattedMessage} from '@/i18n/components/FormattedMessage';
import {Text} from '@/lib/components/ui/Text';
import {ROUTE} from '@/lib/consts/consts';

import {Container} from '../_components/Container';
import {Heading} from '../_components/Heading';
import {ChangePasswordForm} from './_components/ChangePasswordForm';

interface Props {
  readonly searchParams: {
    readonly email?: string;
    readonly token?: string;
  };
}

async function ChangePasswordPage({searchParams: {email, token}}: Props) {
  if (!email || !token) {
    redirect(ROUTE.LOGIN);
  }

  return (
    <>
      <Container>
        <Heading>
          <FormattedMessage defaultMessage="Change password" id="L4nXIc" />
        </Heading>
        <Text size="small" color="muted-foreground">
          <FormattedMessage
            defaultMessage="Enter your new password"
            id="h/zqNr"
          />
        </Text>
      </Container>
      <ChangePasswordForm email={email} token={token} />
    </>
  );
}

export default ChangePasswordPage;
