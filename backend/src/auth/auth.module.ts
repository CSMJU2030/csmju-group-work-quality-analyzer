import { Module } from '@nestjs/common';
import { AuthController, MeController } from './auth.controller';
import { AuthGuard } from './auth.guard';
import { JwksClient } from './jwks.client';
import { TokenVerifier } from './token-verifier.service';

@Module({
  controllers: [AuthController, MeController],
  providers: [JwksClient, TokenVerifier, AuthGuard],
  exports: [AuthGuard, TokenVerifier],
})
export class AuthModule {}