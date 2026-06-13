import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';

import QueryProvider from '@/provider/query-provider';
import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import './globals.css';
import './theme.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Next Shadcn',
  description: 'Basic dashboard with Next.js and Shadcn'
};

export const viewport: Viewport = {
  themeColor: '#ffffff'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'bg-background overflow-hidden overscroll-none antialiased',
          poppins.className
        )}
      >
        <NextTopLoader showSpinner={false} />
        <QueryProvider>
          <NuqsAdapter>
            <Toaster />
            {children}
          </NuqsAdapter>
        </QueryProvider>
      </body>
    </html>
  );
}
