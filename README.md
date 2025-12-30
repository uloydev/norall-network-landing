# Noral Landing Page - Production-Ready Monorepo

A modern, CMS-driven landing page system built with **Strapi** (headless CMS) and **SvelteKit** (frontend), deployed as a unified Docker-based stack.

## 🎯 Project Overview

This monorepo implements **Option 1: Landing Page Only Mode** - a fully functional, SEO-optimized, public marketing landing page with content managed entirely through Strapi CMS.

### Key Features

- ✅ **Full CMS control** - All content editable through Strapi admin
- ✅ **Server-Side Rendering (SSR)** - Fast, SEO-friendly page loads
- ✅ **Production-ready Docker setup** - Single-command deployment
- ✅ **Modern tech stack** - SvelteKit + Strapi + PostgreSQL
- ✅ **Nginx reverse proxy** - Optimized routing and caching
- ✅ **Design system** - Tailwind CSS with professional styling
- ✅ **Type-safe** - Full TypeScript support
- ✅ **Monorepo architecture** - Ready to scale with future modules

---

## 📁 Project Structure

```
noral/
├── apps/
│   ├── cms/              # Strapi CMS (Backend)
│   │   ├── src/
│   │   │   ├── api/      # Content types (Landing Page, Features, Testimonials)
│   │   │   └── components/ # Reusable components (Hero, Sections, SEO)
│   │   ├── config/       # Strapi configuration
│   │   ├── Dockerfile
│   │   └── package.json
│   └── web/              # SvelteKit (Frontend)
│       ├── src/
│       │   ├── routes/   # Pages (landing page)
│       │   ├── components/ # UI components
│       │   ├── lib/      # API client, types
│       │   └── app.css   # Global styles
│       ├── Dockerfile
│       └── package.json
├── packages/
│   ├── config/           # Shared configs (Tailwind, Prettier)
│   └── ui/               # Shared UI (future-ready)
├── infra/
│   ├── docker-compose.yml
│   └── nginx/            # Nginx configuration
├── pnpm-workspace.yaml
├── package.json
├── .env.example
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 20.x (LTS)
- **pnpm** 8.x
- **Docker** & **Docker Compose**

### 1. Clone and Setup

```bash
# Clone repository
git clone <your-repo-url>
cd noral

# Install dependencies
pnpm install
```

### 2. Configure Environment

```bash
# Copy example env file
cp .env.example .env

# Generate Strapi secrets (run this 4 times for different keys)
openssl rand -base64 32

# Update .env with generated secrets:
# - APP_KEYS (4 comma-separated keys)
# - API_TOKEN_SALT
# - ADMIN_JWT_SECRET
# - TRANSFER_TOKEN_SALT
# - JWT_SECRET
# - DATABASE_PASSWORD (change from default!)
```

### 3. Start Development Environment

#### Option A: Docker (Recommended for production-like testing)

```bash
cd infra
docker-compose up -d
```

**Access:**
- 🌐 **Landing Page**: http://localhost
- 🎨 **Strapi Admin**: http://localhost/cms/admin
- 📊 **Strapi API**: http://localhost/cms/api

#### Option B: Local Development (Hot reload)

```bash
# Terminal 1 - Start CMS
cd apps/cms
cp .env.example .env  # Configure for local PostgreSQL
pnpm dev

# Terminal 2 - Start Web
cd apps/web
pnpm dev
```

**Access:**
- 🌐 **Landing Page**: http://localhost:5173
- 🎨 **Strapi Admin**: http://localhost:1337/admin

---

## 📝 Initial Setup - Strapi Admin

### First-Time Admin Account

1. Navigate to http://localhost/cms/admin (or http://localhost:1337/admin in dev)
2. Create your first admin user
3. Log in to the admin panel

### Configure Content

#### 1. Create Landing Page Content

Go to **Content Manager → Single Types → Landing Page**

**Hero Section:**
- Title: "Transform Your Business"
- Subtitle: "Innovation at Scale"
- Description: "Build amazing products with our platform"
- Primary CTA: "Get Started" → "/#contact"
- Secondary CTA: "Learn More" → "/#features"
- Upload Hero Image (optional)

**Dynamic Sections:**

Add sections in this order:

1. **Features Section**
   - Title: "Why Choose Us"
   - Subtitle: "Everything you need to succeed"
   - Link to Feature items (create next)

2. **Testimonials Section**
   - Title: "What Our Clients Say"
   - Link to Testimonial items

3. **CTA Section**
   - Title: "Ready to Get Started?"
   - Description: "Join thousands of satisfied customers"
   - Button: "Contact Us" → "/contact"
   - Background: Primary

**SEO Settings:**
- Meta Title: "Noral - Transform Your Business"
- Meta Description: "Industry-leading solutions for modern businesses"
- Keywords: "business, technology, innovation"

#### 2. Create Features

Go to **Content Manager → Collection Types → Features**

Create 3-6 features:

**Example:**
- Title: "⚡ Lightning Fast"
- Description: "Optimized performance for the best user experience"
- Icon: "⚡" (emoji or leave for future icon system)
- Order: 1

#### 3. Create Testimonials

Go to **Content Manager → Collection Types → Testimonials**

**Example:**
- Name: "Jane Doe"
- Role: "CEO"
- Company: "Tech Corp"
- Content: "Amazing product! Transformed our workflow."
- Rating: 5
- Avatar: (upload image)
- Order: 1

#### 4. Set Public Permissions

Go to **Settings → Users & Permissions Plugin → Roles → Public**

Enable these permissions:
- ✅ Landing-page: find
- ✅ Feature: find
- ✅ Testimonial: find

Click **Save**.

#### 5. Publish Content

Return to each content type and click **Publish** in the top right.

---

## 🏗️ Architecture

### Option 1: Landing Page Mode (Current)

```
┌──────────────┐
│   Browser    │
└──────┬───────┘
       │
       ↓
