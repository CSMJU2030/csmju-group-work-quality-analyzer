import { ConfigService } from '@nestjs/config';

// role ที่ระบบรับ ต้องตรงกับที่ติ๊กตอนลงทะเบียนใน Core Hub (ถาม PL ยืนยัน)
export const ALLOWED_ROLES = ['student', 'lecturer', 'staff', 'admin'];

export function authSettings(cfg: ConfigService) {
  const subsystemId = cfg.getOrThrow<string>('SUBSYSTEM_ID');
  const base = subsystemId.replace(/-/g, '_');
  return {
    subsystemId,
    webUrl: cfg.getOrThrow<string>('CORE_HUB_WEB_URL').replace(/\/$/, ''),
    issuer: cfg.get<string>('CORE_HUB_ISSUER') ?? 'core-hub',
    audience: cfg.get<string>('CORE_HUB_AUDIENCE') ?? 'csmju2030',
    sessionCookie: `${base}_access_token`,
    stateCookie: `${base}_sso_state`,
    secure: cfg.get<string>('NODE_ENV') === 'production',
  };
}

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