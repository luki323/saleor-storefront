'use client';

import type {ReactNode} from 'react';

import {useRefreshAccessToken} from './hooks/use-refresh-access-token';

interface Props {
  readonly ifLoading: ReactNode;
}

export function RefreshAccessToken({ifLoading}: Props) {
  const {isLoading} = useRefreshAccessToken();

  if (isLoading) {
    return ifLoading;
  }
  return null;
}
