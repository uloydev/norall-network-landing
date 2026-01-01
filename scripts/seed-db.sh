#!/bin/bash

# Simple database seeding script
echo "🗑️  Clearing and reseeding Strapi database..."
echo ""

# Load database credentials from .env
if [ -f ".env" ]; then
  export $(cat .env | grep -v '^#' | grep 'DATABASE' | xargs)
fi

DB_HOST=${DATABASE_HOST:-localhost}
DB_PORT=${DATABASE_PORT:-5432}
DB_NAME=${DATABASE_NAME:-strapi}
DB_USER=${DATABASE_USERNAME:-strapi}
DB_PASSWORD=${DATABASE_PASSWORD}

echo "Database: $DB_NAME @ $DB_HOST:$DB_PORT"
echo ""

# Stop Strapi if running
echo "Stopping Strapi if running..."
pkill -f "strapi develop" 2>/dev/null && echo "✓ Strapi stopped" || echo "✓ No running Strapi instance found"
sleep 2

# Clear database tables
echo ""
echo "Clearing database tables..."

SQL_SCRIPT="
-- Disable foreign key checks temporarily
SET session_replication_role = replica;

-- Clear all data
TRUNCATE TABLE 
  landing_pages,
  process_steps,
  problem_items,
  solution_features,
  gallery_items,
  features,
  testimonials,
  components_sections_heroes,
  components_sections_process_steps,
  components_sections_problems,
  components_sections_solution_grids,
  components_sections_galleries,
  components_sections_contact_forms,
  components_sections_features_sections,
  components_sections_testimonials_sections,
  components_sections_cta_sections,
  components_shared_seos,
  components_shared_buttons,
  components_shared_feature_cards,
  components_shared_tags,
  landing_pages_components
CASCADE;

-- Re-enable foreign key checks
SET session_replication_role = DEFAULT;

SELECT 'Database cleared successfully!' as status;
"

PGPASSWORD="$DB_PASSWORD" psql -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER" -d "$DB_NAME" <<< "$SQL_SCRIPT"

if [ $? -eq 0 ]; then
  echo ""
  echo "✅ Database cleared successfully!"
  echo ""
  echo "🌱 Bootstrap will seed data when Strapi starts..."
  echo "Run: make dev-cms"
  echo ""
else
  echo ""
  echo "❌ Failed to clear database"
  echo "Make sure:"
  echo "  - PostgreSQL is running"
  echo "  - Database credentials in .env are correct"
  echo "  - Database exists: $DB_NAME"
  exit 1
fi