┌──────────────┐
│    Nginx     │  (Reverse Proxy, Cache, Static Assets)
│   :80/443    │
└──┬───────┬───┘
   │       │
   │       └─────→ /cms → Strapi CMS :1337
   │                       (Admin + API)
   │
   └────────────→ / → SvelteKit :3000
                      (SSR Landing Page)
                            ↓
                      Fetches content from Strapi API
```

### Request Flow

1. **User visits** `/` → Nginx → SvelteKit
2. **SvelteKit SSR** loads data from Strapi API
3. **Strapi** returns structured JSON
4. **SvelteKit** renders HTML with SEO meta tags
5. **Nginx** caches response (5min default)
6. **Browser** receives fully rendered page

### Content Management Flow

1. Admin edits content in Strapi admin panel
2. Publishes changes
3. Next page load fetches fresh data
4. Nginx cache refreshes automatically

---

## 🔧 Development

### Local Development Commands

```bash
# Root level
pnpm dev              # Start all apps
pnpm build            # Build all apps
pnpm lint             # Lint all apps
pnpm format           # Format code

# Individual apps
pnpm dev:web          # Start SvelteKit only
pnpm dev:cms          # Start Strapi only
pnpm build:web        # Build SvelteKit
pnpm build:cms        # Build Strapi
```

### Adding New Content Types

1. **In Strapi:** Settings → Content-Type Builder → Create new type
2. **In SvelteKit:** Update TypeScript types in `apps/web/src/lib/types/cms.ts`
3. **Create Component:** Add Svelte component in `apps/web/src/components/`
4. **Update Page:** Import and render in `apps/web/src/routes/+page.svelte`

### Modifying Styles

All styles use **Tailwind CSS**:
- Design tokens: `apps/web/tailwind.config.js`
- Global styles: `apps/web/src/app.css`
- Component styles: Inline Tailwind classes

---

## 🐳 Docker Deployment

### Production Deployment

```bash
cd infra

# Start services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down

