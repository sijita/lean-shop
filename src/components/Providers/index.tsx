'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type ProvidersProps = Readonly<{
  children: React.ReactNode;
}>;

const queryClient = new QueryClient();

export default function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
