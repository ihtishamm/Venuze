import { useMutation } from '@tanstack/react-query';
import { login } from '@/features/auth/api/login';
import { useAuthStore } from '@/features/auth/store/auth-store';
import type { AuthUser, LoginCredentials } from '@/types/auth';

/** Build an AuthUser from the login credentials — reqres only returns a token. */
function userFromCredentials(email: string): AuthUser {
  const name = email
    .split('@')[0]
    .replace(/[._-]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
  return { email, name };
}

export function useLogin() {
  const setAuth = useAuthStore((s) => s.setAuth);

  return useMutation({
    mutationFn: (credentials: LoginCredentials) => login(credentials),
    onSuccess: (data, variables) => {
      setAuth(userFromCredentials(variables.email), data.token);
    }
  });
}
