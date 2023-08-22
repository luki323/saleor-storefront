import {redirect} from 'next/navigation';

import {FormattedMessage} from '@/i18n/react-intl';
import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';

import {Container} from '../_components/Container';
import {Description} from '../_components/Description';
import {Heading} from '../_components/Heading';
import {ChangePasswordForm} from './_components/ChangePasswordForm';

interface Props {
  readonly searchParams: {
    readonly email?: string;
    readonly token?: string;
  };
}

export default async function ChangePasswordPage({
  searchParams: {email, token},
}: Props) {
  if (!email || !token) {
    redirect(formatPathname(APP_ROUTES.LOGIN));
  }

  return (
    <>
      <Container>
        <Heading>
          <FormattedMessage defaultMessage="Change password" id="L4nXIc" />
        </Heading>
        <Description>
          <FormattedMessage
            defaultMessage="Enter your new password"
            id="h/zqNr"
          />
        </Description>
      </Container>
      <ChangePasswordForm email={email} token={token} />
    </>
  );
}