# Rebuild after code changes
docker-compose up -d --build
```

### Environment Variables

Production `.env` configuration:

```bash
NODE_ENV=production
DATABASE_PASSWORD=<strong-password>
APP_KEYS=<4-unique-keys>
API_TOKEN_SALT=<unique-salt>
ADMIN_JWT_SECRET=<unique-secret>
TRANSFER_TOKEN_SALT=<unique-salt>
JWT_SECRET=<unique-secret>
FRONTEND_URL=https://yourdomain.com
PUBLIC_CMS_URL=https://yourdomain.com/cms
HTTP_PORT=80
HTTPS_PORT=443
```

### Production Checklist

- [ ] Generate unique secrets for all Strapi keys
- [ ] Change default database password
- [ ] Update `FRONTEND_URL` to production domain
- [ ] Configure SSL certificates (add to Nginx config)
- [ ] Set up proper backup strategy for PostgreSQL volume
- [ ] Configure Strapi media uploads for S3/CDN (optional)
- [ ] Review and adjust Nginx cache settings
- [ ] Set up monitoring and logging
- [ ] Test all content types in production environment

---

## 🎨 Design System

### Colors

**Primary (Blue):**
- Use for CTAs, links, brand elements
- `bg-primary-600`, `text-primary-600`, `border-primary-600`

**Secondary (Gray):**
- Use for text, backgrounds, borders
- `text-secondary-900` (dark), `bg-secondary-50` (light)

### Components

**Base Components** (`apps/web/src/components/ui/`):
- `Container.svelte` - Responsive content wrapper
- `Section.svelte` - Vertical spacing wrapper
- `Button.svelte` - CTA buttons with variants

**Section Components** (`apps/web/src/components/sections/`):
- `Hero.svelte` - Hero section with CTA
- `FeaturesSection.svelte` - Grid of features
- `TestimonialsSection.svelte` - Customer testimonials
- `CTASection.svelte` - Call-to-action banner

### Typography

- **Headings:** Inter font, bold, responsive sizes
- **Body:** Inter font, regular weight
- **Scale:** Mobile-first responsive (sm/md/lg breakpoints)

---

## 🔐 Security

### Implemented Security Features

- ✅ Nginx security headers (X-Frame-Options, X-Content-Type, etc.)
- ✅ CORS restricted to frontend domain
- ✅ Strapi admin protected with JWT
- ✅ PostgreSQL isolated in Docker network
- ✅ No secrets in codebase
- ✅ Multi-stage Docker builds (no dev dependencies in production)

### Recommendations

- Use HTTPS in production (configure SSL in Nginx)
- Regularly update dependencies
- Rotate Strapi secrets periodically
- Restrict Strapi admin access by IP (firewall rules)
- Enable rate limiting in Nginx for API endpoints
- Set up automated backups for database

---

## 📊 Performance

### Optimizations Implemented

- **SSR/SSG:** Fast initial page load
- **Nginx caching:** Static assets cached for 1 year
- **Page caching:** SSR responses cached for 5 minutes
- **Gzip compression:** Text assets compressed
- **Image optimization:** Strapi image processing
- **Minimal JS:** SvelteKit ships only necessary code
- **CDN-ready:** Static assets from Nginx

### Monitoring

Add these to production:
- Response time monitoring
- Error rate tracking
- Cache hit ratio
- Database query performance
- Docker container health

---

## 🚀 Future Evolution: Option 2 and Beyond

This monorepo is architected to seamlessly grow into a multi-module platform.

### Planned Expansion

**Option 2: User Dashboard**
```
apps/
  ├── cms/          (existing)
  ├── web/          (existing - public landing)
  └── dashboard/    (NEW - authenticated user portal)
```

**Integration Points:**
- Shared authentication (Strapi Users & Permissions)
- Shared design system (packages/ui)
- Shared configuration (packages/config)
- Unified deployment (same docker-compose)

**Nginx Routing:**
```
/           → Landing page (Option 1)
/dashboard  → User dashboard (Option 2)
/cms        → Strapi CMS
```

### Adding New Apps

1. Create new app in `apps/` directory
2. Add to `pnpm-workspace.yaml`
3. Create Dockerfile
4. Add service to `docker-compose.yml`
5. Update Nginx routing in `nginx/conf.d/default.conf`
6. Share packages via workspace imports

---

## 🛠️ Troubleshooting

### Common Issues

**Problem:** Strapi won't start - "Database connection error"
```bash
# Solution: Check database is ready
docker-compose logs db
docker-compose restart cms
```

**Problem:** Can't access Strapi admin
```bash
# Solution: Check public permissions
# Go to Strapi Settings → Roles → Public
# Verify landing-page:find is enabled
```

**Problem:** Changes not appearing on landing page
```bash
# Solution: Check content is published
# Clear Nginx cache: docker-compose restart nginx
```

**Problem:** Build fails with pnpm errors
```bash
# Solution: Clear caches and reinstall
pnpm clean
rm -rf node_modules
pnpm install
```

---

## 📚 Tech Stack Reference

| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | 20 LTS | Runtime |
| pnpm | 8.x | Package manager |
| TypeScript | 5.x | Type safety |
| SvelteKit | 2.x | Frontend framework |
| Strapi | 4.25 | Headless CMS |
| PostgreSQL | 16 | Database |
| Tailwind CSS | 3.x | Styling |
| Nginx | 1.25 | Reverse proxy |
| Docker | Latest | Containerization |

---

## 📄 License

Proprietary - All rights reserved

---

## 👥 Team & Maintenance

This codebase is production-grade and maintained by a professional engineering team.

**For questions or issues:**
- Create an issue in the repository
- Review this README thoroughly
- Check Strapi documentation: https://docs.strapi.io
- Check SvelteKit documentation: https://kit.svelte.dev

---

## ✅ Project Status

- [x] Option 1: Landing Page Mode ← **Current Implementation**
- [ ] Option 2: User Dashboard (Future)
- [ ] Option 3: Additional Modules (Future)

**Last Updated:** December 2025
