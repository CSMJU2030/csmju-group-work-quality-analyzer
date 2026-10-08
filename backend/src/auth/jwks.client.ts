import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createPublicKey, KeyObject } from 'crypto';

@Injectable()
export class JwksClient {
  private readonly log = new Logger(JwksClient.name);
  private keys = new Map<string, KeyObject>();
  private fetchedAt = 0;
  private lastAttempt = 0;

  constructor(private readonly cfg: ConfigService) {}

  private num(key: string, def: number) {
    const v = Number(this.cfg.get(key));
    return Number.isFinite(v) && v > 0 ? v : def;
  }

  async getKey(kid: string): Promise<KeyObject | null> {
    const ttl = this.num('JWKS_CACHE_TTL_MS', 600000);
    const fresh = Date.now() - this.fetchedAt < ttl;
    const cached = this.keys.get(kid);
    if (fresh && cached) return cached;
    // หมดอายุ หรือ kid ไม่รู้จัก -> รีเฟรชหนึ่งครั้ง (ถูกจำกัดอัตรา)
    await this.refresh();
    return this.keys.get(kid) ?? null; // ถ้า Core Hub ล่ม ใช้กุญแจเก่าต่อได้
  }

  private async refresh() {
    const minInterval = Math.max(this.num('JWKS_MIN_REFRESH_INTERVAL_MS', 30000), 30000);
    const now = Date.now();
    if (now - this.lastAttempt < minInterval) return;
    this.lastAttempt = now;
    try {
      const res = await fetch(this.cfg.getOrThrow<string>('CORE_HUB_JWKS_URL'), {
        signal: AbortSignal.timeout(this.num('JWKS_REQUEST_TIMEOUT_MS', 5000)),
      });
      if (!res.ok) throw new Error(`JWKS HTTP ${res.status}`);
      const body = (await res.json()) as { keys?: Record<string, unknown>[] };
      const next = new Map<string, KeyObject>();
      for (const jwk of body.keys ?? []) {
        if (jwk.kty !== 'RSA' || 'd' in jwk || typeof jwk.kid !== 'string') continue;
        try {
          next.set(jwk.kid, createPublicKey({ key: jwk as never, format: 'jwk' }));
        } catch {
          /* ข้ามกุญแจที่เสีย */
        }
      }
      if (next.size > 0) {
        this.keys = next;
        this.fetchedAt = Date.now();
      }
    } catch (e) {
      this.log.warn(`JWKS refresh failed: ${(e as Error).message}`);
    }
  }
}