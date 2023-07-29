import {useChannel} from '@/i18n/contexts/channel-context';

import {ProductList, type ProductListProps} from './_components/ProductList';

type Props = {
  readonly searchParams?: ProductListProps['searchParams'];
};

export default function ProductsPage({searchParams = {}}: Props) {
  const channel = useChannel();

  return <ProductList channel={channel} searchParams={searchParams} />;
}
