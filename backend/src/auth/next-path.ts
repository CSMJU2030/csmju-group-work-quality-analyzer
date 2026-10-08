export function safeNext(next: unknown, fallback = '/'): string {
  if (typeof next !== 'string') return fallback;
  if (next.length < 1 || next.length > 512) return fallback;
  if (!next.startsWith('/') || next.startsWith('//') || next.includes('\\')) return fallback;
  // eslint-disable-next-line no-control-regex
  if (/[\u0000-\u001f\u007f]/.test(next)) return fallback;
  try {
    const origin = 'http://self.invalid';
    const u = new URL(next, origin);
    if (u.origin !== origin) return fallback;
  } catch {
    return fallback;
  }
  if (next === '/auth' || next.startsWith('/auth/') || next.startsWith('/auth?')) return fallback;
  return next;
}