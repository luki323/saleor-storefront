import {useRouter} from 'next/navigation';
import {useMemo} from 'react';

import {formatPathname} from '@/lib/tools/format-pathname';

import {useBasePath} from './use-base-path';

export function useIntlRouter() {
  const [channel, locale] = useBasePath();
  const {push, replace, prefetch, ...restRouter} = useRouter();

  return {
    ...restRouter,
    ...useMemo(() => {
      const basePathname = formatPathname(channel, locale);

      return {
        push: (...[href, options]: Parameters<typeof push>) =>
          push(`${basePathname}${href}`, options),
        replace: (...[href, options]: Parameters<typeof replace>) =>
          replace(`${basePathname}${href}`, options),
        prefetch: (...[href, options]: Parameters<typeof prefetch>) =>
          prefetch(`${basePathname}${href}`, options),
      };
    }, [channel, locale, prefetch, push, replace]),
  };
}
