import {useRouter} from 'next/navigation';

import {ROUTE} from '@/lib/consts';
import {raise} from '@/lib/tools/raise';

export function useSearchAction() {
  const router = useRouter();

  return (formData: FormData) => {
    const searchValue =
      formData.get('search')?.toString() ?? raise('Invalid search filed name');

    // eslint-disable-next-line functional/immutable-data
    router.push(`${ROUTE.PRODUCTS}?search=${searchValue}`);
  };
}
