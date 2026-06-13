/**
 * Lightweight client-side cookie helpers.
 *
 * The auth token is stored in a cookie (not localStorage) so that Next.js
 * middleware — which runs on the edge and cannot read localStorage — can read
 * it to protect routes. The reqres.in token is not sensitive, so a readable
 * (non-httpOnly) cookie set from the client is acceptable here.
 */

export const AUTH_COOKIE_NAME = 'auth_token';

const DEFAULT_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export function getCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined;
  const match = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.split('=').slice(1).join('=')) : undefined;
}

export function setCookie(
  name: string,
  value: string,
  maxAge: number = DEFAULT_MAX_AGE
): void {
  if (typeof document === 'undefined') return;
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; SameSite=Lax`;
}

export function removeCookie(name: string): void {
  if (typeof document === 'undefined') return;
  document.cookie = `${name}=; path=/; max-age=0; SameSite=Lax`;
}
