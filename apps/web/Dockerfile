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

# Use pnpm deploy to create a clean production deployment
WORKDIR /app
RUN pnpm --filter @noral/web deploy --prod /prod/web

# Copy build output to deployment
RUN cp -r /app/apps/web/build /prod/web/build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy the deployed app with all production dependencies
COPY --from=builder /prod/web ./

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["node", "build"]

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["node", "build"]
