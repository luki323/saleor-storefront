import {useRouter} from 'next/navigation';

import {APP_ROUTES} from '@/lib/consts';
import {raise} from '@/lib/tools/raise';

export function useSearchAction() {
  const router = useRouter();

  return (formData: FormData) => {
    const searchValue =
      formData.get('search')?.toString() ?? raise('Invalid search filed name');

    router.push(`${APP_ROUTES.PRODUCTS}?search=${searchValue}`);
  };
}
