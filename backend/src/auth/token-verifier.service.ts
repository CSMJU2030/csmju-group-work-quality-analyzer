import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as jwt from 'jsonwebtoken';
import { JwksClient } from './jwks.client';
import { authSettings } from './auth.config';

export interface VerifiedToken {
  sub: string;
  email?: string;
  role: string;
  exp: number;
  iat: number;
}

@Injectable()
export class TokenVerifier {
  constructor(
    private readonly cfg: ConfigService,
    private readonly jwks: JwksClient,
  ) {}

  /** คืน payload ที่ผ่านครบ 10 ขั้น หรือ null ถ้าไม่ผ่านข้อใดข้อหนึ่ง (ผู้เรียกตอบ 401) */
  async verify(token: string): Promise<VerifiedToken | null> {
    try {
      const s = authSettings(this.cfg);
      const decoded = jwt.decode(token, { complete: true }); // ขั้น 2
      if (!decoded || typeof decoded.payload === 'string') return null;
      const { alg, kid } = decoded.header;
      if (alg !== 'RS256') return null; // ขั้น 3
      if (!kid) return null;
      const key = await this.jwks.getKey(kid); // ขั้น 4
      if (!key) return null;

      const tol = Math.min(Number(this.cfg.get('JWT_CLOCK_TOLERANCE_SEC') ?? 5), 60);
      const p = jwt.verify(token, key, {
        algorithms: ['RS256'], // ขั้น 5
        issuer: s.issuer, // ขั้น 6
        audience: s.audience,
        clockTolerance: Math.max(tol, 0), // ขั้น 7 (exp)
      }) as jwt.JwtPayload;

      if (typeof p.sub !== 'string' || p.sub.length === 0) return null; // ขั้น 8
      if (typeof p.iat !== 'number' || typeof p.exp !== 'number') return null; // ขั้น 9
      if (p.exp - p.iat > 900 + 60) return null;
      if (p.azp !== undefined && p.azp !== s.subsystemId) return null; // ขั้น 10
      if (typeof p.role !== 'string') return null;

      return { sub: p.sub, email: p.email, role: p.role, exp: p.exp, iat: p.iat };
    } catch {
      return null;
    }
  }
}