import {useRouter} from 'next/navigation';

import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';
import {raise} from '@/lib/tools/raise';

export function useSearchAction() {
  const router = useRouter();

  return (formData: FormData) => {
    const searchValue =
      formData.get('search')?.toString() ?? raise('Invalid search filed name');

    router.push(`${formatPathname(APP_ROUTES.PRODUCTS)}?search=${searchValue}`);
  };
}
