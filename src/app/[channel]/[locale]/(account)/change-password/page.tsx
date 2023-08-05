import {redirect} from 'next/navigation';

import {FormattedMessage} from '@/i18n/react-intl';
import {ROUTE} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';

import {Container} from '../_components/ui/Container';
import {Description} from '../_components/ui/Description';
import {Heading} from '../_components/ui/Heading';
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
    redirect(formatPathname([ROUTE.LOGIN]));
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
