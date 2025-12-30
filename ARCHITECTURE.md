# Architecture Documentation

## System Overview

The Noral landing page is built as a production-ready monorepo with clear separation of concerns and a scalable architecture designed to evolve from a simple landing page (Option 1) into a multi-module platform (Option 2+).

## Core Architecture Principles

1. **Separation of Concerns** - CMS, frontend, and infrastructure are isolated
2. **API-First** - All data flows through well-defined REST APIs
3. **Type Safety** - Full TypeScript across the stack
4. **Scalability** - Monorepo structure ready for new apps/modules
5. **Performance** - SSR, caching, and optimized delivery
6. **Security** - Defense in depth with multiple layers

---

## Technology Stack

### Backend: Strapi CMS
- **Purpose:** Headless CMS for content management
- **Version:** 4.25.0
- **Database:** PostgreSQL 16
- **Runtime:** Node.js 20 LTS
- **API:** REST (GraphQL disabled for simplicity)

**Why Strapi?**
- Open-source, production-tested
- Powerful admin panel out-of-the-box
- Flexible content modeling
- TypeScript support
- Active community

### Frontend: SvelteKit
- **Purpose:** SSR web framework
- **Version:** 2.x
- **Rendering:** Server-Side Rendering (SSR)
- **Styling:** Tailwind CSS 3.x
- **Runtime:** Node.js 20 LTS

**Why SvelteKit?**
- Excellent SSR performance
- Built-in routing
- TypeScript native
- Small bundle sizes
- Great DX

### Infrastructure
- **Reverse Proxy:** Nginx 1.25
- **Orchestration:** Docker Compose
- **Database:** PostgreSQL 16
- **Package Manager:** pnpm 8.x

---

## System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                         INTERNET                             │
└───────────────────────────┬─────────────────────────────────┘
                            │
                    ┌───────▼───────┐
                    │  Nginx :80    │
                    │ Reverse Proxy │
                    └───┬───────┬───┘
                        │       │
        ┌───────────────┘       └───────────────┐
        │                                        │
┌───────▼────────┐                      ┌───────▼────────┐
│  SvelteKit     │                      │  Strapi CMS    │
│    :3000       │◄─────────────────────┤    :1337       │
│                │   HTTP API Calls     │                │
│ - SSR Pages    │                      │ - Admin Panel  │
│ - Static Assets│                      │ - REST API     │
│ - SEO          │                      │ - Content Types│
└────────────────┘                      └───────┬────────┘
                                                │
                                        ┌───────▼────────┐
                                        │  PostgreSQL    │
                                        │    :5432       │
                                        │                │
                                        │ - Content DB   │
                                        │ - User Data    │
                                        └────────────────┘
