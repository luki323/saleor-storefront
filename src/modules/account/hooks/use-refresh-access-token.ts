import {cache, use} from 'react';

import {useIntlRouter} from '@/i18n/hooks/use-intl-router';
import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';

import {refreshAccessToken} from '../tools/refresh-access-token';

// let refreshAccessTokenPromise: ReturnType<typeof refreshAccessToken> | null =
//   null;

// function cache(refreshAccessTokenFn: typeof refreshAccessToken) {
//   if (!refreshAccessTokenPromise) {
//     refreshAccessTokenPromise = refreshAccessTokenFn().then(
//       (response) => ((refreshAccessTokenPromise = null), response),
//     );
//   }
//   return refreshAccessTokenPromise;
// }

export function useRefreshAccessToken() {
  const refreshAccessTokenFn = cache(refreshAccessToken);
  const response = use(refreshAccessTokenFn());
  const intlRouter = useIntlRouter();

  if (response.ok) {
    intlRouter.refresh();
  } else {
    intlRouter.push(formatPathname(APP_ROUTES.LOGIN));
  }
}
