import {useRouter} from 'next/navigation';
import invariant from 'tiny-invariant';

import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';
import {isDefined} from '@/lib/tools/type-guards/is-defined';

export function useSearchAction() {
  const router = useRouter();

  return (formData: FormData) => {
    const searchValue = formData.get('search')?.toString();
    invariant(isDefined(searchValue));

    let href = `${formatPathname(APP_ROUTES.PRODUCTS)}`;

    if (searchValue) {
      href += `?search=${searchValue}`;
    }
    router.push(href);
  };
}
