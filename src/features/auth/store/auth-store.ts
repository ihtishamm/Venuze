import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AUTH_COOKIE_NAME, removeCookie, setCookie } from '@/lib/cookies';
import type { AuthUser } from '@/types/auth';

interface AuthState {
  user: AuthUser | null;
  token: string | null;
  isAuthenticated: boolean;

  setAuth: (user: AuthUser, token: string) => void;
  /** Clear all auth state (store + cookie). */
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      setAuth: (user, token) => {
        setCookie(AUTH_COOKIE_NAME, token);
        set({ user, token, isAuthenticated: true });
      },
      logout: () => {
        removeCookie(AUTH_COOKIE_NAME);
        set({ user: null, token: null, isAuthenticated: false });
      }
    }),
    { name: 'auth-storage' }
  )
);
