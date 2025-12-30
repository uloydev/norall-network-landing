# Noral Monorepo - Quick Reference

## 🚀 Quick Start

```bash
# 1. Setup
./quick-start.sh

# 2. Access
# Landing: http://localhost
# Admin: http://localhost/cms/admin
```

## 📋 Common Commands

### Development
```bash
pnpm dev              # All apps
pnpm dev:web          # SvelteKit only
pnpm dev:cms          # Strapi only
```

### Docker
```bash
cd infra
docker-compose up -d           # Start
docker-compose logs -f         # Logs
docker-compose down            # Stop
docker-compose up -d --build   # Rebuild
```

### Build
```bash
pnpm build            # All apps
pnpm build:web        # SvelteKit
pnpm build:cms        # Strapi
```

## 🗂️ Key Files

- `apps/cms/src/api/` - Content types
- `apps/web/src/routes/+page.svelte` - Landing page
- `apps/web/src/components/` - UI components
- `infra/docker-compose.yml` - Services
- `infra/nginx/conf.d/default.conf` - Routing

## 🔧 Troubleshooting

**CMS won't start:**
```bash
docker-compose restart cms
docker-compose logs cms
```

**Clear cache:**
```bash
docker-compose restart nginx
```

**Reset everything:**
```bash
docker-compose down -v
docker-compose up -d
```

## 📚 Full Docs

See [README.md](./README.md) for complete documentation.
