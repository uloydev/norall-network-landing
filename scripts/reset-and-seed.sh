#!/bin/bash

# Reset and seed Strapi data
echo "🗑️  Resetting Strapi data..."
echo ""

# Accept setup choice as argument or prompt
setup_choice=$1

if [ -z "$setup_choice" ]; then
  echo "How are you running the database?"
  echo "1) Docker Compose (default)"
  echo "2) Direct PostgreSQL connection"
  echo ""
  read -p "Select option [1-2] (default: 1): " setup_choice
  setup_choice=${setup_choice:-1}
fi

# Stop Strapi if running
echo ""
echo "Stopping Strapi if running..."
pkill -f "strapi develop" 2>/dev/null && echo "✓ Strapi stopped" || echo "✓ No running Strapi instance found"

# Clear database based on setup
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
  components_shared_tags
CASCADE;

-- Re-enable foreign key checks
SET session_replication_role = DEFAULT;

SELECT 'Database cleared successfully!' as status;
"

if [ "$setup_choice" = "1" ]; then
  # Docker Compose setup
  echo "Using Docker Compose..."
  docker-compose -f infra/docker-compose.yml exec -T db psql -U strapi -d strapi <<< "$SQL_SCRIPT"
  
  if [ $? -eq 0 ]; then
    echo "✅ Database cleared successfully!"
  else
    echo "❌ Failed to clear database via Docker Compose"
    echo "Make sure Docker Compose is running: docker-compose -f infra/docker-compose.yml up -d"
    exit 1
  fi
  
elif [ "$setup_choice" = "2" ]; then
  # Direct PostgreSQL connection
  echo "Using direct PostgreSQL connection..."
  echo ""
  
  # Load environment variables from .env if it exists
  if [ -f ".env" ]; then
    export $(cat .env | grep -v '^#' | grep 'DATABASE' | xargs)
  fi
  
  # Prompt for database credentials if not set
  DB_HOST=${DATABASE_HOST:-localhost}
  DB_PORT=${DATABASE_PORT:-5432}
  DB_NAME=${DATABASE_NAME:-strapi}
  DB_USER=${DATABASE_USERNAME:-strapi}
  
  echo "Database connection details:"
  echo "  Host: $DB_HOST"
  echo "  Port: $DB_PORT"
  echo "  Database: $DB_NAME"
  echo "  User: $DB_USER"
  echo ""
  read -p "Use these settings? [Y/n]: " confirm
  confirm=${confirm:-Y}
  
  if [[ ! "$confirm" =~ ^[Yy]$ ]]; then
    read -p "Enter database host (default: localhost): " DB_HOST
    DB_HOST=${DB_HOST:-localhost}
    read -p "Enter database port (default: 5432): " DB_PORT
    DB_PORT=${DB_PORT:-5432}
    read -p "Enter database name (default: strapi): " DB_NAME
    DB_NAME=${DB_NAME:-strapi}
    read -p "Enter database user (default: strapi): " DB_USER
    DB_USER=${DB_USER:-strapi}
  fi
  
  PGPASSWORD=${DATABASE_PASSWORD} psql -h "$DB_HOST" -p "$DB_PORT" -U "$DB_USER" -d "$DB_NAME" <<< "$SQL_SCRIPT"
  
  if [ $? -eq 0 ]; then
    echo "✅ Database cleared successfully!"
  else
    echo "❌ Failed to clear database"
    echo "Make sure PostgreSQL is running and credentials are correct"
    exit 1
  fi
  
else
  echo "❌ Invalid option selected"
  exit 1
fi

echo ""
echo "🌱 Starting Strapi - bootstrap will seed new data..."
echo ""

# Start Strapi (bootstrap will run automatically)
make dev-cms
