import {FormattedMessage} from '@/i18n/react-intl';
import {ROUTE} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';

import {Container} from '../_components/ui/Container';
import {Description} from '../_components/ui/Description';
import {Heading} from '../_components/ui/Heading';
import {NavigationLink} from '../_components/ui/NavigationLink';
import {RequestPasswordResetForm} from './_components/RequestPasswordResetForm';

export default function RequestPasswordResetPage() {
  return (
    <>
      <NavigationLink href={formatPathname([ROUTE.LOGIN])}>
        <FormattedMessage defaultMessage="Back" id="cyR7Kh" />
      </NavigationLink>
      <Container>
        <Heading>
          <FormattedMessage
            defaultMessage="Request password reset"
            id="Wtffln"
          />
        </Heading>
        <Description>
          <FormattedMessage
            defaultMessage="Enter your email to receive reset link"
            id="9KlUdb"
          />
        </Description>
      </Container>
      <RequestPasswordResetForm />
    </>
  );
}
