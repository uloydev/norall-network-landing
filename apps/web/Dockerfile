# Build stage
FROM node:20-alpine AS builder

# Install pnpm
RUN npm install -g pnpm@8.15.0

WORKDIR /app

# Copy workspace files
COPY pnpm-workspace.yaml package.json pnpm-lock.yaml* ./
COPY packages ./packages
COPY apps/web ./apps/web

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build web app
WORKDIR /app/apps/web
RUN pnpm build

# Production stage
FROM node:20-alpine

# Install pnpm
RUN npm install -g pnpm@8.15.0

WORKDIR /app

# Copy built application
COPY --from=builder /app/apps/web/build ./build
COPY --from=builder /app/apps/web/package.json ./package.json
COPY --from=builder /app/apps/web/node_modules ./node_modules

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["node", "build"]
