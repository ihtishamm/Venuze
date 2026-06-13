'use client';

import { useEffect, useState } from 'react';
import { useAuthStore } from '@/features/auth/store/auth-store';

/**
 * Greets the signed-in user by name. Reads from the persisted Zustand auth
 * store, which only rehydrates on the client — the `mounted` guard keeps the
 * server-rendered markup ("Welcome back") stable to avoid a hydration mismatch.
 */
export function WelcomeBanner() {
  const user = useAuthStore((state) => state.user);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const firstName = mounted && user?.name ? user.name.split(' ')[0] : null;

  return (
    <div className='flex flex-col gap-1'>
      <h1 className='text-2xl font-bold tracking-tight'>
        {firstName ? `Welcome back, ${firstName} 👋` : 'Welcome back 👋'}
      </h1>
      <p className='text-muted-foreground text-sm'>
        Here&apos;s what&apos;s happening across your venues today.
      </p>
    </div>
  );
}
