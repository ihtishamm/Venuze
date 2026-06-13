import axios from 'axios';
import { AUTH_COOKIE_NAME, getCookie } from '@/lib/cookies';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const REQRES_API_KEY = process.env.NEXT_PUBLIC_REQRES_API_KEY;

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // reqres.in requires an API key on every request.
    ...(REQRES_API_KEY ? { 'x-api-key': REQRES_API_KEY } : {})
  }
});

// ── Request interceptor ──────────────────────────────────────────────────────
// Attach auth token from the cookie on every request (client-side only). The
// token lives in a cookie so middleware can read it too — see lib/cookies.ts.
api.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = getCookie(AUTH_COOKIE_NAME);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ── Response interceptor ─────────────────────────────────────────────────────
// Normalise errors so React Query can inspect `error.status`
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Re-shape so callers / React Query can read `error.status`
      // reqres.in returns messages under `error`; other backends use `message`.
      const normalised = {
        status: error.response.status,
        message:
          error.response.data?.message ??
          error.response.data?.error ??
          error.message,
        data: error.response.data
      };
      return Promise.reject(normalised);
    }
    return Promise.reject(error);
  }
);

export default api;
