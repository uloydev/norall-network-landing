# Build stage
FROM node:20-alpine AS builder

# Install pnpm
RUN npm install -g pnpm@8.15.0

WORKDIR /app

# Copy workspace files
COPY pnpm-workspace.yaml package.json pnpm-lock.yaml* ./
COPY packages ./packages
COPY apps/cms ./apps/cms

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build CMS
WORKDIR /app/apps/cms
RUN pnpm build

# Production stage
FROM node:20-alpine

# Install pnpm
RUN npm install -g pnpm@8.15.0

WORKDIR /app

# Copy built application
COPY --from=builder /app/apps/cms/dist ./dist
COPY --from=builder /app/apps/cms/node_modules ./node_modules
COPY --from=builder /app/apps/cms/package.json ./package.json
COPY --from=builder /app/apps/cms/config ./config
COPY --from=builder /app/apps/cms/public ./public

# Create uploads directory
RUN mkdir -p /app/public/uploads

ENV NODE_ENV=production

EXPOSE 1337

CMD ["pnpm", "start"]
