import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { Request } from 'express';
import { TokenVerifier, VerifiedToken } from './token-verifier.service';
import { authSettings } from './auth.config';

export type AuthedRequest = Request & { user?: VerifiedToken };

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly verifier: TokenVerifier,
    private readonly cfg: ConfigService,
  ) {}

  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    const req = ctx.switchToHttp().getRequest<AuthedRequest>();
    const header = req.headers.authorization;
    let token: string | undefined;
    if (header?.startsWith('Bearer ')) token = header.slice(7).trim();
    else token = (req.cookies as Record<string, string> | undefined)?.[
      authSettings(this.cfg).sessionCookie
    ];

    const user = token ? await this.verifier.verify(token) : null;
    if (!user) {
      throw new UnauthorizedException({
        error: { code: 'UNAUTHORIZED', message: 'Authentication required' },
      });
    }
    req.user = user;
    return true;
  }
}