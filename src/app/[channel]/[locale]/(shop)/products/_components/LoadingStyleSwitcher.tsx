'use client';

import {useAtomValue} from 'jotai';
import type {ReactNode} from 'react';

import {loadingStyleAtom} from '../_tools/loading-style-atom';

interface Props {
  readonly pagination: ReactNode;
  readonly loadMore: ReactNode;
}

export function LoadingStyleSwitcher({pagination, loadMore}: Props) {
  return useAtomValue(loadingStyleAtom) === 'loadMore' ? loadMore : pagination;
}
