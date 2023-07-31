import {getChannel} from '@/i18n/tools/get-channel';

import {cursorsStore} from '../_tools/cursors-store';
import {fetchProductCursors} from '../_tools/fetch-product-cursors';

import type {ReactNode} from 'react';

type Props = {
  readonly children: ReactNode;
};

export async function PreloadCursors({children}: Props) {
  const channel = getChannel();

  void (await cursorsStore.loadCursors(fetchProductCursors(channel)));
  return <>{children}</>;
}
