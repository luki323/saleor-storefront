import invariant from 'tiny-invariant';

import {useIntlRouter} from '@/i18n/hooks/use-intl-router';
import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';
import {isDefined} from '@/lib/tools/type-guards/is-defined';

export function useSearchAction() {
  const intlRouter = useIntlRouter();

  return (formData: FormData) => {
    const searchValue = formData.get('search')?.toString();
    invariant(isDefined(searchValue));

    let href = `${formatPathname(APP_ROUTES.PRODUCTS)}`;

    if (searchValue) {
      href += `?search=${searchValue}`;
    }
    intlRouter.push(href);
  };
}
