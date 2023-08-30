import {useRouter} from 'next/navigation';

import {APP_ROUTES} from '@/lib/consts';
import {formatPathname} from '@/lib/tools/format-pathname';

export function useSelectCategory() {
  const router = useRouter();

  return function selectCategory(category: string) {
    const pathname = formatPathname(APP_ROUTES.PRODUCTS);
    router.push(`${pathname}?category=${category}`);
  };
}
