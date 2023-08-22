import {useSuspenseQuery} from '@tanstack/react-query';
import {useRouter} from 'next/navigation';

import {GRAPHQL_ENDPOINT} from '@/env/env';
import {GetUserEmailDocument} from '@/graphql/generated/documents';
import {useChannel} from '@/i18n/context/channel-context';
import {useLocale} from '@/i18n/context/locale-context';
import {APP_ROUTES} from '@/lib/consts';
import {fetchQuery} from '@/lib/tools/fetch-query';
import {formatPathname} from '@/lib/tools/format-pathname';
import {getKeyByHookName} from '@/lib/tools/get-key-by-hook-name';

export function useUserEmail() {
  const [channel, locale] = [useChannel(), useLocale()];
  const router = useRouter();

  return useSuspenseQuery({
    queryKey: [getKeyByHookName(useUserEmail.name)],
    async queryFn() {
      const {data, errors} = await fetchQuery(GRAPHQL_ENDPOINT, {
        params: {
          query: GetUserEmailDocument,
        },
      });

      if (errors?.length) {
        console.error(errors);
      }
      if (!data?.me) {
        router.push(formatPathname(channel, locale, APP_ROUTES.LOGIN));
      }
      return data;
    },
  });
}
