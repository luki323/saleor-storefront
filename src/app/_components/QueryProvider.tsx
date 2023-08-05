'use client';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {ReactQueryStreamedHydration} from '@tanstack/react-query-next-experimental';
import type {PropsWithChildren} from 'react';
import {useMemo} from 'react';

export function QueryProvider({children}: PropsWithChildren) {
  const queryClient = useMemo(() => new QueryClient(), []);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
