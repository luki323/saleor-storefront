import {useQuery} from '@tanstack/react-query';
import {useRouter} from 'next/navigation';

import {useBasePath} from '@/i18n/hooks/use-base-path';
import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';
import {getKeyByHookName} from '@/lib/tools/get-key-by-hook-name';

export function useRefreshAccessToken() {
  const router = useRouter();
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
        router.push(formatPathname(...basePath, APP_ROUTES.LOGIN));
      }
      router.refresh();
      return null;
    },
  });
}
