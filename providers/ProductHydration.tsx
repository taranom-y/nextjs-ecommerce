import { GetProducts } from '@/lib/api/GetProducts';
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from '@tanstack/react-query';
import { queryClientConfig } from './queryClientConfig';
import type { ReactNode } from 'react';

export async function ProductHydration({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient(queryClientConfig);

  await queryClient.prefetchQuery({
    queryKey: ['products'],
    queryFn: GetProducts,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
}
