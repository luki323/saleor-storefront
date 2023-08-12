import {cookies} from 'next/headers';

import {GRAPHQL_ENDPOINT} from '@/env/env';
import {GetUserEmailDocument} from '@/graphql/generated/documents';
import {FormattedMessage} from '@/i18n/react-intl';
import {RefreshAccessToken} from '@/lib/components/refresh-access-token';
import {COOKIE_NAMES} from '@/lib/consts';
import {fetchQuery} from '@/lib/tools/fetch-query';
import {isDefined} from '@/lib/tools/is-defined';

export default async function UserPage() {
  const accessToken = cookies().get(COOKIE_NAMES.ACCESS_TOKEN);

  if (!isDefined(accessToken)) {
    return (
      <RefreshAccessToken
        ifLoading={
          <FormattedMessage
            defaultMessage="Refreshing access token..."
            id="1UUo5H"
          />
        }
      />
    );
  }
  const {data, errors} = await fetchQuery(GRAPHQL_ENDPOINT, {
    params: {
      query: GetUserEmailDocument,
    },
    headers: {
      Authorization: `Bearer ${accessToken.value}`,
    },
  });
  if (errors?.length || !data?.me) {
    return (
      <RefreshAccessToken
        ifLoading={
          <FormattedMessage
            defaultMessage="Refreshing access token..."
            id="1UUo5H"
          />
        }
      />
    );
  }
  return <div>{data.me.email}</div>;
}
