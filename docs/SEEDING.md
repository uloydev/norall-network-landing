# Database Seeding

This project includes automatic database seeding for Strapi CMS content.

## What Gets Seeded

The bootstrap script automatically creates:
- **4 Process Steps**: Identify, Refine, EU-Ready, Scale
- **3 Problem Items**: Technology challenges Norway faces
- **6 Solution Features**: Key benefits of the plasma technology
- **3 Gallery Items**: Visual content cards

## How It Works

The seeding happens automatically when Strapi starts. The bootstrap script:
1. Checks if data already exists (looks for process steps)
2. If no data exists, creates all collection items
3. Publishes all items immediately

## Usage

### Option 1: Reset and Reseed Database

Clear the database and seed fresh data:

```bash
make reset-db
```

This will:
1. Stop any running Strapi instances
2. Clear all database tables
3. Prompt you to start Strapi, which will trigger automatic seeding

Then start the development server:

```bash
make dev
```

### Option 2: Manual Seeding

If you just want to seed without resetting:

1. Make sure database is empty (or drop existing data)
2. Start Strapi:
```bash
make dev-cms
```

The bootstrap will run automatically on startup.

## Creating the Landing Page

After seeding, you still need to manually create the landing page via the Strapi admin UI:

1. Go to: http://localhost:1337/cms/admin
2. Navigate to: Content Manager > Landing Page (Single Type)
3. Fill in the Hero section (title, subtitle, CTAs, feature cards)
4. Add Sections using the dynamic zone
5. For each section, select the appropriate seeded items from the dropdowns
6. Add SEO metadata
7. Click "Save" and "Publish"

## Available Section Types

- **Process Steps**: Horizontal colored bar showing the 4-step process
- **Problems**: Two-column section with problem items and image
- **Solution Grids**: Feature grid showcasing solution benefits (2/3/4 column layouts)
- **Galleries**: Image gallery with the 3 gallery items
- **Contact Forms**: Customizable contact form

## Troubleshooting

### Seeding doesn't run
- Check if data already exists (seeding is skipped if process steps exist)
- Use `make reset-db` to clear and reseed

### PostgreSQL connection errors
- Verify database credentials in `.env`
- Ensure PostgreSQL is running
- Check database name matches: `noral_strapi`

### Build errors
- Run `pnpm build` in the cms directory
- Check for TypeScript errors in bootstrap.ts

## Files

- `apps/cms/src/bootstrap.ts` - Bootstrap seeding script
- `apps/cms/src/index.ts` - Strapi lifecycle hooks
- `scripts/seed-db.sh` - Database reset script
- `Makefile` - Convenience commands

## Development

To modify the seeded data:
1. Edit `apps/cms/src/bootstrap.ts`
2. Run `make reset-db` to clear existing data
3. Run `make dev` to reseed with new data
