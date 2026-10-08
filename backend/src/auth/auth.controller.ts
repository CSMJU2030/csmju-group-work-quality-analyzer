import { Controller, Get, HttpCode, Post, Query, Req, Res, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { randomBytes, timingSafeEqual } from 'crypto';
import type { Request, Response } from 'express';
import { ALLOWED_ROLES, authSettings } from './auth.config';
import { safeNext } from './next-path';
import { TokenVerifier } from './token-verifier.service';
import { AuthGuard, AuthedRequest } from './auth.guard';

const STATE_MAX_AGE_MS = 600_000;

const RETRY_HTML = `<!doctype html><html lang="th"><meta charset="utf-8"><title>เข้าสู่ระบบ</title>
<body style="font-family:sans-serif;text-align:center;margin-top:20vh">
<p>เซสชันการเข้าสู่ระบบหมดอายุหรือไม่ถูกต้อง</p>
<a href="/auth/login">เข้าสู่ระบบอีกครั้ง</a></body></html>`;

function eq(a: string, b: string) {
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
}

@Controller('auth')
export class AuthController {
  constructor(
    private readonly cfg: ConfigService,
    private readonly verifier: TokenVerifier,
  ) {}

  @Get('login')
  login(@Query('next') next: string, @Res() res: Response) {
    const s = authSettings(this.cfg);
    res.setHeader('Cache-Control', 'no-store');
    const state = randomBytes(32).toString('base64url');
    const nextB64 = Buffer.from(safeNext(next)).toString('base64url');
    res.cookie(s.stateCookie, `${state}.${nextB64}`, {
      httpOnly: true,
      sameSite: 'lax',
      path: '/auth/callback',
      secure: s.secure,
      maxAge: STATE_MAX_AGE_MS,
    });
    const url =
      `${s.webUrl}/sso/authorize?subsystem=${encodeURIComponent(s.subsystemId)}` +
      `&state=${encodeURIComponent(state)}`;
    return res.redirect(302, url);
  }

  @Get('callback')
  async callback(
    @Query('access_token') token: string | undefined,
    @Query('state') state: string | undefined,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const s = authSettings(this.cfg);
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('Referrer-Policy', 'no-referrer');

    if (!token) return res.status(400).json({ error: { code: 'BAD_REQUEST', message: 'access_token required' } });

    // มาจาก sidebar ของ Core Hub: ทิ้ง token ไม่แตะคุกกี้ใดๆ
    if (!state) return res.redirect(302, '/auth/login');

    // เผาคุกกี้ state ทิ้งก่อนตรวจ (ใช้ได้ครั้งเดียว)
    const stored = (req.cookies as Record<string, string> | undefined)?.[s.stateCookie];
    res.clearCookie(s.stateCookie, { path: '/auth/callback', httpOnly: true, sameSite: 'lax', secure: s.secure });

    const [storedState, storedNext] = (stored ?? '').split('.');
    if (!stored || !storedState || !eq(storedState, state)) {
      if (req.accepts(['json', 'html']) === 'html') return res.status(401).type('html').send(RETRY_HTML);
      return res.status(401).json({ error: { code: 'UNAUTHORIZED', message: 'Invalid state' } });
    }

    const user = await this.verifier.verify(token);
    if (!user) return res.status(401).json({ error: { code: 'UNAUTHORIZED', message: 'Invalid token' } });
    if (!ALLOWED_ROLES.includes(user.role)) {
      return res.status(403).json({ error: { code: 'FORBIDDEN', message: 'Role not allowed' } });
    }

    const maxAge = Math.max(user.exp * 1000 - Date.now(), 0);
    res.cookie(s.sessionCookie, token, {
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      secure: s.secure,
      maxAge,
    });
    let next = '/';
    try {
      next = safeNext(Buffer.from(storedNext ?? '', 'base64url').toString('utf8'));
    } catch {
      /* ใช้ค่า default */
    }
    return res.redirect(302, next); // ตรวจ next ซ้ำตอนใช้งาน
  }

  @Post('logout')
  @HttpCode(303)
  logout(@Res() res: Response) {
    const s = authSettings(this.cfg);
    res.setHeader('Cache-Control', 'no-store');
    res.clearCookie(s.sessionCookie, { path: '/', httpOnly: true, sameSite: 'lax', secure: s.secure });
    res.clearCookie(s.stateCookie, { path: '/auth/callback', httpOnly: true, sameSite: 'lax', secure: s.secure });
    return res.redirect(303, `${s.webUrl}/logout`);
  }
}

@Controller('me')
export class MeController {
  @Get()
  @UseGuards(AuthGuard)
  me(@Req() req: AuthedRequest) {
    const u = req.user!;
    return {
      sub: u.sub,
      email: u.email,
      role: u.role,
      session: { expiresAt: new Date(u.exp * 1000).toISOString() },
    };
  }
}