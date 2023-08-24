import {useQuery} from '@tanstack/react-query';

import {useBasePath} from '@/i18n/hooks/use-base-path';
import {useIntlRouter} from '@/i18n/hooks/use-intl-router';
import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';
import {getKeyByHookName} from '@/lib/tools/get-key-by-hook-name';

export function useRefreshAccessToken() {
  const intlRouter = useIntlRouter();
  const basePath = useBasePath();

  return useQuery({
    queryKey: [getKeyByHookName(useRefreshAccessToken.name)],
    async queryFn() {
      try {
        const response = await fetch(
          formatPathname(...APP_ROUTES.API.REFRESH),
          {method: 'POST'},
        );
        if (!response.ok) {
          throw null;
        }
      } catch {
        intlRouter.push(formatPathname(...basePath, APP_ROUTES.LOGIN));
      }
      intlRouter.refresh();
      return null;
    },
  });
}
