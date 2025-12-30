#!/bin/bash

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "🚀 Noral Quick Start Script"
echo "=========================="
echo ""

# Check if .env exists
if [ ! -f .env ]; then
    echo -e "${YELLOW}⚠️  No .env file found. Creating from .env.example...${NC}"
    cp .env.example .env
    
    echo ""
    echo -e "${RED}🔐 IMPORTANT: Generate secure secrets!${NC}"
    echo "Run the following command 5 times and update .env:"
    echo "  openssl rand -base64 32"
    echo ""
    echo "Update these values in .env:"
    echo "  - APP_KEYS (4 comma-separated keys)"
    echo "  - API_TOKEN_SALT"
    echo "  - ADMIN_JWT_SECRET"
    echo "  - TRANSFER_TOKEN_SALT"
    echo "  - JWT_SECRET"
    echo "  - DATABASE_PASSWORD"
    echo ""
    read -p "Press Enter after updating .env to continue..."
fi

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo -e "${RED}❌ Docker is not running. Please start Docker first.${NC}"
    exit 1
fi

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo -e "${YELLOW}⚠️  pnpm not found. Installing...${NC}"
    npm install -g pnpm@8.15.0
fi

echo -e "${GREEN}✅ All prerequisites met${NC}"
echo ""

# Ask user which mode
echo "Choose setup mode:"
echo "  1) Docker (Production-like, recommended for testing full stack)"
echo "  2) Local Development (Hot reload, requires local PostgreSQL)"
echo ""
read -p "Enter choice [1-2]: " choice

if [ "$choice" = "1" ]; then
    echo ""
    echo -e "${GREEN}🐳 Starting Docker containers...${NC}"
    cd infra
    docker-compose up -d
    
    echo ""
    echo -e "${GREEN}✅ Docker containers started!${NC}"
    echo ""
    echo "📍 Access points:"
    echo "  🌐 Landing Page:  http://localhost"
    echo "  🎨 Strapi Admin:  http://localhost/cms/admin"
    echo "  📊 Strapi API:    http://localhost/cms/api"
    echo ""
    echo "📝 Next steps:"
    echo "  1. Wait ~30 seconds for services to start"
    echo "  2. Go to http://localhost/cms/admin"
    echo "  3. Create your first admin account"
    echo "  4. Follow README.md to set up content"
    echo ""
    echo "Useful commands:"
    echo "  docker-compose logs -f     (View logs)"
    echo "  docker-compose down        (Stop services)"
    echo "  docker-compose restart     (Restart services)"
    
elif [ "$choice" = "2" ]; then
    echo ""
    echo -e "${YELLOW}⚠️  Local development requires PostgreSQL running${NC}"
    echo "Make sure you have PostgreSQL installed and update .env"
    echo ""
    echo -e "${GREEN}📦 Installing dependencies...${NC}"
    pnpm install
    
    echo ""
    echo -e "${GREEN}✅ Dependencies installed!${NC}"
    echo ""
    echo "Start development servers:"
    echo "  Terminal 1: cd apps/cms && pnpm dev"
    echo "  Terminal 2: cd apps/web && pnpm dev"
    echo ""
    echo "Then access:"
    echo "  🌐 Landing Page:  http://localhost:5173"
    echo "  🎨 Strapi Admin:  http://localhost:1337/admin"
    
else
    echo -e "${RED}❌ Invalid choice${NC}"
    exit 1
fi
