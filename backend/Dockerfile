FROM node:22-alpine AS builder

WORKDIR /app
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
RUN corepack enable pnpm

ENV DATABASE_URL=postgresql://build:build@localhost:5432/build_only

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY backend/package.json backend/prisma.config.ts backend/
COPY backend/prisma backend/prisma

RUN pnpm install --frozen-lockfile --filter backend...

COPY backend/ backend/

RUN pnpm --filter backend exec prisma generate && pnpm --filter backend build

FROM node:22-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
ENV PORT=4000

RUN corepack enable pnpm

COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./
COPY backend/package.json backend/prisma.config.ts backend/
COPY backend/prisma backend/prisma

RUN pnpm install --frozen-lockfile --filter backend... --store-dir=/tmp/pnpm-store && rm -rf /tmp/pnpm-store /root/.cache/pnpm

COPY --from=builder /app/backend/dist ./backend/dist

COPY backend/docker/entrypoint.sh ./backend/docker/entrypoint.sh
RUN chmod +x ./backend/docker/entrypoint.sh

USER node
WORKDIR /app/backend

EXPOSE 4000

HEALTHCHECK --interval=15s --timeout=5s --start-period=30s --retries=5 CMD node -e "fetch('http://127.0.0.1:'+(process.env.PORT ?? 4000)+'/api/health').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

ENTRYPOINT ["./docker/entrypoint.sh"]
CMD ["node", "dist/src/main.js"]