```

---

## Request Flow

### 1. Landing Page Request (Public User)

```
User Browser
    │
    ├─► GET / (http://localhost)
    │
    ▼
Nginx (:80)
    │
    ├─► Route: / → proxy_pass web:3000
    ├─► Check cache (5min TTL)
    │
    ▼
SvelteKit (:3000)
    │
    ├─► +page.server.ts (Server Load Function)
    ├─► Fetch: GET /api/landing-page?populate=deep
    │
    ▼
Strapi CMS (:1337)
    │
    ├─► API Route: /api/landing-page
    ├─► Controller: landing-page.find()
    ├─► Query DB with deep population
    │
    ▼
PostgreSQL (:5432)
    │
    └─► Return: Hero, Sections, Features, Testimonials, SEO
    │
    ▼
Strapi CMS
    │
    └─► Transform to JSON response
    │
    ▼
SvelteKit
    │
    ├─► Render HTML with data
    ├─► Inject SEO meta tags
    ├─► Apply Tailwind styles
    │
    ▼
Nginx
    │
    ├─► Cache response (5 minutes)
    ├─► Add security headers
    ├─► Enable gzip compression
    │
    ▼
User Browser
    │
    └─► Rendered HTML page with full SEO
```

**Performance Characteristics:**
- **First Request:** ~300-500ms (DB query + SSR)
- **Cached Request:** ~50-100ms (Nginx cache)
- **Time to Interactive:** <1s
- **SEO:** Perfect - fully rendered HTML

---

### 2. Static Asset Request

```
User Browser
    │
    ├─► GET /_app/immutable/assets/style.css
    │
    ▼
Nginx
    │
    ├─► Route: /_app → proxy_pass web:3000
    ├─► Cache: 1 year (immutable)
    ├─► Gzip: Enabled
    │
    ▼
SvelteKit
    │
    └─► Serve static file
    │
    ▼
Nginx
    │
    └─► Cache-Control: public, max-age=31536000, immutable
    │
    ▼
User Browser (Cached forever)
```

---

### 3. CMS Admin Access

```
Admin Browser
    │
    ├─► GET /cms/admin
    │
    ▼
Nginx
    │
    ├─► Route: /cms → rewrite → proxy_pass cms:1337
    │
    ▼
Strapi CMS
    │
    ├─► Serve admin panel SPA
    ├─► Check JWT authentication
    │
    ▼
Admin Browser
    │
    └─► Interactive admin interface
```

---

## Data Flow Architecture

### Content Creation Flow

```
1. Admin Creates Content
   ↓
2. Strapi saves to PostgreSQL
   ↓
3. Admin clicks "Publish"
   ↓
4. Content marked as published
   ↓
5. Next landing page request:
   - SvelteKit fetches fresh data
   - Nginx cache expires after 5min
   - Users see new content
```

### Content Schema Flow

```
Strapi Schema Definition
  (apps/cms/src/api/*/schema.json)
        │
        ├─► Database Tables (Auto-generated)
        │
        ├─► Admin UI Fields (Auto-generated)
        │
        └─► REST API Endpoints (Auto-generated)
                │
                ▼
        SvelteKit Types
        (apps/web/src/lib/types/cms.ts)
                │
                ▼
        Svelte Components
        (apps/web/src/components/)
```

---

## Security Architecture

### Defense Layers

```
Layer 1: Nginx
├─► Security Headers
│   ├─ X-Frame-Options: SAMEORIGIN
│   ├─ X-Content-Type-Options: nosniff
│   ├─ X-XSS-Protection: 1; mode=block
│   └─ Referrer-Policy: no-referrer-when-downgrade
├─► Rate Limiting (configurable)
└─► HTTPS (production)

Layer 2: Strapi
├─► JWT Authentication (Admin)
├─► CORS Policy (restricted origins)
├─► Role-Based Access Control
└─► API Token Validation

Layer 3: Database
├─► Network Isolation (Docker)
├─► Strong Password
└─► No Direct External Access

Layer 4: Application
├─► Input Validation
├─► Output Sanitization
└─► TypeScript Type Safety
```

---

## Caching Strategy

### Nginx Cache Levels

1. **Static Assets** (`/_app/*`)
   - Cache: 1 year
   - Immutable: true
   - Storage: Nginx disk cache

2. **SSR Pages** (`/`)
   - Cache: 5 minutes
   - Stale-while-revalidate: enabled
   - Background refresh: enabled

3. **CMS Uploads** (`/cms/uploads/*`)
   - Cache: 1 year
   - Static file serving

4. **No Cache** (`/cms/admin`, `/cms/api`)
   - Dynamic content
   - Real-time updates needed

---

## Deployment Architecture

### Docker Network Topology

```
┌─────────────────────────────────────────────┐
│            noral-network (bridge)            │
│                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │  nginx   │  │   web    │  │   cms    │  │
│  │  :80     │  │  :3000   │  │  :1337   │  │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  │
│       │             │              │         │
│       │             │         ┌────▼─────┐  │
│       │             │         │    db    │  │
│       │             │         │  :5432   │  │
│       │             │         └──────────┘  │
│       │             │                        │
│  External      Internal      Internal       │
│  (80, 443)     Only          Only            │
└─────────────────────────────────────────────┘
```

### Volume Persistence

```
Host Machine
    │
    ├─► db_data/
    │   └─► PostgreSQL data (persistent)
    │
    └─► cms_uploads/
        └─► Strapi media files (persistent)
```

---

## Performance Optimizations

### Build-Time Optimizations
1. **Multi-stage Docker builds** - Smaller images
2. **pnpm workspaces** - Shared dependencies
3. **Tree shaking** - Remove unused code
4. **Code splitting** - SvelteKit automatic

### Runtime Optimizations
1. **SSR** - Fast initial render
2. **Nginx caching** - Reduce backend load
3. **Gzip compression** - Smaller payloads
4. **Connection pooling** - Database efficiency
5. **Static asset optimization** - Long-term caching

### Database Optimizations
1. **Indexed queries** - Strapi auto-indexes
2. **Connection pooling** - Configured in Strapi
3. **Query optimization** - Deep populate strategy

---

## Scalability Considerations

### Horizontal Scaling (Future)

```
Current (Single Server):
  1x Nginx + 1x Web + 1x CMS + 1x DB

Future (Multi-Server):
  1x Load Balancer
  ├─► Nx Web instances (stateless)
  ├─► Nx CMS instances (stateless)
  └─► 1x DB (primary) + Nx DB (replicas)
```

### Vertical Scaling
- Increase Docker resource limits
- Optimize DB queries
- Add Redis caching layer

---

## Monorepo Structure Benefits

### Current (Option 1)
```
apps/
  ├── cms/     (Strapi)
  └── web/     (Landing page)
```

### Future (Option 2+)
```
apps/
  ├── cms/       (Shared CMS)
  ├── web/       (Public landing)
  ├── dashboard/ (User portal)
  └── admin/     (Internal tools)

packages/
  ├── ui/        (Shared components)
  ├── config/    (Shared configs)
  └── utils/     (Shared utilities)
```

**Benefits:**
- Shared code via packages
- Single deployment pipeline
- Unified type definitions
- Centralized configuration

---

## Development Workflow

### Local Development
```
Developer
    │
    ├─► Edit code
    │
    ├─► Hot reload (Vite)
    │
    └─► Test locally (http://localhost:5173)
```

### Production Deployment
```
Developer
    │
    ├─► git push
    │
    ▼
CI/CD Pipeline
    │
    ├─► Run tests
    ├─► Build Docker images
    ├─► Push to registry
    │
    ▼
Production Server
    │
    ├─► docker-compose pull
    ├─► docker-compose up -d
    │
    └─► Health checks
```

---

## Monitoring & Observability (Recommended)

### Metrics to Track
1. **Application**
   - Response times
   - Error rates
   - Request volume

2. **Infrastructure**
   - Container health
   - Resource usage (CPU, RAM)
   - Network throughput

3. **Database**
   - Query performance
   - Connection pool usage
   - Storage utilization

### Logging Strategy
```
Application Logs → Docker stdout → Log aggregator
```

---

## Future Architecture Evolution

### Phase 1: Option 1 (Current)
- Single landing page
- CMS-driven content
- Public access only

### Phase 2: Option 2
- Add authentication module
- User dashboard app
- Shared session management

### Phase 3: Multi-tenant
- Organization workspaces
- Role-based access
- Team collaboration

### Phase 4: Microservices (Optional)
- Extract payment service
- Extract notification service
- Message queue integration

---

## Technology Decisions

### Why Not GraphQL?
- REST is simpler for Option 1
- Easier to cache
- Better Nginx integration
- Can add GraphQL later if needed

### Why Not NextJS?
- SvelteKit has better performance
- Simpler to understand
- Less vendor lock-in
- Smaller bundle sizes

### Why PostgreSQL?
- Proven reliability
- Excellent Strapi support
- ACID compliance
- Rich ecosystem

### Why pnpm?
- Faster than npm/yarn
- Disk space efficient
- Better monorepo support
- Strict dependency resolution

---

## Conclusion

This architecture is designed for:
- ✅ **Simplicity** - Easy to understand and maintain
- ✅ **Performance** - Fast, cached, optimized
- ✅ **Security** - Multiple defensive layers
- ✅ **Scalability** - Ready to grow with new features
- ✅ **Developer Experience** - Clean, type-safe, well-documented

The system is production-ready for Option 1 and architected to seamlessly evolve into Options 2, 3, and beyond.
