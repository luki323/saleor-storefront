'use client';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {ReactQueryStreamedHydration} from '@tanstack/react-query-next-experimental';
import type {ReactNode} from 'react';
import {useMemo} from 'react';

export function QueryProvider({children}: {readonly children: ReactNode}) {
  const queryClient = useMemo(() => {
    return new QueryClient();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
