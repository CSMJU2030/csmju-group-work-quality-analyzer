#!/bin/sh
set -e

echo "[entrypoint] applying database migrations ..."
pnpm exec prisma migrate deploy

echo "[entrypoint] starting CSMJU TeamWork Analytics System"
exec "$@"
