import api from '@/lib/axios';
import type { LoginCredentials, LoginResponse } from '@/types/auth';

/** POST /api/login — returns an auth token on success. */
export async function login(
  credentials: LoginCredentials
): Promise<LoginResponse> {
  const { data } = await api.post<LoginResponse>('/login', credentials);
  return data;
}
