'use client';

import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState, type ReactNode } from 'react';
import { toast } from 'sonner';

/** Extract a readable message from any error shape the axios interceptor produces */
function getErrorMessage(error: unknown): string {
  if (error && typeof error === 'object') {
    if (
      'message' in error &&
      typeof (error as { message: unknown }).message === 'string'
    ) {
      return (error as { message: string }).message;
    }
  }
  if (typeof error === 'string') return error;
  return 'Something went wrong. Please try again.';
}

function makeQueryClient(): QueryClient {
  return new QueryClient({
    queryCache: new QueryCache({
      onError: (error, query) => {
        if (query.state.data !== undefined) return;

        const message = getErrorMessage(error);
        toast.error(message, {
          description: 'Failed to load data'
        });
      }
    }),

    mutationCache: new MutationCache({
      onError: (error) => {
        const message = getErrorMessage(error);
        toast.error(message, {
          description: 'Operation failed'
        });
      },
      onSuccess: (_data, _variables, _context, mutation) => {
        if (!mutation.options.onSuccess) {
          toast.success('Done!');
        }
      }
    }),

    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        retry: (failureCount, error: unknown) => {
          if (error && typeof error === 'object' && 'status' in error) {
            const status = (error as { status: number }).status;
            if (status === 401 || status === 403) {
              return false;
            }
          }

          return failureCount < 3;
        }
      },
      mutations: {
        // Never retry mutations — avoids accidental duplicate writes
        retry: false
      }
    }
  });
}

// SSR-safe singleton

let browserQueryClient: QueryClient | undefined;

function getQueryClient(): QueryClient {
  if (typeof window === 'undefined') {
    // Server: always create a new client
    return makeQueryClient();
  }
  // Browser: create once and reuse
  if (!browserQueryClient) {
    browserQueryClient = makeQueryClient();
  }
  return browserQueryClient;
}

interface QueryProviderProps {
  children: ReactNode;
}

export default function QueryProvider({ children }: QueryProviderProps) {
  const [queryClient] = useState(() => getQueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
